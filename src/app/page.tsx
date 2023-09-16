"use client"
import Image from 'next/image'
import { useEffect } from "react"
import { generateNewGame } from './helpers/generateGame'
import { useGameContext } from './store/gameContext'
import { actionTypes } from './helpers/gameReducer'
import ImageCard from './components/imageCard'

// image flip animation using Tailwind

const imageGame = [{ image: "image link", id: 1, open: true, unlocked: true }]

export default function Home() {
  const { gameState, gameDispatch } = useGameContext()

  const getGameData = async () => {
    const response = await generateNewGame(1, 2)
    console.log(response)
    gameDispatch({
      type: actionTypes.UPDATE_GAME_STATE,
      payload: {
        gameData: response
      }
    })

  }
  useEffect(() => {
    getGameData()
  }, [])

  return (
    <>
      {
        gameState.gameData.map((imageData, index) => {
          return <ImageCard key={index} index={index} {...imageData} />
        })
      }
    </>
  )
}
