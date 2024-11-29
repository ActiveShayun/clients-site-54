const express = require('express')
const cors = require('cors');
const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const user =[
    {"id":"1", "name":"sakip", "email":"sakip@gmail.com"},
    {"id":"2", "name":"rakip", "email":"rakip@gmail.com"},
    {"id":"3", "name":"akip", "email":"akip@gmail.com"},
]



app.get('/', (req, res)=>{
    res.send('my server in running on')
})

app.get('/users' , (req, res)=>{
    res.send(user)
})

app.post('/users', (req, res)=>{
    console.log('post api hitting');
    console.log(req.body);
    const newUsers = req.body
    newUsers.id = user.length + 1
    user.push(newUsers)
    res.send(newUsers)
})

app.listen(port, ()=>{
    console.log(`server is running on port : ${port}`);
})