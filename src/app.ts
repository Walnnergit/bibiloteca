import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        messaje: "API Biblioteca funcionando"
    });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`servidor ejecutandose en puerto ${PORT}`);
});