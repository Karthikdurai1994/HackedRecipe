import { Injectable } from '@angular/core';
import { itemsStructure } from './items.structure';
import { HttpClient } from '@angular/common/http';
import {map, tap, delay, take, switchMap} from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class ItemserviceService {

  constructor(private http:HttpClient) { }
  private items:itemsStructure[]=[];

  fetchItems(){
    this.items=[];
   return this.http.get("http://starlord.hackerearth.com/recipe")
    .pipe(
      tap(itemsData=>{
        //console.log(itemsData);
      }),
      map(resData=>{
        for(const key in resData){
           if(resData.hasOwnProperty(key)){
             const tempItems = new itemsStructure(key,
              resData[key].name,
              resData[key].image,
              resData[key].category,
              resData[key].label,
              resData[key].price,
              resData[key].description);
              this.items.push(tempItems);
           }
        }
       // console.log(this.items);
      })
    )
  }

  getItemsAll(){
    return [...this.items];
  }

  getSingleItem(id:string){
    const tempItem = this.items.find(item=>{
      return item.id === id;
    })
    return tempItem;
  }
}
