import { Component, OnInit, OnChanges, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, timer } from 'rxjs';
import { IPizza } from '../interfaces/ipizza';
import { DodoService } from '../pizza_service/dodo_pizza.service';


@Component({
  selector: 'app-window',
  templateUrl: './pizza-modal.component.html',
  styleUrls: ['./pizza-modal.component.css'],
})
export class PizzaWindowComponent{

  PizzaWind = false;

  close(){
    this.PizzaWind = false;
  }

  open(){
    this.PizzaWind = true;
  }
}
