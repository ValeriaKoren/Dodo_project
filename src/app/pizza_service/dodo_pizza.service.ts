import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { IPizza } from "../interfaces/ipizza";



@Injectable({
  providedIn: "root"
})


export class DodoService{
  private _card:any;
  // pizza: IPizza;

  constructor(private http: HttpClient){}

  // public _addPizza(pizza: IPizza){
  //   this._addPizza(pizza);

  // }

  // private _addPizza(pizza){}

  addPizza(pizza:IPizza){

  }



  public getPizzaList():Observable<IPizza[]>{
     return of([
      {
        name:'Цыплёнок карри',
        price: 419,
        description: 'Цыпленок, ананасы, соус карри, красный лук, сладкий перец, моцарелла, фирменный томатный соус',
        image: 'pizza1.png'
      },
      {
        name:'Пицца из половинок',
        price: 670,
        description: 'Соберите свою пиццу 35 см с двумя разными вкусами',
        image: 'https://cdn.dodostatic.net/static/Img/Products/9a468e7d8f5149d89464b4e174599b65_366x366.png'
      },
      {
        name:'Миу-пицца с ветчиной и сюрприз',
        price: 519,
        description: 'Ветчина, моцарелла, смесь сыров чеддер и пармезан, фирменный соус альфредо',
        image: 'https://cdn.dodostatic.net/static/Img/Products/ae7892e0a7b44a9ab6bfc0a9d3c8eb0d_366x366.png'
      },
      {
        name:'Миу-пицца с пепперони и сюрприз',
        price: 519,
        description: 'Пикантная пепперони, смесь сыров чеддер и пармезан, моцарелла, фирменный соус альфредо',
        image: 'https://cdn.dodostatic.net/static/Img/Products/24d44448b8b4475bba6693f45eb959d0_366x366.png'
      },
      {
        name:'Мясной Микс',
        price: 489,
        description: 'Пастрами из индейки, острая чоризо, пикантная пепперони, бекон, моцарелла, фирменный томатный соус',
        image: 'https://cdn.dodostatic.net/static/Img/Products/febd68ce05e7409aa27f0b1680e1adff_366x366.png'
      },
      {
        name:'Сырная 🌱👶 ',
        price: 299,
        description: 'Моцарелла, сыры чеддер и пармезан, фирменный соус альфредо',
        image: 'https://cdn.dodostatic.net/static/Img/Products/c1b205fe56e54b60a17911e5ae3ba7c3_366x366.png'
      },
      {
        name:'Ветчина и сыр',
        price: 329,
        description: 'Ветчина, моцарелла, фирменный соус альфредо',
        image: 'https://cdn.dodostatic.net/static/Img/Products/06c75b36952747a694a169662cb3267b_366x366.png'
      },
      {
        name:'Пепперони фреш',
        price: 299,
        description: 'Пикантная пепперони, увеличенная порция моцареллы, томаты, фирменный томатный соус',
        image: 'https://cdn.dodostatic.net/static/Img/Products/a55f23f650344e1bb5bd43c7fc6e82fc_366x366.png'
      },
    ])
  }

}
