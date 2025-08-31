# Zero Harm Initiative - Project Memory

## Project Overview
- **Name**: Zero Harm Initiative
- **Type**: Animal rights charity website with dynamic content
- **Status**: Ready for deployment on Render.com
- **Created**: 2025-08-31
- **Target Audience**: 11th grade students starting Summer 2025

## Branding
- **Organization Name**: Zero Harm Initiative
- **Logo**: logo.jpeg (integrated as favicon and homepage hero)
- **Instagram**: @zeroharminitiative
- **Color Scheme**:
  - Dark Teal: #1D594E
  - Bright Yellow: #F2CB05
  - Orange: #F29F05
  - Dark Orange: #F28705
  - Red: #F23030

## Website Structure
- **Static Pages**:
  - index.html (main page with dynamic content sections)
  - action-page.html (with dynamic events)
  - contact-page.html
  - resources-page.html
  - journey-page.html (timeline starting Summer 2025)
  - mission-page.html
  - impact-page.html

## Dynamic Content System (NEW)
- **Architecture**: Client-side JavaScript with external API integration
- **Features**:
  1. **News Feed**: Real-time animal rights news from RSS feeds
  2. **Active Petitions**: Current petitions with progress tracking
  3. **Local Shelter Finder**: ZIP code-based search with geolocation
  4. **Upcoming Events**: Location-aware event listings
  5. **Active Campaigns**: Joinable campaigns with participation metrics
- **Caching**: 1-hour cache to minimize API calls
- **Fallbacks**: Error handling and offline support

## Technical Implementation
- **Frontend**: Pure HTML/CSS/JavaScript (no frameworks)
- **Dynamic Content**: 
  - dynamic-content.js (main content manager)
  - dynamic-content-styles.css (styling)
- **APIs Used**:
  - RSS2JSON (news feeds)
  - ipapi.co (IP geolocation)
  - Zippopotam.us (ZIP to coordinates)
- **Testing**: test-dynamic-features.html for verification

## Key Features
1. **Location-Based Content**: Automatic detection with manual ZIP override
2. **Responsive Design**: Mobile-first with custom animations
3. **Social Integration**: Instagram, Twitter, YouTube links
4. **Donate Section**: Multiple donation tiers with hover effects
5. **Student Focus**: Age-appropriate content for high schoolers

## Deployment Details
- **Platform**: Render.com (static site)
- **Repository**: GitHub ready
- **Assets**: All self-contained (no external dependencies)
- **Performance**: Optimized with caching and lazy loading

## Documentation
- STUDENT_ACTIVITIES_GUIDE.md (comprehensive 11th grade activities)
- EASY_DEPLOYMENT_GUIDE.md (student-friendly deployment)
- FIRST_TIME_GIT_GUIDE.md (Git setup for beginners)
- Multiple other guides for various skill levels

## Recent Updates
1. ✅ Complete rebrand to Zero Harm Initiative
2. ✅ Logo integration (favicon + homepage hero)
3. ✅ Timeline updated to start Summer 2025
4. ✅ Instagram link added (@zeroharminitiative)
5. ✅ Fixed donate button hover effect
6. ✅ Added comprehensive dynamic content system
7. ✅ Implemented location-based features
8. ✅ Created student activities guide with real organizations

## API Considerations
- All APIs have free tiers sufficient for expected traffic
- Caching reduces API calls significantly
- Fallback content for API failures
- No API keys required (all public endpoints)

## Next Steps
- Deploy to Render.com
- Monitor API usage
- Add more RSS feed sources
- Consider adding email newsletter signup
- Implement analytics (privacy-friendly)

## Notes
- Site remains static (all dynamic content is client-side)
- No server or database required
- Works offline with cached content
- All features tested and verified
- Comprehensive backup available in ZIP format