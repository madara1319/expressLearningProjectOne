
const div = document.createElement('div');
div.innerText = 'testDiv'
const body = document.querySelector('body')
body.append(div);

const button = document.createElement('button');
const input = document.createElement('input');
const select = document.createElement('select');
button.innerText = 'Update Value'

const deleteButton = document.createElement('button');
deleteButton.innerText = 'Delete Value'

body.append(input);
body.append(select)
body.append(button);

body.append(deleteButton);

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        console.log(input.value)
    }
})

fetch('http://localhost:3000/array', {
    method: "GET"
})
    .then((res) => res.json())
    .then((res) => {
        console.log("Dane z serwera:", res);
        //div.insertAdjacentHTML('afterend', `<a>Dane z serwera ${res}</a>`)
        res.forEach((val, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.innerText = `Index ${index}: ${val}`
            select.append(option)
        })
    })
    .catch((e) => console.error("Błąd w fetch:", e));
button.addEventListener('click', () => {
    const index = select.value;
    const value = input.value;
    if (value === "") {
        alert("Enter value!");
        return;
    }
    fetch(`http://localhost:3000/array/${index}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ value: parseInt(value) })
    }).then(res => res.json()).then(data => {
        console.log("Updated array", data)
        alert(`Value at index ${index} changed to value ${value}`)
    }).catch(e => console.error("PUT error: ", e))
})


fetch('http://localhost:3000/array', {
    method: "GET"
})
    .then((res) => res.json())
    .then((res) => {
        res.forEach((val, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.innerText = `Index ${index}: ${val}`
            select.append(option)
        })
    })
    .catch((e) => console.error("Błąd w fetch:", e));
deleteButton.addEventListener('click', () => {
    const index = select.value;
    fetch(`http://localhost:3000/array/${index}`, {
        method: "DELETE",
    }).then(res => res.json()).then(data => {
        console.log("Updated array", data)
        alert(`Value at index ${index} deleted`)
    }).catch(e => console.error("PUT error: ", e))
})

fetch('http://localhost:3000/array', {
    method: "GET"
}
)
    .then((res) => res.json())
    .then((data) => {
        console.log("Otrzymane dane:", data);
    })
    .catch((e) => console.error("Błąd w drugim fetch:", e));






