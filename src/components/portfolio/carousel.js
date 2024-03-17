class Carousel{
    direction = 0;
    carousel;
    nextButton;
    prevButton;
    constructor() {
        this.carousel = document.querySelector(".carousel")
        this.nextButton = document.getElementById("next-button")
        this.prevButton = document.getElementById("prev-button")
    }
    Next(){
        this.direction = -1;
        this.carousel.style.transform = "translateX("+ (-1040) + "px)";
        // this.nextButton.onclick = null;
    }
    Prev(){
        this.direction = 1;
        this.carousel.style.transform = "translateX("+ 1040 + "px)";
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
                carousel.style.transition = 'transform 0.15s ease-in-out';
            },150)
            setTimeout(()=>{
                prevButton.onclick = Prev;
                nextButton.onclick = Next;
            }, 150)
        }

        ReloadCarousel(this.carousel,this.prevButton,this.nextButton,this.Prev,this.Next)
    }
}

export default Carousel