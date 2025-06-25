import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgStyle } from '@angular/common';
import { ConfigLoader } from './services/config-loader';
import { MainComponent } from './components/main-component/main-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgStyle, MainComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App implements OnInit {
  protected title = 'portfolio';
  public appFont = '';
  
  constructor(private configLoader: ConfigLoader) {}
  
  ngOnInit() {
    const title = this.configLoader.getConfig().title;
    this.appFont = title;
  }
  
  get appStyles(){
    return { 'font-family': `${this.appFont} !important` };
  }
}