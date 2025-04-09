import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): Observable<boolean> {
    // TODO: Implementar verificação de token
    const token = localStorage.getItem('token');
    
    if (token) {
      return new Observable<boolean>(observer => {
        observer.next(true);
        observer.complete();
      });
    }

    this.router.navigate(['/login']);
    return new Observable<boolean>(observer => {
      observer.next(false);
      observer.complete();
    });
  }
} 