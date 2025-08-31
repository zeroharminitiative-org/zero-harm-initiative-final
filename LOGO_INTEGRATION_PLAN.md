# Zero Harm Initiative - Logo Integration Plan

## Logo Specifications
- **File**: image (6).jpeg → logo.jpeg
- **Usage**: Primary brand identifier across all pages

## Integration Locations

### 1. Navigation Bar (All Pages)
- Replace text-based logo with image + text combination
- Size: 40-50px height, auto width
- Position: Left side of navbar
- Implementation: 
  ```html
  <a href="index.html" class="logo-container">
    <img src="logo.jpeg" alt="Zero Harm Initiative" class="logo-img">
    <span class="logo-text">Zero Harm Initiative</span>
  </a>
  ```

### 2. Hero Sections
- **Main page**: Subtle watermark behind main text
- **Other pages**: Small logo above page titles
- Opacity: 0.1-0.2 for watermarks
- Size: 200-300px for watermarks, 80px for headers

### 3. Footer (All Pages)
- Left column with logo and tagline
- Size: 60px height
- Include organization description below

### 4. Loading Animation (Enhancement)
- Centered logo with pulse animation
- Shows while page resources load

### 5. Form Sections
- Small logo at top of volunteer/contact forms
- Size: 50px
- Builds trust and brand recognition

## CSS Strategy
```css
.logo-img {
    height: 45px;
    width: auto;
    vertical-align: middle;
    margin-right: 10px;
}

.logo-container {
    display: flex;
    align-items: center;
    text-decoration: none;
}

.logo-text {
    font-size: 1.5rem;
    font-weight: 900;
    background: linear-gradient(45deg, var(--dark-teal), var(--dark-orange));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .logo-img { height: 35px; }
    .logo-text { font-size: 1.2rem; }
}
```

## Implementation Priority
1. Navigation (highest visibility)
2. Footer (consistency across pages)
3. Hero sections (brand reinforcement)
4. Forms (trust building)
5. Loading screen (polish)