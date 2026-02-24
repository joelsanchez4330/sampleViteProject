// 1 st example
// 1. Import the data
import database from './data.json';

// 2. Target your HTML elements
const titleElement = document.querySelector<HTMLHeadingElement>('#hero-title');
const ctaButton = document.querySelector<HTMLButtonElement>('#cta-btn');
const subtitleElement = document.querySelector<HTMLParagraphElement>('#hero-subtitle');

// 3. Inject the data
if (titleElement) {
  titleElement.innerText = database.hero.title;
}

if (subtitleElement) {
  subtitleElement.innerText = database.hero.subtitle;
}

if (ctaButton) {
  ctaButton.innerText = database.hero.cta;
  ctaButton.onclick = () => {
    window.open(`https://wa.me/${database.whatsappNumber}`, '_blank');
  };
}

// Target the list container
const servicesList = document.querySelector('#services-list');

// Create cards for each service in the JSON
database.services.forEach((service) => {
  const card = document.createElement('div');
  card.className = 'service-card';
  card.innerHTML = `
    <h3>${service.name}</h3>
    <p>${service.desc}</p>
  `;
  servicesList?.appendChild(card);
});