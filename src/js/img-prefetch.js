
import prefetchImages from 'prefetch-image';

export default function loadImages() {

    const images = [
        '../assets/images/LandingPage.jpg',
        '../assets/images/AboutMe.jpg',
        '../assets/images/book.jpg',
        '../assets/images/coffeeShop.jpg',
        '../assets/images/coffeeshop2.jpg',
        '../assets/images/Contact.jpg',
        '../assets/images/LandingPage.jpg',
        '../assets/images/notebook.jpg',
        '../assets/images/notebook2.jpg',
        '../assets/images/typing.jpg',
        '../assets/images/writing.jpg',
        '../assets/images/writing2.jpg',
        '../assets/images/writing3.jpg',
    ];
    
    prefetchImages(images)
        .then(() => {
        console.log('Swatch Images Loaded');
    });

}

