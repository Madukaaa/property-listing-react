import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/PropertyList.css';

const PropertyList = ({
                          properties,
                          onToggleFavorite,
                          favoriteProperties,
                          onDragStart,
                          onDropFavorite,
                          onDragRemove,
                          onClearFavorites,
                          onDragOutFromFavorites,
                      }) => {
    return (
        <div className="property-list-container">
            {/* Search Results */}
            <h2>Search Results</h2>
            <div className="property-list">
                {properties.map((property) => {
                    const imagePath = `/images/${property.picture.split('/').pop()}`;
                    const formattedDate = `${property.added.day} ${property.added.month} ${property.added.year}`;
                    const isFavorite = favoriteProperties.some((fav) => fav.id === property.id);

                    return (
                        <div
                            key={property.id}
                            className="property-card"
                            draggable
                            onDragStart={(e) => onDragStart(e, property)}
                        >
                            <h3>{property.type}</h3>
                            <p><strong>Price:</strong> £{property.price}</p>
                            <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
                            <p><strong>Location:</strong> {property.location}</p>
                            <p><strong>Date Added:</strong> {formattedDate}</p>
                            <img src={imagePath} alt={property.type} />
                            <button
                                className={`favorite-button ${isFavorite ? 'favorited' : ''}`}
                                onClick={() => onToggleFavorite(property)}
                            >
                                {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
                            </button>
                            <Link to={`/property/${property.id}`} className="property-link">
                                View Details
                            </Link>
                        </div>
                    );
                })}
            </div>

            {/* Favorites Section */}
            <div
                className="favorites-box"
                onDrop={onDropFavorite}
                onDragOver={(e) => e.preventDefault()}
            >
                <h2>Favorites</h2>
                {favoriteProperties.length > 0 ? (
                    <>
                        <div
                            className="favorites-list"
                            onDragOver={(e) => e.preventDefault()}
                            onDrop={(e) => onDragRemove(e)}
                        >
                            {favoriteProperties.map((property) => {
                                const imagePath = `/images/${property.picture.split('/').pop()}`;
                                const formattedDate = `${property.added.day} ${property.added.month} ${property.added.year}`;

                                return (
                                    <div
                                        key={property.id}
                                        className="favorite-card"
                                        draggable
                                        onDragStart={(e) => onDragStart(e, property)}
                                        onDragEnd={(e) => onDragOutFromFavorites(e, property)} // New Event Handler
                                    >
                                        <h3>{property.type}</h3>
                                        <p><strong>Price:</strong> £{property.price}</p>
                                        <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
                                        <p><strong>Location:</strong> {property.location}</p>
                                        <p><strong>Date Added:</strong> {formattedDate}</p>
                                        <img src={imagePath} alt={property.type} />
                                        <button
                                            className="remove-favorite-button"
                                            onClick={() => onToggleFavorite(property)}
                                        >
                                            Remove from Favorites
                                        </button>
                                    </div>
                                );
                            })}
                        </div>
                        <button className="clear-favorites-button" onClick={onClearFavorites}>
                            Clear Favorites
                        </button>
                    </>
                ) : (
                    <p className="no-favorites">No favorites added.</p>
                )}
            </div>
        </div>
    );
};

export default PropertyList;
