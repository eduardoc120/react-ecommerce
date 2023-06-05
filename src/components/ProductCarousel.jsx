import React, { useEffect } from 'react';

import CarouselItem from './ProductCarouselItem';

import '../assets/styles/components/ProductCarousel.css';

const ProductCarousel = props => {

    useEffect(() => {

        const slider = document.getElementById('product-carousel-items');
        const slides = Array.from(document.getElementsByClassName('product-carousel-item'));
        const navigationButtons = Array.from(document.getElementsByClassName('product-navigation-btn'));
        navigationButtons.forEach(button => {
          button.addEventListener('click', e => {
            if (parseInt(e.target.attributes['data-image-index'].value) !== index) {
              switchSlide(parseInt(e.target.attributes['data-image-index'].value));
            }
          });
        });
        const slideWidth = slides[0].offsetWidth;

        let index = 0;
        let posX1;
        let posX2;
        let initialPosition;
        let finalPosition;

        let canISlide = true;

        const firstSlide = slides[0];
        const lastSlide = slides[slides.length - 1];

        const cloneFirstSlide = firstSlide.cloneNode(true);
        const cloneLastSlide = lastSlide.cloneNode(true);

        slider.appendChild(cloneFirstSlide);
        slider.insertBefore(cloneLastSlide, firstSlide);

        const prevButton = document.getElementById('product-carousel-prev-button');
        const nextButton = document.getElementById('product-carousel-next-button');

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
                index++;
              } else if (arg === "prev") {
                slider.style.left = `${initialPosition + slideWidth}px`;
                index--;
              } else if (typeof arg === 'number') {
                slider.style.left = `-${(arg + 1) * slideWidth}px`;
                index = arg;
              }
            }
          
            canISlide = false;
        }

        function checkIndex() {
            slider.classList.remove("transition");
            
            if (index === -1) {
                slider.style.left = `-${slides.length * slideWidth}px`;
                index = slides.length - 1;
            }
            
            if (index === slides.length) {
                slider.style.left = `-${1 * slideWidth}px`;
                index = 0;
            }
            
            Array.from(document.getElementsByClassName('active')).forEach(element => {element.classList.remove('active')});
            navigationButtons.forEach(element => {
              if (parseInt(element.attributes['data-image-index'].value) === index) {
                element.classList.add('active');
              }
            });
            canISlide = true;
        }

    }, []);



    return (
        <div className="product-carousel-container">
            <div className="product-carousel-items" id="product-carousel-items">
                {props.items.map(item => 
                    <CarouselItem key={item.id} {...item} />
                )}
            </div>
            <div className="carousel-navigation">
              <div className="product-carousel-button prev-button" id="product-carousel-prev-button"></div>
              <ul className="dots">
                {props.items.map((item, index) => 
                  <li key={`dot-${item.id}`} className={`product-navigation-btn ${index === 0 ? 'active' : ''}`} data-image-index={index} ></li>
                )}
              </ul>
              <div className="product-carousel-button next-button" id="product-carousel-next-button"></div>
            </div>
            <ul className="thumnail-navigation">
              {props.items.map((item, index) => 
                <li key={`thumnail-${item.id}`} >
                  <img src={item.url} alt="product" className={`product-navigation-btn ${index === 0 ? 'active' : ''}`} data-image-index={index} />
                </li>
              )}
            </ul>
        </div>
    ) 
};

export default ProductCarousel;
