import { Injectable } from '@angular/core';

import {HttpClient} from "@angular/common/http";

import {Book} from "./book.model";

import {Observable} from "rxjs";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class BookService {
  private booksUrl = 'http://localhost:8080/api/books';

  constructor(private httpClient: HttpClient) {
  }

  getBooks(): Observable<Book[]> {
    return this.httpClient
      .get<Array<Book>>(this.booksUrl);
  }

  getBook(id: number): Observable<Book> {
    return this.getBooks()
      .map(books => books.find(book => book.id === id));
  }

  update(book): Observable<Book> {
    const url = `${this.booksUrl}/${book.id}`;
    return this.httpClient
      .put<Book>(url, book);
  }

  save(bookname: string, author: string, price: number): Observable<Book> {
    let book = {bookname, author, price};
    return this.httpClient
      .post<Book>(this.booksUrl, book);
  }

  delete(book): Observable<{}> {
    const url = `${this.booksUrl}/${book.id}`;
    return this.httpClient
      .delete(url, book.id);
  }

}
