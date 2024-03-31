class GradientHandler{
    ctx
    interval
    constructor() {
        this.ctx = document.querySelector("body")
        console.log(this.ctx)
    }
    Animate(){
        console.log("render")
        let count = 0;
        this.interval = setInterval(()=>{
            console.log("da")
            count += 1
            this.ctx.style.background = `conic-gradient( from ${count}deg at 50% 50%, #8b6eff 0%, #FEECFF 37%, #C5C3FF 53%, #5400DD 80%, #8b6eff 100% )`
            // count === 360 ? count = 0 : null ;
        },100)
    }
}
export default new GradientHandler