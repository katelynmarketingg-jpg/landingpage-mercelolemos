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

// Reveal on scroll
(function () {
  var items = document.querySelectorAll("[data-reveal]");
  if (!items.length) return;

  if (!("IntersectionObserver" in window)) {
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
  }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

  items.forEach(function (el) { io.observe(el); });
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
