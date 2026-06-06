import express from "express";
import { Book } from "./models/books";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        messaje: "API Biblioteca funcionando"
    });
});

const PORT = 3000;

const books: Array<Book> = []; //Array

//Crear un nuevo book
app.get("/books", (req, res) => {
    res.json(books);
})

app.post ("/books", (req, res) => {
    const {title, author} = req.body;

    //Validar
    const id = (books.length + 1);
    const newBook = new Book(id, title, author, true);
    books.push (newBook);
    res.status(201).json ({message: "Libro creado"})
})

app.listen(PORT, () => {
    console.log(`servidor ejecutandose en puerto ${PORT}`);
});

