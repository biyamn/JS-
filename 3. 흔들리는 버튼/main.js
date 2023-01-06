/** @type {HTMLElement} */
let shakeBox = document.querySelector('.shakeBox');

function startShake() {
  shakeBox.style.animationName = 'shake';
}

function stopShake() {
  shakeBox.style.animationName = 'none';
}

const observer = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      startShake()
    } else {
      stopShake()
    }
  }
}, {
  rootMargin: '-250px 0px',
  threshold: 1
})
observer.observe(shakeBox)
