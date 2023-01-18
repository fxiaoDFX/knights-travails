const knightSVG = require("../img/knight.svg")

const board = document.getElementById("board") // gets reference to table

export default function makeBoard() {
    for (let i = 0; i < 8; i++) {
        // row
        const row = document.createElement("tr")
        addYAxis(i, row)

        for (let j = 0; j < 8; j++) {
            const cell = document.createElement("td")

            // if sum of coordinates is even -> white cell
            if ((i + j) % 2 === 0) {
                // create class for white cells
                cell.setAttribute("class", "white cell")
                cell.setAttribute("id", `${j},${7 - i}`)
                row.append(cell)
            }
            // if odd -> black cell
            else {
                cell.setAttribute("class", "black cell")
                cell.setAttribute("id", `${j},${7 - i}`)
                row.append(cell)
            }
        }
        board.append(row)
    }
    addXAxis()
    addLeftClickEvent()
}

function addXAxis() {
    const bottomRow = document.createElement("tr")
    bottomRow.setAttribute("id", "letter row")
    bottomRow.append(document.createElement("td")) // empty cell

    for (let i = 0; i < 8; i++) {
        const letter = document.createElement("td")
        const charCode = "A".charCodeAt() + i
        letter.textContent = `${String.fromCharCode(charCode)}`
        bottomRow.append(letter)
    }
    board.append(bottomRow)
}

function addYAxis(i, element) {
    const number = document.createElement("td")
    number.setAttribute("class", "number column")
    number.textContent = 8 - i
    element.append(number)
}

function addLeftClickEvent() {
    board.addEventListener("click", (e) => {
        const target = e.target
        if (target.classList.contains("cell")) {
            clear("start-knight")
            target.classList.add("start-knight")
            console.log("cell clicked")
        }
    })
}

function addRightClickEvent() {
    return
}

function clear(className) {
    const rows = board.childNodes
    for (let i = 0; i < rows.length - 1; i++) {
        const nodes = rows[i]
        const cells = nodes.childNodes
        for (let j = 1; j < cells.length; j++) {
            const cell = cells[j]
            cell.classList.remove(className)
        }
    }
}
