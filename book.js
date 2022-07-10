const books = [];

function allBooks(req , res , next){
        console.log("fetching All Books");
        next();
}

function getAllBooks(req , res){
     return res.send(books);
}

function checkBook(req , res , next){
      const body = req.body;

      if(!body.bookName){
          return res.status(401).send("please provide correct Keyword")
      }

      next()
}

function createABook(req , res){
      const body = req.body;

        let book = {
               id : books.length + 1,
               content : body.bookName,
               timeStamp : new Date()
        }

        books.push(book);

    res.status(202).send("Book has been Added")
}

function getBookByName(req , res){
    let name = req.params.name

    let index = -1;
    books.find((book , i) => {
           if(book.content === name){
                 index = i;
                 return true;
           }
           return false;
    })

    if(index == -1){
        return res.status(401).send("No such book is available")
    }

    return res.status(202).send({bookName : name})

}

module.exports = {
   allBooks,
   getAllBooks,
   checkBook,
   createABook,
   getBookByName
}