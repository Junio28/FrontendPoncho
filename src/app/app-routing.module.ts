import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormLoginComponent } from './componenets/user/form-login/form-login.component';
import { ListUserComponent } from './componenets/user/list-user/list-user.component';
import { CreateUserComponent } from './componenets/user/create-user/create-user.component';
import { ListClientComponent } from './componenets/client/list-client/list-client.component';
import { CreateClientComponent } from './componenets/client/create-client/create-client.component';
import { ListProductComponent } from './componenets/product/list-product/list-product.component';
import { CreateProductComponent } from './componenets/product/create-product/create-product.component';
import { ListTypeProductComponent } from './componenets/type-product/list-type-product/list-type-product.component';
import { CreateTypeProductComponent } from './componenets/type-product/create-type-product/create-type-product.component';
import { ListSaleComponent } from './componenets/sale/list-sale/list-sale.component';
import { CreateSaleComponent } from './componenets/sale/create-sale/create-sale.component';


const routes: Routes = [{
  path: '',
  redirectTo:'/',
  pathMatch: 'full'
},{
  path: 'login',
  component: FormLoginComponent 
},
{
  path: 'usuario',
  component: ListUserComponent
},
{
  path: 'usuario/nuevo',
  component: CreateUserComponent
},
{
  path: 'usuario/editar/:id',
  component: CreateUserComponent
},
{
  path: 'cliente',
  component: ListClientComponent
},
{
  path: 'cliente/nuevo',
  component: CreateClientComponent
},
{
  path: 'cliente/editar/:id',
  component: CreateClientComponent
},
{
  path: 'producto',
  component: ListProductComponent
},
{
  path: 'producto/nuevo',
  component: CreateProductComponent
},
{
  path: 'producto/editar/:id',
  component: CreateProductComponent
},
{
  path: 'tipo_producto',
  component: ListTypeProductComponent
},
{
  path: 'tipo_producto/nuevo',
  component: CreateTypeProductComponent
},
{
  path: 'tipo_producto/editar/:id',
  component: CreateTypeProductComponent
},
{
  path: 'venta',
  component: ListSaleComponent
},
{
  path: 'venta/nuevo',
  component: CreateSaleComponent
},
{
  path: 'venta/editar/:id',
  component: CreateSaleComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
