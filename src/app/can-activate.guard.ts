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
  canActivate(route: ActivatedRouteSnapshot) {
    const booleanPromise = this.authService.isUserAuthenticated(localStorage.getItem('token'), localStorage.getItem('userId'));
    return booleanPromise.then((authenticated) => {
      if (!authenticated) {
        localStorage.clear();
        window.location.reload();
        this.router.navigate(['dashboard']);
      }
      return authenticated;
    });
    // })
    //     response => {
    //       console.log("response", response);
    //       if(response) {
    //         return response;
    //       } else {
    //         window.location.reload();
            
    //         return false;
    //       }
    //     }
    //   );
  }
}