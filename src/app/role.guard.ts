import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const roles = sessionStorage.getItem('roles'); // Retrieve user roles from sessionStorage

    // Check if the user has the required role for the route
    if (route.data['roles'].includes(roles)) {
      return true; // Allow access to the route
    }

    // Redirect to a different route or show an error message
    alert('Access denied');
    return false; // Block access to the route
  }
}
