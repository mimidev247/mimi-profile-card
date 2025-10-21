Project Overview

This project is a responsive and accessible multi-page profile website built with **semantic HTML**, **modern CSS**, and **vanilla JavaScript** as part of the **Frontend Wizards - Stage 0 Task**.
The website includes a home page with a profile card showcasing my name, short bio, current time in milliseconds, avatar image, hobbies, dislikes, and social media links; an about page with detailed bio; and a contact page with a form for user inquiries.
Every visible element is tagged with a specific `data-testid` to make it easy for automated testing tools to find and verify.

### Features

- Fully semantic and accessible HTML structure
- Responsive design for mobile, tablet, and desktop views
- Multi-page navigation (Home, About Me, Contact)
- Displays current time in milliseconds (`Date.now()`)
- Avatar image with descriptive alt text
- Social links that safely open in new tabs (`target="_blank"` + `rel="noopener noreferrer"`)
- Contact form with client-side validation
- Keyboard-accessible navigation with visible focus states

### Data Test IDs (for automated tests)

| Element                    | data-testid                |
|----------------------------|----------------------------|
| Profile card container     | `test-profile-card`        |
| User name                  | `test-user-name`           |
| User bio                   | `test-user-bio`            |
| Current time               | `test-user-time`           |
| User avatar                | `test-user-avatar`         |
| Social links list          | `test-user-social-links`   |
| Social link (e.g. Twitter) | `test-user-social-twitter` |
| Hobbies list               | `test-user-hobbies`        |
| Dislikes list              | `test-user-dislikes`       |
| About page container       | `test-about-page`          |
| About bio section          | `test-about-bio`           |
| Contact success message    | `test-contact-success`     |
| Contact name input         | `test-contact-name`        |
| Contact email input        | `test-contact-email`       |
| Contact subject input      | `test-contact-subject`     |
| Contact message textarea   | `test-contact-message`     |
| Contact submit button      | `test-contact-submit`      |
| Contact name error         | `test-contact-error-name`  |
| Contact email error        | `test-contact-error-email` |
| Contact subject error      | `test-contact-error-subject` |
| Contact message error      | `test-contact-error-message` |

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
