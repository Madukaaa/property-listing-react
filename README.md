# Property Listing App

## Overview

This is a **React.js** application for browsing, searching, and managing properties. The app includes functionality for users to mark properties as favorites, search by various criteria, and view detailed information about each property. It also incorporates a splash screen, drag-and-drop functionality, and local storage for data persistence.

---

## Features

1. **Splash Screen**: A loading screen displayed for 3 seconds when the app starts.
2. **Search Functionality**: Users can search for properties based on multiple criteria:
    - Property type
    - Price range
    - Number of bedrooms
    - Location (postcode)
    - Date added
3. **Favorite Properties**:
    - Add/remove properties to/from a favorites list.
    - Drag-and-drop functionality to manage favorites.
    - Persist favorites using `localStorage`.
4. **Property Details**:
    - View detailed information about a specific property.
5. **Reusable Components**:
    - `Navbar`, `Banner`, `SearchForm`, `PropertyList`, `Footer`.
6. **Routing**:
    - Home page (`/`) with search and property listings.
    - Property detail page (`/property/:id`).

---

## Installation

### Prerequisites

- Node.js and npm installed on your system.

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/property-listing-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd property-listing-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open the app in your browser at `http://localhost:3000`.

---

## Project Structure

```
/src
├── components
│   ├── Banner.js          # Displays the banner on the main page
│   ├── Footer.js          # Footer component
│   ├── Navbar.js          # Navigation bar
│   ├── PropertyDetail.js  # Property details page
│   ├── PropertyList.js    # Displays a list of properties
│   ├── SearchForm.js      # Search form for filtering properties
│   └── SplashScreen.js    # Splash screen shown on app load
├── data
│   └── properties.json    # JSON file containing property data
├── styles
│   └── App.css            # Main stylesheet
├── App.js                 # Main application component
├── index.js               # Entry point of the app
└── README.md              # Documentation for the project
```

---

## Key Files Explained

### `App.js`

- Manages the overall structure and state of the application.
- Features:
    - Splash screen logic
    - Search functionality (`handleSearch`)
    - Favorite properties management with drag-and-drop support.
    - Routing for the home page and property detail page.

### `properties.json`

- Contains sample property data used by the app. This can be replaced with data from an API.

---

## Usage

1. **Search for Properties**:
    - Use the form to search by type, price range, bedrooms, location, or date.
2. **Manage Favorites**:
    - Mark properties as favorites using the favorite button or drag them into the favorites list.
    - Remove properties from favorites by dragging them out or clicking the remove button.
3. **View Property Details**:
    - Click on a property to see more details on a dedicated page.

---

## Technologies Used

- **Frontend**: React.js
- **Styling**: CSS
- **State Management**: React hooks (`useState`, `useEffect`)
- **Routing**: React Router
- **Persistence**: Browser `localStorage`

---

## Future Enhancements

1. Integrate with a real API for property data.
2. Implement user authentication.
3. Add responsive design for better mobile support.
4. Include sorting options for property listings.

---

## Contributing

Feel free to contribute by submitting pull requests or reporting issues. Ensure your code follows the existing style and structure.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Contact

For any questions or suggestions, feel free to reach out:

- **Name**: Maduka Karunathilake
- **GitHub**: [https://github.com/](https://github.com/your-username)Madukaaa

