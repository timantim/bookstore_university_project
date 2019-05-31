import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"

@Component({
  moduleId: module.id,
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css']
})
export class PurchasesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  addPurchase() {
    console.log("addPurchase button pressed");
    this.router.navigate(["/purchase-new"]);
  }
}
