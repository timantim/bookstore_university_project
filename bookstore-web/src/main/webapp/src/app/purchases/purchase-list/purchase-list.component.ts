import { Component, OnInit } from '@angular/core';
import { Purchase } from "../shared/purchase.model";
import {PurchaseService} from "../shared/purchase.service";
import {Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'app-purchase-list',
  templateUrl: './purchase-list.component.html',
  styleUrls: ['./purchase-list.component.css']
})
export class PurchaseListComponent implements OnInit {
  errorMessage: string;
  purchases: Array<Purchase>;
  selectedPurchase: Purchase;

  constructor(private purchaseService: PurchaseService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getPurchases();
  }

  getPurchases() {
    this.purchaseService.getPurchases()
      .subscribe(
        purchases => this.purchases = purchases,
        error => this.errorMessage = <any>error
      );
  }

  onSelect(purchase: Purchase): void {
    this.selectedPurchase = purchase;
  }

  gotoDetail(): void {
    this.router.navigate(['/purchase/detail', this.selectedPurchase.id]);
  }
}
