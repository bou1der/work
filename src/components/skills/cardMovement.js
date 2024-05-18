class CardMovement{
    card;
    cardReact;
    maxdeg = 5;
    constructor(id){
        this.card = document.getElementById(`${id}`)
        this.cardReact = this.card.getBoundingClientRect()
    }
    #mapNumberRange(n, a, b, c, d) {
        return ((n - a) * (d - c)) / (b - a) + c
    }
    MoveCard(el){
        const cardRect = this.cardReact
        const pointerX = el.clientX
        const pointerY = el.clientY
        const halfWidth = cardRect.width / 2
        const halfHeight = cardRect.height / 2
        const cardCenterX = cardRect.left + halfWidth
        const cardCenterY = cardRect.top + halfHeight
        const deltaX = pointerX - cardCenterX
        const deltaY = pointerY - cardCenterY
        const rx = this.#mapNumberRange(deltaY, 0, halfWidth, 0, 1)
        const ry = this.#mapNumberRange(deltaX, 0, halfHeight, 0, 1)
        this.card.style.transform = `perspective(400px) rotate3d(${-rx}, ${ry}, 0, ${this.maxdeg}deg)`
    }
    MouseLeave(){
        this.card.style.transition = "transform 0.15s linear"
        this.card.style.transform = ``;
    }
}
export default CardMovement