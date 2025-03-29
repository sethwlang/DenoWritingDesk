import { useState, useEffect, useRef } from "preact/hooks";

export default function MultiShowLoopedCarousel() {
    const images = [
        "/images/books/hercules.png",
        "/images/books/winning_virtually.png",
        "/images/books/be_the_bird.png",
        "/images/books/secrets.png",
        "/images/books/free_yourself_business.png",
    ];

    // Reference for measuring container
    const containerRef = useRef(null);

    // How many slides fit on screen
    const [slidesToShow, setSlidesToShow] = useState(1);

    // We'll measure the container width on mount & resize
    useEffect(() => {
        function handleResize() {
            if (!containerRef.current) return;
            const containerWidth = containerRef.current.offsetWidth;

            // Assume each image is ~200px wide.
            // If your images are dynamic, you might measure them differently.
            const singleImageWidth = 300;

            // Figure out how many images fit side-by-side
            const count = Math.floor(containerWidth / singleImageWidth) || 1;
            setSlidesToShow(count);
        }

        window.addEventListener("resize", handleResize);
        handleResize(); // check once initially
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // -----------------------------
    // INFINITE / LOOP LOGIC
    // -----------------------------
    // Triple the array so we can loop "smoothly"
    const extendedImages = [...images, ...images, ...images];
    const n = images.length; // original array length
    const totalExtended = extendedImages.length; // 3 * n

    // We start at index = n (the middle chunk)
    const [index, setIndex] = useState(n);

    // For controlling CSS transitions (turn them off when “teleporting” or dragging)
    const [isTransitioning, setIsTransitioning] = useState(true);

    // After each transition, check if we’re at an extreme (e.g. near the right edge of extendedImages)
    function handleTransitionEnd() {
        // If we scrolled too far to the right
        if (index >= 2 * n) {
            // Move back by n
            setIsTransitioning(false);
            setIndex((prev) => prev - n);
        }
        // If we scrolled too far to the left
        else if (index < n) {
            // Move forward by n
            setIsTransitioning(false);
            setIndex((prev) => prev + n);
        }
    }

    // -----------------------------
    // NEXT/PREV SHIFT (1 image at a time)
    // -----------------------------
    function handleNext() {
        setIsTransitioning(true);
        setIndex((prev) => prev + 1);
    }
    function handlePrev() {
        setIsTransitioning(true);
        setIndex((prev) => prev - 1);
    }

    // -----------------------------
    // AUTO-PLAY
    // -----------------------------
    const intervalRef = useRef(null);

    function startAutoPlay() {
        if (intervalRef.current) return; // Already running
        intervalRef.current = setInterval(() => {
            handleNext();
        }, 3000); // 3 seconds
    }

    function pauseAutoPlay() {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    }

    // Start auto-play on mount. Clean up on unmount.
    useEffect(() => {
        startAutoPlay();
        return () => pauseAutoPlay();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Pause on hover, resume on leave
    function handleMouseEnter() {
        pauseAutoPlay();
    }
    function handleMouseLeave() {
        startAutoPlay();
    }

    // -----------------------------
    // DRAG/SWIPE
    // -----------------------------
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState(0);
    const [dragOffset, setDragOffset] = useState(0);

    function onPointerDown(e) {
        setIsDragging(true);
        setDragStart(e.clientX);
        setDragOffset(0);
        setIsTransitioning(false); // no smooth transition while physically dragging
    }

    function onPointerMove(e) {
        if (!isDragging) return;
        const offset = e.clientX - dragStart;
        setDragOffset(offset);
    }

    function onPointerUp() {
        if (!isDragging) return;
        setIsDragging(false);

        // Decide a threshold in pixels
        const threshold = 50;
        if (dragOffset > threshold) {
            handlePrev();
        } else if (dragOffset < -threshold) {
            handleNext();
        } else {
            // Not enough drag => snap back
            setIsTransitioning(true);
            setIndex((prev) => prev);
        }
        setDragOffset(0);
    }

    // -----------------------------
    // SLIDING STYLE
    // -----------------------------
    // Each slide is `100% / slidesToShow` wide
    // The track moves left by `index * (100 / slidesToShow)%`
    const slideWidth = 100 / slidesToShow;
    const trackStyle = {
        display: "flex",
        transition: isTransitioning ? "transform 0.3s ease" : "none",
        transform: `translateX(calc(-${index * slideWidth}% + ${dragOffset}px))`,
    };

    const itemStyle = {
        minWidth: slideWidth + "%", // ensures each item takes up a fraction of the container
        boxSizing: "border-box",
        textAlign: "center",
    };

    return (
        <div
            ref={containerRef}
            style={{
                width: "100%",
                overflow: "hidden",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerLeave={onPointerUp} // stops dragging if pointer leaves container
        >
            <div style={{ display: "block", width: "100%", overflow: "hidden" }}>
                <div style={trackStyle} onTransitionEnd={handleTransitionEnd}>
                    {extendedImages.map((src, i) => (
                        <div key={i} style={itemStyle}>
                            <img
                                src={src}
                                alt={`Book cover ${((i % n) + 1)}`}
                                style={{ width: "auto", height: "300px" }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
