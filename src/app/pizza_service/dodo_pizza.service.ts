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
        image: 'pizza2.png'
      },
      {
        name:'Миу-пицца с ветчиной и сюрприз',
        price: 519,
        description: 'Ветчина, моцарелла, смесь сыров чеддер и пармезан, фирменный соус альфредо',
        image: 'pizza3.png'
      },
      {
        name:'Миу-пицца с пепперони и сюрприз',
        price: 519,
        description: 'Пикантная пепперони, смесь сыров чеддер и пармезан, моцарелла, фирменный соус альфредо',
        image: 'pizza4.png'
      },
      {
        name:'Мясной Микс',
        price: 489,
        description: 'Пастрами из индейки, острая чоризо, пикантная пепперони, бекон, моцарелла, фирменный томатный соус',
        image: 'pizza5.png'
      },
      {
        name:'Сырная 🌱👶 ',
        price: 299,
        description: 'Моцарелла, сыры чеддер и пармезан, фирменный соус альфредо',
        image: 'pizza6.png'
      },
      {
        name:'Ветчина и сыр',
        price: 329,
        description: 'Ветчина, моцарелла, фирменный соус альфредо',
        image: 'pizza7.png'
      },
      {
        name:'Пепперони фреш',
        price: 299,
        description: 'Пикантная пепперони, увеличенная порция моцареллы, томаты, фирменный томатный соус',
        image: 'pizza8.png'
      },
    ])
  }

}
