const express = require('express');
const app = express()
const port = 3000;
//This app starts a server and listens on port 3000
//for connections. The app responds with “Hello World!”
//for requests to the root URL (/) or route. For every other path, it will respond with a 404 Not Found.
app.get('/', (req, res) => {
    res.send("Hello world!")
})

app.get('/test', (req, res) => {
    res.send("Get Test");
})


app.post('/test', (req, res) => {
    res.send("Post Test");
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

const options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html'],
  index: true,
  maxAge: '1d',
  redirect: false,
  setHeaders (res, path, stat) {
    res.set('x-timestamp', Date.now())
  }
}

app.use(express.static('public', options))



