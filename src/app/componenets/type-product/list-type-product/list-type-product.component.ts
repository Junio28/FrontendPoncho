import { Component, OnInit } from '@angular/core';
import { TypeProductsService } from '../../../services/type-products.service';
import { TypeProductI } from '../../../models/type-product-i';

@Component({
  selector: 'app-list-type-product',
  templateUrl: './list-type-product.component.html',
  styleUrls: ['./list-type-product.component.css']
})
export class ListTypeProductComponent implements OnInit {
  typeproducts: any = [];
  constructor(private typeproductsService: TypeProductsService ) { }

  ngOnInit(): void {
    this.getTypeProduct();
  }

  getTypeProduct(){
    this.typeproductsService.getTypeProducts().subscribe(
      res=> {
        this.typeproducts = res;
        console.log(this.typeproducts);

      },
      err => console.error(err)
    );
  }

  deleteTypeProduct(id: string){
    // console.log(id);
    this.typeproductsService.deleteTypeProduct(id)
    .subscribe(
      res => {
        console.log(res);
        this.getTypeProduct();
      },
      err => console.error(err)
    );
  }
}
