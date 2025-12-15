import { Component, EventEmitter, Output, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { CategoriaService } from '../../services/categoria.service';

@Component({
  selector: 'app-barra-interaccion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './barra_interaccion.component.html',
  styleUrls: ['./barra_interaccion.component.scss']
})
export class BarraInteraccionComponent implements OnInit, OnDestroy {
  @Output() categoriaSeleccionada = new EventEmitter<string>();
  @Input() categoriaActual: string = 'home';
  private subscription?: Subscription;

  categorias = [
    { id: 'home', label: 'Inicio', icono: 'fa-solid fa-house' },
    { id: 'buscar', label: 'Explorar', icono: 'fa-solid fa-magnifying-glass' },
    { id: 'html', label: 'Recursos', icono: 'fa-solid fa-file-lines' }
  ];

  constructor(private categoriaService: CategoriaService) {}

  ngOnInit(): void {
    this.subscription = this.categoriaService.categoria$.subscribe(cat => {
      this.categoriaActual = cat;
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  seleccionar(categoria: string) {
    this.categoriaActual = categoria;
    this.categoriaSeleccionada.emit(categoria);
    this.categoriaService.setCategoria(categoria);
  }

  esActivo(id: string): boolean {
    return this.categoriaActual === id;
  }
}
