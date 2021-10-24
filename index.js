const express = require ('express');
const app = express();
const port = 5000;



app.get('/', (req, res) =>{
    res.send("Hello From nodeJS. Let's expolore this")
});

const users =[
    {id:1, name:'Sabana', email:'sabana@gmail.com', pgone: '01798626997' },
    {id:2, name:'kopila', email:'kopila@gmail.com', pgone: '01798626997' },
    {id:3, name:'sabnur', email:'sabnur@gmail.com', pgone: '01798626997' },
    {id:4, name:'porimoni', email:'pormioni@gmail.com', pgone: '01798626997' },
    {id:5, name:'mousumi', email:'mousumi@gmail.com', pgone: '01798626997' },
    {id:6, name:'alena', email:'alena@gmail.com', pgone: '01798626997' }
]

app.get('/users', (req, res) => {
    res.send(users)
})
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user)
})

app.listen(port, () => {
    console.log('listeing to port', port);
});
