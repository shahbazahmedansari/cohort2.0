let filters = {
  brightness: {
    value: 100,
    min: 0,
    max: 200,
    unit: "%",
  },
  contrast: {
    value: 100,
    min: 0,
    max: 200,
    unit: "%"
  },
  saturation: {
    value: 0,
    min: 0,
    max: 200,
    unit: "%",
  },
  hueRotation: {
    value: 0,
    min: 0,
    max: 360,
    unit: "deg",
  },
  blur: {
    value: 0,
    min: 0,
    max: 20,
    unit: "px",
  },
  grayScale: {
    value: 0,
    min: 0,
    max: 100,
    unit: "%",
  },
  sepia: {
    value: 0,
    min: 0,
    max: 100,
    unit: "%",
  },
  opacity: {
    value: 100,
    min: 0,
    max: 100,
    unit: "%",
  },
  invert: {
    value: 0,
    min: 0,
    max: 100,
    unit: "%",
  },
};

const presets = {
  drama: {
    brightness: 105,
    contrast: 140,
    saturation: 90,
    hueRotation: 0,
    blur: 0,
    grayScale: 0,
    sepia: 0,
    opacity: 100,
    invert: 0,
  },
  vintage: {
    brightness: 110,
    contrast: 85,
    saturation: 80,
    hueRotation: 10,
    blur: 0,
    grayScale: 0,
    sepia: 35,
    opacity: 100,
    invert: 0,
  },
  oldSchool: {
    brightness: 95,
    contrast: 90,
    saturation: 70,
    hueRotation: -10,
    blur: 0,
    grayScale: 10,
    sepia: 25,
    opacity: 100,
    invert: 0,
  },
  moody: {
    brightness: 90,
    contrast: 130,
    saturation: 85,
    hueRotation: -5,
    blur: 0,
    grayScale: 5,
    sepia: 0,
    opacity: 100,
    invert: 0,
  },
  vibrant: {
    brightness: 110,
    contrast: 120,
    saturation: 150,
    hueRotation: 0,
    blur: 0,
    grayScale: 0,
    sepia: 0,
    opacity: 100,
    invert: 0,
  },
  noir: {
    brightness: 95,
    contrast: 150,
    saturation: 0,
    hueRotation: 0,
    blur: 0,
    grayScale: 100,
    sepia: 0,
    opacity: 100,
    invert: 0,
  },
  warmSunset: {
    brightness: 108,
    contrast: 105,
    saturation: 120,
    hueRotation: 8,
    blur: 0,
    grayScale: 0,
    sepia: 15,
    opacity: 100,
    invert: 0,
  },
  coolBlue: {
    brightness: 100,
    contrast: 110,
    saturation: 90,
    hueRotation: -20,
    blur: 0,
    grayScale: 0,
    sepia: 0,
    opacity: 100,
    invert: 0,
  },
};

const filtersContainer = document.querySelector(".filters");
const imageCanvas = document.querySelector("#image-canvas");
const imgInput = document.querySelector("#image-input");
const canvasCtx = imageCanvas.getContext("2d");
const resetButton = document.querySelector("#reset-btn");
const downloadButton = document.querySelector("#download-btn");
const presetsContainer = document.querySelector(".presets");
let file = null;
let image = null;

function createFilterElement(name, unit = "%", value, min, max) {
  const div = document.createElement("div");
  div.classList.add("filter");

  const input = document.createElement("input");
  input.type = "range";
  input.min = min;
  input.max = max;
  input.value = value;
  input.id = name;

  const p = document.createElement("p");
  p.innerText = name;

  div.appendChild(p);
  div.appendChild(input);

  input.addEventListener("input", (event) => {
    filters[name].value = input.value;
    applyFilters();
  });

  return div;
}


function createFilters() {
  Object.keys(filters).forEach(filter => {
    const filterElement = createFilterElement(filter, filters[filter].unit, filters[filter].value, filters[filter.min], filters[filter].max);
    filtersContainer.appendChild(filterElement);
  });
}

createFilters();

imgInput.addEventListener("change", (event) => {
  file = event.target.files[0];
  const imagePlaceholder = document.querySelector(".placeholder");
  imageCanvas.style.display = "block";
  imagePlaceholder.style.display = "none";

  img = new Image();
  img.src = URL.createObjectURL(file);

  img.onload = () => {
    image = img;
    imageCanvas.width = img.width;
    imageCanvas.height = img.height;
    canvasCtx.drawImage(img, 0, 0);
  };
});

function applyFilters() {
  canvasCtx.clearRect(0, 0, imageCanvas.width, imageCanvas.height);
  canvasCtx.filter = `
  brightness(${filters.brightness.value}${filters.brightness.unit})
  contrast(${filters.contrast.value}${filters.contrast.unit})
  saturation(${filters.saturation.value}${filters.saturation.unit})
  hueRotation(${filters.hueRotation.value}${filters.hueRotation.unit})
  blur(${filters.blur.value}${filters.blur.unit})
  grayScale(${filters.grayScale.value}${filters.grayScale.unit})
  sepia(${filters.sepia.value}${filters.sepia.unit})
  opacity(${filters.opacity.value}${filters.opacity.unit})
  invert(${filters.invert.value}${filters.invert.unit})
  `.trim();
  canvasCtx.drawImage(image, 0, 0);
}

resetButton.addEventListener("click", () => {
  filters = {
    brightness: {
      value: 100,
      min: 0,
      max: 200,
      unit: "%",
    },
    contrast: {
      value: 100,
      min: 0,
      max: 200,
      unit: "%"
    },
    saturation: {
      value: 0,
      min: 0,
      max: 200,
      unit: "%",
    },
    hueRotation: {
      value: 0,
      min: 0,
      max: 360,
      unit: "deg",
    },
    blur: {
      value: 0,
      min: 0,
      max: 20,
      unit: "px",
    },
    grayScale: {
      value: 0,
      min: 0,
      max: 100,
      unit: "%",
    },
    sepia: {
      value: 0,
      min: 0,
      max: 100,
      unit: "%",
    },
    opacity: {
      value: 100,
      min: 0,
      max: 100,
      unit: "%",
    },
    invert: {
      value: 0,
      min: 0,
      max: 100,
      unit: "%",
    },
  };

  applyFilters();

  filtersContainer.innerHTML = "";
  createFilters();
});

downloadButton.addEventListener("click", () => {
  const link = document.createElement("a");
  link.download = "edited-image.png";
  link.href = imageCanvas.toDataURL();
  link.click();
});

Object.keys(presets).forEach(presetName => {
  const presetButton = document.createElement("button");
  presetButton.classList.add("btn");
  presetButton.innerText = presetName;
  presetsContainer.appendChild(presetButton);

  presetButton.addEventListener("click", () => {
    const preset = presets[presetName];
    Object.keys(preset).forEach(filterName => {
      filters[filterName].value = preset[filterName];
    });

    applyFilters();
    filtersContainer.innerHTML = "";
    createFilters();
  });
});