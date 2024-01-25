import React, { useState, useEffect } from "react";
import "./reviews.css";

// Imported images
import reviewer1 from "../../assets/reviewer1.jpeg";
import reviewer2 from "../../assets/reviewer2.jpg";
import reviewer3 from "../../assets/reviewer3.jpg";
import reviewer4 from "../../assets/reviewer4.jpg";
import reviewer5 from "../../assets/reviewer5.jpg";
import reviewer6 from "../../assets/reviewer6.jpg";

// Array with reviews

const Reviews = () => {
  // Array with reviews

  const currentReviews = [
    {
      key: 1,
      image: reviewer1,
      text: "NextCar is my go to car dealership. They are always above industry standards.",
      name: "Sean Paul",
    },
    {
      key: 2,
      image: reviewer2,
      text: "NextCar provides excellent customer service. I highly recommend them.",
      name: "Jane Smith",
    },
    {
      key: 3,
      image: reviewer3,
      text: "NextCar has a wide selection of vehicles. I found my dream car there.",
      name: "Michael Johnson",
    },
    {
      key: 4,
      image: reviewer4,
      text: "NextCar made the car buying process so easy. I'm extremely satisfied with my purchase.",
      name: "Emil Davis",
    },
    {
      key: 5,
      image: reviewer5,
      text: "NextCar offers competitive prices. I got a great deal on my new car.",
      name: "John Anderson",
    },
    {
      key: 6,
      image: reviewer6,
      text: "NextCar has a friendly and knowledgeable staff. They helped me find the perfect car.",
      name: "Mike Wilson",
    },
  ];

  // Use state

  const [xPos, setXPos] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setXPos((prevXPos) => {
        const newXPos = prevXPos - 300;
        if (newXPos <= currentReviews.length * -300) {
          return 0;
        }
        return newXPos;
      });
    }, 5000);

    return () => clearInterval(timer); // Clean up on unmount
  }, []);

  return (
    <div className="reviewSection">
      {currentReviews.map((review) => {
        return (
          <div style={{ translate: xPos }} className="review" key={review.key}>
            <img src={review.image} className="reviewImage" alt="" />
            <span className="reviewText">"{review.text}"</span>
            <span className="reviewerName">{review.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Reviews;
