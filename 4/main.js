function openWindow(url, width, height) {
    const windowFeatures = `width=${width},height=${height}`;
  
    window.open(url, '_blank', windowFeatures);
  }
  

  const url = 'https://www.example.com';
  const width = 800;
  const height = 600;
  
  openWindow(url, width, height);
  