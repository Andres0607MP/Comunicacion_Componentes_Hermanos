import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private categoriaSubject = new BehaviorSubject<string>('home');
  categoria$ = this.categoriaSubject.asObservable();

  setCategoria(categoria: string) {
    this.categoriaSubject.next(categoria);
  }

  getCategoria(): string {
    return this.categoriaSubject.getValue();
  }
}
