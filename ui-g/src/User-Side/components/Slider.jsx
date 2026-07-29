import React, { useEffect, useRef } from "react";
import { doctors } from "./doctor.js";
import "./Slider.css";

function Slider() {
  const loopDoctors = [...doctors, ...doctors];
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let scrollAmount = 0;

    const interval = setInterval(() => {
      if (container) {
        container.scrollBy({
          left: 300, // pixels to move per step
          behavior: "smooth",
        });

        scrollAmount += 300;

        // If reached end, reset to beginning smoothly
        if (scrollAmount >= container.scrollWidth / 2) {
          container.scrollTo({ left: 0 });
          scrollAmount = 0;
        }
      }
    }, 3000); // every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container" ref={containerRef}>
      
      <div className="carousel">
        {loopDoctors.map((doc, index) => (
          <div className="card" key={index}>
            <img src={doc.image} alt={doc.name} />
            <h3>{doc.name}</h3>
            <p>{doc.specialization}</p>
            <small>"{doc.testimonial}"</small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
