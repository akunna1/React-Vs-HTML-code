# React vs HTML Code ⚛️📝🌐

A comparison of how to create web pages using **React.js** (JSX) versus plain **HTML**. This project uses examples (`index.html` and `index.jsx`) to demonstrate building a navigation bar in both approaches.

---

## Key Differences Between HTML and JSX

### 1. Syntax

* **HTML:** Standard markup language with tags and attributes. Static and does not support embedding JavaScript expressions directly.
* **JSX:** JavaScript XML syntax used in React. Uses curly braces `{}` to embed JavaScript expressions inline.

### 2. Dynamic Content

* **HTML:** Dynamic data typically injected via templating engines or server-side rendering (e.g., `{{ user.username }}`).
* **JSX:** Directly embeds dynamic content using JavaScript expressions like `{user.username}`.

### 3. Routing

* **HTML:** Navigation uses traditional `<a href="">` links causing full page reloads.
* **JSX:** Uses React Router’s `<Link>` component for client-side routing, enabling faster navigation without page refresh.

### 4. Component Structure

* **HTML:** Static markup that can be reused but not encapsulated.
* **JSX:** Encapsulates UI as reusable components that can be imported and composed throughout the app.

### 5. Imports

* **HTML:** No JavaScript imports.
* **JSX:** Requires `import` statements to include React, components, and libraries.

### 6. Attributes

* **HTML:** Uses standard attributes like `class`, `href`.
* **JSX:** Uses `className` instead of `class` (to avoid JavaScript keyword conflicts), and camelCase attributes (e.g., `onClick`).

### 7. Dynamic Rendering

* **HTML:** Needs external JavaScript or server logic for dynamic updates.
* **JSX:** React’s state and props enable live updates and dynamic rendering without page reloads.

---

## Summary

JSX in React offers a powerful and flexible way to build interactive, dynamic user interfaces by combining HTML-like syntax with JavaScript functionality. In contrast, plain HTML is static and often requires additional tools for dynamic behavior. This project highlights these differences through a practical example of building a navigation bar.

