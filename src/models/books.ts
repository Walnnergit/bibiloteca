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
    setTitle(title: string): void {
        this.title = title;
    }

    setAuthor(author: string): void {
        this.author = author;
    }

    setId(id: string): void {
        this.id = id;
    }
    //Estado disponible
    conditionOfDaBook(): void {
        if(this.available = true)
        console.log(`El libro con ID ${this.id} esta disponible`)
        }

    else(){
        console.log(`El libro con ID ${this.id} no esta disponible`)
    }
    //Desactivar o activar libro
    canbiardisponibilidadellibro(nuevadisponibilidad: boolean): void {
        this.available = nuevadisponibilidad;
    }

}


