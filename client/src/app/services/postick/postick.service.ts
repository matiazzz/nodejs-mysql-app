import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostickService {

  constructor(private httpClient:HttpClient) { }

  host:string = "http://localhost:3000/api/"
  posticks:string[] = ['Japochi', 'La shuli', 'Mati'];

  getFirstPostick() {
    return this.posticks[0];
  }

  getAll() {
    this.httpClient.get(this.host + 'posticks')
    .subscribe(
      (data:any[]) => {
        console.log(data);
      }
    );
  }

}
