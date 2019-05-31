import { Injectable } from '@angular/core';

import {HttpClient} from "@angular/common/http";

import {Purchase} from "./purchase.model";

import {Observable} from "rxjs";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Client} from "../../clients/shared/client.model";
import {Book} from "../../books/shared/book.model";


@Injectable()
export class PurchaseService {
  private purchasesUrl = 'http://localhost:8080/api/purchases';

  constructor(private httpClient: HttpClient) {
  }

  getPurchases(): Observable<Purchase[]> {
    return this.httpClient
      .get<Array<Purchase>>(this.purchasesUrl);
  }

  getPurchase(id: number): Observable<Purchase> {
    return this.getPurchases()
      .map(purchases => purchases.find(purchase => purchase.id === id));
  }

  update(purchase): Observable<Purchase> {
    const url = `${this.purchasesUrl}/${purchase.id}`;
    return this.httpClient
      .put<Purchase>(url, purchase);
  }

  save(book: Book, client: Client, quantity: number): Observable<Purchase> {
    let purchase = {book, client, quantity};
    return this.httpClient
      .post<Purchase>(this.purchasesUrl, purchase);
  }

  delete(purchase): Observable<{}> {
    const url = `${this.purchasesUrl}/${purchase.id}`;
    return this.httpClient
      .delete(url, purchase.id);
  }

}
