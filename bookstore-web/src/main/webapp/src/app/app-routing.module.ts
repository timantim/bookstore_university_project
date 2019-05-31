import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BooksComponent} from "./books/books.component";
import {BookDetailComponent} from "./books/book-detail/book-detail.component";
import {BookNewComponent} from "./books/book-new/book-new.component";
import { ClientsComponent } from './clients/clients.component';
import { ClientDetailComponent } from './clients/client-detail/client-detail.component';
import { ClientNewComponent } from './clients/client-new/client-new.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { PurchaseDetailComponent } from './purchases/purchase-detail/purchase-detail.component';
import { PurchaseNewComponent } from './purchases/purchase-new/purchase-new.component';

const routes: Routes = [
  //{ path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'books', component: BooksComponent},
  {path: 'book/detail/:id', component: BookDetailComponent},
  {path: 'book-new', component: BookNewComponent},
  {path: 'clients', component: ClientsComponent},
  {path: 'client/detail/:id', component: ClientDetailComponent},
  {path: 'client-new', component: ClientNewComponent},
  {path: 'purchases', component: PurchasesComponent},
  {path: 'purchase/detail/:id', component: PurchaseDetailComponent},
  {path: 'purchase-new', component: PurchaseNewComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
