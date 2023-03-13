const buttons = document.querySelectorAll("[data-carousel-button]")

// loop through all buttons
buttons.forEach(button => {
    // when clicked on one of the buttons
    button.addEventListener('click', () => {
        // determine offset by adding one if button 'next' is clicked otherwise return negative one
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        // get all the slides
        const slides = button
            .closest("[data-carousel]")
            .querySelector("[data-slides]")

        // get the active slide
        const activeSlide = slides.querySelector("[data-active]")
        // convert slides to an array and set the newIndex by adding the offset 
        let newIndex = [...slides.children].indexOf(activeSlide) + offset

        // if going backwards past the first image go to the last image
        if (newIndex < 0) newIndex = slides.children.length - 1
        // if going further past the last image go to the first image
        if (newIndex >= slides.children.length) newIndex = 0

        // add data-active to the new slide
        slides.children[newIndex].dataset.active = true
        // remove the data-active dataset from the old slide
        delete activeSlide.dataset.active
    })
})