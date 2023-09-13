import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent {
  public heroNames:string[]=['spiderman','iroman','hulk','thord','she hulk']
  public deleteHero?:String;
  removeLastHeroe():void{
    this.deleteHero=this.heroNames.pop();
  }
}
