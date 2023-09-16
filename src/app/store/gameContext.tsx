import React, { createContext, useReducer, useContext } from 'react'
import { ImageComponent } from '../helpers/generateGame'
import { gameReducer, gameStateType } from '../helpers/gameReducer'

type gameContextType = {
    gameState: gameStateType,
    gameDispatch: any
}

const gameContext = createContext<gameContextType>({} as gameContextType)

export const useGameContext = () => useContext(gameContext)

const initialGameState: gameStateType = {
    gameData: [] as ImageComponent[],
    activeStep: 0
};

const GameContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [gameState, gameDispatch] = useReducer(gameReducer, initialGameState);
    return (
        <gameContext.Provider value={{ gameState, gameDispatch }}>
            {children}
        </gameContext.Provider>
    );
};
export default GameContextProvider