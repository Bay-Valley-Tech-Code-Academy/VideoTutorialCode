import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 title = 'TypeScript-Generics';

public searchTerm: string = "I am a default search term";

 public cars = [
    {
        make: 'Ford',
        model: 'Focus',
        horsepower: 0,
        paintColor: '#eee'

    } ,
    {
        make: 'Ford',
        model: 'F-250',
        horsepower: 110,
        paintColor: 'brown'
    }


 ]
 constructor (){}

 handleUpgrade(index: number){
   this.cars[index].horsepower += 5;
 }

 handleKeyup(): void{
   console.log(this.searchTerm);
 }
}
