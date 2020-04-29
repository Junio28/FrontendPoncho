import { Component, OnInit } from '@angular/core';
import { SalesService } from '../../../services/sales.service';
import { SaleI } from '../../../models/sale-i';

@Component({
  selector: 'app-list-sale',
  templateUrl: './list-sale.component.html',
  styleUrls: ['./list-sale.component.css']
})
export class ListSaleComponent implements OnInit {

  constructor(private salesService: SalesService ) { }
  sales: any = [];
  ngOnInit(): void {
    this.getSale();
  }

  getSale(){
    this.salesService.getSales().subscribe(
      res=> {
        this.sales = res;
        console.log(this.sales);

      },
      err => console.error(err)
    );
  }

  deleteSale(id: string){
    // console.log(id);
    this.salesService.deleteSale(id)
    .subscribe(
      res => {
        console.log(res);
        this.getSale();
      },
      err => console.error(err)
    );
  }
}
