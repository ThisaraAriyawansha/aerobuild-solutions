import React, { useEffect, useRef, useState } from 'react';

const CustomerReviews = () => {
  const reviews = [
    {
      name: 'H. Perera',
      image: '/images/dummy-profile-pic-1.jpg', // Replace with the actual image URL
      rating: 5,
      company: 'Great Work and Service!',
      feedback:
        'The team at Kandalama Homes did an excellent job on our house. They focused on every detail and kept us updated throughout the project. They also stayed within the agreed budget, which was a big relief.',
    },
    {
      name: 'H.M.K Silva',
      image: '/images/dummy-profile-pic-1.jpg', // Replace with the actual image URL
      rating: 4,
      company: 'Smooth and Timely Work!',
      feedback:
        'The construction process was smooth and well-organized. The team was very professional and completed everything on time. The quality of the work was even better than we expected.',
    },
    {
      name: 'Harendra Senarathna',
      image: '/images/dummy-profile-pic-1.jpg', // Replace with the actual image URL
      rating: 5,
      company: 'Beautiful and Creative Designs!',
      feedback:
        'Kandalama Homes came up with great designs that perfectly matched our needs. The final result was not only beautiful but also practical.',
    },
    {
      name: 'H.G Kanishkarandi',
      image: '/images/dummy-profile-pic-female-300n300.jpg', // Replace with the actual image URL
      rating: 4,
      company: 'Professional and Experienced Team!',
      feedback:
        'The team was very professional and experienced. They took great care in handling every part of the project and did an outstanding job.',
    },
    
  ];
  

  const [currentIndex, setCurrentIndex] = useState(0);
  const reviewRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        return prevIndex + 1 >= reviews.length ? 0 : prevIndex + 1;
      });
    }, 5000); // 5-second interval to change the review
    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2 className="mb-12 text-2xl text-center text-black sm:text-left font-quando">
          CUSTOMER REVIEWS
        </h2>
        <div
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
          ref={reviewRef}
        >
          {/* Display reviews on mobile as a slider */}
      {window.innerWidth < 640 ? (
        <div className="flex justify-center overflow-x-hidden">
          <div className="flex flex-nowrap">
            {reviews.slice(currentIndex, currentIndex + 1).map((review, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 mx-4 transition-shadow duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl w-80"
              >
                <div className="flex items-center justify-center mb-4 space-x-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex flex-col">
                    <h3 className="text-lg text-customGreen font-Poppins">
                      {review.name}
                    </h3>
                    <div className="flex items-center justify-center mt-1 space-x-2">
                      <div className="flex items-center">
                        {Array(review.rating)
                          .fill()
                          .map((_, i) => (
                            <span key={i} className="text-xs text-yellow-500">
                              ★
                            </span>
                          ))}
                      </div>
                      <p className="text-sm text-gray-500">{review.company}</p>
                    </div>
                  </div>
                </div>
                <p className="text-sm leading-6 text-justify text-black font-Poppins">
                  {review.feedback}
                </p>
                <div
                  className="w-full mt-4"
                  style={{ borderBottom: '3px solid #D1D5DB' }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        // Display reviews in grid layout for desktop
        reviews.slice(currentIndex, currentIndex + 4).map((review, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 transition-shadow duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl"
          >
            <div className="flex items-center mb-4 space-x-4">
              <img
                src={review.image}
                alt={review.name}
                className="w-12 h-12 rounded-full"
              />
              <div className="flex flex-col">
                <h3 className="text-lg text-customGreen font-Poppins">
                  {review.name}
                </h3>
                <div className="flex items-center mt-1 space-x-2">
                  <div className="flex items-center">
                    {Array(review.rating)
                      .fill()
                      .map((_, i) => (
                        <span key={i} className="text-xs text-yellow-500">
                          ★
                        </span>
                      ))}
                  </div>
                  <p className="text-sm text-gray-500">{review.company}</p>
                </div>
              </div>
            </div>
            <p className="text-sm leading-6 text-justify text-black font-Poppins">
              {review.feedback}
            </p>
            <div
              className="w-full mt-4"
              style={{ borderBottom: '3px solid #D1D5DB' }}
            ></div>
          </div>
        ))
      )}
    </div>

        <a
          href=""
          className="block p-10 text-center text-black transition duration-300 sm:text-right font-poppins hover:text-blue-700"
        >
          Add Your Review
        </a>
      </div>
    </section>
  );
};

export default CustomerReviews;
