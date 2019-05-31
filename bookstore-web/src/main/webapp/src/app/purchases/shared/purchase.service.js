"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require("@angular/http");
var rxjs_1 = require("rxjs");
require('rxjs/add/operator/catch');
require('rxjs/add/operator/map');
var PurchaseService = (function () {
    function PurchaseService(http) {
        this.http = http;
        this.purchasesUrl = 'http://localhost:8080/api/purchases';
    }
    PurchaseService.prototype.getPurchases = function () {
        return this.http.get(this.purchasesUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    PurchaseService.prototype.extractData = function (res) {
        var body = res.json();
        return body.purchases || {};
    };
    PurchaseService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return rxjs_1.Observable.throw(errMsg);
    };
    PurchaseService.prototype.getPurchase = function (id) {
        return this.getPurchases()
            .map(function (purchases) { return purchases.find(function (purchase) { return purchase.id === id; }); });
    };
    PurchaseService = __decorate([
        core_1.Injectable()
    ], PurchaseService);
    return PurchaseService;
}());
exports.PurchaseService = PurchaseService;
