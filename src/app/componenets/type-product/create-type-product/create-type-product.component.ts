import { Component, OnInit, HostBinding } from '@angular/core';
import { TypeProductsService } from '../../../services/type-products.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-type-product',
  templateUrl: './create-type-product.component.html',
  styleUrls: ['./create-type-product.component.css']
})
export class CreateTypeProductComponent implements OnInit {

  // @HostBinding('class') classes = 'row';
  typeproduct: any = {
    id: 0,
    name: ''
  }

  edit: boolean = false;
  constructor(private typeproductsService: TypeProductsService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
        const params = this.activatedRoute.snapshot.params;
    	    //  console.log(params);
          if(params.id){
            this.typeproductsService.getTypeProduct(params.id)
              .subscribe(
                res=>{
                  console.log(res);
                  this.typeproduct =res;
                  this.edit = true;
                },
                err=>console.error(err)
              )
          }
  }

  saveNewTypeProduct(){
    this.typeproductsService.addTypeProduct(this.typeproduct)
      .subscribe(
        res => {
          this.router.navigate(['/tipo_producto']);
        },
        err => console.error(err)
      )
  }

  updateTypeProduct(){
    //console.log(this.user)
    this.typeproductsService.updateTypeProduct(this.typeproduct.id, this.typeproduct)
      .subscribe(
        res=>{
          this.router.navigate(['/tipo_producto']);
          console.log(res);
        },
        err=> console.log(err)
      )
  }
}
