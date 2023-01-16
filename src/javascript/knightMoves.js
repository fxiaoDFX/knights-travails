export function knightMoves(x, y) {
    // keep track of visited locations
    const visited = new Map()

    const queue = [{ curr: [0, 0], prev: null }] // start position

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
        let current = null
        queue.push(null) // push in null for end identification

        while ((current = queue.shift())) {
            const visitedKey = `${current.curr[0]}_${current.curr[1]}`
            if (visited.has(visitedKey)) continue
            visited.set(visitedKey, true)
            // if target found
            if (current.curr[0] === x && current.curr[1] === y) {
                isSearching = false
                return { current, step }
            }

            // if target not found
            knightsMovement.forEach((move) => {
                const nextLocation = {
                    curr: [
                        current.curr[0] + move[0],
                        current.curr[1] + move[1],
                    ],
                    prev: current,
                }

                // check if next location is valid board position
                if (
                    checkValidPosition(
                        nextLocation.curr[0],
                        nextLocation.curr[1]
                    )
                ) {
                    // check if next location is already visited
                    if (
                        !visited.has(
                            `${nextLocation.curr[0]}_${nextLocation.curr[1]}`
                        )
                    ) {
                        queue.push(nextLocation)
                    }
                }
            })
        }
        step++
    }
}

/**
 * getPath Returns an array of arrays that contain the coordinates of knight's
 * moves from end to starting position.
 *
 * @param {object} path - The object containing an end node and steps
 */
export function getPath(path) {
    let trace = path.current
    const pathArray = []

    while (trace !== null) {
        pathArray.push(trace.curr)
        trace = trace.prev
    }

    return pathArray
}

export function printPath(array, steps) {
    console.log(`You made it in ${steps} moves! Here's your path:`)
    while (array.length > 0) {
        console.log(`\t${array.pop()}`)
    }
}

function checkValidPosition(x, y) {
    if (x < 0 || x > 7 || y < 0 || y > 7) return false
    return true
}
