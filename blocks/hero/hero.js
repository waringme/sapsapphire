export default function decorate(block) {
  // Create hero content wrapper
  const heroContent = document.createElement('div');
  heroContent.className = 'hero-content';

  // Move existing content into wrapper
  const h1 = block.querySelector('h1');
  if (h1) {
    heroContent.appendChild(h1);
  }

  const descriptionContainer = document.createElement('div')
  descriptionContainer.className = 'description-container';
  descriptionContainer.innerHTML = '<p> Join Business Leaders.</p>';
  heroContent.appendChild(descriptionContainer);

  // Create button container and button
  const buttonContainer = document.createElement('div');
  buttonContainer.className = 'button-container';

  const button = document.createElement('a');
  button.className = 'button';
  button.href = '#';
  button.textContent = 'Join today'; // You can customize this text

  buttonContainer.appendChild(button);
  heroContent.appendChild(buttonContainer);

  // Clear block and add new structure
  const picture = block.querySelector('picture');
  block.textContent = '';
  block.appendChild(heroContent);
  if (picture) {
    block.appendChild(picture);
  }
}
