import React, { useCallback, useRef, useState } from 'react'
import Swal from "sweetalert2"
import { useEffect } from 'react';
const api_url = process.env.REACT_APP_API_URL;

export default function Review() { // 5 13 17 10 20 15 19 2 8 16
    const reviews = [
        {
            photo: { key: 1, url: "1 (15).jpeg" },
            reviewText: "This was the best experience of our lives! The team was amazing.",
            person: { name: "Nikita", gender: "Bride" }
        },
        {
            photo: { key: 2, url: "1 (19).jpeg" },
            reviewText: "We couldn't have asked for a better team to capture our special day.",
            person: { name: "Rahi", gender: "Groom" }
        },
        {
            photo: { key: 3, url: "1 (2).jpeg" },
            reviewText: "Absolutely stunning photos! Highly recommend.",
            person: { name: "Pratik", gender: "Groom" }
        },
        {
            photo: { key: 4, url: "1 (8).jpeg" },
            reviewText: "The team made us feel so comfortable and the results were breathtaking.",
            person: { name: "Rutija", gender: "Bride" }
        },
        {
            photo: { key: 5, url: "1 (16).jpeg" },
            reviewText: "A wonderful experience from start to finish!",
            person: { name: "keyur", gender: "Groom" }
        }
    ];

    const faqs = [
        {
          question: "How far in advance should we book you?",
          answer:
            "Most couples book 6-12 months in advance. Popular dates fill up quickly, so we recommend reaching out as soon as you know your wedding date.",
        },
        {
          question: "Do you travel for destination weddings?",
          answer:
            "Absolutely! I love shooting destination weddings. Travel and accommodation fees are usually added depending on the location.",
        },
        {
          question: "How long does it take to receive our photos?",
          answer:
            "The full gallery is typically delivered within 4-6 weeks. I always send a sneak peek within a few days!",
        },
        {
          question: "Do you offer albums or prints?",
          answer:
            "Yes! I offer beautifully crafted albums and professional quality prints. You’ll be able to order them directly from your gallery.",
        },
      ];
    const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
}

    const slideRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        if (currentIndex < reviews.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(0); // Loop back to the first review
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else {
            setCurrentIndex(reviews.length - 1); // Loop to the last review
        }
    };


    
    return (<>
       <div className="reviews flex justify-center mt-40 w-full px-4">
    <div className="flex-auto relative w-full lg:w-4/5 bg-gradient-to-r from-[#ffe3ba] to-[#ffb3a0] font-serif border-[1px] border-[#ffcb77] py-8 px-10 rounded-2xl shadow-lg sm:px-4">
        {/* Section Title */}
        <h1 className="text-center pb-16 font-semibold sm:text-2xl lg:text-3xl sm:pb-10 font-serif text-amber-800">
            Love Notes from Our Couples
        </h1>

        {/* Reviews Wrapper */}
        <div className="reviews-wrapper overflow-hidden relative">
            <div className="flex transition-transform duration-500 py-2" ref={slideRef} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {reviews.length ? (
                    reviews.map((review) => (
                        <div key={review.photo.key} className="wrapper flex-shrink-0 w-full transition-transform duration-500">
                            <div className="flex-shrink-0 w-full flex lg:flex-row lg:gap-4 sm:flex-col sm:text-center sm:gap-4 sm:pb-8">
                                <div className="lg:w-1/2 flex flex-col gap-2 justify-center items-center leading-5 sm:w-auto">
                                    <p className='text-primary p-2 text-xl sm:text-2xl text-center italic'>
                                        "{review.reviewText}"
                                    </p>
                                    <span className='text-amber-800 text-xl font-medium capitalize text-center'>{review.person.name}</span>
                                </div>
                                <div className="m-1 lg:order-none flex-auto lg:w-1/2 lg:h-80 md:h-[28rem] overflow-hidden sm:order-first sm:w-auto">
                                    <img className='lg:w-full h-full md:w-11/12 rounded-xl mx-auto object-cover bg-center shadow-md transition-transform duration-300 hover:scale-105' src={review.photo.url} alt={review.person.name} />
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center text-lg text-gray-600">No Reviews</div>
                )}
            </div>
        </div>

        {/* Navigation Buttons */}
        <button className="absolute left-4 lg:top-1/2 border-0 outline-none bg-[#FFE3C8] text-primary rounded-full p-2 shadow-lg sm:top-[90%] hover:bg-[#ffb3a0] transition duration-300"
            onClick={handlePrev}>
            <svg xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6">
                <path strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7" />
            </svg>
        </button>
        <button
            className="absolute right-4 lg:top-1/2 border-0 outline-none bg-[#FFE3C8] text-primary rounded-full p-2 shadow-lg sm:top-[90%] hover:bg-[#ffb3a0] transition duration-300"
            onClick={handleNext}>
            <svg xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6">
                <path strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7" />
            </svg>
        </button>
    </div>
</div>
<section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-manrope text-center font-bold text-gray-900 leading-[3.25rem]">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="accordion-group">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className="accordion border border-gray-300 p-4 rounded-xl mb-6 transition-all duration-300 ease-in-out"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="accordion-toggle group flex items-center justify-between w-full text-left text-lg font-medium leading-8 text-gray-900 transition-colors duration-300 hover:text-orange-300"
                >
                  <span>{faq.question}</span>
                  <span
                    className={`icon text-2xl transform transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-orange-300" : ""
                    }`}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-96 mt-4" : "max-h-0"
                  }`}
                >
                  <p className="text-base text-gray-700 font-normal leading-6">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
                                            
</>
    )
}
