import { Component } from '@angular/core';
import { DoublebuttonComponent } from '../../../components/doublebutton/doublebutton';
import { Header } from '../../../components/header/header'
import { CardsComponent } from '../cards/cards';

@Component({
  selector: 'app-home-component',
  imports: [DoublebuttonComponent, Header, CardsComponent],
  templateUrl: './home-component.html',
})
export class HomeComponent {

}
