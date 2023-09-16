export type ImageComponent = {
  image: string;
  id: number;
  open: boolean;
  unlocked: boolean;
};

export const generateNewGame = async (
  imageSet: number,
  imageQuantity: number
) => {
  var gameData: ImageComponent[] = [];
  const result = await fetch("./data/Card-Flip.json");
  const resultJSON = await result.json();
  const selectedImageSet = resultJSON["Card-Flip"][imageSet]["imageSet"];
  var selectedImageArray = [];
  const randomizedImageArray = [];

  for (let i = 0; i < imageQuantity * 2; i++) {
    selectedImageArray.push(i);
    selectedImageArray.push(i);
  }

  var selectedImageIndexs = [...selectedImageArray];

  for (let i = 0; i < selectedImageArray.length; i++) {
    const lengthOfArray = selectedImageIndexs.length - 1;
    var randomIndex = 0;
    if (lengthOfArray !== 0) {
      randomIndex = Math.floor(Math.random() * lengthOfArray);
    }
    randomizedImageArray.push(selectedImageIndexs[randomIndex]);
    selectedImageIndexs.splice(randomIndex, 1);
  }
  for (let i = 0; i < randomizedImageArray.length; i++) {
    gameData.push({
      image: selectedImageSet[randomizedImageArray[i]],
      id: randomizedImageArray[i],
      open: false,
      unlocked: false,
    });
  }

  return await gameData;
};
