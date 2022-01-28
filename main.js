const express = require('express')
const app = express()
const port = 8088
let count="1";

app.get('/count', (req, res) => {
    res.json({"changed" :count});
})

app.use('/app', express.static(__dirname + '/ui/dist'));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

const background=function() {
    console.log('backgroung executed');
    setTimeout(background, 5000);
    count++;
}

background();