export function knightMoves(x, y) {
    // keep track of visited locations
    const visited = new Map()

    const queue = [[0, 0]] // start position

    const knightsMovement = [
        [1, 2],
        [2, 1],
        [2, -1],
        [1, -2],
        [-1, -2],
        [-2, -1],
        [-2, 1],
        [-1, 2],
    ]

    let step = 0
    let isSearching = true
    while (isSearching) {
        let currentLocation = null
        queue.push(null) // push in null for end identification

        while ((currentLocation = queue.shift())) {
            const visitedKey = `${currentLocation[0]}_${currentLocation[1]}`
            if (visited.has(visitedKey)) continue
            visited.set(visitedKey, true)
            // if target found
            if (currentLocation[0] === x && currentLocation[1] === y) {
                isSearching = false
                return step
            }

            // if target not found
            knightsMovement.forEach((move) => {
                const nextLocation = [
                    currentLocation[0] + move[0],
                    currentLocation[1] + move[1],
                ]

                // check if next location is valid board position
                if (checkValidPosition(nextLocation[0], nextLocation[1])) {
                    // check if next location is already visited
                    if (!visited.has(`${nextLocation[0]}_${nextLocation[1]}`)) {
                        queue.push(nextLocation)
                    }
                }
            })
        }
        step++
    }
}

function checkValidPosition(x, y) {
    if (x < 0 || x > 7 || y < 0 || y > 7) return false
    return true
}
