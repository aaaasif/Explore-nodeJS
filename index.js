const express = require ('express');
const app = express();
const port = 5000;



app.get('/', (req, res) =>{
    res.send('Hello From nodeJS')
});

app.listen(port, () => {
    console.log('listeing to port', port);
});
