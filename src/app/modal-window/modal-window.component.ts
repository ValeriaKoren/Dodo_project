import { Component, OnInit, OnChanges, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, timer } from 'rxjs';
import { IPizza } from '../interfaces/ipizza';
import { DodoService } from '../pizza_service/dodo_pizza.service';


@Component({
  selector: 'app-cart',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.css'],
})
export class CartComponent{

  Wind = false;

  display(){
    this.Wind = true;
  }

  Close(){
    this.Wind = false;
  }

}
