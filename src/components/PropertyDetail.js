import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import '../styles/PropertyDetail.css';

const PropertyDetail = ({ properties }) => {
    const { id } = useParams();
    const property = properties.find((prop) => prop.id === id);

    const [selectedImage, setSelectedImage] = useState(
        `/images/${property.id}pic1small.png`
    );

    if (!property) {
        return <h2>Property not found</h2>;
    }

    const handleThumbnailClick = (image) => {
        setSelectedImage(image);
    };

    return (
        <div className="property-detail">
            <h1>{property.location} - {property.type}</h1>
            <h2>£{property.price}</h2>

            {/*Image Gallery */}
            <div className="image-gallery">
                <img
                    src={selectedImage}
                    alt="Large view"
                    className="large-image"
                    onError={(e) => e.target.src = 'https://via.placeholder.com/600x400'}
                />
                <div className="thumbnail-gallery">
                    {[1, 2, 3, 4, 5, 6].map((num) => {
                        const imagePath = `/images/${property.id}pic${num}small.png`;

                        return (
                            <img
                                key={num}
                                src={imagePath}
                                alt={`Thumbnail ${num}`}
                                className={`thumbnail ${selectedImage === imagePath ? 'active' : ''}`}
                                onClick={() => handleThumbnailClick(imagePath)}
                                onError={(e) => e.target.src = 'https://via.placeholder.com/100x75'}
                            />
                        );
                    })}
                </div>
            </div>

            {/* More details about property using react tabs */}
            <Tabs>
                <TabList>
                    <Tab>Long Description</Tab>
                    <Tab>Floor Plan</Tab>
                    <Tab>Location</Tab>
                </TabList>

                {/* Long Description Tab */}
                <TabPanel>
                    <div className="tab-content">
                        <h3>Property Description</h3>
                        <p>{property.description}</p>
                    </div>
                </TabPanel>

                {/* Floor Plan Tab */}
                <TabPanel>
                    <div className="tab-content">
                        <h3>Floor Plan</h3>
                        <img
                            src={`/images/${property.id}-floorplan.png`}
                            alt="Floor Plan"
                            className="floor-plan-image"
                            onError={(e) => e.target.src = 'https://via.placeholder.com/600x400'}
                        />
                    </div>
                </TabPanel>

                {/* Google Map Tab */}
                <TabPanel>
                    <iframe
                        src={`https://www.google.com/maps?q=${encodeURIComponent(property.location)}&output=embed`}
                        width="100%"
                        height="300"
                        style={{ border: '0' }}
                        allowFullScreen=""
                        loading="lazy"
                        title="Google Map"
                    ></iframe>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default PropertyDetail;
