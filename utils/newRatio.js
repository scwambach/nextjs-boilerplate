const newRatio = (crop, originalDimensions, customHeight, customeWidth) => {
  const heightPercentRemoved = crop ? crop.top + crop.bottom : 0;
  const widthPercentRemoved = crop ? crop.left + crop.right : 0;
  const customRatio = (customHeight / customeWidth) * 100;
  const newHeight =
    originalDimensions.height -
    originalDimensions.height * heightPercentRemoved;
  const newWidth =
    originalDimensions.width - originalDimensions.width * widthPercentRemoved;
  const aspectRatio = (newHeight / newWidth) * 100;
  return customRatio || aspectRatio;
};

export default newRatio;
