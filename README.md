Ingreedy - Recipe Finder
Ingreedy is a responsive, modern web application designed to help users discover and filter recipes with ease. Built with React and styled with Tailwind CSS, it features a robust filtering system, intelligent search, and a smooth, animated user interface.

🚀 Features
Smart Filtering System: Multi-criteria filtering for Maximum Prep Time and Maximum Cook Time using custom-styled radio dropdowns.

Real-time Search: Instantly search for recipes by name or ingredients as you type.

Responsive Art Direction: Optimized background images and layouts that switch between mobile and desktop views using the <picture> element.

Dynamic Pagination: Automatic page calculation based on the filtered results to ensure a clean browsing experience.

AI Chef Integration: A dedicated space for future AI-driven recipe assistance.

Smooth Animations: Powered by Framer Motion, including staggered entry animations and scroll-triggered reveals.

Full Responsiveness: A customized mobile sidebar menu and flexible grid layouts.

🛠️ Technical Implementation
Coherent Filtering & Derived State
The project avoids common race conditions by using the Derived State pattern. Instead of storing filtered data in state, it calculates the filteredRecipes in memory during every render based on the original data and current filter criteria. This ensures the UI is always in sync with the user's input.

Custom Components
Dropdown: A reusable, controlled component that manages its own "open" state while communicating selection changes back to the parent.

SearchBar: A focus-aware input utilizing Tailwind's focus-within to provide a premium, interactive feel.

ScrollToTop: A utility component that ensures the viewport resets to the top on every route change.

Styling with Tailwind CSS
The project leverages Tailwind for:

Custom Radio Logic: Creating "target" style radio buttons using a combination of ring, border, and bg utilities.

Line Clamping: Truncating multi-line text descriptions with ... for visual consistency.

Complex Layouts: Utilizing Grid and Flexbox for precise element positioning and centering.
