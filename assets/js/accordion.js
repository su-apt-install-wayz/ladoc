const accordions = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const isExpanded = this.getAttribute('aria-expanded') === 'true';

  accordions.forEach((btn) => {
    btn.setAttribute('aria-expanded', 'false');
    const content = btn.nextElementSibling;
    content.style.maxHeight = 0;
    content.style.opacity = 0;
  });

  if (!isExpanded) {
    this.setAttribute('aria-expanded', 'true');
    const content = this.nextElementSibling;
    content.style.maxHeight = content.scrollHeight + "px";
    content.style.opacity = 1;
  }
}

accordions.forEach(item => item.addEventListener('click', toggleAccordion));

function getURLParameter(name) {
  return new URLSearchParams(window.location.search).get(name);
}

const accordionId = getURLParameter('open');
if (accordionId) {
  const accordionButton = document.getElementById('accordion-button-' + accordionId);
  if (accordionButton) {
    accordionButton.setAttribute('aria-expanded', 'true');
    const content = accordionButton.nextElementSibling;
    setTimeout(() => {
      content.style.maxHeight = content.scrollHeight + "px";
      content.style.opacity = 1;
    }, 100);
  }
}