import { Component, Input, OnChanges, SimpleChanges, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CategoriaService } from '../../services/categoria.service';

@Component({
  selector: 'app-barra-navegacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './barra-navegacion.html',
  styleUrls: ['./barra-navegacion.scss']
})
export class BarraNavegacionComponent implements OnChanges, OnInit, OnDestroy {

  @Input() categoria: string = 'home';

  titulo = '';
  opciones: any[] = [];
  activaId = 'home';

  private subscription?: Subscription;

  constructor(private router: Router, private categoriaService: CategoriaService) {
    this.inicializarHome();
  }

  ngOnInit(): void {
    this.subscription = this.categoriaService.categoria$.subscribe(cat => {
      this.actualizarCategoria(cat);
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['categoria']) {
      this.actualizarCategoria(this.categoria);
    }
  }

  private inicializarHome() {
    this.titulo = 'Resumen';
    this.opciones = [
      { label: 'Resumen', id: 'home', ruta: 'home', funcional: true },
      { label: 'Buscar artículos', id: 'buscar', ruta: 'buscar', funcional: true },
      { label: 'Guía HTML', id: 'html', ruta: 'html', funcional: true },
      { label: 'Elementos', id: 'opt4', funcional: false }
    ];
    this.activaId = 'home';
  }

  private actualizarCategoria(categoria: string) {
    if (categoria === 'home') {
      this.titulo = 'Resumen';
      this.opciones = [
        { label: 'Resumen', id: 'home', ruta: 'home', funcional: true },
        { label: 'Buscar artículos', id: 'buscar', ruta: 'buscar', funcional: true },
        { label: 'Guía HTML', id: 'html', ruta: 'html', funcional: true },
        { label: 'Elementos', id: 'opt4', funcional: false }
      ];
      this.activaId = 'home';
    } else if (categoria === 'buscar') {
      this.titulo = 'Explorar';
      this.opciones = [
        { label: 'Tópico A', id: 'tema1', funcional: false },
        { label: 'Tópico B', id: 'tema2', funcional: false },
        { label: 'Tópico C', id: 'tema3', funcional: false },
        { label: 'Elementos', id: 'opt4', funcional: false }
      ];
      this.activaId = '';
    } else if (categoria === 'html') {
      this.titulo = 'Recursos HTML';
      this.opciones = [
        { label: 'Fragmento 1', id: 'cont1', funcional: false },
        { label: 'Fragmento 2', id: 'cont2', funcional: false },
        { label: 'Fragmento 3', id: 'cont3', funcional: false },
        { label: 'Elementos', id: 'opt4', funcional: false }
      ];
      this.activaId = '';
    }
  }

  navegar(op: any) {
    // Si la opción tiene ruta, navega a esa ruta
    if (op.ruta) {
      this.activaId = op.id;
      this.router.navigate([op.ruta]);
    } else {
      // Si no tiene ruta, navega a home por defecto
      this.activaId = op.id;
      this.router.navigate(['home']);
    }
  }

  esActivo(op: any): boolean {
    return this.activaId === op.id;
  }
}
