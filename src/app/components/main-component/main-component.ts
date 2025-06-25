import { Component } from '@angular/core';
import { NavBar } from '../nav-bar/nav-bar';
import { HeroSection } from '../hero-section/hero-section';
import { Body } from '../body/body';

@Component({
  selector: 'app-main-component',
  imports: [NavBar, HeroSection, Body],
  templateUrl: './main-component.html',
  styleUrl: './main-component.css',
  standalone: true,
})
export class MainComponent {

}
