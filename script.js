window.onload = function () {
  if (!sessionStorage.getItem('ageVerified')) {
    const isAdult = confirm("This site contains adult content and is for 21+ only. Click OK to verify you are over 21.");
    if (!isAdult) {
      document.body.innerHTML = '<h2 style="text-align:center;color:white;margin-top:20%;">You must be 21 or older to view this site.</h2>';
    } else {
      sessionStorage.setItem('ageVerified', true);
    }
  }
};
