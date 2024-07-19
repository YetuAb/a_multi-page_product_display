# Product Display and Social Media Feed Web Application

## Project Overview

This project is a two-page web application based on provided UI designs. The first page showcases a product display section, while the second page displays a social media feed and additional product cards. The goal is to accurately implement the visual and functional aspects of the UI as depicted in the provided design screenshots.

## Features

- Multi-page product display and social media feed
- Responsive design that adapts to different screen sizes
- Hover effects for navigation menu and buttons
- Authentication guard to protect certain routes

## Technologies Used

- React
- Tailwind CSS
- CSS Flexbox and Grid
- React Router DOM

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (>= 12.x)
- npm (>= 6.x)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/YetuAb/a_multi-page_product_display.git
   cd product-display
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Application

1. Start the development server:

   ```bash
   npm start
   ```

2. Open your browser and navigate to `http://localhost:3000`.

### Project Structure

- `src/`
  - `components/`
    - `Header.jsx` - Contains the header and sub-navigation components.
    - `ProductCard.jsx` - Component to display product cards.
    - `SocialMediaCard.jsx` - Component to display social media feed cards.
  - `pages/`
    - `Login.jsx` - Page component for authentication. Uses static data for demonstration purposes (username: "user", password: "password").
    - `ProductDetail.jsx` - Page component for viewing product details
    - `ProductDisplayPage.jsx` - Page component for product display.
    - `SocialMediaPage.jsx` - Page component for social media feed and additional products.
  - `App.js` - Main application component with routing.

### Authentication

The authentication guard is implemented in `App.js`. The `isAuthenticated` function currently returns `true` if the static data for demonstration purposes is entered correctly into the login page.

The dummy JSON data used for authentication is:

- **Username**: `user`
- **Password**: `password`

### Additional Features

- **Dark Mode Toggle**: Implemented a dark mode toggle feature.
- **Hover Effects**: Added hover effects.
- **Functional "View Details" Buttons**: Made the "View Details" buttons functional, routing to a placeholder detail page.

## Contact

For any questions or further clarification, feel free to reach out.
