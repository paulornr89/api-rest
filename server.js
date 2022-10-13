const express = require('express');
const app = express();
const data = require('./data.json');

app.use(express.json());

app.get("/clients", (req, res) => { 
    res.json(data)
});
app.get("/clients/:id", (req, res) => { 
    const { id } = req.params;
    const client = data.find(cli => cli.id == id);
    
    if(!client){
        return res.status(204).json();
    }
    res.json(data)
});

app.post("/clients", (req, res) => { 
    const { name, username, email, phone} = req.body;
    
    //salvar
    data.push({  id: data.length + 1, name, username, email, phone });
    res.json({ id: data.length + 1, name, username, email, phone });
});

app.put("/clients", (req, res) => { 
    
});

app.delete("/clients:id", (req, res) => { 
 
});

app.listen(3000, function () {
    console.log("Server is running");
})

