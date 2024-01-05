const spdy=require('spdy');
const fs = require('fs');
const { createProxyMiddleware } = require('http-proxy-middleware');
const express = require('express');
const app = express();

const apiProxy = createProxyMiddleware('/api', {
    target: 'https://localhost:4000',
    changeOrigin: true,
  });
  
app.use('/api', apiProxy);

app.get("/",async (req,res)=>{
    let response =await fetch("http://localhost:3000/post");
    let data = await response.json();
    // for(let i =0;i<data)
    console.log(data);
    res.json({
        "link":data[0].imgLink
    });
    
})  

// Post 
app.post('/post',async (req,res)=>{
    const newUser ={
        "userId":1,
        "id":6,
        "title":"bestBook",
        "body":"Something new"
    }
    const postNewUser = await fetch('http://localhost:3000/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
    });
    // console.log(postNewUser);
    const data = await postNewUser.json();
    res.send(data);
})

// Delete
app.delete('/delete',async (res,req)=>{
    let id = 5;
    const response = await fetch(`http://localhost:3000/post/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const data = await response.json();
    res.send(data);
})
spdy.createServer({
    "key":fs.readFileSync("private.pem"),
    "cert":fs.readFileSync("cert.pem")
},app).listen(4000,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("running on port no 4000");
    }
})

// server.on("stream",(stream,headers)=>{
//     stream.respond({
//         'content-type': 'application/json',
//         ':status': 200,
//     })
//     const responseData = {
//         user: 'Munna Verma',
//         id: 1,
//     };

//     // Convert the object to a JSON string before sending it
//     stream.end(JSON.stringify(responseData));
// })


// server.listen(4000)
// console.log("listenning on port 4000");