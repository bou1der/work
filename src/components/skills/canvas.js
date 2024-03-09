
// console.log(canvas)
// const canvasCTX = canvas.context


class Canvas{
    ctx
    color;
    constructor(r,g,b,id){
        this.color = [r,g,b]
        this.ctx = document.getElementById(`${id}`).getContext('2d')
    }
    Draw(angel){
        // const ctx = this.ctx
        // ctx.fillStyle =  `rgb(${this.color[0]},${this.color[1]},${this.color[2]})`
        // ctx.arc(153, 82, 49, 0,Math.PI, true);
        // ctx.fill()
        // ctx.rotate(-Math.PI)


        const ctx = this.ctx
        // ctx.canvas.width = 250
        // ctx.canvas.height = 250
        ctx.fillStyle = `rgb(${this.color[0]},${this.color[1]},${this.color[2]})`
        ctx.arc(153,82,49,1.5 * Math.PI,0 * Math.PI, true);
        ctx.fill()

        // ctx.width/2,
        // ctx.height/2,
        //     Math.min(ctx.width/2,ctx.height/2),
        //     0+90,
        //
        //     this.colors[color_index%this.colors.length]
        //



        // ctx.save();  // сохраняем состояние контекста
        // // ctx.rotate(Math.PI / 2);  // поворачиваем на 90 градусов против часовой стрелки
        //
        // ctx.beginPath()
        //   // изменяем координаты, чтобы отобразить круг в новой ориентации
        //
        // ctx.restore();

    }

}
async function Test (canvas){
    console.log(canvas)
    canvas.forEach(el =>{
        const ctx = el.getContext("2d")
        ctx.fillStyle = "rgb(20,218,251)";
        // 97        ctx.beginPath();
        ctx.beginPath();
        ctx.arc(153, 82, 49, 0,Math.PI * -1, true);
        ctx.translate(1,-1)
        ctx.fill()
        // ctx.closePath()
        // ctx.clearRect(0,0,30, 50)

        // setTimeout(()=>{
        //
        //     ctx.beginPath();
        //     ctx.moveTo(0, 0);
        //     ctx.lineTo(100, 50);
        //     ctx.lineTo(0, 50);
        //     ctx.fillStyle = "rgb(0,0,0)";
        //     ctx.fill();
        //     ctx.closePath()
        //
        //     ctx.beginPath()
        //     ctx.moveTo(0,0)
        //     ctx.lineTo(100,0)
        //     ctx.lineTo(100,50)
        //     ctx.fillStyle = "rgb(255,0,0)"
        //     ctx.fill()
        //     ctx.closePath()
        //
        //
        // },100)

    })
}

export default Canvas
