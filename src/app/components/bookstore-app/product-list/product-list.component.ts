import { Component, OnInit } from '@angular/core';
import { BooksService } from './product-list.component.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

   livros = [
    {
        category: "Mindset",
        id: "1",
        img: "img1",
        name: "Mindset: A nova psicologia do sucesso",
        price: 34,
        quantidade: 1
    },
    {
        category: "Economia",
        id: "2",
        img: "img2",
        name: "Do Mil ao Milhão",
        price: 46,
        quantidade: 1
    },
    {
        category: "Mindset",
        id: "3",
        img: "img3",
        name: "O poder do hábito",
        price: 20,
        quantidade: 2
    },
    {
        category: "Futebol",
        id: "4",
        img: "img4",
        name: "Cabeça Fria, Coração Quente",
        price: 55,
        quantidade: 1
    },
    {
        category: "Economia",
        id: "5",
        img: "img5",
        name: "Pai Rico, Pai Pobre",
        price: 65,
        quantidade: 5
    },
]

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.livros)
  }

}
