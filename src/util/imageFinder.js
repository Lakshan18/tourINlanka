const extensions = ['.webp', '.jpg', '.jpeg', '.png'];


const imageCache = new Map();

// const checkImageExists = async (path) => {
//   return new Promise((resolve) => {
//     const img = new Image();
//     img.onload = () => resolve(path);
//     img.onerror = () => resolve(null);
//     img.src = path;
//   });
// };


const checkImageExists = (path) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(path);
    img.onerror = () => resolve(null);
    // Set timeout to prevent hanging
    const timer = setTimeout(() => resolve(null), 1000);
    img.onload = img.onerror = () => {
      clearTimeout(timer);
      resolve(img.complete && img.naturalWidth !== 0 ? path : null);
    };
    img.src = path;
  });
};


export const getDestinationImages = async (key) => {
  const images = {
    bgImage: '/images/placeholder-bg.jpg',
    cardImage: '/images/placeholder-card.jpg'
  };

  for (const ext of extensions) {
    if (!images.bgImage.includes('placeholder')) break;

    const bgPath = `/images/places/${key}_1${ext}`;
    const exists = await checkImageExists(bgPath);
    if (exists) images.bgImage = exists;
  }

  for (const ext of extensions) {
    if (!images.cardImage.includes('placeholder')) break;

    const cardPath = `/images/places/${key}_2${ext}`;
    const exists = await checkImageExists(cardPath);
    if (exists) images.cardImage = exists;
  }

  return images;
};

export const getActivityImages = async (key) => {
  const images = {
    bgImage: '/images/placeholder-bg.jpg'
  };

  for (let i = 1; i <= 3; i++) {
    for (const ext of extensions) {
      const imgPath = `/images/activities/${key}_${i}${ext}`;
      const exists = await checkImageExists(imgPath);
      if (exists) {
        images[`image${i}`] = exists;
        break;
      }
    }
  }

  return images;
};

export const getTourPackageImages = async (key) => {
  // Check cache first
  const cacheKey = `tour-${key}`;
  if (imageCache.has(cacheKey)) {
    return imageCache.get(cacheKey);
  }

  const images = {
    main: '/images/placeholder-bg.jpg',
    thumbnail: '/images/placeholder-card.jpg'
  };

  // Try all extensions in parallel for main image
  const mainPromises = extensions.map(ext =>
    checkImageExists(`/images/tours/${key}${ext}`)
  );
  const mainResults = await Promise.all(mainPromises);
  const foundMain = mainResults.find(result => result !== null);
  if (foundMain) images.main = foundMain;

  // Try all extensions in parallel for thumbnail
  const thumbPromises = extensions.map(ext =>
    checkImageExists(`/images/tours/${key}_thumb${ext}`)
  );
  const thumbResults = await Promise.all(thumbPromises);
  const foundThumb = thumbResults.find(result => result !== null);
  if (foundThumb) images.thumbnail = foundThumb;

  // Cache the result
  imageCache.set(cacheKey, images);
  return images;
};