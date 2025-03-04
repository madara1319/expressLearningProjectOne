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

app.listen(port, () => {
    console.log(`Example router listening on port ${port}`)
})


