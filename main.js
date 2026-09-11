// Marcelo A. R. de Lemos — landing page interactions

// Ano atual no rodapé
(function () {
  var anoEl = document.getElementById("ano");
  if (anoEl) anoEl.textContent = String(new Date().getFullYear());
})();

// Feedback do formulário de contato (front-end apenas — sem back-end configurado)
(function () {
  var form = document.querySelector(".contact-form");
  if (!form) return;

  var note = form.querySelector(".form-note");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    if (note) {
      note.hidden = false;
      note.textContent =
        "Obrigado pelo contato. Este formulário é demonstrativo; " +
        "conecte um serviço de envio para receber as mensagens.";
    }
    form.reset();
  });
})();
