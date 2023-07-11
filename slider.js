//
let containerSlider = document.querySelector(".feature-item-catalog");
let rightArrow = document.querySelector(".gallery-button-next");
let leftArrow = document.querySelector(".gallery-button-back");
let descriptionPerforator = document.querySelector(".slide-perforatot");
let descriptionDreli = document.querySelector(".slide-dreli");
let buttonPerforator = document.querySelector(".button-slider-perforator");
let buttonDreli = document.querySelector(".button-slider-dreli");

rightArrow.addEventListener("click", function(evt){
    evt.preventDefault();
    if(containerSlider.classList.contains("site-wrapper-1")){
    containerSlider.classList.remove("site-wrapper-1");
    containerSlider.classList.add("site-wrapper-2");
    descriptionDreli.classList.remove("slide-current");
    descriptionPerforator.classList.add("slide-current");
    buttonDreli.classList.remove("current");
    buttonPerforator.classList.add("current");
}
})


leftArrow.addEventListener("click", function(evt){   
    evt.preventDefault();
    if(containerSlider.classList.contains("site-wrapper-2")){    
    containerSlider.classList.remove("site-wrapper-2");
    containerSlider.classList.add("site-wrapper-1");
    descriptionPerforator.classList.remove("slide-current");
    descriptionDreli.classList.add("slide-current");
    buttonPerforator.classList.remove("current");
    buttonDreli.classList.add("current");
    }
})
