// Animação do botão
function buttonAnimation(event) {
    let a = event.currentTarget;
    a.classList.add("animation");
    console.log("Animação Teste")
}

// Redirecionamento do botão
function redirectToPage(event) {
    let a = event.currentTarget;
    let targetPage = a.getAttribute("href");
    window.location.href = targetPage;
    a.classList.remove("animation");
    console.log("Redirecionamento Teste")
}

// Aplicação da animação para cada link
document.querySelectorAll("a").forEach(a => {
        a.addEventListener("click", (event) => {
        event.preventDefault();
        buttonAnimation(event)
    })
});

// Aplicação do redirecionamento após o fim das animações
document.querySelectorAll("a").forEach(a => {
    a.addEventListener("transitionend", redirectToPage)
});