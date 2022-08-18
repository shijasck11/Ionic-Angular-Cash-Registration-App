import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemModelService } from 'src/app/item-model.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  
  purchaseList: any;
  constructor(private service: ItemModelService, private route: Router) {
   }

  ngOnInit() {
    console.log(this.purchaseList)
    this.purchaseList = this.service.getPurchaseList(); 
    console.log(this.purchaseList)
  }


  itemClick(name){
    this.route.navigate(['./manager/history/itemDetails',name])
  }

}
