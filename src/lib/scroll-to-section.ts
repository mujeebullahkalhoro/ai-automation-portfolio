export function scrollToSection(id: string) {
  const target = document.getElementById(id);

  if (!target) {
    return;
  }

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  target.scrollIntoView({
    behavior: reduce ? "auto" : "smooth",
    block: "start",
  });
  target.focus({ preventScroll: true });

  const hash = `#${id}`;

  if (window.location.hash !== hash) {
    history.pushState(null, "", hash);
  }
}
