export const preloadImages = (urls) => {
  return new Promise((resolve, reject) => {
    let loadedCount = 0;
    const totalCount = urls.length;
    const checkAllLoaded = () => {
      if (loadedCount === totalCount) {
        resolve();
      }
    };
    urls.forEach((url) => {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        loadedCount += 1;
        checkAllLoaded();
      };
      img.onerror = () => {
        loadedCount += 1; // Consider it loaded even if there's an error
        checkAllLoaded();
      };
    });
  });
};

export const preloadVideos = (urls) => {
  return new Promise((resolve, reject) => {
    let loadedCount = 0;
    const totalCount = urls.length;
    const checkAllLoaded = () => {
      if (loadedCount === totalCount) {
        resolve();
      }
    };
    urls.forEach((url) => {
      const video = document.createElement('video');
      video.src = url;
      video.onloadeddata = () => {
        loadedCount += 1;
        checkAllLoaded();
      };
      video.onerror = () => {
        loadedCount += 1; // Consider it loaded even if there's an error
        checkAllLoaded();
      };
    });
  });
};
