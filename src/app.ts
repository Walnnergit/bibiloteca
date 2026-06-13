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
app.post("/book", (req, res) => {
    const { title, author } = req.body;
    if (!title || !author) {
        return res.status(400).json({
            message: "titulo y autor son requeridos"
    });
}
    const newBook = new Book(
        books.length + 1,
        title,
        author,
        true,
    );
    books.push(newBook);
    res.status(201).json({
        message: "Libro creado",
        book: newBook
    });
});

//Obtener todos los libros
app.get("/books", (req, res) => {
    res.json(books);
})

//Actualizar un libro
app.put("/book/:id", (req, res) => {
    const id = Number(req.params.id);
    const {title, author} = req.body;

    const book = books.find((book) => {
        return book.getId() === id
    });

    if (!book) return res.status(404).json({
        message: `Libro no encontrado con id: ${id}`,
    });

    if (title) {
        book.setTitle(title);
    }

    if (author) {
        book.setAuthor(author);
    }

    res.json({
        message: "Libro actualizado", book
    })
});
// Eliminar libro
app.delete("/book/:id", (req, res) => {
    const id = Number(req.params.id);

const bookIndex = books.findIndex(
    (book) => book.getId() === id
);

if (bookIndex === -1) {
    return res.status(404).json({
        message: "Libro no encontrado"
    });
}

books.splice(bookIndex, 1);

res.json({
    message: "Libro eliminado"
});
});

//Prestar libro
app.patch("/books/:id/borrow", (req, res) => {
    const id = Number(req.params.id);

const book = books.find(
    (book) => book.getId() == id
);

if (!book) {
    return res.status(404).json({
        message: "libro no encontrado"
    });
}

if (!book.isAvailable()) {
    return res.status(400).json({
        message: "El libro ya esta prestado"
    });
}

book.borrowBook();

res.json({
    message: "Libro prestado",
    book
});
});

//Devolver libro
app.patch("/books/:id/return", (req, res) => {
    const id = Number(req.params.id);

const book = books.find(
    (book) => book.getId() === id
);

if (!book) {
    return res.status(404).json({
        message: "Libro no encontrado"
    });
}

book.returnBook();

res.json({
    message: "Libro devuelto",
    book
    });
});

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en puerto ${PORT}`);
});