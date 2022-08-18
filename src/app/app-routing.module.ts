import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'manager',
    loadChildren: () => import('./manager/manager.module').then( m => m.ManagerPageModule)
  },
  {
    path: 'manager/restock',
    loadChildren: () => import('./manager/restock/restock.module').then( m => m.RestockPageModule)
  },
  {
    path: 'manager/history',
    loadChildren: () => import('./manager/history/history.module').then( m => m.HistoryPageModule)
  },
  {
    path: 'manager/addNewProduct',
    loadChildren: () => import('./manager/add-new-product/add-new-product.module').then( m => m.AddNewProductPageModule)
  },
  {
    path: 'manager/history/itemDetails/:itemName',
    loadChildren: () => import('./manager/history/item-details/item-details.module').then( m => m.ItemDetailsPageModule )
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
