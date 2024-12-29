const ImageGallery = ({
  imagesList,
  displayName = false,
  imageShape = "square",
}) => {
  let parentDivClass = "";
  let imageContainerClass = "";
  let imageClass = "";
  if (imageShape === "square") {
    imageContainerClass = "aspect-w-4 aspect-h-3";
    imageClass = "w-full h-full";
  } else if (imageShape === "circle") {
    parentDivClass = "flex justify-center items-center flex-col";
    imageContainerClass =
      "lg:w-[300px] lg:h-[300px] md:w-[250px] md:h-[250px]  w-[100px] h-[100px]  flex flex-col items-center";
    imageClass =
      "lg:w-[300px] lg:h-[300px] md:w-[250px] md:h-[250px] w-[100px] h-[100px]  rounded-full object-cover";
  }
  return (
    <>
      {imagesList?.map((item, i) => {
        return (
          <div className={parentDivClass}>
            <div className={imageContainerClass} key={i}>
              <img className={imageClass} src={item?.src} alt={item?.name} />
            </div>

            {displayName && (
              <div className="flex items-center flex-col mt-2">
                <a href="/" className="underline text-center">
                  {item?.name}
                </a>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};

export default ImageGallery;
