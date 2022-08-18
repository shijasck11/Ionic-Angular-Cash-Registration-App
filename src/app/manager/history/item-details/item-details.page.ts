import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/Item';
import { ItemModelService } from 'src/app/item-model.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.page.html',
  styleUrls: ['./item-details.page.scss'],
})
export class ItemDetailsPage implements OnInit {

  itemName: string;
  itemDetail: any;
  totalamount: number;
  formatDate: any;
  time: any = "AM";

  constructor(private activateRoute: ActivatedRoute, private service: ItemModelService) {
    
   }

  ngOnInit() {
    this.itemName = this.activateRoute.snapshot.paramMap.get("itemName")
    
    this.itemDetail=(this.service.getItembyName(this.itemName)); 
    
    console.log("item date ", this.itemDetail.date, "quantity ", this.itemDetail.quantity);

    this.totalamount = this.itemDetail.price * this.itemDetail.quantity;  


     //this.totalamount = this.itemDetail.price * this.itemDetail.quantity;
     if(this.itemDetail.date.getHours() >= 12){
       this.time = "PM"
     }
    this.formatDate = this.itemDetail.date.getDate() + "/" + (this.itemDetail.date.getMonth() + 1) + "/" + this.itemDetail.date.getFullYear() + " " + this.itemDetail.date.getHours() + ":" + this.itemDetail.date.getMinutes() + " " +this.time;


    console.log(this.formatDate)
    
  }

}
