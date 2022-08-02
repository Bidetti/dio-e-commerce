import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Book } from "./model/book";

@Injectable()
export class BooksService{
    private url = '';
    livros = [
        {
            category: "action",
            id: "1",
            img: "img1",
            name: "Book1",
            price: 24,
            quantidade: 1
        },
        {
            category: "action",
            id: "2",
            img: "img1",
            name: "Book2",
            price: 50,
            quantidade: 1
        },
        {
            category: "action",
            id: "3",
            img: "img1",
            name: "Book3",
            price: 20,
            quantidade: 2
        },
        {
            category: "action",
            id: "4",
            img: "img1",
            name: "Book4",
            price: 10,
            quantidade: 1
        },
        {
            category: "action",
            id: "5",
            img: "img1",
            name: "Book5",
            price: 15,
            quantidade: 5
        },
    ];

    httpOptions = {
        Headers: new HttpHeaders({'content-type': 'applications/json'})
    }

    constructor (private http:HttpClient) {
        
    }

    getBook() {
        console.log(this.livros)
    }
}