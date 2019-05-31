import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import { BooksComponent } from './books/books.component';
import { BookNewComponent } from './books/book-new/book-new.component';
import { BookDetailComponent } from './books/book-detail/book-detail.component';
import { BookListComponent } from './books/book-list/book-list.component';
import {BookService} from "./books/shared/book.service";
import { ClientsComponent } from './clients/clients.component';
import { ClientDetailComponent } from './clients/client-detail/client-detail.component';
import { ClientListComponent } from './clients/client-list/client-list.component';
import { ClientNewComponent } from './clients/client-new/client-new.component';
import {ClientService} from "./clients/shared/client.service";
import { PurchasesComponent } from './purchases/purchases.component';
import { PurchaseDetailComponent } from './purchases/purchase-detail/purchase-detail.component';
import { PurchaseListComponent } from './purchases/purchase-list/purchase-list.component';
import { PurchaseNewComponent } from './purchases/purchase-new/purchase-new.component';
import {PurchaseService} from 'app/purchases/shared/purchase.service';


@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookNewComponent,
    BookDetailComponent,
    BookListComponent,
    ClientsComponent,
    ClientDetailComponent,
    ClientListComponent,
    ClientNewComponent,
    PurchasesComponent,
    PurchaseDetailComponent,
    PurchaseListComponent,
    PurchaseNewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [BookService, ClientService, PurchaseService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
