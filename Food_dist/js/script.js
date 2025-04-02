let modalBtn = document.querySelectorAll("button[data-modal]");

let modal = document.querySelector(".modal");

let modalClose = document.querySelector(".modal__close");

modalBtn.forEach((btn) => {

  btn.onclick = () => modal.classList.add("show", "fade");

  modalClose.onclick = () => modal.classList.remove("show");

});

let slides = document.querySelectorAll(".offer__slide");

let prev = document.querySelector(".offer__slider-prev");

let next = document.querySelector(".offer__slider-next");

let current = document.querySelector("#current")

let total = document.querySelector("#total")

total.textContent = String(slides.length).padStart(2,0)

let slideIndex = 0;

slideShow()

next.onclick = () => {

slideIndex++;

slideShow()

}

prev.onclick = () => {

    slideIndex--;

    slideShow()

    }

function slideShow() {

    if (slideIndex > slides.length - 1) {

        slideIndex = 0
        
    }else if (slideIndex < 0) {

        slideIndex = slides.length -1

    } 

    slides.forEach((slide) => slide.classList.add("hide" , "fade"));

    slides[slideIndex].classList.remove("hide");

    current.textContent = String(slideIndex + 1).padStart(2 ,0)
    
}
let img = document.querySelectorAll("#img");

let tabheaderItems = document.querySelectorAll(".tabheader__item")

let pictures = {

    Фитнес:"img/tabs/vegy.jpg",

    Премиум:"img/tabs/elite.jpg",

    Постное:"img/tabs/post.jpg",

    Сбалансированное:"img/tabs/vegy.jpg",

}

tabheaderItems.forEach(item => {

    item.onclick = () => {

        
    
    
        tabheaderItems.forEach(item => item.classList.remove("tabheader__item_active"));

        item.classList.add("tabheader__item_active")

    }

})

