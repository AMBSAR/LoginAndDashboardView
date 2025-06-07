import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KENDO_TABSTRIP } from '@progress/kendo-angular-layout';

@Component({
  selector: 'app-operations-dashboard',
  standalone: true,
  imports: [RouterOutlet, KENDO_TABSTRIP],
  templateUrl: './operations-dashboard.component.html',
  styleUrl: './operations-dashboard.component.scss'
})
export class OperationsDashboardComponent {

}
