
const express = require('express')
const app = express();

app.use(express.json());
// app.get('/',(req,res)=>{
//     res.send("Hii working fine")
// })
const Router = require('./Route/UserRoute')
app.use('/user',Router);

const PORT=3001;

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})