import { Injectable } from '@angular/core';

import {HttpClient} from "@angular/common/http";

import {Client} from "./client.model";

import {Observable} from "rxjs";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class ClientService {
  private clientsUrl = 'http://localhost:8080/api/clients';

  constructor(private httpClient: HttpClient) {
  }

  getClients(): Observable<Client[]> {
    return this.httpClient
      .get<Array<Client>>(this.clientsUrl);
  }

  getClient(id: number): Observable<Client> {
    return this.getClients()
      .map(clients => clients.find(client => client.id === id));
  }

  update(client): Observable<Client> {
    const url = `${this.clientsUrl}/${client.id}`;
    return this.httpClient
      .put<Client>(url, client);
  }

  save(name: string): Observable<Client> {
    let client = {name};
    return this.httpClient
      .post<Client>(this.clientsUrl, client);
  }

  delete(client): Observable<{}> {
    const url = `${this.clientsUrl}/${client.id}`;
    return this.httpClient
      .delete(url, client.id);
  }

}
