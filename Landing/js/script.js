
setTimeout(() => {
  const iframe = document.getElementById("iframe-viewer");
  iframe.style.opacity = 0;
  setTimeout(() => {
    iframe.src = "Fondo.html";
    iframe.onload = () => {
      requestAnimationFrame(() => {
        iframe.style.opacity = 1;
      });
    };
  }, 500);
}, 10000);
