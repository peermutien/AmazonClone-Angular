import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProductsComponent } from './products/products.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [

  {
    path:'',component:HomeComponentComponent
  },

  {
    path:'signup',component:SignupComponent
  },
  
  {
    path:'products',component:ProductsComponent
  },

  {
    path:'cart',component:CartComponent
  },

  {
    path:'about', component:AboutComponent
  },

  {
    path:'contactus' , component:ContactusComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
