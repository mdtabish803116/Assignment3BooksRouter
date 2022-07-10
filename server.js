const express = require('express');
const handlers = require('./book')

const app = express();

app.use(express.json());


app.get("/books" , handlers.allBooks , handlers.getAllBooks);
app.post("/book" , handlers.checkBook , handlers.createABook);
app.get("/book/:name" , handlers.getBookByName);

// app.get("/" , (req , res)=> {
//       return res.status(401).send("nothing")
// })

app.get("/*" , (req , res) => {
      return res.status(401).send("Not Found");
})

app.listen(3005 , () => {
      console.log("server Started on http://localhost:3005")
})