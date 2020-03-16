import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  regData = {};
  constructor(private _auth: AuthService, private _router: Router) {}
  registerUser() {
    console.log(this.regData);
    this._auth.registerUser(this.regData).subscribe(
      res => {
        console.log("Registered Sucessfully", res);
        localStorage.setItem("token", res.token);
        this._router.navigate(["/specialevents"]);
      },
      error => console.log("Error while registering: ", error)
    );
  }
  ngOnInit() {}
}
