import "./style/style.css"
import { knightMoves, getPath, printPath } from "./javascript/knightMoves"
import { test } from "./javascript/script"

//test()

const path = knightMoves([3, 3], [4, 3])

const result = getPath(path)

printPath(result, path.step)
