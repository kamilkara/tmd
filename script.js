// JavaScript to manage image layers and UI toggles
const groupLeft = document.getElementById('group-left');
const groupCenter = document.getElementById('group-center');
const groupRight = document.getElementById('group-right');
const imageContainer = document.querySelector('.image-container');

let pathOverlayVisible = false;

const resetAll = () => {
  document.querySelectorAll('.marker').forEach(marker => marker.style.display = 'none');
  document.querySelectorAll('.toggle-button').forEach(btn => btn.classList.remove('active'));
  markerBtn.style.display = 'inline-block';
  pathBtn.style.display = 'none';
};

const setBackground = (src) => {
  const bg = document.querySelector('.background');
  if (bg) bg.src = src;
};

// Set up background toggle buttons
const existingBtn = document.createElement('button');
existingBtn.innerText = 'Existing';
existingBtn.onclick = () => {
  resetAll();
  setBackground('images/Existing.png');
  currentBackground = 'images/Existing.png';
  pathOverlayVisible = false;
};

const demolitionBtn = document.createElement('button');
demolitionBtn.innerText = 'Demolition';
demolitionBtn.onclick = () => {
  resetAll();
  setBackground('images/Demolition.png');
  currentBackground = 'images/Demolition.png';
  pathOverlayVisible = false;
};

groupLeft.appendChild(existingBtn);
groupLeft.appendChild(demolitionBtn);

// Marker overlay toggle (shared marker for both views)
const markerBtn = document.createElement('button');
markerBtn.innerText = 'Show Marker';
markerBtn.dataset.marker = 'marker';
markerBtn.classList.add('toggle-button');
markerBtn.onclick = () => {
  const marker = document.getElementById('marker');
  const isVisible = marker.style.display === 'block';
  marker.style.display = isVisible ? 'none' : 'block';
  markerBtn.classList.toggle('active', !isVisible);
};

groupLeft.appendChild(markerBtn);

// Path overlay toggle for proposed options
const pathBtn = document.createElement('button');
pathBtn.innerText = 'Show Path';
pathBtn.classList.add('toggle-button');
pathBtn.style.display = 'none';
pathBtn.onclick = () => {
  const path = document.getElementById('path');
  pathOverlayVisible = !pathOverlayVisible;
  path.style.display = pathOverlayVisible ? 'block' : 'none';
  pathBtn.classList.toggle('active', pathOverlayVisible);
};

groupRight.appendChild(pathBtn);

// Proposed options as static images
const proposedOptions = [
  { label: 'Option 01', src: 'images/Proposed Option 01.png', path: 'images/Proposed Option 01_path.png' },
  { label: 'Option 02', src: 'images/Proposed Option 02.png', path: 'images/Proposed Option 02_path.png' },
  { label: 'Option 03', src: 'images/Proposed Option 03.png', path: 'images/Proposed Option 03_path.png' },
];

proposedOptions.forEach(opt => {
  const btn = document.createElement('button');
  btn.innerText = opt.label;
  btn.onclick = () => {
    resetAll();
    setBackground(opt.src);
    currentBackground = opt.src;
    markerBtn.style.display = 'none';
    const pathOverlay = document.getElementById('path');
    if (pathOverlay) {
      pathOverlay.src = opt.path;
      pathOverlay.style.display = pathOverlayVisible ? 'block' : 'none';
      pathBtn.style.display = 'inline-block';
      pathBtn.classList.toggle('active', pathOverlayVisible);
    }
  };
  groupRight.appendChild(btn);
});
