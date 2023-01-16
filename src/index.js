import "./style/style.css"
import { knightMoves } from "./javascript/knightMoves.js"

const position = prompt("Enter an x, y coordinate: ")

const positionArr = position.split(" ")

console.log(
    knightMoves(
        Number.parseInt(positionArr[0]),
        Number.parseInt(positionArr[1])
    )
)
