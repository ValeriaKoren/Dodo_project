import { Component, OnInit, OnChanges, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, timer } from 'rxjs';
import { IPizza } from '../interfaces/ipizza';
import { DodoService } from '../pizza_service/dodo_pizza.service';
import { PizzaWindowComponent } from '../pizza-modal/pizza-modal.component';


@Component({
  selector: 'app-dodo',
  templateUrl: './dodo_pizza.component.html',
  styleUrls: ['./dodo_pizza.component.css'],
})
export class DodoComponent implements OnInit{
  @ViewChild('pizzaWindowComponent') pizzaWindowComponent!: PizzaWindowComponent;

  constructor(private Dodo: DodoService, private _changeDetectorRef: ChangeDetectorRef){}

  arr: IPizza[] = [];
  position_counter = 0;
  full_price = 0;

  ngOnInit(): void {
    this.Dodo.getPizzaList().subscribe(x=>{
      console.log(x);
      this.arr = x;
      this._changeDetectorRef.markForCheck();
    })
  }

  addPizza(){
    this.position_counter++;
    console.log(this.position_counter)
  }

  openPizzaWindow(){
    this.pizzaWindowComponent.open();
  }

}
