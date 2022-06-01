import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PredictComponent } from './predict/predict.component';


@Injectable({
  providedIn: 'root'
})
export class PredictionService {

  url:string = "http://127.0.0.1:5000/"

  constructor(private httpClient : HttpClient) { }

  predict(array:any) {
    return this.httpClient.post (this.url + "/predict" ,{"key":array } );

  }
  
}
