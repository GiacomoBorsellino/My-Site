// Element 1
const observer1 = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('ani1');
    }
  });
});

observer1.observe(document.querySelector('.picP1'));

// Element 2
const observer2 = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('ani2');
    }
  });
});

observer2.observe(document.querySelector('.picP2'));

// Element 3
const observer3 = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('ani3');
    }
  });
});

observer3.observe(document.querySelector('.picP3'));