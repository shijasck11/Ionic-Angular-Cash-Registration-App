import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Item } from '../Item';
import { ItemModelService } from '../item-model.service';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  listItemName: string = "";
  itemQuantity: any = "";
  listItemClicked: boolean;
  totalPrice: any;
  selectedItemValue: any;
  purchasedQty:number;
  listItems: any[];
  
  
  
  currentDate = new Date();

  boughtItem: Item[] =[{
    name:'',   
    price : 0,
    quantity: 0,
    purchaseDate: this.currentDate,
    totalAmount: 0 
   }]


 
  constructor(private route: Router, private service: ItemModelService, private alertController : AlertController) {
    this.listItemClicked = false;    
    
    this.ngOnIt();  
    
   
  }
  ionViewWillEnter(){
    this.itemQuantity = ""
    this.listItems = this.service.getAllItems();
  }
  navigateToManager() {
    console.log("navigate")
    this.route.navigate(['manager']);
  }

  ngOnIt(){
    
    
    console.log("After " + this.listItems);
   
  }
  

  itemClick(name, value){
    this.itemQuantity = 0;
    console.log(this.listItemClicked)
    this.listItemClicked = false; 
    this.selectedItemValue = value;   
    this.listItemName = name;
    
    
  }

  numpadClick(num){
    console.log("incoming num " + num)
    
    switch(num){
      case 0:
        this.itemQuantity += "0";
        break;
      case 1:
        this.itemQuantity  += "1";
        break;
      case 2:
        this.itemQuantity += "2";
        break;
      case 3:
          this.itemQuantity += "3";
          break;
      case 4:
        this.itemQuantity += "4";
        break;
      case 5:
        this.itemQuantity += "5";
        break;
      case 6:
        this.itemQuantity += "6";
        break;
      case 7:
          this.itemQuantity += "7";
          break;
      case 8:
        this.itemQuantity += "8";
        break;
      case 9:
        this.itemQuantity += "9";
        break;
    }   

    this.itemQuantity = Number(this.itemQuantity)
    console.log("Outgin " + this.itemQuantity)    


    if(this.listItemName == ""){
      console.log(this.totalPrice + "total")
      this.presentAlert('Please select the type first');
      this.totalPrice=0;
      
    }else{
      this.totalPrice = this.itemQuantity * this.selectedItemValue;
    }

    
    
  }

  async buyClicked(){ 
    
    
    var found = this.listItems.find(element => element.name == this.listItemName);
     console.log(this.itemQuantity)
     console.log(found.name)
     if(this.itemQuantity > found.quantity){
      
         const alert = await document.createElement('ion-alert');
         alert.header = 'Alert';
         alert.subHeader = 'Quantity Error';
         alert.message = 'Please type in available quantity';
         alert.buttons = ['OK'];
    
         document.body.appendChild(alert);
         await alert.present();
         return;
     }
     this.itemQuantity = Number(this.itemQuantity)
     console.log("THis itebm " + found.price)
     this.service.updateQuantity(found.name, this.itemQuantity);

     this.purchasedQty = found.quantity - this.itemQuantity
     console.log("Item quantity d " + this.purchasedQty , found.quantity, this.itemQuantity)

     this.service.addPurchase(found.name, found.price, this.itemQuantity, this.currentDate, this.totalPrice);
     
     
     
     console.log(this.listItems)

     return;
    
  }

  async presentAlert(msg:string){
    const alert = await this.alertController.create({
       message: msg,
       header: 'Error',
       buttons: [{
       text:'OK'
     }]
     })
     await alert.present();
    }

}
