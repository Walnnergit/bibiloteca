export class Book {

    //Properties
    private id: number;
    private title: string;
    private author: string;
    private available: boolean;

    constructor(id: number,
        title: string,
        author: string,
        available: boolean){
        this.id = id;
        this.title = title;
        this.author = author;
        this.available = available;
    }

    //gettter
    getId(): number {
        return this.id;
    }

    getTitle(): string {
        return this.title;
    }

    getAuthor(): string {
        return this.author;
    }

    isAvailable(): boolean {
        return this.available;
    }

    //Setter
    setId(id: number): void {
        this.id = id;
    }

    setTitle(title: string): void {
        this.title = title;
    }

    setAuthor(author: string): void {
        this.author = author;
    }
    //Prestar libro
    borrowBook(): void {
        this.available = false;
    }

    //Devolver libro
    returnBook(): void {
        this.available = true;
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
}

