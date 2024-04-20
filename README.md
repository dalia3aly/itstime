# IT'S TIME - E-commerce Platform for Watches

IT'S TIME is a sophisticated e-commerce platform dedicated to offering a range of Swiss watches, designed with modern web technologies. This platform leverages React, Firebase, and a meticulously designed Cart Context to provide a seamless shopping experience.

## Features

- **Product Exploration**: Users can browse through a variety of watch categories, view detailed descriptions, images, and pricing information.
- **Dynamic Cart Management**: Utilizes a global Cart Context to manage shopping cart state across the application, allowing users to add items, update quantities, and remove products effortlessly.
- **Real-Time Data Updates**: Integrates with Firebase Firestore for real-time data fetching and updates, ensuring product availability and details are always current. Informing the user when a product is out of stock and updating products quantity in real-time.
- **Responsive Design**: Fully responsive web design ensures a seamless shopping experience across all devices.

## Architecture

- **React Components**: Structured into smart and dumb components, where logic-heavy containers manage state and pass props down to presentational components for rendering.
- **Cart Context**: A central React Context API manages the cart's state throughout the application, providing functions to add, remove, and update items within the cart.
- **Firebase Integration**: Uses Firebase for authentication, storage, and real-time database interactions, handling user data and product details securely and efficiently.
- **SASS Modules**: Each component has its own SASS module, ensuring styles are scoped and do not leak across components.

## Getting Started

To get a local copy up and running, follow these simple steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/dalia3aly/its-time.git
   ```
2. **Install NPM packages:**

npm install

3. **Set up Firebase:**
Create a Firebase project and enable Firestore.
Add your Firebase configuration to firebaseConfig.js

4. **Start the development server:**
```
npm run dev
```

## Usage
Navigate through the product catalog on the homepage. Add products to your cart, adjust quantities, or remove items directly from the cart page. Each product detail page provides comprehensive information about the product, along with the ability to add it directly to your cart.

## Potential Future Improvements/Additions

- Checkout functionality
- Stripe integration
- User Account creation and management

## Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

1. **Fork the Project**
2. **Create your Feature Branch (git checkout -b feature/AmazingFeature)**
3. **Commit your Changes (git commit -m 'Add some AmazingFeature')**
4. **Push to the Branch (git push origin feature/AmazingFeature)**
5. **Open a Pull Request**
