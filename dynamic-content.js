/**
 * Zero Harm Initiative - Dynamic Content System
 * Fetches and displays real-time content while keeping the site static
 */

class DynamicContentManager {
    constructor() {
        this.cache = new Map();
        this.cacheExpiry = 3600000; // 1 hour in milliseconds
        this.userLocation = null;
    }

    // Initialize all dynamic content
    async init() {
        // Get user location if permitted
        await this.getUserLocation();
        
        // Initialize different content sections
        this.initializeNewsSection();
        this.initializePetitionsSection();
        this.initializeEventsSection();
        this.initializeLocalShelters();
        this.initializeCampaigns();
    }

    // Get user's location with permission
    async getUserLocation() {
        try {
            if ('geolocation' in navigator) {
                const position = await new Promise((resolve, reject) => {
                    navigator.geolocation.getCurrentPosition(resolve, reject);
                });
                this.userLocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
            }
        } catch (error) {
            console.log('Location access denied, using IP-based location');
            await this.getLocationByIP();
        }
    }

    // Fallback: Get location by IP
    async getLocationByIP() {
        try {
            const response = await fetch('https://ipapi.co/json/');
            const data = await response.json();
            this.userLocation = {
                lat: data.latitude,
                lng: data.longitude,
                city: data.city,
                state: data.region
            };
        } catch (error) {
            console.log('Could not determine location');
        }
    }

    // Cache management
    setCache(key, data) {
        this.cache.set(key, {
            data: data,
            timestamp: Date.now()
        });
    }

    getCache(key) {
        const cached = this.cache.get(key);
        if (cached && (Date.now() - cached.timestamp < this.cacheExpiry)) {
            return cached.data;
        }
        return null;
    }

    // 1. NEWS SECTION - Fetch animal rights news
    async initializeNewsSection() {
        const newsContainer = document.getElementById('dynamic-news');
        if (!newsContainer) return;

        // Show loading state
        newsContainer.innerHTML = '<div class="loading">Loading latest news...</div>';

        try {
            // Check cache first
            let news = this.getCache('news');
            
            if (!news) {
                // Fetch from multiple sources
                news = await this.fetchAnimalNews();
                this.setCache('news', news);
            }

            this.renderNews(news, newsContainer);
        } catch (error) {
            this.renderError(newsContainer, 'news');
        }
    }

    async fetchAnimalNews() {
        // Using RSS2JSON service (free tier available)
        const feeds = [
            'https://api.rss2json.com/v1/api.json?rss_url=https://www.peta.org/blog/feed/',
            'https://api.rss2json.com/v1/api.json?rss_url=https://animalequality.org/news/feed/'
        ];

        const allNews = [];
        
        for (const feed of feeds) {
            try {
                const response = await fetch(feed);
                const data = await response.json();
                if (data.items) {
                    allNews.push(...data.items.slice(0, 3));
                }
            } catch (error) {
                console.log('Failed to fetch from:', feed);
            }
        }

        return allNews.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate)).slice(0, 6);
    }

    renderNews(news, container) {
        if (!news || news.length === 0) {
            container.innerHTML = '<p>No recent news available.</p>';
            return;
        }

        const newsHTML = news.map(item => `
            <article class="news-item">
                <h3><a href="${item.link}" target="_blank" rel="noopener">${item.title}</a></h3>
                <time>${new Date(item.pubDate).toLocaleDateString()}</time>
                <p>${item.description ? item.description.substring(0, 150) + '...' : ''}</p>
            </article>
        `).join('');

        container.innerHTML = `
            <div class="news-grid">
                ${newsHTML}
            </div>
        `;
    }

    // 2. PETITIONS SECTION - Active petitions
    async initializePetitionsSection() {
        const petitionsContainer = document.getElementById('dynamic-petitions');
        if (!petitionsContainer) return;

        petitionsContainer.innerHTML = '<div class="loading">Loading active petitions...</div>';

        try {
            let petitions = this.getCache('petitions');
            
            if (!petitions) {
                petitions = await this.fetchPetitions();
                this.setCache('petitions', petitions);
            }

            this.renderPetitions(petitions, petitionsContainer);
        } catch (error) {
            this.renderError(petitionsContainer, 'petitions');
        }
    }

    async fetchPetitions() {
        // Simulated petition data (in production, this would connect to Change.org API or similar)
        // For now, using static data that could be replaced with real API
        const petitions = [
            {
                title: "Ban Factory Farming in Our State",
                target: 50000,
                current: 38542,
                link: "https://www.change.org/search?q=animal%20rights",
                description: "Help us end cruel factory farming practices"
            },
            {
                title: "Save Local Wildlife Habitat",
                target: 25000,
                current: 19832,
                link: "https://www.change.org/search?q=wildlife%20protection",
                description: "Protect 500 acres of critical wildlife habitat"
            },
            {
                title: "Mandate Cruelty-Free School Lunches",
                target: 10000,
                current: 7621,
                link: "https://www.change.org/search?q=vegan%20school",
                description: "Ensure all students have access to plant-based options"
            }
        ];

        return petitions;
    }

    renderPetitions(petitions, container) {
        const petitionsHTML = petitions.map(petition => {
            const percentage = Math.round((petition.current / petition.target) * 100);
            return `
                <div class="petition-card">
                    <h3>${petition.title}</h3>
                    <p>${petition.description}</p>
                    <div class="petition-progress">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${percentage}%"></div>
                        </div>
                        <span>${petition.current.toLocaleString()} / ${petition.target.toLocaleString()} signatures</span>
                    </div>
                    <a href="${petition.link}" target="_blank" class="petition-link">Sign Petition</a>
                </div>
            `;
        }).join('');

        container.innerHTML = `
            <div class="petitions-grid">
                ${petitionsHTML}
            </div>
        `;
    }

    // 3. LOCAL SHELTERS - Based on user location
    async initializeLocalShelters() {
        const shelterContainer = document.getElementById('dynamic-shelters');
        if (!shelterContainer) return;

        // Add ZIP code input
        shelterContainer.innerHTML = `
            <div class="location-search">
                <input type="text" id="zipcode-input" placeholder="Enter ZIP code" maxlength="5">
                <button onclick="dynamicContent.searchByZipcode()">Search</button>
            </div>
            <div id="shelter-results" class="loading">Loading nearby shelters...</div>
        `;

        await this.searchLocalShelters();
    }

    async searchByZipcode() {
        const zipcode = document.getElementById('zipcode-input').value;
        if (zipcode.length !== 5) {
            alert('Please enter a valid 5-digit ZIP code');
            return;
        }

        // Convert ZIP to coordinates (using free API)
        try {
            const response = await fetch(`https://api.zippopotam.us/us/${zipcode}`);
            const data = await response.json();
            
            this.userLocation = {
                lat: parseFloat(data.places[0].latitude),
                lng: parseFloat(data.places[0].longitude),
                city: data.places[0]['place name'],
                state: data.places[0]['state abbreviation']
            };

            await this.searchLocalShelters();
        } catch (error) {
            alert('Invalid ZIP code. Please try again.');
        }
    }

    async searchLocalShelters() {
        const resultsContainer = document.getElementById('shelter-results');
        
        if (!this.userLocation) {
            resultsContainer.innerHTML = '<p>Please enter a ZIP code to find local shelters.</p>';
            return;
        }

        try {
            let shelters = this.getCache(`shelters-${this.userLocation.lat}-${this.userLocation.lng}`);
            
            if (!shelters) {
                shelters = await this.fetchLocalShelters();
                this.setCache(`shelters-${this.userLocation.lat}-${this.userLocation.lng}`, shelters);
            }

            this.renderShelters(shelters, resultsContainer);
        } catch (error) {
            this.renderError(resultsContainer, 'shelters');
        }
    }

    async fetchLocalShelters() {
        // Using Petfinder API proxy or similar service
        // For demonstration, using simulated data based on location
        const shelters = [
            {
                name: `${this.userLocation.city || 'Local'} Animal Shelter`,
                address: `123 Main St, ${this.userLocation.city || 'Your City'}, ${this.userLocation.state || 'State'}`,
                phone: '(555) 123-4567',
                website: 'https://www.petfinder.com',
                distance: '2.5 miles'
            },
            {
                name: `${this.userLocation.state || 'State'} Humane Society`,
                address: `456 Oak Ave, ${this.userLocation.city || 'Your City'}, ${this.userLocation.state || 'State'}`,
                phone: '(555) 234-5678',
                website: 'https://www.humanesociety.org',
                distance: '4.1 miles'
            },
            {
                name: 'Best Friends Animal Rescue',
                address: `789 Pine Rd, ${this.userLocation.city || 'Your City'}, ${this.userLocation.state || 'State'}`,
                phone: '(555) 345-6789',
                website: 'https://bestfriends.org',
                distance: '5.8 miles'
            }
        ];

        return shelters;
    }

    renderShelters(shelters, container) {
        const sheltersHTML = shelters.map(shelter => `
            <div class="shelter-card">
                <h3>${shelter.name}</h3>
                <p class="shelter-distance">${shelter.distance}</p>
                <address>${shelter.address}</address>
                <p>Phone: ${shelter.phone}</p>
                <a href="${shelter.website}" target="_blank" class="shelter-link">Visit Website</a>
            </div>
        `).join('');

        container.innerHTML = `
            <div class="shelters-grid">
                ${sheltersHTML}
            </div>
        `;
    }

    // 4. EVENTS SECTION - Upcoming events
    async initializeEventsSection() {
        const eventsContainer = document.getElementById('dynamic-events');
        if (!eventsContainer) return;

        eventsContainer.innerHTML = '<div class="loading">Loading upcoming events...</div>';

        try {
            let events = this.getCache('events');
            
            if (!events) {
                events = await this.fetchEvents();
                this.setCache('events', events);
            }

            this.renderEvents(events, eventsContainer);
        } catch (error) {
            this.renderError(eventsContainer, 'events');
        }
    }

    async fetchEvents() {
        // Simulated events data (could be replaced with Eventbrite API or similar)
        const events = [
            {
                title: 'Vegan Food Festival',
                date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 1 week from now
                location: 'City Park',
                type: 'Festival',
                link: '#'
            },
            {
                title: 'Animal Rights March',
                date: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000), // 2 weeks from now
                location: 'Downtown',
                type: 'Protest',
                link: '#'
            },
            {
                title: 'Shelter Volunteer Orientation',
                date: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days from now
                location: 'Local Animal Shelter',
                type: 'Volunteer',
                link: '#'
            }
        ];

        return events.sort((a, b) => a.date - b.date);
    }

    renderEvents(events, container) {
        const eventsHTML = events.map(event => `
            <div class="event-card">
                <div class="event-type ${event.type.toLowerCase()}">${event.type}</div>
                <h3>${event.title}</h3>
                <time>${event.date.toLocaleDateString()}</time>
                <p class="event-location">${event.location}</p>
                <a href="${event.link}" class="event-link">Learn More</a>
            </div>
        `).join('');

        container.innerHTML = `
            <div class="events-grid">
                ${eventsHTML}
            </div>
        `;
    }

    // 5. CAMPAIGNS SECTION - Active campaigns
    async initializeCampaigns() {
        const campaignsContainer = document.getElementById('dynamic-campaigns');
        if (!campaignsContainer) return;

        campaignsContainer.innerHTML = '<div class="loading">Loading active campaigns...</div>';

        try {
            let campaigns = this.getCache('campaigns');
            
            if (!campaigns) {
                campaigns = await this.fetchCampaigns();
                this.setCache('campaigns', campaigns);
            }

            this.renderCampaigns(campaigns, campaignsContainer);
        } catch (error) {
            this.renderError(campaignsContainer, 'campaigns');
        }
    }

    async fetchCampaigns() {
        // Fetch from animal rights organizations' campaigns
        const campaigns = [
            {
                title: 'Meatless Monday Challenge',
                organization: 'Zero Harm Initiative',
                description: 'Join thousands taking the pledge to go meat-free every Monday',
                participants: 1247,
                goal: 2000,
                action: 'Take the Pledge'
            },
            {
                title: 'Adopt Don\'t Shop',
                organization: 'Local Shelters Coalition',
                description: 'Help us find homes for 100 shelter animals this month',
                participants: 73,
                goal: 100,
                action: 'View Adoptable Pets'
            },
            {
                title: 'Ban Circus Animals',
                organization: 'Animal Defense League',
                description: 'Support legislation to ban wild animals in circuses',
                participants: 8934,
                goal: 10000,
                action: 'Contact Representatives'
            }
        ];

        return campaigns;
    }

    renderCampaigns(campaigns, container) {
        const campaignsHTML = campaigns.map(campaign => {
            const percentage = Math.round((campaign.participants / campaign.goal) * 100);
            return `
                <div class="campaign-card">
                    <h3>${campaign.title}</h3>
                    <p class="campaign-org">by ${campaign.organization}</p>
                    <p>${campaign.description}</p>
                    <div class="campaign-progress">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${percentage}%"></div>
                        </div>
                        <span>${campaign.participants} / ${campaign.goal} participants</span>
                    </div>
                    <button class="campaign-action">${campaign.action}</button>
                </div>
            `;
        }).join('');

        container.innerHTML = `
            <div class="campaigns-grid">
                ${campaignsHTML}
            </div>
        `;
    }

    // Error handling
    renderError(container, section) {
        container.innerHTML = `
            <div class="error-message">
                <p>Unable to load ${section} at this time.</p>
                <button onclick="dynamicContent.init()">Try Again</button>
            </div>
        `;
    }
}

// Initialize on page load
const dynamicContent = new DynamicContentManager();
document.addEventListener('DOMContentLoaded', () => {
    dynamicContent.init();
});

// Refresh content periodically
setInterval(() => {
    dynamicContent.init();
}, 300000); // Refresh every 5 minutes