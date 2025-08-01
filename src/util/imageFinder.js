const extensions = ['.webp', '.jpg', '.jpeg', '.png'];

const checkImageExists = async (path) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(path);
    img.onerror = () => resolve(null);
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
  const images = {
    main: '/images/placeholder-bg.jpg',
    thumbnail: '/images/placeholder-card.jpg'
  };

  for (const ext of extensions) {
    const mainPath = `/images/tours/${key}${ext}`;
    const exists = await checkImageExists(mainPath);
    if (exists) {
      images.main = exists;
      break;
    }
  }

  for (const ext of extensions) {
    const thumbPath = `/images/tours/${key}_thumb${ext}`;
    const exists = await checkImageExists(thumbPath);
    if (exists) {
      images.thumbnail = exists;
      break;
    }
  }

  return images;
};