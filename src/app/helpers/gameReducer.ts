import { ImageComponent } from "./generateGame";

export type gameStateType = {
  gameData: ImageComponent[];
  activeStep: number;
};

export enum actionTypes {
  OPEN_CARD = "OPEN_CARD",
  CLOSE_CARD = "CLOSE_CARD",
  UPDATE_ACTIVE_IMAGE_SET = "UPDATE_ACTIVE_IMAGE_SET",
  UPDATE_GAME_STATE = "UPDATE_GAME_STATE",
}

type openCloseActionType = {
  type: actionTypes.OPEN_CARD | actionTypes.CLOSE_CARD;
  payload: {
    id: number;
    index: number;
  };
};

type updateActiveImageSetType = {
  type: actionTypes.UPDATE_ACTIVE_IMAGE_SET;
  payload: {
    imageSet: number;
  };
};

type updateGameStateType = {
  type: actionTypes.UPDATE_GAME_STATE;
  payload: {
    gameData: ImageComponent[];
  };
};

type actionType =
  | openCloseActionType
  | updateActiveImageSetType
  | updateGameStateType;

export const gameReducer = (state: gameStateType, action: actionType) => {
  switch (action.type) {
    case actionTypes.OPEN_CARD:
      if (action.payload.index !== undefined) {
        const updatedGameData = [...state.gameData];
        updatedGameData[action.payload.index] = {
          ...state.gameData[action.payload.index],
          open: !state.gameData[action.payload.index].open,
        };
        return {
          ...state,
          gameData: updatedGameData,
        };
      } else {
        return state;
      }

    case actionTypes.UPDATE_GAME_STATE:
      return {
        ...state,
        gameData: action.payload.gameData,
      };
    default:
      return state;
  }
};
