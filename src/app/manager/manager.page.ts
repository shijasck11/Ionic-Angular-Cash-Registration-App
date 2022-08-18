import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.page.html',
  styleUrls: ['./manager.page.scss'],
})
export class ManagerPage implements OnInit {

  constructor(private route : Router) { }

  ngOnInit() {
  }

  toRestock(){
    
    this.route.navigate(['manager/restock'])
  }
  
  toHistory(){
    this.route.navigate(['manager/history'])
  }

  addNewProduct(){
    this.route.navigate(['manager/addNewProduct'])
  }

}
