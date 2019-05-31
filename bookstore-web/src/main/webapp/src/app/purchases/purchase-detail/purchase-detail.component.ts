import {Component, Input, OnInit} from '@angular/core';
import { PurchaseService } from "../shared/purchase.service";
import { ActivatedRoute, Params } from "@angular/router";
import { Location } from '@angular/common';
import { Purchase } from "../shared/purchase.model";

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-purchase-detail',
  templateUrl: './purchase-detail.component.html',
  styleUrls: ['./purchase-detail.component.css']
})
export class PurchaseDetailComponent implements OnInit {
  @Input() purchase: Purchase;

  constructor(private purchaseService: PurchaseService,
              private route: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.purchaseService.getPurchase(+params['id']))
      .subscribe(purchase => this.purchase = purchase);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.purchaseService.update(this.purchase)
      .subscribe(_ => this.goBack());
  }

  delete(): void {
    this.purchaseService.delete(this.purchase)
      .subscribe(_ => this.goBack());
  }
}
