import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-html',
  standalone: true,
  templateUrl: './html.html',
  styleUrls: ['./html.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Html {}
