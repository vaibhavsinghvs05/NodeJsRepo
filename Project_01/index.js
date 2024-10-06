import express from 'express';
import fs from 'fs';
const app = express();
const port = 4000;
import users from './MOCK_DATA.json' assert { type : 'json' };

app.use(express.urlencoded({extended: false}));
// Routes

app.get('/users', (req,res)=>{
     const html = `
        <ul>
            ${users.map((user)=>`<li>${user.first_name}</li>`).join("")}
        </ul>
    `
   res.send(html);
});


app
.route("/api/users/:id")
.get((req, res)=>{
    const id = parseInt(req.params.id);
    const user = users.find((element)=>element.id===id);
    if(!user){
        return res.status(404).send("User Not Found!")
    }
    return res.json(user);
})
.patch((req, res)=>{
    const id = Number(req.params.id);
    const user = users.find((user)=>user.id===id);
    const body = req.body;
    user.first_name = body.first_name;
    fs.writeFile("Project_01/MOCK_DATA.json", JSON.stringify(users), (err, data)=>console.log('User Updated successfully!'));
    return res.send("Update the user!");
})

.delete((req, res)=>{
    const id = req.params.id;
    users.pop((user)=>user.id===id);
    fs.writeFile("Project_01/MOCK_DATA.json", JSON.stringify(users), (err, data)=>{
        if(err){
            console.log(err);
            res.status(500).send(err);
        }
    });
    return res.send(`Deleted the user! with id: ${id}`);
});

app.get('/dashboard', (req, res)=>{
    res.send("Welcome to the Dashboard!");
});

app.get('/my/users', (req, res)=>{
    return res.json(users);
});

app.post("/api/users", (req, res)=>{
    const body = req.body;
    users.push({id: users.length+1, ...body})
    fs.writeFile('Project_01/MOCK_DATA1.json', JSON.stringify(users), (err, data)=>{
        console.log(err);
        console.log("Data is added")
    });
    return res.json({status: 'success', id: users.length+1 })
});

app.listen(port, ()=>{
    console.log(`Your Server Has Been Started at port ${port} !`)
});