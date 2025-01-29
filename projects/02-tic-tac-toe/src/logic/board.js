import { combinations } from "../constants"

export const checkToWinner = (checkToBoard) => {
    for (const combos of combinations) {
        const [a, b, c] = combos
        if (checkToBoard[a] &&
            checkToBoard[a] === checkToBoard[b] &&
            checkToBoard[a] === checkToBoard[c]
        ) {
            return checkToBoard[a]
        }
    }
    return null
}

export const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null)
}

