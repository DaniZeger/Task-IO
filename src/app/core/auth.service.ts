import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivateChild {

  redirectUrl = 'home'

  constructor(
    private api: ApiService,
    private router: Router
  ) { }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | Promise<boolean> {
    // console.log('AuthService: canActivateChild called');
    if (this.isLoggedIn()) return true

    this.redirectUrl = state.url
    return this.router.navigate(['login'])
  }

  isLoggedIn(): boolean {
    const token = this.api.getToken()
    return (token && token.length > 0) ? true : false
  }
}
