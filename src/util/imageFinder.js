const extensions = ['.webp', '.jpg', '.jpeg', '.png'];

// Shared image checking utility (don't modify existing functions)
const checkImageExists = async (path) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(path);
    img.onerror = () => resolve(null);
    img.src = path;
  });
};

// 1. Keep your existing functions exactly as they were
export const getDestinationImages = async (key) => {
  const images = {
    bgImage: '/images/placeholder-bg.jpg',
    cardImage: '/images/placeholder-card.jpg'
  };

  // Check all extensions for both images
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

  // Check for activity images (key_1, key_2, key_3)
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

// // 2. Add new function specifically for tour packages
// export const getTourPackageImages = async (key) => {
//   const images = {
//     main: '/images/placeholder-bg.jpg',    // Main tour image
//     thumbnail: '/images/placeholder-card.jpg' // Thumbnail version
//   };

//   // Check for main tour image (key.jpg, key.webp, etc.)
//   for (const ext of extensions) {
//     const mainPath = `/images/tours/${key}${ext}`;
//     const exists = await checkImageExists(mainPath);
//     if (exists) {
//       images.main = exists;
//       break;
//     }
//   }

//   // Check for thumbnail version (key_thumb.jpg, etc.)
//   for (const ext of extensions) {
//     const thumbPath = `/images/tours/${key}_thumb${ext}`;
//     const exists = await checkImageExists(thumbPath);
//     if (exists) {
//       images.thumbnail = exists;
//       break;
//     }
//   }

//   return images;
// };



export const getTourPackageImages = async (key) => {
  const images = {
    main: '/images/placeholder-bg.jpg',
    thumbnail: '/images/placeholder-card.jpg'
  };

  // Check for main tour image
  for (const ext of extensions) {
    const mainPath = `/images/tours/${key}${ext}`;
    const exists = await checkImageExists(mainPath);
    if (exists) {
      images.main = exists;
      break;
    }
  }

  // Check for thumbnail version
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