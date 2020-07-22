import { Component, OnInit } from '@angular/core';
import { ListofjobsdataService } from '../listofjobsdata.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  posteddata:any;

  constructor(private listdataservice: ListofjobsdataService) { }

  ngOnInit(): void {
    this.listdataservice.sendData().subscribe(data=>{
      this.posteddata = data;
      console.log(this.posteddata);
    })
  }

}
