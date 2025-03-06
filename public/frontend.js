const div = document.createElement('div');
div.innerText = 'testDiv'
const body = document.querySelector('body')
body.append(div);


fetch('http://localhost:3000/array', {
    method: "GET"
})
    .then((res) => res.json())
    .then((res) => {
        console.log("Dane z serwera:", res);
        div.insertAdjacentHTML('afterend',`<a>Dane z serwera ${res}</a>`)
    })
    .catch((e) => console.error("Błąd w fetch:", e));


fetch('http://localhost:3000/array', {
    method: "GET"
}
)
    .then((res) => res.json())
    .then((data) => {
        console.log("Otrzymane dane:", data);
    })
    .catch((e) => console.error("Błąd w drugim fetch:", e));






