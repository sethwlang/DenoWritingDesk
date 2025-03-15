import { useState } from "preact/hooks";

export default function BookCarousel() {
    // Put your image paths here
    const images = [
        "/images/AboutMe.jpg",
        "/images/baileybywall.jpg",
        "/images/coffeeshop.jpg",
        "/images/LandingPage.jpg",
        "/images/writing.jpg",
        ]

    // currentIndex represents how many "steps" to the right we’ve slid
    // e.g. 0 => first 3 images visible, 1 => second group of 3, etc.
    const [currentIndex, setCurrentIndex] = useState(0);

    // The maximum starting index for showing 3 at once
    // e.g. if we have 6 images, last valid index = 3 => shows images 3,4,5
    const maxIndex = Math.max(images.length - 3, 0);

    function handleNext() {
        setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : prev));
    }

    function handlePrev() {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
    }

    // If you have fewer than 3 images, you can handle that however you like
    // For now, we'll just show whatever images exist
    if (images.length === 0) {
        return <p>No book covers to display.</p>;
    }

    return (
        <div class="carousel-outer">
            {/* Buttons */}
            <button class="carousel-button" onClick={handlePrev}>
                &larr;
            </button>

            <div class="carousel-window">
                <div
                    class="carousel-track"
                    style={{ transform: `translateX(-${currentIndex * 33.3333}%)` }}
                >
                    {images.map((src, i) => (
                        <div class="carousel-item" key={i}>
                            <img src={src} alt={`Book cover ${i + 1}`} />
                        </div>
                    ))}
                </div>
            </div>

            <button class="carousel-button" onClick={handleNext}>
                &rarr;
            </button>
        </div>
    );
}
