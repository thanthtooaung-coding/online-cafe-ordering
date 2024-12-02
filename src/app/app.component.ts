import { Component } from '@angular/core';
import { NavbarComponent } from "./navbar/navbar.component";
import { HeroComponent } from './hero/hero.component';
import { ScrollIndicatorComponent } from './scroll-indicator/scroll-indicator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, HeroComponent, ScrollIndicatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'online-cafe-ordering';
}
