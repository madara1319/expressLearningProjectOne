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


fetch('http://localhost:3000/array')
    .then((res) => res.json())
    .then((res) => {
        console.log("Dane z serwera:", res);
    })
    .catch((e) => console.error("Błąd w fetch:", e));

fetch('http://localhost:3000/array')
    .then((res) => res.json())
    .then((data) => {
        console.log("Otrzymane dane:", data);
    })
    .catch((e) => console.error("Błąd w drugim fetch:", e));

console.log("test");







