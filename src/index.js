import "./style/style.css"
import { knightMoves, getPath, printPath } from "./javascript/knightMoves"
import { test } from "./javascript/script"

//test()

const path = knightMoves(7, 7)

const result = getPath(path)

printPath(result, path.step)
