import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { ProductI  } from '../../../models/product-i';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  products: any = [];
  constructor(private productsService: ProductsService ) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(){
    this.productsService.getProducts().subscribe(
      res=> {
        this.products = res;
        console.log(this.products);

      },
      err => console.error(err)
    );
  }

  deleteProduct(id: string){
    // console.log(id);
    this.productsService.deleteProduct(id)
    .subscribe(
      res => {
        console.log(res);
        this.getProduct();
      },
      err => console.error(err)
    );
  }
}
