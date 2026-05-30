export class Book {

    //Properties
    private id: string;
    private title: string;
    private author: string;
    private available: boolean;

    constructor(id: string,
        title: string,
        author: string,
        available: boolean){
        this.id = id;
        this.title = title;
        this.author = author;
        this.available = available;
    }

    //gettter
    getId(): string {
        return this.id;
    }

    getTitle(): string {
        return this.title;
    }

    getAuthor(): string {
        return this.author;
    }

    //Setter
    setId(id: string): void {
        this.id = id;
    }

    setTitle(title: string): void {
        this.title = title;
    }

    setAuthor(author: string): void {
        this.author = author;
    }

    //Estado disponible
    conditionOfDaBook(): void {
        if(this.available){
        console.log(`El libro con ID ${this.id} esta disponible`);
        } else {
        console.log(`El libro con ID ${this.id} no esta disponible`);
    }
}
    //Desactivar o activar libro
    cambiarDisponibilidad(nuevaDisponibilidad: boolean): void {
        this.available = nuevaDisponibilidad;
    }

    mostrarDatos(): void {
        console.log("\n--- INformacion del libro---");
        console.log("ID:", this.id);
        console.log("Title:", this.title);
        console.log("Author:", this.author);
        console.log("Disponible:", this.available);
    }
}

const libro = new Book("1", "Don Quijote", "Miguel De Cervantes", true);


libro.mostrarDatos();
libro.conditionOfDaBook();


libro.cambiarDisponibilidad(false);
libro.conditionOfDaBook();