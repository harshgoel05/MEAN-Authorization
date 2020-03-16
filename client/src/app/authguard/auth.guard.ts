import { Injectable } from "@angular/core";
import {
  CanActivate,
  Router,
  UrlSegment,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../auth.service";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(private _authService: AuthService, private _router: Router) {}
  canActivate(): boolean {
    console.log(this._authService.loggedIn());
    if (this._authService.loggedIn()) {
      return true;
    } else {
      this._router.navigate(["/login"]);
      return false;
    }
  }
  //   canActivateChild(
  //     next: ActivatedRouteSnapshot,
  //     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //     return true;
  //   }
  //   canLoad(
  //     route: Route,
  //     segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
  //     return true;
  //   }
}
