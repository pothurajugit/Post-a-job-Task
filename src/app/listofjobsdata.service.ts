import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListofjobsdataService {


  postedjobsData:any[] = [];

  constructor(private http:HttpClient) { }

  

  reciveData(data){
    this.postedjobsData.push(data);
    console.log(this.postedjobsData)
  }


  sendData(){
    const observable = new Observable(data=>{
      data.next(this.postedjobsData);
    })
    return observable;
  }

}
