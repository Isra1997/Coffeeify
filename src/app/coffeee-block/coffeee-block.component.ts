import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coffeee-block',
  templateUrl: './coffeee-block.component.html',
  styleUrls: ['./coffeee-block.component.css']
})
export class CoffeeeBlockComponent implements OnInit {
  CoffeeId: number= 10;
  CoffeeName: String= "Haha Coffee";
  constructor() { }

  ngOnInit() {
  }

}
