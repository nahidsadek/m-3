function detectBrowser() {
    const userAgent = navigator.userAgent;
    let browserName;
    let browserVersion;
  
  
    if (userAgent.includes('Firefox')) {
      browserName = 'Firefox';
      browserVersion = userAgent.match(/Firefox\/(\d+\.\d+)/)[1];
    } else if (userAgent.includes('Chrome')) {
      browserName = 'Chrome';
      browserVersion = userAgent.match(/Chrome\/(\d+\.\d+)/)[1];
    } else if (userAgent.includes('Safari')) {
      browserName = 'Safari';
      browserVersion = userAgent.match(/Version\/(\d+\.\d+)/)[1];
    } else if (userAgent.includes('MSIE') || userAgent.includes('Trident')) {
      browserName = 'Internet Explorer';
      browserVersion = userAgent.match(/(?:MSIE |rv:)(\d+\.\d+)/)[1];
    } else {
      browserName = 'Unknown';
      browserVersion = 'N/A';
    }
  
    return {
      name: browserName,
      version: browserVersion
    };
  }
  
  
  const browserInfo = detectBrowser();
  console.log(`Browser Name: ${browserInfo.name}`);
  console.log(`Browser Version: ${browserInfo.version}`);
  
  
  
//   Output: 
//   Browser Name: Chrome
//   VM102:33 Browser Version: 114.0