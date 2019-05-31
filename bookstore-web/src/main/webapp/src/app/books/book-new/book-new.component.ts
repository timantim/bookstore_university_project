import { Component, OnInit } from '@angular/core';
import {BookService} from "../shared/book.service";
import {Location} from "@angular/common"

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.css']
})
export class BookNewComponent implements OnInit {

  constructor(private bookService: BookService,
              private location: Location) { }

  ngOnInit() {
  }

  save(bookname, author, price) {
    console.log("save button pressed", bookname, author, price);

    this.bookService.save(bookname, author, price)
      .subscribe(_ => {
          console.debug("book saved");
          this.location.back();
        },
        err => console.error("error saving book", err));
  }

}
