const mainCursor = document.getElementById('main-cursor');
  const cursorTrailContainer = document.getElementById('cursor-trail-container');
  let trailElements = [];

  document.addEventListener('mousemove', (event) => {
    const { clientX, clientY } = event;
    mainCursor.style.left = `${clientX - 6}px`;
    mainCursor.style.top = `${clientY - 6}px`;

    const newElement = document.createElement('div');
    newElement.classList.add('cursor-trail');
    newElement.style.left = `${clientX - 0}px`;
    newElement.style.top = `${clientY - 0}px`;
    cursorTrailContainer.appendChild(newElement);

    trailElements.push({ element: newElement, opacity: 0.7, lifetime: 200 });

    if (trailElements.length > 5) {
      const oldestElement = trailElements.shift();
      oldestElement.element.remove();
    }

    trailElements.forEach((trail, index) => {
      const distanceFactor = index + 1;
      trail.opacity -= 0.1;
      trail.lifetime -= 40;
      trail.element.style.opacity = trail.opacity;
      setTimeout(() => {
        trail.element.remove();
      }, trail.lifetime);
    });
  });