exports.createNewUser= async (req,res)=>{

    const newUser ={
        "userId":1,
        "id":5,
        "title":"newBook",
        "body":"Something new"
    }
    const postNewUser = await fetch('http://localhost:3000/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
    });
    console.log(postNewUser);
    const data = await postNewUser.json();
    res.send(data);
    
}
exports.ReadUser = async (req, res) => {
    // console.log("jhbn");
    const response = await fetch("http://localhost:3000/post");
    const result = await response.json();
    res.send(result);
}
