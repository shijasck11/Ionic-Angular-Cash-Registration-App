export class ItemList{
    currentDate = new Date();
    ItemList = [
        {name: '', quanity: '', date: this.currentDate, totalamount:0}
      ];

      addPurchase(name: string, qty: string, date : Date, totalAmt : string){
     //   this.ItemList.push({name, qty, date, totalAmt})
        console.log("Purchase items " + this.ItemList)
      }
}

