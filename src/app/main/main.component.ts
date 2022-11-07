import { Component, OnInit, OnChanges, ChangeDetectionStrategy, ChangeDetectorRef, createComponent, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, timer } from 'rxjs';
import { IPizza } from '../interfaces/ipizza';
import { DodoService } from '../pizza_service/dodo_pizza.service';
import { CartComponent } from '../modal-window/modal-window.component';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent{
  @ViewChild('cartComponent') cartComponent!: CartComponent;

  openWindow(){
    // this.Wind=true;
    this.cartComponent.display();
  }


}
