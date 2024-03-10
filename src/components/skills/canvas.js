class Canvas{
    ctx
    color;
    constructor(r,g,b,id){
        this.color = [r,g,b]
        this.ctx = document.getElementById(`${id}`).getContext('2d')
    }
    Draw(percent1,percent2){
        const ctx = this.ctx
        let totalValue = percent1 + percent2;
        let startAngle = 1.5 * Math.PI;

        ctx.fillStyle = `rgb(${this.color[0]},${this.color[1]},${this.color[2]})`;
        ctx.beginPath();
        ctx.moveTo(153, 82);
        ctx.arc(153, 82, 49, startAngle, startAngle + (Math.PI * 2 * (percent1 / totalValue)),true);
        ctx.fill();
        ctx.closePath()

        ctx.beginPath()
        ctx.arc(153,82,49,0, Math.PI * 2,true)
        ctx.strokeStyle = "rgb(141,141,141)"

        ctx.stroke()
    }

}
export default Canvas
