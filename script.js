const tabs = document.querySelectorAll(".timeline-tab");
const panels = document.querySelectorAll(".timeline-panel");
const themeToggle = document.querySelector("#themeToggle");
const accordionTriggers = document.querySelectorAll(".accordion-trigger");
const revealItems = document.querySelectorAll(".card, .section-heading");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => item.classList.remove("active"));
    panels.forEach((panel) => panel.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById(tab.dataset.target)?.classList.add("active");
  });
});

accordionTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const panel = trigger.nextElementSibling;
    const isExpanded = trigger.getAttribute("aria-expanded") === "true";

    accordionTriggers.forEach((item) => {
      item.setAttribute("aria-expanded", "false");
      item.nextElementSibling?.classList.remove("open");
    });

    if (!isExpanded) {
      trigger.setAttribute("aria-expanded", "true");
      panel?.classList.add("open");
    }
  });
});

themeToggle?.addEventListener("click", () => {
  document.body.classList.toggle("theme-night");
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  { threshold: 0.18 }
);

revealItems.forEach((item) => {
  item.classList.add("reveal");
  observer.observe(item);
});
