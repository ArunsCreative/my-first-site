function setImage(layer, src) {
  document.getElementById(layer).src = src;
}

function downloadImage() {
  const canvas = document.createElement("canvas");
  canvas.width = 300;
  canvas.height = 300;
  const ctx = canvas.getContext("2d");

  const images = [
    document.getElementById("base"),
    document.getElementById("eyes"),
    document.getElementById("hair")
  ];

  let loaded = 0;

  images.forEach(img => {
    if (!img.src) {
      loaded++;
      return;
    }

    const image = new Image();
    image.src = img.src;
    image.onload = () => {
      ctx.drawImage(image, 0, 0, 300, 300);
      loaded++;
      if (loaded === images.length) {
        const link = document.createElement("a");
        link.download = "my-picture.png";
        link.href = canvas.toDataURL();
        link.click();
      }
    };
  });
}
