export class Book {
    private id:number;
    private title:string;
    private author:string;
    private disponible:boolean = false;

    constructor(id:number, title:string, author:string, disponible:boolean){
        this.id = id;
        this.title = title;
        this.author = author;

    }
}