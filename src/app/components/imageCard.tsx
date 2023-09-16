import React from 'react'
import { ImageComponent } from '../helpers/generateGame'
import { useGameContext } from '../store/gameContext'
import { actionTypes } from '../helpers/gameReducer'
import { type } from 'os'

type ImageCardProps = ImageComponent & { index: number }
const ImageCard = ({ image, id, open, unlocked, index }: ImageCardProps) => {

    const { gameState, gameDispatch } = useGameContext()

    const toggleCard = () => {
        console.log(gameState)
        if (open) {
            gameDispatch({
                type: actionTypes.OPEN_CARD,
                payload: {
                    id: id,
                    index: index
                }
            })
        } else {
            gameDispatch({
                type: actionTypes.OPEN_CARD,
                payload: {
                    id: id,
                    index: index
                }
            })
        }
    }

    return (
        <div>
            <img onClick={() => toggleCard()} className='w-28 h-28' src={image} />
        </div>
    )
}

export default ImageCard