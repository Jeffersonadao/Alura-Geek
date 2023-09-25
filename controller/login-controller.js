const form = document.querySelector("[data-form]");

form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const email = document.querySelector("[data-email]").value;
    const password = document.querySelector("[data-senha]").value;

    if (email.length > 5 && password.length > 5) {
    window.location.href = "../produtos.html";
    } else {
    alert("Por favor, insira mais de 5 caracteres no email e senha.");
    }
});
