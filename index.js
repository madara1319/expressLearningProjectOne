const arrayRoutes = require('./routes/array.js'); 

const express = require('express');
const app = express()
const port = 3000;

app.use(express.json())
app.use('/array',arrayRoutes)
//This app starts a server and listens on port 3000
//for connections. The app responds with “Hello World!”
//for requests to the root URL (/) or route. For every other path, it will respond with a 404 Not Found.

//CRUD - Create, Read, Update, Delete

app.get('/', (req, res) => {
    res.send("Hello world!")
})

app.post('/array', (req, res) => {
    res.send("You used create endpoint");
})


app.put('/array', (req, res) => {
    res.send("You used update endpoint");
})

app.delete('/array', (req, res) => {
    res.send('You used delete endpoint');
})

app.get('/array', (req, res) => {
    res.send("You used read endpoint");
})


app.put('/array/:index', (req, res) => {
    res.send("change specific number");
})

app.delete('/array/:index', (req, res) => {
    res.send('delete specific number');
})

app.get('/array/:index', (req, res) => {
    res.send("get specific number");
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

const options = {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['htm', 'html'],
    index: false,
    maxAge: '1d',
    redirect: false,
    setHeaders(res, path, stat) {
        res.set('x-timestamp', Date.now())
    }
}

app.use(express.static('public', options))



