// script.js

// Adicionando classe ativa à navegação (caso queira algum efeito)
document.querySelectorAll("nav ul li a").forEach(link => {
  link.addEventListener("click", function() {
    document.querySelectorAll("nav ul li a").forEach(l => l.classList.remove("ativo"));
    this.classList.add("ativo");
  });
});
