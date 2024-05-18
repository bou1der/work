class Carousel{
    direction = 0;
    carousel;
    nextButton;
    prevButton;
    constructor() {
        this.nextButton = document.getElementById("next-button")
        this.prevButton = document.getElementById("prev-button")
        this.carousel = document.querySelector(".carousel")
    }
    Next(){
        this.direction = -1;
        const  project = document.querySelector(".portfolio-work-block")
        this.carousel.style.transform = "translateX("+ -project.clientWidth + "px)";
        // this.nextButton.onclick = null;
    }
    Prev(){
        this.direction = 1;
        const  project = document.querySelector(".portfolio-work-block")
        this.carousel.style.transform = "translateX("+ project.clientWidth + "px)";
        // this.prevButton.onclick = null;
    }
    carouselScrolling(){
        if(this.direction === -1){
            this.carousel.appendChild(this.carousel.firstElementChild);
        }else if(this.direction === 1){
            this.carousel.prepend(this.carousel.lastElementChild);
        }

        this.carousel.style.transition = 'none'
        this.carousel.style.transform = 'translateX(0)';
        function ReloadCarousel(carousel,prevButton,nextButton,Prev,Next){
            setTimeout(()=>{
                carousel.style.transition = 'transform 0.3s ease-in-out';
            },5)

        }

        ReloadCarousel(this.carousel,this.prevButton,this.nextButton,this.Prev,this.Next)
    }
}

export default Carousel