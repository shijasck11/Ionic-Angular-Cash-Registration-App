import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Item } from 'src/app/Item';
import { ItemModelService } from 'src/app/item-model.service';


@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.page.html',
  styleUrls: ['./add-new-product.page.scss'],
})
export class AddNewProductPage implements OnInit {

  productCode: string = '';
  productPrice : number = 0;
  productQuantity : number = 0;
  currentDate = new Date();

  listItems: Item;


  constructor(private route: Router, private alertController : AlertController, private service: ItemModelService) { }
  
  form : FormGroup
  newProd: Item[];

  ngOnInit() {
    this.form = new FormGroup({
      productName : new FormControl(null, {
        updateOn : 'blur',
        validators: [Validators.required, Validators.maxLength(200)]
      }),
      productPrice : new FormControl(null, {
        updateOn :'blur',
        validators: [Validators.required]
      }),
      productQuantity : new FormControl(null, {
        updateOn : 'blur',
        validators: [Validators.required]
      })
    })
  }

  addProduct(){
    if (this.form.invalid){
      console.log('invalid')
     this.presentAlert('Error!! all values are required');
    }else {
      console.log("View enter " , this.productCode)

      this.service.addProduct(this.productCode, this.productQuantity, this.productPrice);
      //this.service.addNewProduct(this.productCode,this.productQuantity, this.productPrice)
      this.presentAlert('New Product Added Successfully' );
      this.toManager();
    }

  }

  async presentAlert(msg:string){
    const alert = await this.alertController.create({
       message: msg,
       header: 'Done',
       buttons: [{
       text:'OK'
     }]
     })
     await alert.present();
    }

  toManager(){
    this.route.navigate(['./manager'])
  }

}
