import { Component, OnInit } from '@angular/core';
import { ItemserviceService } from '../itemservice.service';
import { itemsStructure } from '../items.structure';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items:itemsStructure[]=[];
  searchText:string
  constructor(private itemsServiceObj:ItemserviceService) { }

  ngOnInit() {
    this.itemsServiceObj.fetchItems().subscribe(data=>{
         this.items = this.itemsServiceObj.getItemsAll();
         console.log(this.items);
    })
  }

}
