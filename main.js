// Marcelo A. R. de Lemos — landing interactions

// Ano no rodapé
(function () {
  var el = document.getElementById("ano");
  if (el) el.textContent = String(new Date().getFullYear());
})();

// Header muda ao rolar
(function () {
  var header = document.querySelector("[data-header]");
  if (!header) return;
  var onScroll = function () {
    if (window.scrollY > 40) header.setAttribute("data-scrolled", "");
    else header.removeAttribute("data-scrolled");
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
})();

// Menu mobile
(function () {
  var header = document.querySelector("[data-header]");
  var toggle = document.querySelector("[data-nav-toggle]");
  var nav = document.querySelector("[data-mobile-nav]");
  if (!header || !toggle || !nav) return;

  var close = function () {
    header.removeAttribute("data-nav-open");
    toggle.setAttribute("aria-expanded", "false");
  };
  toggle.addEventListener("click", function () {
    var open = header.hasAttribute("data-nav-open");
    if (open) close();
    else {
      header.setAttribute("data-nav-open", "");
      toggle.setAttribute("aria-expanded", "true");
    }
  });
  nav.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", close);
  });
})();

// Reveal on scroll (com cascata escalonada)
(function () {
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var items = document.querySelectorAll("[data-reveal]");
  if (!items.length) return;

  // Delay escalonado conforme a posição entre irmãos que também revelam
  items.forEach(function (el) {
    var i = 0, prev = el.previousElementSibling;
    while (prev) {
      if (prev.hasAttribute("data-reveal")) i++;
      prev = prev.previousElementSibling;
    }
    el.style.setProperty("--rd", (Math.min(i, 8) * 0.09) + "s");
  });

  if (reduce || !("IntersectionObserver" in window)) {
    items.forEach(function (el) { el.classList.add("is-in"); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-in");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -10% 0px" });

  items.forEach(function (el) { io.observe(el); });
})();

// Parallax sutil no hero
(function () {
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) return;
  var photo = document.querySelector(".hero-photo");
  var art = document.querySelector(".hero-art");
  if (!photo && !art) return;
  var ticking = false;
  var apply = function () {
    var y = window.scrollY || 0;
    if (y < 900) {
      if (photo) photo.style.transform = "translateY(" + (y * 0.18) + "px) scale(1.05)";
      if (art) art.style.transform = "translateY(" + (y * 0.08) + "px)";
    }
    ticking = false;
  };
  window.addEventListener("scroll", function () {
    if (!ticking) { window.requestAnimationFrame(apply); ticking = true; }
  }, { passive: true });
})();

// Formulário (demo — sem back-end)
(function () {
  var form = document.querySelector(".contato-form");
  if (!form) return;
  var note = form.querySelector(".form-note");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!form.checkValidity()) { form.reportValidity(); return; }
    if (note) {
      note.hidden = false;
      note.textContent =
        "Mensagem pronta para envio. Conecte um serviço (e-mail ou WhatsApp) " +
        "para receber os contatos automaticamente.";
    }
    form.reset();
  });
})();
