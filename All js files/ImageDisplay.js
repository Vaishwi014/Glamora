import React from 'react';
import './ImageDisplay.css'; // Make sure to create a corresponding CSS file

const ImageDisplay = () => {
    const imagesRow1 = [
        { src: "/Images/Tshirts1.jpg", alt: "Tshirts", label: "Tshirts & Tops", labelPosition: "below" },
        { src: "/Images/Bottoms1.jpg", alt: "Bottom", label: "Bottoms", labelPosition: "above" },
        { src: "/Images/DRESS1.jpg", alt: "Dresses", label: "Dresses", labelPosition: "below" },
        { src: "/Images/Sweats&Hoodies.jpg", alt: "Hoodies", label: "Sweats & Hoodies", labelPosition: "above" },
        { src: "/Images/Bags1.jpg", alt: "Bag", label: "Bags", labelPosition: "below" },
    ];
    const imagesRow2 = [
        { src: "/Images/Activewear2.jpg", alt: "Activewear", label: "Active & Sports", labelPosition: "below" },
        { src: "/Images/Jackets2.jpg", alt: "Jackets", label: "Coats & Jackets", labelPosition: "above" },
        { src: "/Images/Workwear1.jpg", alt: "Workwear", label: "Workwear", labelPosition: "below" },
        { src: "/Images/Shoes1.jpg", alt: "Shoes", label: "Shoes", labelPosition: "above" },
        { src: "/Images/Jewellery1.jpg", alt: "Accessories", label: "Jewellery", labelPosition: "below" },
    ];
    return (
        <div>
          <div className="image-display-row">
            {imagesRow1.map((image, index) => (
              <div className="image-container" key={index}>
                {image.labelPosition === "above" && <div className="label">{image.label}</div>}
                <img src={image.src} alt={image.alt} className="image" />
                {image.labelPosition === "below" && <div className="label">{image.label}</div>}
              </div>
            ))}
          </div>
          <div className="image-display-row">
            {imagesRow2.map((image, index) => (
              <div className="image-container" key={index}>
                {image.labelPosition === "above" && <div className="label">{image.label}</div>}
                <img src={image.src} alt={image.alt} className="image" />
                {image.labelPosition === "below" && <div className="label">{image.label}</div>}
              </div>
            ))}
          </div>
        </div>
      );
    };
    
    export default ImageDisplay;