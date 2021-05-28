import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  @Input()
  public index: number;

  @Input()
  public make: string;

  @Input()
  public model: string;

  @Input()
  public horsepower: number;

  @Input()
  public paintColor: string;

  @Output('upgrade')
  public upgradeEvent: EventEmitter<number> = new EventEmitter<number>();


  constructor() { }

  ngOnInit(): void {

    console.log(this.make, this.horsepower)
  }

  handleClick(): void {
    this.upgradeEvent.emit(this.index);
  }
}
