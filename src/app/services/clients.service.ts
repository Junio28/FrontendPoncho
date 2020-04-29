import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClientI } from '../models/client-i';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  API_URI = 'http://localhost:4000';
  client: ClientI

  constructor(private http: HttpClient) { }

  getClients(){
    return this.http.get(`${this.API_URI}/clients`);
  }

  getClient(id: string){
    return this.http.get(`${this.API_URI}/clients/${id}`);
  }

  addClient(client: ClientI){
    return this.http.post(`${this.API_URI}/clients`, client);
  }

  deleteClient(id: string){
    return this.http.delete(`${this.API_URI}/clients/${id}`);
  }

  updateClient(id: string | number, updatedClient: ClientI){
    return this.http.patch(`${this.API_URI}/clients/${id}`,updatedClient);
  }
}
