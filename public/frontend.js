let i = 0;
const button = document.querySelector('button');
const lista = document.querySelectorAll('li');
button.addEventListener("click", () => {
    lista.forEach((element) => {
        element.style.display = 'flex';
        i += 1;
        element.style.fontSize = `${i}px`;
    });
})

