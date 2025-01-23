import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashScreen from "./components/SplashScreen";
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import SearchForm from './components/SearchForm';
import PropertyList from './components/PropertyList';
import PropertyDetail from './components/PropertyDetail';
import Footer from './components/Footer';
import propertiesData from './data/properties.json';
import './styles/App.css';

// MainPage Component
const MainPage = ({
                      onSearch,
                      filteredProperties,
                      onToggleFavorite,
                      favoriteProperties,
                      onDragStart,
                      onDropFavorite,
                      onDragRemove,
                      onClearFavorites,
                      onDragOutFromFavorites,
                  }) => {
    return (
        <div className="main-page-background">
            {/* Display the banner */}
            <Banner />

            {/* Display the search form */}
            <SearchForm onSearch={onSearch} />

            {/* Display the list of properties */}
            <PropertyList
                properties={filteredProperties}
                onToggleFavorite={onToggleFavorite}
                favoriteProperties={favoriteProperties}
                onDragStart={onDragStart}
                onDropFavorite={onDropFavorite}
                onDragRemove={onDragRemove}
                onClearFavorites={onClearFavorites}
                onDragOutFromFavorites={onDragOutFromFavorites}
            />
        </div>
    );
};

// Main App Component
const App = () => {
    // Show splash screen while loading
    const [isLoading, setIsLoading] = useState(true);

    // Store filtered properties
    const [filteredProperties, setFilteredProperties] = useState(propertiesData.properties);

    // Load favorite properties from local storage
    const [favoriteProperties, setFavoriteProperties] = useState(() => {
        const savedFavorites = localStorage.getItem('favoriteProperties');
        return savedFavorites ? JSON.parse(savedFavorites) : [];
    });

    // Track the property being dragged
    const [draggedProperty, setDraggedProperty] = useState(null);

    // Show splash screen for 3 seconds
    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 3000);
        return () => clearTimeout(timer);
    }, []);

    // Save favorite properties to local storage
    useEffect(() => {
        localStorage.setItem('favoriteProperties', JSON.stringify(favoriteProperties));
    }, [favoriteProperties]);

    // Search for properties
    const handleSearch = (criteria) => {
        const isCriteriaEmpty = Object.values(criteria).every(value => !value);

        if (isCriteriaEmpty) {
            // Show all properties if no criteria are entered
            setFilteredProperties(propertiesData.properties);
        } else {
            // Filter properties based on search criteria
            const filtered = propertiesData.properties.filter((property) => {
                const propertyDate = new Date(
                    property.added.year,
                    new Date(`${property.added.month} 1`).getMonth(),
                    property.added.day
                );

                const dateAfter = criteria.dateAfter ? new Date(criteria.dateAfter) : null;
                const dateBetweenStart = criteria.dateBetweenStart ? new Date(criteria.dateBetweenStart) : null;
                const dateBetweenEnd = criteria.dateBetweenEnd ? new Date(criteria.dateBetweenEnd) : null;

                return (
                    (!criteria.type || criteria.type === 'any' || property.type === criteria.type) &&
                    (!criteria.minPrice || property.price >= parseInt(criteria.minPrice)) &&
                    (!criteria.maxPrice || property.price <= parseInt(criteria.maxPrice)) &&
                    (!criteria.minBedrooms || property.bedrooms >= parseInt(criteria.minBedrooms)) &&
                    (!criteria.maxBedrooms || property.bedrooms <= parseInt(criteria.maxBedrooms)) &&
                    (!dateAfter || propertyDate >= dateAfter) &&
                    (!criteria.postcode || property.location.includes(criteria.postcode)) &&
                    (!dateBetweenStart || !dateBetweenEnd ||
                        (propertyDate >= dateBetweenStart && propertyDate <= dateBetweenEnd))
                );
            });
            setFilteredProperties(filtered);
        }
    };

    // Add or remove property from favorites
    const handleToggleFavorite = (property) => {
        setFavoriteProperties((prev) => {
            const updatedFavorites = prev.some((fav) => fav.id === property.id)
                ? prev.filter((fav) => fav.id !== property.id)
                : [...prev, property];
            localStorage.setItem('favoriteProperties', JSON.stringify(updatedFavorites));
            return updatedFavorites;
        });
    };

    // Start dragging a property
    const handleDragStart = (e, property) => setDraggedProperty(property);

    // Add dragged property to favorites
    const handleDropFavorite = () => {
        if (draggedProperty && !favoriteProperties.some((fav) => fav.id === draggedProperty.id)) {
            setFavoriteProperties((prev) => [...prev, draggedProperty]);
        }
        setDraggedProperty(null);
    };

    // Remove dragged property from favorites
    const handleDragRemove = () => {
        if (draggedProperty) {
            setFavoriteProperties((prev) => prev.filter((fav) => fav.id !== draggedProperty.id));
        }
        setDraggedProperty(null);
    };

    // Remove property when dragged out of favorites
    const handleDragOutFromFavorites = (e, property) => {
        setFavoriteProperties((prev) => prev.filter((fav) => fav.id !== property.id));
    };

    // Clear all favorites
    const handleClearFavorites = () => {
        setFavoriteProperties([]);
        localStorage.removeItem('favoriteProperties');
    };

    return (
        <Router>
            {isLoading ? (
                // Show splash screen while loading
                <SplashScreen />
            ) : (
                <>
                    {/* Display the navigation bar */}
                    <Navbar />

                    {/* Define app routes */}
                    <Routes>
                        {/* Home Page */}
                        <Route
                            path="/"
                            element={
                                <MainPage
                                    onSearch={handleSearch}
                                    filteredProperties={filteredProperties}
                                    onToggleFavorite={handleToggleFavorite}
                                    favoriteProperties={favoriteProperties}
                                    onDragStart={handleDragStart}
                                    onDropFavorite={handleDropFavorite}
                                    onDragRemove={handleDragRemove}
                                    onClearFavorites={handleClearFavorites}
                                    onDragOutFromFavorites={handleDragOutFromFavorites}
                                />
                            }
                        />

                        {/* Property Details Page */}
                        <Route path="/property/:id" element={<PropertyDetail properties={filteredProperties} />} />
                    </Routes>

                    {/* Display the footer */}
                    <Footer />
                </>
            )}
        </Router>
    );
};

export default App;
