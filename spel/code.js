const base = document.getElementById("base");
const figureWidth = base.offsetWidth;
const figureHeight = base.offsetHeight;
const maze = document.getElementById("maze");
const wallBuffer = 10; // Buffer around each wall

// Set initial position
base.style.left = `${window.innerWidth / 2 - figureWidth / 2}px`;
base.style.top = `${window.innerHeight / 2 - figureHeight / 2}px`;

let moveInterval;

function checkCollision(direction) {
  const baseRect = base.getBoundingClientRect();
  const walls = maze.getElementsByClassName("wall");
  
  for (let wall of walls) {
    const wallRect = wall.getBoundingClientRect();
    // Expand the wall collision area with a buffer
    const expandedWallRect = {
      top: wallRect.top - wallBuffer,
      bottom: wallRect.bottom + wallBuffer,
      left: wallRect.left - wallBuffer,
      right: wallRect.right + wallBuffer
    };

    if (
      direction === "left" &&
      baseRect.left <= expandedWallRect.right &&
      baseRect.right > expandedWallRect.right &&
      baseRect.bottom > expandedWallRect.top &&
      baseRect.top < expandedWallRect.bottom
    ) {
      return true; // Collision detected
    }
    if (
      direction === "right" &&
      baseRect.right >= expandedWallRect.left &&
      baseRect.left < expandedWallRect.left &&
      baseRect.bottom > expandedWallRect.top &&
      baseRect.top < expandedWallRect.bottom
    ) {
      return true; // Collision detected
    }
    if (
      direction === "up" &&
      baseRect.top <= expandedWallRect.bottom &&
      baseRect.bottom > expandedWallRect.bottom &&
      baseRect.right > expandedWallRect.left &&
      baseRect.left < expandedWallRect.right
    ) {
      return true; // Collision detected
    }
    if (
      direction === "down" &&
      baseRect.bottom >= expandedWallRect.top &&
      baseRect.top < expandedWallRect.top &&
      baseRect.right > expandedWallRect.left &&
      baseRect.left < expandedWallRect.right
    ) {
      return true; // Collision detected
    }
  }
  return false; // No collision detected
}

function moveSelection(evt) {
  switch (evt.keyCode) {
    case 65: // A key
      if (!checkCollision("left")) {
        base.style.left = `${Math.max(parseInt(base.style.left || '0') - 5, 0)}px`;
      }
      break;
    case 68: // D key
      if (!checkCollision("right")) {
        base.style.left = `${Math.min(parseInt(base.style.left || '0') + 5, window.innerWidth - figureWidth)}px`;
      }
      break;
    case 87: // W key
      if (!checkCollision("up")) {
        base.style.top = `${Math.max(parseInt(base.style.top || '0') - 5, 0)}px`;
      }
      break;
    case 83: // S key
      if (!checkCollision("down")) {
        base.style.top = `${Math.min(parseInt(base.style.top || '0') + 5, window.innerHeight - figureHeight)}px`;
      }
      break;
  }
}

document.addEventListener('keydown', moveSelection);

// Clear the interval when the key is released
document.addEventListener('keyup', () => {
  clearInterval(moveInterval);
});