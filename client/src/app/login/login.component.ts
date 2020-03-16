import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginData = {};
  constructor(private _auth: AuthService, private _router: Router) {}
  loginUser() {
    console.log(this.loginData);
    this._auth.loginUser(this.loginData).subscribe(
      res => {
        console.log("Loggedin Sucessfully", res);
        localStorage.setItem("token", res.token);
        this._router.navigate(["/specialevents"]);
      },
      error => console.log("Error while Logging in: ", error)
    );
  }
  ngOnInit() {}
}
