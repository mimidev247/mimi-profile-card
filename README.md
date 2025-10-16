 Project Overview

This project is a responsive and accessible profile card built with **semantic HTML**, **modern CSS**, and **vanilla JavaScript** as part of the **Frontend Wizards - Stage 0 Task**.
The profile card showcases my name, short bio, current time in milliseconds, avatar image, hobbies, dislikes, and social media links - all wrapped in a clean, testable layout.
Every visible element is tagged with a specific `data-testid` to make it easy for automated testing tools to find and verify.

### Features

- Fully semantic and accessible HTML structure
- Responsive design for mobile, tablet, and desktop views
- Displays current time in milliseconds (`Date.now()`)
- Avatar image with descriptive alt text
- Social links that safely open in new tabs (`target="_blank"` + `rel="noopener noreferrer"`)
- Keyboard-accessible navigation with visible focus states

 Data Test IDs (for automated tests)

 Element                    | data-testid                
 Profile card container     | `test-profile-card`        
 User name                  | `test-user-name`           
 User bio                   | `test-user-bio`            
 Current time               | `test-user-time`           
 User avatar                | `test-user-avatar`         
 Social links list          | `test-user-social-links`   
 Social link (e.g. Twitter) | `test-user-social-twitter` 
 Hobbies list               | `test-user-hobbies`        
 Dislikes list              | `test-user-dislikes`       

 Accessibility Practices
- All images have meaningful `alt` text for screen readers.
- Links and buttons are keyboard-focusable and show clear focus outlines.
- Semantic HTML tags (`<article>`, `<header>`, `<section>`, `<nav>`, `<figure>`, `<ul>`, `<li>`) are used to enhance structure and readability.

Technologies Used
- **HTML5** — for semantic and accessible structure
- **CSS3 (Flexbox / Grid)** - for modern, responsive layout
- **Vanilla JavaScript (ES6)** - for real-time functionality

 How to Run the Project Locally
1. **Clone the repository:**
   ```
   git clone https://github.com/MiracleSamuel/frontend-wizards-profile-card.git
   ```

2. **Open the project folder:**
   ```bash
   cd frontend-wizards-profile-card
   ```

3. **Run the project:**
    Open `index.html` directly in your browser.

# Additional Notes

- The current time (`test-user-time`) is displayed using `Date.now()` on page load.
- The layout adapts smoothly across different screen sizes (mobile, tablet, desktop).
- All UI elements are accessible, testable, and visually consistent.
