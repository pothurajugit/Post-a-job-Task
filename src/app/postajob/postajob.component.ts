import { Component, OnInit } from '@angular/core';
import { ListofjobsdataService } from '../listofjobsdata.service';

@Component({
  selector: 'app-postajob',
  templateUrl: './postajob.component.html',
  styleUrls: ['./postajob.component.css']
})
export class PostajobComponent implements OnInit {

  constructor(private listdataservice: ListofjobsdataService) { }

   
  
  ngOnInit(): void {

  }

  //form data
  sendData(formdata){
    this.listdataservice.reciveData(formdata);
  }

 }
