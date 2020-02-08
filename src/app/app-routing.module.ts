import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppWeightComponent } from './components/weight/weight.component';
import { AppShopComponent } from './components/shop/shop.component';


const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: AppShopComponent
    },
    {
        path: 'gewicht',
        pathMatch: 'full',
        component: AppWeightComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
