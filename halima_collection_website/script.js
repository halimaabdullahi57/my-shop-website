const menuToggle = document.getElementById('menuToggle');
const navigation = document.getElementById('navigation');

menuToggle.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('contactForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('customerName').value.trim();
  const message = document.getElementById('message').value.trim();
  document.getElementById('formNote').textContent =
    `Thank you, ${name}! Your enquiry is ready: "${message}". This demo does not send messages yet.`;
});
