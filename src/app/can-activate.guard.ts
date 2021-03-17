import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthenticationService} from './services/authentication.service';
@Injectable({
  providedIn: 'root'
})
export class CanActivateGuard implements CanActivate {
  constructor(private authService: AuthenticationService, private router: Router) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // return true;
    let flag = false;
    if(localStorage.getItem('token') && localStorage.getItem('userId'))
    {
      const response = this.authService.isUserAuthenticated(localStorage.getItem('token'), localStorage.getItem('userId'));
      console.log("response", response);
      if (response) {
        flag = true;
      } else {
        this.router.navigate(['login']);
        flag = false;
      }
    } else {
      flag = false;
    }
    return flag;
  }
}