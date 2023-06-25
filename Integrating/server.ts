import  Express  from "express";
import todorout from "./router/todo";
import bodyParser from "body-parser";
const app=Express();

app.use(bodyParser.json())
app.use(todorout)
app.use('/', (req, res)=>{
 console.log('nothing')
})

app.listen(2000,()=>console.log('server running..'))