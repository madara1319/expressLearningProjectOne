const arrayRoutes = require('./routes/array.js'); 
const cors = require('cors')
const express = require('express');
const app = express()
const port = 3000;

app.use(express.json())
app.use('/array',arrayRoutes)
app.use(cors())

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


