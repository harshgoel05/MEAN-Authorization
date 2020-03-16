import { Injectable } from "@angular/core";
import { HttpClientModule, HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private _registerUrl = "http://localhost:3000/api/register";
  private _loginUrl = "http://localhost:3000/api/login";

  constructor(private http: HttpClient) {}

  registerUser(user) {
    // console.log(user);
    return this.http.post<any>(this._registerUrl, user);
  }

  loginUser(user) {
    console.log(user);
    return this.http.post<any>(this._loginUrl, user);
  }
  logoutUser() {
    return localStorage.removeItem("token");
  }
  loggedIn() {
    return !!localStorage.getItem("token");
  }
  getToken() {
    return localStorage.getItem("token");
  }
}
