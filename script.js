function animateBox(box) {
  return new Promise((resolve) => {
    box.classList.add('show');
    setTimeout(resolve, 800); // delay before next animation
  });
}

async function runAnimations() {
  const boxes = document.querySelectorAll('.box');
  for (const box of boxes) {
    await animateBox(box);
  }
}

runAnimations();
