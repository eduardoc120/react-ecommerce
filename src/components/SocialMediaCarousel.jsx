import React, { useEffect } from 'react';

import CarouselItem from './SocialMediaCarouselItem';

import '../assets/styles/components/SocialMediaCarousel.css';

const SocialMediaCarousel = props => {

    useEffect(() => {

        const slider = document.getElementById('carousel-items');
        const slides = Array.from(document.getElementsByClassName('carousel-item'));
        const slideWidth = slides[0].offsetWidth;

        let firstActiveIndex = 0;
        let lastActiveIndex = 2;
        let posX1;
        let posX2;
        let initialPosition;
        let finalPosition;

        let canISlide = true;

        const firstSlide = slides[0];
        const secondSlide = slides[1];
        const penultimateSlide = slides[slides.length - 2];
        const lastSlide = slides[slides.length - 1];

        const cloneFirstSlide = firstSlide.cloneNode(true);
        const cloneSecondSlide = secondSlide.cloneNode(true);
        const clonePenultimateSlide = penultimateSlide.cloneNode(true);
        const cloneLastSlide = lastSlide.cloneNode(true);

        slider.appendChild(cloneFirstSlide);
        slider.appendChild(cloneSecondSlide);
        slider.insertBefore(clonePenultimateSlide, firstSlide);
        slider.insertBefore(cloneLastSlide, firstSlide);

        const prevButton = document.getElementById('prev-button');
        const nextButton = document.getElementById('next-button');

        prevButton.addEventListener("click", () => switchSlide("prev"));
        nextButton.addEventListener("click", () => switchSlide("next"));

        slider.addEventListener("transitionend", checkIndex);

        slider.addEventListener("mousedown", dragStart);

        slider.addEventListener("touchstart", dragStart);
        slider.addEventListener("touchmove", dragMove);
        slider.addEventListener("touchend", dragEnd);

        function dragStart(e) {
            e.preventDefault();
            initialPosition = slider.offsetLeft;
            slider.style.cursor = "grabbing";
          
            if (e.type === "touchstart") {
              posX1 = e.touches[0].clientX;
            } else {
                posX1 = e.clientX;
            
                document.onmouseup = dragEnd;
                document.onmousemove = dragMove;
            } 
        }

        function dragMove(e) {
            if (e.type === "touchmove") {
              posX2 = posX1 - e.touches[0].clientX;
              posX1 = e.touches[0].clientX;
            } else {
              posX2 = posX1 - e.clientX;
              posX1 = e.clientX;
            }

            slider.style.left = `${slider.offsetLeft - posX2}px`;
        }

        function dragEnd() {
            finalPosition = slider.offsetLeft;
            if (finalPosition - initialPosition < -205) {
              switchSlide("next", "dragging");
            } else if (finalPosition - initialPosition > 205) {
              switchSlide("prev", "dragging");
            } else {
              slider.classList.add("transition");
              slider.style.left = `${initialPosition}px`;
            }
          
            slider.style.cursor = "grab";
            document.onmouseup = null;
            document.onmousemove = null;
        }

        function switchSlide(arg, arg2) {
            slider.classList.add("transition");
          
            if (canISlide) {
              if (!arg2) {
                initialPosition = slider.offsetLeft;
              }
              if (arg === "next") {
                slider.style.left = `${initialPosition - slideWidth}px`;
                firstActiveIndex++;
                lastActiveIndex++;
              } else {
                slider.style.left = `${initialPosition + slideWidth}px`;
                firstActiveIndex--;
                lastActiveIndex--;
              }
            }
          
            canISlide = false;
        }

        function checkIndex() {
            slider.classList.remove("transition");
            
            if (firstActiveIndex === -2) {
                slider.style.left = `-${slides.length * slideWidth}px`;
                firstActiveIndex = slides.length - 2;
                lastActiveIndex = slides.length;
            }
            
            if (lastActiveIndex === slides.length + 1) {
                slider.style.left = `-${1 * slideWidth}px`;
                firstActiveIndex = -1;
                lastActiveIndex = 1;
            }
            
            canISlide = true;
        }

    }, []);



    return (
        <div className="carousel-container">
            <div className="carousel-items" id="carousel-items">
                {props.items.map(item => 
                    <CarouselItem key={item.id} {...item} />
                )}
            </div>
            <div className="carousel-button next-button" id="next-button"></div>
            <div className="carousel-button prev-button" id="prev-button"></div>
        </div>
    ) 
};

export default SocialMediaCarousel;
