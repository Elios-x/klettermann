
setTimeout(() => {
  const iframe = document.getElementById("iframe-viewer");
  iframe.style.opacity = 0;
  setTimeout(() => {
    iframe.src = "Fondo.html";
    iframe.onload = () => {
      iframe.style.opacity = 1;
    };
  }, 1000);
}, 10000);
