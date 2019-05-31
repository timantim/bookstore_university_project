import { Component, OnInit } from '@angular/core';
import {PurchaseService} from "../shared/purchase.service";
import {Location} from "@angular/common"
import {Book} from "../../books/shared/book.model";
import {Client} from "../../clients/shared/client.model";
import {BookService} from "../../books/shared/book.service";
import {ClientService} from "../../clients/shared/client.service";

@Component({
  selector: 'app-purchase-new',
  templateUrl: './purchase-new.component.html',
  styleUrls: ['./purchase-new.component.css']
})
export class PurchaseNewComponent implements OnInit {
  errorMessage1: string;
  errorMessage2: string;
  books: Array<Book>;
  selectedBook: Book;
  clients: Array<Client>;
  selectedClient: Client;

  constructor(private purchaseService: PurchaseService,
              private bookService: BookService,
              private clientService: ClientService,
              private location: Location) { }

  ngOnInit() {
    this.getBooks();
    this.getClients();
  }

  getBooks() {
    this.bookService.getBooks()
      .subscribe(
        books => this.books = books,
        error => this.errorMessage1 = <any>error
      );
  }

  getClients() {
    this.clientService.getClients()
      .subscribe(
        clients => this.clients = clients,
        error => this.errorMessage2 = <any>error
      );
  }

  save(book, client, quantity) {
    console.log("save button pressed", book, client, quantity);

    this.purchaseService.save(book, client, quantity)
      .subscribe(_ => {
          console.debug("purchase saved");
          this.location.back();
        },
        err => console.error("error saving purchase", err));
  }

}
