import { Component, OnInit } from '@angular/core';
import { UserI } from '../../../models/user-i';
import { ClientI } from '../../../models/client-i';
import { SalesService } from '../../../services/sales.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-create-sale',
  templateUrl: './create-sale.component.html',
  styleUrls: ['./create-sale.component.css']
})
export class CreateSaleComponent implements OnInit {
  clients: any = [];
  users: any = [];
// @HostBinding('class') classes = 'row';
  sale: any = {
    id: '',
    date: '',
    discount: '',
    subtotal:'',
    total:'',
    created: '',
    updated:'',
    userId:'',
    clientId:''
  }

  edit: boolean = false;
  constructor(private salesService: SalesService,private usersService:UsersService,private clientsService:ClientsService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
        	    //  console.log(params);
              if(params.id){
                this.salesService.getSale(params.id)
                  .subscribe(
                    res=>{
                      console.log(res);
                      this.sale =res;
                      this.edit = true;
                    },
                    err=>console.error(err)
                  )
              }
              this.getUser();
              this.getClient();
  }

    saveNewSale(){
    this.salesService.addSale(this.sale)
      .subscribe(
        res => {
          this.router.navigate(['/venta']);
        },
        err => console.error(err)
      )
  }

  getUser(){
    this.usersService.getUsers().subscribe(
      res=> {
        this.users = res;
        console.log(this.users);

      },
      err => console.error(err)
    );
  }

  getClient(){
    this.clientsService.getClients().subscribe(
      res=> {
        this.clients = res;
        console.log(this.clients);

      },
      err => console.error(err)
    );
  }

  updateSale(){
    //console.log(this.user)
    this.salesService.updateSale(this.sale.id, this.sale)
      .subscribe(
        res=>{
          this.router.navigate(['/venta']);
          console.log(res);
        },
        err=> console.log(err)
      )
  }
}
