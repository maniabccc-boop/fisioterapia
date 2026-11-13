/* Laser & Fisio — interações */
(function () {
  "use strict";

  /* Cabeçalho: sombra ao rolar */
  var header = document.querySelector(".header");
  var onScroll = function () {
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* Menu mobile */
  var toggle = document.getElementById("nav-toggle");
  var nav = document.getElementById("nav");

  function setMenu(open) {
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    document.body.style.overflow = open && window.innerWidth <= 760 ? "hidden" : "";
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      setMenu(!nav.classList.contains("is-open"));
    });

    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) setMenu(false);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) {
        setMenu(false);
        toggle.focus();
      }
    });

    document.addEventListener("click", function (e) {
      if (
        nav.classList.contains("is-open") &&
        !nav.contains(e.target) &&
        !toggle.contains(e.target)
      ) {
        setMenu(false);
      }
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 760) setMenu(false);
    });
  }

  /* Animações de entrada */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* Validação do formulário de contato */
  var form = document.getElementById("form-contato");
  if (form) {
    var success = form.querySelector(".form__success");

    var messages = {
      nome: "Informe seu nome completo.",
      telefone: "Informe um telefone válido, com DDD.",
      email: "Informe um e-mail válido.",
      assunto: "Selecione o motivo do contato.",
      mensagem: "Escreva uma mensagem com pelo menos 10 caracteres."
    };

    function validateField(field) {
      var wrap = field.closest(".form__field");
      var error = wrap.querySelector(".form__error");
      var ok = field.checkValidity();
      if (ok && field.type === "email") {
        ok = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(field.value.trim());
      }
      wrap.classList.toggle("has-error", !ok);
      error.textContent = ok ? "" : messages[field.name] || "Verifique este campo.";
      return ok;
    }

    form.querySelectorAll("input, select, textarea").forEach(function (field) {
      field.addEventListener("blur", function () {
        if (field.value !== "") validateField(field);
      });
      field.addEventListener("input", function () {
        if (field.closest(".form__field").classList.contains("has-error")) {
          validateField(field);
        }
      });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var fields = Array.from(form.querySelectorAll("input, select, textarea"));
      var allValid = fields.map(validateField).every(Boolean);

      if (!allValid) {
        var firstError = form.querySelector(".has-error input, .has-error select, .has-error textarea");
        if (firstError) firstError.focus();
        return;
      }

      /* Ponto de integração: envie os dados ao seu backend ou serviço de
         e-mail (ex.: fetch para Formspree, API própria etc.) e trate a
         resposta antes de exibir o sucesso. */
      form.reset();
      fields.forEach(function (f) {
        f.closest(".form__field").classList.remove("has-error");
      });
      success.hidden = false;
      success.scrollIntoView({ behavior: "smooth", block: "nearest" });
      window.setTimeout(function () { success.hidden = true; }, 8000);
    });
  }

  /* Ano corrente no rodapé */
  var ano = document.getElementById("ano");
  if (ano) ano.textContent = String(new Date().getFullYear());
})();
