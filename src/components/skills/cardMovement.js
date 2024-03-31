class CardMovement{
    card;
    constructor(id){
        this.card = document.getElementById(`${id}`)
    }
    #mapNumberRange(n, a, b, c, d) {
        return ((n - a) * (d - c)) / (b - a) + c
    }
    moveCard(el){
        const pointerX = el.clientX
        const pointerY = el.clientY
        const cardRect = this.card.getBoundingClientRect()
        const halfWidth = cardRect.width / 2
        const halfHeight = cardRect.height / 2
        const cardCenterX = cardRect.left + halfWidth
        const cardCenterY = cardRect.top + halfHeight
        const deltaX = pointerX - cardCenterX
        const deltaY = pointerY - cardCenterY
        const distanceToCenter = Math.sqrt(deltaX * deltaX + deltaY * deltaY)
        const maxDistance = Math.max(halfWidth, halfHeight)
        const degree = this.#mapNumberRange(distanceToCenter, 0, maxDistance, 0, 10)
        const rx = this.#mapNumberRange(deltaY, 0, halfWidth, 0, 1)
        const ry = this.#mapNumberRange(deltaX, 0, halfHeight, 0, 1)
        this.card.style.transform = `perspective(400px) rotate3d(${-rx}, ${ry}, 0, ${degree}deg)`
    }
}
export default CardMovement