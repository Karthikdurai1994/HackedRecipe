import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { itemsStructure } from '../items.structure';
import { ItemserviceService } from '../itemservice.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  itemId:string;
  item:itemsStructure;
  constructor(public activatedRoute: ActivatedRoute, private itemServiceObj:ItemserviceService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap=>{
      this.itemId = paramMap.get("id");
      console.log(this.itemId);
      this.item = this.itemServiceObj.getSingleItem(this.itemId);
      console.log(this.item);
    })
  }

}
