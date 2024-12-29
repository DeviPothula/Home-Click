/**
 * Fetches the dimensions of a list of images.
 * @param {string[]} imageUrls - An array of image URLs to fetch dimensions for.
 * @returns {Promise<{width: number, height: number, src: string}[]>} A promise that resolves to an array of image data objects.
 */
export const getImageDimensions = async (imageUrls) => {
  let imagesData = [];
  for (const item of imageUrls) {
    const img = new Image();
    img.src = item;
    await new Promise((resolve) => {
      img.onload = () => {
        imagesData.push({
          width: img.width || 1,
          height: img.height || 1,
          src: item,
        });
        resolve();
      };
    });
  }
  return imagesData;
};
