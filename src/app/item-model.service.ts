import { Injectable } from '@angular/core';
import { Item } from './Item';


@Injectable({
  providedIn: 'root'
})
export class ItemModelService {
  currentDate = new Date();
  newMyListObject: Item[];

  private  listItems: Item[] =[{
    name : 'Pants',
    price : 50,
    quantity: 20,
    purchaseDate: this.currentDate,
    totalAmount: 0
  },
  {
    name : 'Shoes',
    price : 90,
    quantity: 50,
    purchaseDate: this.currentDate,
    totalAmount: 0
  },
  {
    name : 'Hats',
    price : 20,
    quantity: 10,
    purchaseDate: this.currentDate,
    totalAmount: 0
  },
  {
    name : 'Tshirts',
    price : 22,
    quantity: 10,
    purchaseDate: this.currentDate,
    totalAmount: 0
  },
  {
    name : 'Dresses',
    price : 75,
    quantity: 24,
    purchaseDate: this.currentDate,
    totalAmount: 0
  }]

  

  private newAdd: Item[] = [{
    name : '',
    price : 0,
    quantity : 0,
    purchaseDate : this.currentDate,
    totalAmount : 0
  }];
  purchaseItems = [];

  constructor() { }

  setListItems(listItems){
    this.listItems = listItems;
  }

  getItembyName(name){

    var returnItem = this.purchaseItems.find(item => item.name == name);
    console.log("Return date", returnItem.date)
    return returnItem;

    // return {this.purchaseItems.find(
    //   item => {return item.name === name;})}
  }

  addPurchase(name: string, price:number, qty: number, date: Date, totalAmt: number){
    this.listItems = this.getAllItems();
    console.log("Purchase item date " + date)
    this.purchaseItems.push({name:name, price:price, quantity: qty, date: date, totalamount: totalAmt})
    
  }

  addProduct(prodName, price, qty){
    this.listItems = this.getAllItems();
    this.listItems.push({
      name:prodName,
      price:price,
      quantity:qty,
      purchaseDate:this.currentDate,
      totalAmount:0
    })
    console.log("Add"+this.listItems)
  }

  getPurchaseList(){
    return [...this.purchaseItems];
  }



  getAllItems(){
    return [...this.listItems];
  }

  updateQuantity(names, selectedAmount){
    var i=0;

    this.listItems = this.getAllItems();
    console.log("Update quantity " + this.listItems)
    i = (this.listItems.indexOf(this.listItems.find(item => item.name == names)))
    console.log("I " + i);
    var newquantity = this.listItems[i].quantity - selectedAmount;
    console.log("New Quantity " + newquantity)

    this.listItems[i].quantity = newquantity;
    return;

  }
}
