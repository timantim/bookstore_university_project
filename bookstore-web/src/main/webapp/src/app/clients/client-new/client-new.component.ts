import { Component, OnInit } from '@angular/core';
import {ClientService} from "../shared/client.service";
import {Location} from "@angular/common"

@Component({
  selector: 'app-client-new',
  templateUrl: './client-new.component.html',
  styleUrls: ['./client-new.component.css']
})
export class ClientNewComponent implements OnInit {

  constructor(private clientService: ClientService,
              private location: Location) { }

  ngOnInit() {
  }

  save(name) {
    console.log("save button pressed", name);

    this.clientService.save(name)
      .subscribe(_ => {
          console.debug("book saved");
          this.location.back();
        },
        err => console.error("error saving book", err));
  }

}
