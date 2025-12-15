import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-buscar',
  standalone: true,
  templateUrl: './buscar.html',
  styleUrls: ['./buscar.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Buscar {}
