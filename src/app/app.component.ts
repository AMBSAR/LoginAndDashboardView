import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {KENDO_ICONS } from '@progress/kendo-angular-icons'
import { KENDO_SVGICON } from '@progress/kendo-angular-icons';
import { KENDO_TYPOGRAPHY } from "@progress/kendo-angular-typography";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, KENDO_ICONS, KENDO_SVGICON, KENDO_TYPOGRAPHY],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'IEP_Assessment';
}
