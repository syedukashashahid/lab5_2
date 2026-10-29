# Syed Ukasha Shahid: Slide Portfolio

One page, one fixed screen, six slides. Plain HTML, CSS and JavaScript. No libraries, no build step.

## Prompt
# MASTER PROMPT: Create a Premium Cinematic Slide-Based CV Portfolio Website

## Project Overview

Act as an award-winning UI/UX designer, creative frontend developer, interaction designer, and digital art director.

Design and develop a visually exceptional, premium personal portfolio website for **Syed Ukasha Shahid**, a Computer Science student at Qarshi University in Lahore, Pakistan.

I will provide my CV PDF. Read it carefully and use the actual information from the CV to build the complete website. The CV is the primary source of truth for my name, career objective, technical skills, academic projects, education, strengths, languages, and contact details.

I do not want a conventional portfolio website. I want an immersive, modern, cinematic experience that feels like a premium interactive digital portfolio.

The central concept is:

**One webpage. One fixed viewport. Multiple interactive slides. Zero scrolling.**

The website should feel like an interactive presentation or a premium digital experience rather than a traditional website.

---

## 1. Strict Technology Requirements

Use ONLY:

- HTML5
- CSS3
- Vanilla JavaScript (ES6+)

Do not use React, JSX, TypeScript, Vite, Next.js, Bootstrap, Tailwind CSS, jQuery, or any other framework or library.

Create the website using these files:

- `index.html`
- `style.css`
- `script.js`

Use an `assets/` folder for the supplied CV PDF and any necessary local images.

The website must run directly in a modern browser without a build process or package installation.

Use semantic HTML5, modern CSS3 animations, CSS Grid, Flexbox, and vanilla JavaScript for all navigation and interactions.

## 2. Core Concept: A Fixed-Screen Slide-Based Portfolio

**The website must never scroll vertically or horizontally.**

The entire interface must remain within the browser viewport.

Strict requirements:

- No vertical page scrolling.
- No horizontal page scrolling.
- No visible scrollbars.
- No traditional long landing page.
- No separate HTML pages.
- No navigation that scrolls to section anchors.
- No content that extends beyond the viewport.
- No hidden scrollable containers.
- No clipped or inaccessible CV information.

Instead, build a slide-based navigation system.

When a visitor clicks a navigation item, the current hero content should transition smoothly to the selected section. The header and navigation remain in place while the main content changes.

For example:

- Clicking **Profile** displays my introduction and career objective.
- Clicking **Skills** transitions to my technical skills slide.
- Clicking **Projects** displays my academic projects.
- Clicking **Education** displays my academic history.
- Clicking **Strengths** displays my strengths and languages.
- Clicking **Contact** displays my contact information.

Every slide must occupy the same main content area.

The URL must remain on `index.html`. Do not create separate routes or HTML pages.

Implement slide switching using JavaScript-controlled active states and CSS transitions. Do not use normal anchor scrolling.

---

## 3. Creative Direction: Premium Digital Experience

Use your full creativity to produce a sophisticated, polished, and visually memorable interface.

The design should communicate:

- Technical ability.
- Professional credibility.
- Attention to detail.
- Modern software development.
- Creative thinking.
- A strong personal identity.

### Preferred aesthetic

Create a combination of:

- Deep midnight navy or near-black backgrounds.
- Subtle electric-blue and cyan accents.
- Sophisticated white typography.
- Muted blue-gray secondary text.
- Fine borders and restrained gradients.
- Atmospheric lighting effects.
- Elegant geometric patterns.
- Premium cards and carefully controlled shadows.
- Smooth transitions and layered visual elements.

The result should feel like a high-end technology brand website with a cinematic presentation style.

Use generous spacing within the available viewport. Avoid making every section look like a generic collection of cards.

### Design inspiration

Use the visual quality of a premium creative developer portfolio, a modern technology studio, and an interactive presentation.

Do not copy any specific website.

Avoid excessive neon, distracting particles, overused glassmorphism, random 3D elements, cartoon graphics, and animations that make the content difficult to read.

The design must remain professional enough for recruiters and internship applications.

---

## 4. Global Interface Layout

Create a full-screen application layout with three primary areas.

### A. Persistent Header

The header remains visible across every slide.

On the left, display a personal brand:

**US.**

Beside it, display:

`Computer Science Student`

In the center or toward the right, include these navigation controls:

- Profile
- Skills
- Projects
- Education
- Strengths
- Contact

On the far right, include a prominent but tasteful Contact button if the layout allows it.

The active navigation item must have a distinctive visual state, such as a cyan underline, glowing dot, subtle background, or animated indicator.

The header must never move vertically or disappear during slide transitions.

### B. Main Hero Stage

This is the primary content area where all slides appear.

Each slide must fill the available hero stage without causing page scrolling.

Use a sophisticated layout with:

- Main text content.
- Supporting visual elements.
- Subtle backgrounds or decorative graphics.
- Consistent spacing.
- Clear hierarchy.
- Carefully controlled transitions.

Each slide should feel unique while maintaining the same design system.

### C. Persistent Footer

Create a compact footer that remains in the same position across all slides.

Include:

- `©` followed by the current year.
- `Syed Ukasha Shahid`.
- A short professional tagline.
- Optional slide progress, such as `01 / 06`.

The footer must not overlap the content or cause overflow.

---

## 5. Slide Navigation and Transition System

Build a polished JavaScript slide controller.

Each slide should have its own section element and a unique identifier, but only the active slide should be presented as the current visible panel.

Use CSS classes such as:

- `.slide`
- `.slide.active`
- `.slide.is-entering`
- `.slide.is-leaving`

Use JavaScript to:

1. Listen for navigation clicks.
2. Identify the requested slide.
3. Update the active navigation item.
4. Animate the outgoing and incoming content.
5. Keep the transition within the same fixed viewport.
6. Prevent normal anchor navigation and scrolling.
7. Update the slide counter.
8. Set accessible states for navigation and inactive panels.

Use elegant transitions such as:

- A short fade combined with a slight horizontal movement.
- A subtle directional slide.
- A smooth change in opacity.
- A restrained background transition.

Keep transitions fast and polished, approximately 300–600 milliseconds.

Prevent multiple rapid clicks from breaking the animation state.

Support keyboard navigation with arrow keys where appropriate, while ensuring that users can still navigate normally between interactive controls.

Respect `prefers-reduced-motion`.

**Important:** Do not create a carousel that automatically changes slides without user interaction. Navigation should be intentional and user-controlled.

---

## 6. Slide One: Profile and Career Objective

This is the initial slide and the first impression of the website.

Create an impressive hero composition.

### Personal information

**Name:** Syed Ukasha Shahid

**Title:** Computer Science Student | Aspiring Software Developer

**Location:** Lahore, Pakistan

Use this career objective from the CV as the foundation:

"BS Computer Science student at Qarshi University with a strong foundation in programming, object-oriented design, and database systems. Seeking an internship or entry-level software development role to apply these skills to real-world projects and continue growing as a developer."

You may refine the wording slightly to make it more engaging, but do not change its meaning or exaggerate my experience.

### Visual composition

Use an asymmetric layout.

The left side can contain:

- A small introductory label.
- My name in large, sophisticated typography.
- My professional title.
- A concise career introduction.
- A location indicator.
- A Download CV button.
- An Explore Projects button that switches directly to the Projects slide.

The right side can contain an elegant personal-brand visual.

Possible visual directions include:

- A large `US.` monogram.
- A subtle geometric composition.
- An abstract software-inspired visual.
- A refined profile card.
- A sophisticated technical illustration.

If I provide an actual profile photo, use it appropriately. Otherwise, do not invent a photograph or use a random person's face.

The opening slide should be visually impressive without being crowded.

---

## 7. Slide Two: Technical Skills

When Skills is selected, transition the main content to a beautifully organized technical skills presentation.

Use the complete technical information from my CV.

### Programming and Web Technologies

- C
- C++
- Java
- Python
- SQL
- HTML
- CSS

### Computer Science Concepts

- Object-Oriented Programming (OOP)
- Data Structures and Algorithms (DSA)
- Database Management Systems (DBMS)
- Operating Systems

### Tools and Technologies

- Java Swing
- NetBeans
- MySQL
- Microsoft Office

### Design concept

Organize the content into three distinct visual groups.

Use elegant skill tags, compact cards, or a refined typographic grid.

You may introduce subtle animated highlights when the slide appears.

Keep longer skill names readable. Do not assign arbitrary proficiency percentages, fake progress bars, or unsupported expertise levels.

The entire Skills slide must fit inside the hero stage.

---

## 8. Slide Three: Academic Projects

When Projects is clicked, transition to an immersive project showcase.

Use the actual projects from my CV.

### Project A: Bus Management System

**Technologies:** Java Swing, Object-Oriented Programming, NetBeans.

**Description:**

A desktop application developed to manage bus operations, including route scheduling, ticket booking, digital passes, bus allocation, and staff and feedback management.

**Features to represent:**

- Route scheduling.
- Ticket booking.
- Digital passes.
- Bus allocation.
- Staff management.
- Feedback management.

### Project B: Shineo — Maid Finder Website

**Technologies:** HTML5 and CSS3.

**Description:**

A web platform designed to connect users with nearby domestic service providers through a clean, easy-to-use interface.

### Creative presentation

Present the projects as two sophisticated project panels.

Use a split-screen layout or two carefully balanced project cards.

Each project should include:

- Project title.
- Concise description.
- Technology labels.
- Main features or purpose.
- An illustrative visual or mockup.

You may use a refined desktop application mockup for the Bus Management System and a website mockup for Shineo.

If actual screenshots are unavailable, use illustrative designs without claiming they are real project screenshots.

Do not invent additional features, repository URLs, live demos, user statistics, or performance metrics.

Only display working project links when actual URLs are supplied.

---

## 9. Slide Four: Education

Create a polished education timeline that fits inside the fixed hero stage.

Use the following CV information.

### Bachelor of Science in Computer Science

- Institution: Qarshi University.
- Status: Currently in the 5th semester.
- Expected completion: 2028.

### Intermediate (ICS / Pre-Engineering)

- Institution: Punjab Group of Colleges.
- Year: 2024.

### Matriculation

- Institution: Nishat Boys High School.
- Year: 2022.

### Visual concept

Use a refined vertical timeline, horizontal timeline, or compact education cards.

Clearly distinguish the current degree from completed qualifications.

Use subtle timeline indicators, understated accent colors, and carefully balanced typography.

Do not invent grades, CGPA, awards, scholarships, or certifications.

All three educational qualifications must be accessible on this slide without scrolling.

---

## 10. Slide Five: Strengths and Languages

Create a visually distinctive but professional slide that presents my strengths and languages.

### Strengths

- Problem Solving.
- Analytical Thinking.
- Quick Learner.
- Communication.
- Teamwork.
- Time Management.

### Languages

- English.
- Urdu.

### Design direction

Use a refined two-column layout.

One column can present strengths as compact visual tags or a clean grid. The other can present languages in a simpler, elegant format.

Keep the slide uncluttered and visually balanced.

Do not invent language proficiency levels or additional personal attributes.

---

## 11. Slide Six: Contact

When Contact is selected, transition to a dedicated contact slide within the same viewport.

Use the actual information from my CV.

**Email:** u128413@gmail.com

**Phone:** +92 309 5236098

**Location:** Lahore, Pakistan

### Design concept

Use a strong closing composition with a professional invitation to connect.

Include:

- A clear contact heading.
- A concise message for recruiters and internship providers.
- Clickable email and phone links.
- A location indicator.
- A Copy Email button.
- A Back to Profile button that switches to the Profile slide.

Use `mailto:` for the email link and `tel:` for the phone link.

The Copy Email button must use the browser Clipboard API when available and provide honest success or failure feedback.

Do not invent GitHub, LinkedIn, or other social-media URLs.

A contact form is optional. If included, do not claim that it sends messages without a configured backend or email service.

---

## 12. CV Download Functionality

Use the actual PDF file I supply.

Place it in:

`assets/Syed_Ukasha_Shahid_Resume.pdf`

Connect the Download CV button on the Profile slide to this file.

Use an appropriate download link with a correct relative path.

Verify that the button downloads the actual PDF. Do not create a replacement CV or link to a nonexistent file.

---

## 13. Zero-Scrolling Layout Engineering

This requirement is essential.

The entire interface must fit inside the browser viewport.

Use a structure such as:

```html
<body>
  <div class="app-shell">
    <header class="site-header">
      <!-- Persistent branding and navigation -->
    </header>

    <main class="hero-stage">
      <!-- All slide panels occupy this area -->
    </main>

    <footer class="site-footer">
      <!-- Copyright and slide counter -->
    </footer>
  </div>

  <script src="script.js" defer></script>
</body>
```

Use CSS techniques such as:

- `box-sizing: border-box`.
- A full-viewport app shell.
- CSS Grid for the overall page structure.
- `min-height: 0` for constrained grid children where necessary.
- Responsive `clamp()` values.
- Fluid spacing and typography.
- Carefully controlled image dimensions.
- CSS transitions for slide changes.

Use `100dvh` with an appropriate fallback for viewport height.

Ensure that the header, main stage, and footer collectively fit inside the viewport.

Do not use `overflow: hidden` as the only method of preventing scrolling. First ensure that the content genuinely fits.

Do not place content inside internally scrollable cards.

Do not hide important content merely to satisfy the no-scroll requirement.

On small screens, rearrange the layout and simplify decorative elements while keeping the information accessible. If the complete content cannot fit legibly in a particularly small viewport, provide a compact alternate layout or explain the limitation rather than clipping content.

The intended experience is a desktop-first cinematic presentation that also adapts responsibly to mobile screens.

---

## 14. Responsive and Accessibility Requirements

The website should adapt to:

- Desktop monitors.
- Laptops.
- Tablets.
- Mobile phones.

Maintain a coherent design across screen sizes.

Ensure:

- No accidental horizontal overflow.
- No vertical page scrolling in the intended fixed-screen layout.
- No overlapping content.
- No clipped text.
- No inaccessible inactive panels.
- Visible keyboard focus indicators.
- Appropriate color contrast.
- Semantic HTML5.
- Accessible navigation labels.
- Correct heading hierarchy.
- Reduced-motion support.

Use appropriate ARIA attributes for tab-like navigation if that interaction pattern is implemented. Keep inactive slides hidden from keyboard navigation and assistive technology.

Support keyboard interaction without intercepting arrow keys while a user is typing in an input field.

---

## 15. Premium Animation and Microinteractions

Use motion to improve the experience, not distract from it.

Implement:

- A subtle entrance animation on the initial slide.
- Smooth transitions between slides.
- An animated active-navigation indicator.
- Subtle hover states for buttons and project cards.
- Gentle visual changes when a slide becomes active.
- A small slide counter transition.
- Optional background lighting or geometric movement.

Keep animations restrained and professional.

Do not add automatic slide rotation, excessive particles, continuous distracting effects, or unnecessarily complex animation libraries.

All animations must be implemented using CSS3 and vanilla JavaScript.

---

## 16. Code Organization

Deliver the complete project using a structure similar to:

```text
ukasha-portfolio/
├── index.html
├── style.css
├── script.js
└── assets/
    ├── Syed_Ukasha_Shahid_Resume.pdf
    └── images/
```

Keep the HTML semantic, the CSS organized, and the JavaScript modular and readable.

Use reusable CSS classes and a clean slide-management system.

Do not use a frontend framework or a build process.

---

## 17. Final Verification

Before delivering the project, verify that:

- All six navigation items switch to the correct slide.
- The page never navigates to another HTML file.
- Navigation clicks do not scroll the document.
- No vertical or horizontal scrollbars appear at supported viewport sizes.
- Only the active slide is exposed as the current panel.
- All CV information is accurately represented.
- Slide transitions work correctly.
- The active navigation indicator updates.
- The slide counter updates.
- Keyboard navigation works.
- Reduced-motion preferences are respected.
- The CV PDF downloads correctly.
- Email and phone links work.
- The Copy Email button provides accurate feedback.
- No content is clipped or inaccessible.
- No React, frameworks, or third-party libraries are used.

Do not claim that a feature has been tested unless it has actually been verified.

---

## 18. Final Deliverables

Provide:

1. Complete `index.html`.
2. Complete `style.css`.
3. Complete `script.js`.
4. The actual supplied CV PDF in the assets directory.
5. Any required local visual assets.
6. Instructions for opening the website locally.
7. A short README.
8. A summary of implemented and tested features.
9. A note listing any missing information, such as social-media URLs or a genuine profile photograph.

## Final Creative Direction

Use your full creativity to create a portfolio that feels like a premium, interactive digital experience.

The opening slide should immediately impress visitors. Every navigation selection should feel like a transition to a new scene within the same carefully designed environment.

Maintain consistency, elegance, professionalism, and excellent usability.

**Non-negotiable requirements:**

- One HTML page only.
- Multiple JavaScript-controlled content slides.
- No vertical scrolling.
- No horizontal scrolling.
- No separate pages or routes.
- Only HTML5, CSS3, and vanilla JavaScript.
- Accurate content based on my supplied CV.
- A working CV download.
- Premium, cinematic, responsive visual design.

**The final website should feel like an interactive portfolio presentation, not a traditional scrolling website.**
