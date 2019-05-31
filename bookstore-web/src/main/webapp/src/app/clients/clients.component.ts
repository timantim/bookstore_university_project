import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"

@Component({
  moduleId: module.id,
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  addClient() {
    console.log("addClient button pressed");
    this.router.navigate(["/client-new"]);
  }
}
