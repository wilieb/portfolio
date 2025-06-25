import { Injectable } from '@angular/core';
import config from '../../assets/config.json';


@Injectable({
  providedIn: 'root'
})
export class ConfigLoader {
  getConfig() {
    return config;        
  }
  constructor() { }
}
