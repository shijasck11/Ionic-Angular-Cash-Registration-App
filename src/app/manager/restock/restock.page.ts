import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ItemModelService } from 'src/app/item-model.service';

@Component({
  selector: 'app-restock',
  templateUrl: './restock.page.html',
  styleUrls: ['./restock.page.scss'],
})
export class RestockPage implements OnInit {

  listItems: any = [];
  itemName: string;
  newEntry: Number;
  

  constructor(private service: ItemModelService, private route: Router, private alertController : AlertController) { 
    this.listItems = this.service.getAllItems() 
  }

  ngOnInit() {
    
  }

  itemClick(name){
    
    this.itemName = name;
  }

  cancel(){
    console.log("cancer")
    this.route.navigate(['./manager'])
  }

  restock(){
    if(this.itemName == undefined){      
      this.presentAlert("Please select an Item")
    }else{
      if(this.newEntry == 0 || this.newEntry == undefined){
      this.presentAlert("Enter the quantity")
    }
    else{
      var i = this.listItems.indexOf(this.listItems.find(item => item.name == this.itemName))
      this.listItems[i].quantity = this.newEntry;
      console.log("new entry "+ this.newEntry)
    }
      
    }
    
    
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
