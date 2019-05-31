import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"

@Component({
  moduleId: module.id,
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  addBook() {
    console.log("addBook button pressed");
    this.router.navigate(["/book-new"]);
  }
}
