const CustomGalleryItem = ({ index, photo, margin }) => {
  let imageName = photo?.src?.split("/").pop().split(".")[0];

  return (
    <div
      style={{
        position: "relative",
        margin: `${margin}px`,
      }}
      className="image-container"
    >
      <img
        key={index}
        width={photo.width}
        height={photo.height}
        src={photo.src}
        alt="read-post"
        style={{ maxWidth: "100%", maxHeight: "100%", paddingLeft: "10px" }}
      ></img>
      <div className="overlay-text-wrapper">
        <p className="text-content">{`How to Choose ${
          imageName === "Rug" ? "An" : ""
        } ${imageName}`}</p>
        <a href="/" className="post-link">
          Read the Post
        </a>
      </div>
    </div>
  );
};

export default CustomGalleryItem;
