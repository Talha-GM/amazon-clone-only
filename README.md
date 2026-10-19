# Amazon Web Clone & Prime Media Platform
**Course:** Web Technologies — Project 1 (Assignment 1: Part 1)  
**Theme:** Amazon E-Commerce Storefront, Prime Media & Entertainment Hub, and Customer Registration Portal

---

## 📋 Table of Contents
1. [Theme & Architecture Overview](#theme--architecture-overview)
2. [Assignment 1 Webpages & Concept Checklist](#assignment-1-webpages--concept-checklist)
3. [Page-by-Page Technical Breakdown](#page-by-page-technical-breakdown)
4. [AI Usage Log (Required by Rubric)](#ai-usage-log-required-by-rubric)
5. [Handwritten Sheet Guide (3 Snippets & Explanations)](#handwritten-sheet-guide)
6. [Viva Preparation & Sample Questions](#viva-preparation--sample-questions)

---

## 1. Theme & Architecture Overview
This multi-page web project recreates and expands upon **Amazon.com**, structured cleanly into three cohesive, professionally styled pages for **Assignment 1 (Part 1: Pages 1 to 3)**. Each page has its own dedicated stylesheet with distinct visual design, typography, color accents, and layout strategies as mandated by the course specifications:

- **Page 1: E-Commerce Homepage (`index.html` & `index.css`)**
  Classic Amazon e-commerce storefront featuring product category boxes, navigation bar, delivery locator, and search system.
- **Page 2: Prime Media & Info Hub (`media.html` & `media.css`)**
  Dark cinema-themed multimedia showcase featuring HTML5 video trailer, lossless audio player, scrollable queue, top 5 streamed media list, Prime benefits list, and a detailed subscription comparison data table.
- **Page 3: Customer Registration & Prime Sign-Up (`register.html` & `register.css`)**
  Clean, warm-neutral Amazon account portal featuring all 14 HTML input controls and 9 validation attributes with advanced CSS attribute selectors, combinators, pseudo-classes, and pseudo-elements.

> **Zero Inline Styles Rule:** All inline styles were eliminated. Every page is styled exclusively through its own dedicated `.css` file.  
> **Navbar Rule:** A global navigation bar linking all pages is present on each page, restyled with a unique visual theme per page.

---

## 2. Assignment 1 Webpages & Concept Checklist

| # | Page File | Stylesheet | Required HTML Elements | Required CSS Concepts | Status |
|---|---|---|---|---|---|
| **1** | `index.html` | `index.css` | Headings (`h4`), paragraphs (`p`), block and inline elements (`div`, `span`, `a`, `i`), image (`img`), links to every page (`nav a`). | Element, class, and ID selectors (`#main-header`, `#shop-grid`, etc.); font/text properties; borders; background colors. | ✅ Complete |
| **2** | `media.html` | `media.css` | Image (`img`, `figure`), Video (`<video controls>`), Audio (`<audio controls>`), Ordered list (`<ol>`), Unordered list (`<ul>`), One data table (`<table>` with `caption`, `thead`, `tbody`, `tfoot`). | Box model (`width`, `height`, `margin`, `padding`, `box-sizing: border-box`); background image (`cover`, `center`); display (`block`, `inline-block`, `inline`, `none`); position (`relative`, `absolute`, `sticky`, `fixed`); float & clear (`float: left`, `float: right`, `clear: both`, `.clearfix`); overflow (`hidden`, `overflow-x: auto`, `overflow-y: auto`). | ✅ Complete |
| **3** | `register.html` | `register.css` | Form with all 14 inputs: `text`, `password`, `email`, `date`, `url`, `color`, `number`, `time`, `range`, `textarea`, `select`, `file`, `radio`, `checkbox`.<br>All 9 attributes: `required`, `readonly`, `disabled`, `min`, `max`, `minlength`, `maxlength`, `checked`, `selected`. | Attribute selectors (`[type=...]`, `[required]`, `[readonly]`, `[disabled]`); Combinators (descendant ` `, child `>`, adjacent `+`, general `~`); Pseudo-classes (`:hover`, `:focus`, `:valid`, `:invalid`, `:checked`, `:disabled`); Pseudo-elements (`::before`, `::after`, `::placeholder`, `::selection`). | ✅ Complete |

---

## 3. Page-by-Page Technical Breakdown

### Page 1: Home (`index.html` / `index.css`)
- **HTML Elements:** Semantic `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<figure>`, `<img src="./images/amazon_logo.png">`, headings `<h4>`, paragraphs `<p>`, inline spans and icons `<i>`.
- **Navigation:** Links to `index.html`, `media.html`, `register.html`, `services.html`, `portfolio.html`, `contact.html`.
- **CSS Practised:**
  - **ID Selectors:** `#main-header`, `#logo-container`, `#navigation-panel`, `#main-content`, `#hero-banner`, `#shop-grid`, `#site-footer`, `#back-to-top`.
  - **Class Selectors:** `.navbar`, `.border`, `.panel-ops`, `.box`, `.box-content`, etc.
  - **Element Selectors:** `body`, `header`, `p`, `a`, `select`, `input`, `footer`.
  - **Typography & Font:** `font-family`, `font-size`, `font-weight`, `line-height`, `text-align`, `text-decoration`.
  - **Borders & Backgrounds:** `border: 1.5px solid transparent`, `border-radius: 4px`, `background-color: #131921`.

### Page 2: Media and Info (`media.html` / `media.css`)
- **Theme:** Amazon Prime Video & Music Entertainment Hub.
- **HTML Elements:**
  - `<video controls poster="./images/hero_image.jpg">` with `<source>` tags.
  - `<audio controls>` with `<source>` tags.
  - `<figure>`, `<figcaption>`, and `<img>` for hardware spotlights (Echo Studio, Fire TV 4K Max).
  - `<ol>`: Top 5 Streamed Media this week with custom rank numbers and metadata.
  - `<ul>`: Prime member entertainment perks with checkmark bullets.
  - `<table>`: 7-column data table comparing Amazon Media Tiers with `<caption>`, `<thead>`, `<tbody>`, `<tfoot>`, and `colspan`.
- **CSS Practised:**
  - **Box Model:** Explicit `margin`, `padding`, `width`, `height`, and `box-sizing: border-box`.
  - **Background Image:** `.media-hero-banner` uses `background-image: linear-gradient(...), url('./images/hero_image.jpg')` with `background-size: cover; background-position: center right;`.
  - **Display:** `display: block`, `display: inline-block`, `display: inline`, `display: none` (`.hidden-diagnostic-data`).
  - **Position:** 
    - `position: relative` on cards.
    - `position: absolute` for badges (`.badge-overlay-topleft`, `.price-pill`).
    - `position: sticky` on header navigation.
    - `position: fixed` on floating media player pill (`.floating-media-pill`).
  - **Float & Clear:** 
    - Left column `.video-column` (`float: left; width: 63%;`).
    - Right sidebar `.audio-sidebar` (`float: right; width: 34%;`).
    - Clearfix utility `.clearfix::after { content: ""; display: table; clear: both; }`.
  - **Overflow:**
    - `overflow: hidden` on rounded figure and hero cards.
    - `overflow-x: auto` on responsive table wrapper `.table-responsive-wrapper`.
    - `overflow-y: auto` on scrollable playlist `.scrollable-tracklist`.

### Page 3: Register (`register.html` / `register.css`)
- **Theme:** Official Amazon Account Creation & Prime Registration Portal.
- **All 14 Required Inputs:**
  1. `type="text"` — Full Name (`minlength="3"`, `maxlength="50"`)
  2. `type="password"` — Account Password (`minlength="6"`, `maxlength="32"`)
  3. `type="email"` — Verification Email
  4. `type="date"` — Date of Birth (`min="1920-01-01"`, `max="2012-12-31"`)
  5. `type="url"` — Personal/Business Storefront URL
  6. `type="color"` — Storefront Accent Theme Color (`value="#ff9900"`)
  7. `type="number"` — 5-Digit Postal Code / PIN (`min="10000"`, `max="99999"`)
  8. `type="time"` — Preferred Delivery Window (`min="08:00"`, `max="21:00"`)
  9. `type="range"` — Monthly Spending Alert Limit Slider (`min="20"`, `max="1000"`)
  10. `<textarea>` — Delivery Instructions (`rows="4"`, `maxlength="300"`)
  11. `<select>` — Marketplace Region Selection
  12. `type="file"` — Profile Avatar / ID Document (`accept="image/*,.pdf"`)
  13. `type="radio"` — Account Type (Personal vs Business)
  14. `type="checkbox"` — Prime Deals Newsletter & Terms Agreement
- **All 9 Required Attributes:**
  `required`, `readonly`, `disabled`, `min`, `max`, `minlength`, `maxlength`, `checked`, `selected`.
- **CSS Practised:**
  - **Attribute Selectors:** `input[type="text"]`, `input[type="password"]`, `input[required]`, `input[readonly]`, `input[disabled]`, `button[type="submit"]`.
  - **Combinators:**
    - Descendant: `.register-main-wrapper .form-group`
    - Child (`>`): `.registration-form > fieldset`, `fieldset > legend`, `.form-row > .form-col`
    - Adjacent Sibling (`+`): `input:focus + .field-hint`, `input[type="radio"]:checked + .radio-custom`
    - General Sibling (`~`): `input:invalid ~ .field-status`
  - **Pseudo-classes:** `:hover`, `:focus` (Amazon glowing orange ring), `:valid` (green border), `:invalid` (red border), `:checked`, `:disabled`, `:read-only`.
  - **Pseudo-elements:**
    - `::before` (bullet indicator on fieldset legend)
    - `::after` (red required asterisk on `.required-field::after`)
    - `::placeholder` (italicized placeholder text)
    - `::selection` (custom brand text selection highlight)

---

## 4. AI Usage Log (Required by Rubric)

As instructed on **Page 1 and Page 5 of the Project Brief**, every AI interaction is documented below:

| # | Tool Used | What You Asked | What You Changed & Integrated |
|---|---|---|---|
| 1 | Antigravity AI | How to structure Assignment 1 pages to fulfill all requirements of the project brief. | Organized pages into Home (`index.html`), Media Hub (`media.html`), and Registration (`register.html`), maintaining the Amazon clone theme. |
| 2 | Antigravity AI | Generated layout and CSS rules for Page 2 demonstrating Float, Position, Box model, and Overflow. | Added floated video player and audio sidebar with `.clearfix`, created responsive table with `overflow-x: auto`, and implemented sticky/fixed media widgets in `media.css`. |
| 3 | Antigravity AI | Implemented all 14 form inputs and 9 validation attributes in `register.html` with attribute selectors and pseudo-classes. | Refactored form elements into logical fieldsets, configured focus/valid/invalid pseudo-classes, and styled Amazon signature gradient buttons in `register.css`. |
| 4 | Antigravity AI | Checked adherence to the "No inline styles" and "Navigation bar restyled differently" rules. | Removed all inline `style="..."` attributes from `index.html`, transferred background images to CSS, and verified distinct navbar designs across all pages. |

---

## 5. Handwritten Sheet Guide

Copy the declaration below by hand at the top of your A4 submission sheet:

```
I, [Your Name], roll no. [Your Roll No.], declare that I used AI tools only for: 
brainstorming structure, generating template code for media and form controls, and debugging CSS selectors. 
This project is for my own learning. I understand every line of my code and can explain and recreate it without help. 
Signature and date: ____________________
```

### The 3 Code Snippets to Write & Explain on Your Sheet:

#### Snippet 1: CSS Box Model & Float Layout (`media.css`)
```css
/* Universal Box Model Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
}

/* Two-column layout using float */
.video-box {
    float: left;
    width: 48%;
    padding: 15px;
}

.audio-box {
    float: right;
    width: 48%;
    padding: 15px;
}

/* Clearing floats */
.clear-both {
    clear: both;
}
```
**Explanation in your own words:**  
"I used `box-sizing: border-box` so that padding and borders are included within each element's width. For the multimedia section, I set the video box to `float: left` and the audio box to `float: right`, each with a width of 48%. Because floated elements are taken out of the normal document flow, I added a `<div class='clear-both'>` with `clear: both` right below them so the following content starts neatly on a new line."

---

#### Snippet 2: Position Relative and Absolute (`media.css`)
```css
/* Relative container acts as positioning reference */
.video-box {
    position: relative;
    border: 1px solid #cccccc;
    background-color: #fafafa;
}

/* Absolute badge pinned to the top-right corner */
.badge-tag {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: #ff9900;
    color: #111111;
    font-size: 11px;
    font-weight: bold;
    padding: 3px 8px;
    border-radius: 3px;
}
```
**Explanation in your own words:**  
"To place a 'Featured Video' badge at the corner of the video card, I set `position: relative` on the parent `.video-box`. This makes the parent the coordinate reference. Then, setting `position: absolute; top: 10px; right: 10px;` on `.badge-tag` positions the badge exactly 10px from the top-right corner of the card."

---

#### Snippet 3: Attribute Selectors, Pseudo-classes & Pseudo-elements (`register.css`)
```css
/* Attribute Selectors: target specific input types */
input[type="text"],
input[type="email"],
input[type="password"] {
    width: 100%;
    padding: 8px 10px;
    border: 1px solid #a6a6a6;
    border-radius: 4px;
}

/* Pseudo-class :focus for Amazon orange outline */
input:focus {
    border-color: #e77600;
    box-shadow: 0 0 3px 2px rgba(228, 121, 17, 0.5);
}

/* Pseudo-classes :valid and :invalid for real-time validation */
input[required]:focus:valid {
    border-color: #2e7d32;
}
input[required]:focus:invalid {
    border-color: #d32f2f;
}

/* Pseudo-element ::after adds red required asterisk */
.req-label::after {
    content: " *";
    color: #cc0000;
}
```
**Explanation in your own words:**  
"I used CSS attribute selectors like `input[type='text']` to style the inputs cleanly. When the user clicks inside an input, `:focus` applies Amazon's orange border and glow. For required inputs, `:valid` turns the border green and `:invalid` turns it red while typing. Lastly, the pseudo-element `::after` automatically attaches a red asterisk `*` after any label with the `.req-label` class."

---

## 6. Viva Preparation & Sample Questions

### Q1: What does `box-sizing: border-box` change?
**Answer:** By default (`content-box`), adding padding and borders increases an element's total rendered width (`width + padding + border`). With `box-sizing: border-box`, padding and borders are absorbed *inside* the specified width, meaning a `width: 50%` element with `padding: 20px` remains exactly 50% wide, avoiding unintentional layout overflow.

### Q2: Why did you use float in Part 1 instead of CSS Grid or Flexbox?
**Answer:** The Part 1 rubric specifically evaluates classical CSS layout foundations: `float`, `clear`, `display`, and `position`. In Part 2 (Assignment 2), Flexbox and CSS Grid will be used for Services, Portfolio, and Contact pages.

### Q3: What is the difference between `display: inline`, `display: block`, and `display: inline-block`?
**Answer:**
- `inline`: Flows within text line; ignores `width`, `height`, `margin-top`, and `margin-bottom` (e.g. `<span>`, `<a>`).
- `block`: Takes up the full available width of its container and starts on a new line; respects `width`, `height`, and all margins (e.g. `<div>`, `<p>`).
- `inline-block`: Sits inline next to sibling elements like an inline element, but respects `width`, `height`, `padding`, and `margin` like a block element (e.g. our `.nav-item` buttons and badges).

### Q4: How does `position: relative` differ from `position: absolute`?
**Answer:** `position: relative` offsets an element from its normal position in the document flow without disturbing surrounding elements, and acts as the anchor boundary for absolutely positioned children. `position: absolute` removes the element entirely from the normal flow and positions it relative to its closest non-static ancestor.

### Q5: What does `overflow-x: auto` do on the data table?
**Answer:** It makes the table horizontally scrollable on small mobile screens without breaking the layout or expanding the outer page width.
