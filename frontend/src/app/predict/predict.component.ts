import { Component, OnInit } from '@angular/core';
import { PredictionService } from '../prediction.service';

@Component({
  selector: 'app-predict',
  templateUrl: './predict.component.html',
  styleUrls: ['./predict.component.css']
})
export class PredictComponent implements OnInit {

  gender! : number;
  age!: number;
  hypertension! :number;
  heart_disease! :number;
  ever_married! :number;
  work_type! :number;
  avg_glucose_level! :number;
  bmi! :number;
  smoking_status! :number;
  result : any;
  array: any= [];

  constructor(private prediction: PredictionService ) { }

  ngOnInit(): void {}

  predict(){

  
    console.log(this.gender);
    console.log(this.age);
    console.log(this.hypertension);
    console.log(this.heart_disease);
    console.log(this.ever_married);
    console.log(this.work_type);
    console.log(this.avg_glucose_level);
    console.log(this.bmi);
    console.log(this.smoking_status);

    this.array.push( this.gender, this.age, this.hypertension, this.heart_disease, this.ever_married, this.work_type,
      this.avg_glucose_level,  this.bmi, this.smoking_status);
    this.prediction.predict(this.array).subscribe((data)=>{

      this.result=data;
      
    });
  }

}
