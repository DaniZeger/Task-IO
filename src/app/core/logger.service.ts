import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  getDate(): string {
    return (new Date()).toUTCString()
  }

  error(msg: string) {
    console.error(`Error:: ${msg}, ${this.getDate()}`);
  }

  warn(msg: string) {
    console.warn(`Warning:: ${msg}, ${this.getDate()}`);
  }

  log(msg: string) {
    console.log(`Info:: ${msg}, ${this.getDate()}`);
  }
}
