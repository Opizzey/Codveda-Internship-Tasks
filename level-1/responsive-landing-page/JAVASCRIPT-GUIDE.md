# JavaScript Implementation Guide - Learn by Doing

This guide will help you implement the JavaScript functionality step-by-step. You'll write every line yourself while understanding what it does.

---

## 🎯 What You'll Build

1. **Back-to-Top Button** - Appears when scrolling, scrolls to top when clicked
2. **Mobile Menu Toggle** - Hamburger icon that shows/hides navigation menu
3. **Auto-Close Menu** - Menu closes when clicking a navigation link

---

## 📚 JavaScript Concepts You Need to Understand First

### 1. Selecting Elements (Getting HTML Elements in JavaScript)

JavaScript needs to "grab" HTML elements to work with them.

**Methods:**
```javascript
// Get element by ID (returns ONE element)
const element = document.getElementById('element-id');

// Get element by class (returns ONE element - the first match)
const element = document.querySelector('.class-name');

// Get ALL elements by class (returns a LIST of elements)
const elements = document.querySelectorAll('.class-name');
```

**Example:**
Your HTML has:
```html
<button id="back-to-top">↑</button>
```

To get it in JavaScript:
```javascript
const backToTopBtn = document.getElementById('back-to-top');
```

---

### 2. Event Listeners (Listening for User Actions)

Event listeners wait for something to happen (click, scroll, etc.) and then run code.

**Format:**
```javascript
element.addEventListener('event-name', function() {
    // Code to run when event happens
});
```

**Common events:**
- `'click'` - User clicks the element
- `'scroll'` - User scrolls the page
- `'submit'` - Form is submitted

**Example:**
```javascript
const button = document.querySelector('.my-button');

button.addEventListener('click', function() {
    alert('Button was clicked!');
});
```

---

### 3. Adding/Removing CSS Classes

JavaScript can add or remove CSS classes to change how elements look.

**Methods:**
```javascript
element.classList.add('class-name');      // Adds a class
element.classList.remove('class-name');   // Removes a class
element.classList.toggle('class-name');   // Adds if missing, removes if present
```

**Example:**
Your CSS has:
```css
.visible {
    opacity: 1;
}
```

JavaScript can add this class:
```javascript
button.classList.add('visible'); // Now button has opacity: 1
```

---

### 4. Scroll Position (How far user scrolled)

```javascript
window.pageYOffset  // Returns scroll distance in pixels
// OR
window.scrollY      // Same thing, modern way
```

**Example:**
```javascript
console.log(window.scrollY);  // Shows: 0 (at top), 500 (scrolled 500px down)
```

---

### 5. Scrolling the Page with JavaScript

```javascript
window.scrollTo({
    top: 0,              // Scroll to top (0 pixels from top)
    behavior: 'smooth'   // Smooth animation
});
```

---

## 🛠️ FEATURE 1: Back-to-Top Button (Step-by-Step)

### Goal
- Button is hidden when page loads
- Button appears when user scrolls down 300px
- Clicking button scrolls page to top smoothly

---

### Step 1: Select the Button Element

**Task:** Create a variable that stores the back-to-top button element.

**Hint:**
- The button has `id="back-to-top"` in your HTML
- Use `document.getElementById()`

**Try it yourself first! Then check below:**

<details>
<summary>Click to see solution</summary>

```javascript
const backToTopBtn = document.getElementById('back-to-top');
```

**Explanation:**
- `const` = creates a constant variable (value won't change)
- `backToTopBtn` = variable name (use camelCase)
- `document.getElementById('back-to-top')` = finds the element with id="back-to-top"
</details>

---

### Step 2: Listen for Scroll Events

**Task:** Add an event listener that runs code when the user scrolls.

**Hint:**
- Use `window.addEventListener()`
- Event name is `'scroll'`
- The function should run every time user scrolls

**Structure:**
```javascript
window.addEventListener('scroll', function() {
    // Your code here - runs every time user scrolls
});
```

**Try it yourself:**
Add a `console.log('Scrolling!')` inside the function to test it works.

---

### Step 3: Check Scroll Position

**Task:** Inside the scroll event, check if user has scrolled more than 300px.

**Hint:**
- Use `window.scrollY` to get scroll position
- Use an `if` statement to check if it's greater than 300

**Structure:**
```javascript
window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        // User scrolled more than 300px
    } else {
        // User is at top (less than 300px)
    }
});
```

**Try it yourself:**
Add `console.log()` in both parts to see when each runs.

---

### Step 4: Add/Remove the 'visible' Class

**Task:**
- If scrolled > 300px: Add 'visible' class to button (makes it appear)
- If scrolled < 300px: Remove 'visible' class (hides it)

**Hint:**
- Use `backToTopBtn.classList.add('visible')`
- Use `backToTopBtn.classList.remove('visible')`

**Try it yourself first! Then check below:**

<details>
<summary>Click to see solution</summary>

```javascript
const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});
```

**Test it:**
1. Save your JavaScript file
2. Refresh browser
3. Scroll down - button should appear
4. Scroll to top - button should disappear
</details>

---

### Step 5: Scroll to Top When Clicked

**Task:** When user clicks the button, scroll page to top.

**Hint:**
- Add a click event listener to `backToTopBtn`
- Use `window.scrollTo()` inside the function

**Structure:**
```javascript
backToTopBtn.addEventListener('click', function() {
    // Scroll to top here
});
```

**Try it yourself first! Then check below:**

<details>
<summary>Click to see solution</summary>

```javascript
backToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
```

**Explanation:**
- `top: 0` = scroll to 0 pixels from top (top of page)
- `behavior: 'smooth'` = smooth animation instead of instant jump
</details>

---

### ✅ Feature 1 Complete Code

**After completing all steps, your code should look like:**

```javascript
// Get the back-to-top button
const backToTopBtn = document.getElementById('back-to-top');

// Show/hide button based on scroll position
window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

// Scroll to top when button is clicked
backToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
```

---

## 🛠️ FEATURE 2: Mobile Menu Toggle (Step-by-Step)

### Goal
- On mobile, clicking hamburger icon shows/hides the navigation menu

---

### Step 1: Select the Elements

**Task:** Get both the hamburger icon and the navigation menu.

**Hint:**
- Hamburger has class `menu-toggle`
- Navigation menu has class `nav-links`
- Use `document.querySelector()`

**Try it yourself first! Then check below:**

<details>
<summary>Click to see solution</summary>

```javascript
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
```

**Note:** Use `.` before class names with querySelector!
</details>

---

### Step 2: Toggle Menu on Click

**Task:** When hamburger is clicked, toggle (add/remove) the 'active' class on the menu.

**Hint:**
- Add click event to `menuToggle`
- Use `.classList.toggle()` - it automatically adds if missing, removes if present

**Structure:**
```javascript
menuToggle.addEventListener('click', function() {
    // Toggle active class on navLinks
});
```

**Try it yourself first! Then check below:**

<details>
<summary>Click to see solution</summary>

```javascript
menuToggle.addEventListener('click', function() {
    navLinks.classList.toggle('active');
});
```

**Test it:**
1. Resize browser to mobile size (≤567px)
2. Click hamburger icon
3. Menu should slide in
4. Click again - menu should slide out
</details>

---

### ✅ Feature 2 Complete Code

**After completing all steps:**

```javascript
// Get hamburger icon and navigation menu
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Toggle menu when hamburger is clicked
menuToggle.addEventListener('click', function() {
    navLinks.classList.toggle('active');
});
```

---

## 🛠️ FEATURE 3: Auto-Close Menu (Bonus Feature)

### Goal
- When user clicks a navigation link, automatically close the mobile menu

---

### Step 1: Select All Navigation Links

**Task:** Get all the `<a>` tags inside `.nav-links`

**Hint:**
- Use `querySelectorAll()` to get multiple elements
- Selector: `'.nav-links li a'` (all anchor tags inside list items inside nav-links)

**Try it yourself first! Then check below:**

<details>
<summary>Click to see solution</summary>

```javascript
const navItems = document.querySelectorAll('.nav-links li a');
```

**Note:** `querySelectorAll()` returns a **list** of elements, not just one.
</details>

---

### Step 2: Loop Through Each Link

**Task:** For each link, add a click event that removes the 'active' class.

**Concept - forEach Loop:**
```javascript
navItems.forEach(function(link) {
    // 'link' represents each individual <a> tag
    // Code here runs for EACH link
});
```

**Try it yourself first! Then check below:**

<details>
<summary>Click to see solution</summary>

```javascript
navItems.forEach(function(link) {
    link.addEventListener('click', function() {
        navLinks.classList.remove('active');
    });
});
```

**How it works:**
1. `forEach` loops through all navigation links
2. For each link, we add a click listener
3. When clicked, remove 'active' from `navLinks` (closes menu)
</details>

---

### ✅ Feature 3 Complete Code

```javascript
// Get all navigation links
const navItems = document.querySelectorAll('.nav-links li a');

// Close menu when any link is clicked
navItems.forEach(function(link) {
    link.addEventListener('click', function() {
        navLinks.classList.remove('active');
    });
});
```

---

## 🎓 PUTTING IT ALL TOGETHER

### Your Complete script.js File

After completing all three features, your file should have:

```javascript
// ===========================
// FEATURE 1: BACK TO TOP BUTTON
// ===========================
const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

backToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===========================
// FEATURE 2: MOBILE MENU TOGGLE
// ===========================
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', function() {
    navLinks.classList.toggle('active');
});

// ===========================
// FEATURE 3: AUTO-CLOSE MENU
// ===========================
const navItems = document.querySelectorAll('.nav-links li a');

navItems.forEach(function(link) {
    link.addEventListener('click', function() {
        navLinks.classList.remove('active');
    });
});
```

---

## 🧪 TESTING YOUR CODE

### Step-by-Step Testing Guide

**1. Test Back-to-Top Button:**
- Open page in browser
- At top: Button should be invisible
- Scroll down 300px+: Button should appear (bottom-right)
- Click button: Page should smoothly scroll to top
- Button should disappear when at top

**2. Test Mobile Menu:**
- Open DevTools (F12)
- Toggle device toolbar (Ctrl+Shift+M)
- Set to mobile size (375px or less)
- Verify hamburger icon is visible
- Click hamburger: Menu should slide in from left
- Click hamburger again: Menu should slide out

**3. Test Auto-Close:**
- Open mobile menu
- Click any navigation link (e.g., "Features")
- Menu should automatically close
- Page should scroll to that section

---

## ❓ UNDERSTANDING CHECK

Before moving on, make sure you understand:

1. **What does `document.getElementById()` do?**
   - Finds and returns an HTML element by its ID

2. **What's the difference between `querySelector()` and `querySelectorAll()`?**
   - `querySelector()` returns ONE element (first match)
   - `querySelectorAll()` returns ALL matching elements (a list)

3. **What does `classList.toggle()` do?**
   - Adds a class if it's missing, removes it if it's present

4. **When does `window.addEventListener('scroll', function() {...})` run?**
   - Every time the user scrolls the page

5. **What does `forEach()` do?**
   - Loops through each item in a list and runs code for each one

---

## 💡 DEBUGGING TIPS

### If Back-to-Top Button Doesn't Work:

**Check 1:** Is the element being selected?
```javascript
console.log(backToTopBtn);  // Should show: <button id="back-to-top">
```
If it shows `null`, the element wasn't found - check your HTML has `id="back-to-top"`

**Check 2:** Is the scroll event firing?
```javascript
window.addEventListener('scroll', function() {
    console.log('Scrolled!', window.scrollY);
});
```
You should see numbers in console when scrolling

**Check 3:** Is the class being added?
```javascript
if (window.scrollY > 300) {
    console.log('Adding visible class');
    backToTopBtn.classList.add('visible');
}
```

---

### If Mobile Menu Doesn't Work:

**Check 1:** Are elements selected?
```javascript
console.log(menuToggle);  // Should show the hamburger div
console.log(navLinks);    // Should show the ul element
```

**Check 2:** Is click event working?
```javascript
menuToggle.addEventListener('click', function() {
    console.log('Hamburger clicked!');
    navLinks.classList.toggle('active');
});
```

**Check 3:** Check browser console for errors
- Press F12
- Go to Console tab
- Look for red error messages

---

## 🎯 LEARNING CHALLENGES (Optional)

Once you finish the basic features, try these challenges:

**Challenge 1:** Add a fade-in animation to the back-to-top button
**Challenge 2:** Change hamburger icon to an X when menu is open
**Challenge 3:** Close menu when clicking outside of it
**Challenge 4:** Add smooth scroll to all anchor links, not just back-to-top

---

## 📚 NEXT STEPS

After completing this:
1. ✅ Test all features thoroughly
2. ✅ Make sure you understand every line of code
3. ✅ Add comments explaining what each part does
4. ✅ Commit your changes to git
5. ✅ Move on to testing and deployment

---

**You've got this!** Take your time, write each line yourself, and understand what it does. If you get stuck, re-read the concepts section or ask for clarification on specific parts.

Happy coding! 🚀
