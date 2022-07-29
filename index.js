// this is the main function

// Run after 300 milli secs
setInterval(() => {

  // Get buttons from the ads class
  for (const button of document.getElementsByClassName("ytp-ad-skip-button")) {
    
    // Click skip button
    button.click();
  }
}, 300);
