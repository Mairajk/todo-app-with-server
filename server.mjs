
import express from "express";
import cors from "cors";



const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

let todo = [];

app.get('/todos', (req, res) => {
    res.send({
        message: " your todos are here ",
        data: todo
    })
})

app.post('/todo', (req, res) => {

    todo.push(req.body.text)

    res.send({
        message: "todo saved",
        data: todo
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})



// 192.168.100.13:3000