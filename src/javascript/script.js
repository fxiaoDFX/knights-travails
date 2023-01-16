import { knightMoves } from "./knightMoves"

export const test = () => {
    const arrayPositions = createArrayPositions()

    for (let move of arrayPositions) {
        console.log(`(${move[0]},${move[1]}): ${knightMoves(move[0], move[1])}`)
    }
}

function createArrayPositions() {
    const positions = []

    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) positions.push([i, j])
    }

    return positions
}
