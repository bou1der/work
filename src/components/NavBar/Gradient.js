class GradientHandler{
    ctx
    interval
    constructor() {
        this.ctx = document.querySelector("body")
        this.percent = window.outerWidth < 500 ? 85 : 50;
    }
    Animate(){
        let count = 0;
        this.interval = setInterval(()=>{
            count += 1
            this.ctx.style.background = `conic-gradient( from ${count}deg at 50% ${this.percent}%, #8b6eff 0%, #FEECFF 37%, #C5C3FF 53%, #5400DD 80%, #8b6eff 100% )`
            count === 360 ? count = 0 : null ;
        },100)
    }
}
export default GradientHandler