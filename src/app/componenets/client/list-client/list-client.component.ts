import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../../services/clients.service';
import { ClientI } from '../../../models/client-i';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {
  clients: any = [];
  constructor(private clientsService: ClientsService ) { }

  ngOnInit(): void {
    this.getClient();
  }

  getClient(){
    this.clientsService.getClients().subscribe(
      res=> {
        this.clients = res;
        // console.log(this.clients);

      },
      err => console.error(err)
    );
  }
  
  deleteClient(id: string){
    // console.log(id);
    this.clientsService.deleteClient(id)
    .subscribe(
      res => {
        console.log(res);
        this.getClient();
      },
      err => console.error(err)
    );
  }
}
