import { Component } from '@angular/core';
import { DoublebuttonComponent } from '../../../components/doublebutton/doublebutton';
import { Header } from '../../../components/header/header'
import { CardsComponent } from '../cards/cards';
import { Footer } from "../../../components/footer/footer";

@Component({
  selector: 'app-home-component',
  imports: [DoublebuttonComponent, Header, CardsComponent, Footer],
  templateUrl: './home-component.html',
})
export class HomeComponent {

}
