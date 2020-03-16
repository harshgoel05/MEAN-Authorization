import { Component, OnInit } from "@angular/core";
import { EventService } from "../service/event.service";
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";
@Component({
  selector: "app-special-events",
  templateUrl: "./special-events.component.html",
  styleUrls: ["./special-events.component.css"]
})
export class SpecialEventsComponent implements OnInit {
  specialevents = [];
  constructor(private _eventService: EventService, private _router: Router) {}

  ngOnInit() {
    this._eventService.getSpecialEvents().subscribe(
      res => (this.specialevents = res),
      error => {
        if (error instanceof HttpErrorResponse) {
          if (error.status === 401) {
            this._router.navigate(["/login"]);
          }
          console.log("Error getting special events", error);
        }
      }
    );
  }
}
