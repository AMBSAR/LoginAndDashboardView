import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KENDO_ICONS } from "@progress/kendo-angular-icons";
import { moreHorizontalIcon} from '@progress/kendo-svg-icons';
import { chevronDoubleLeftIcon} from '@progress/kendo-svg-icons';
import { ProjectTreeComponent } from '../ProjectTree/project-tree/project-tree.component';
import { IspoDashboardComponent } from '../ISPO/ispo-dashboard/ispo-dashboard.component';
import { KENDO_TABSTRIP } from '@progress/kendo-angular-layout';
import { KENDO_LABEL } from '@progress/kendo-angular-label';

@Component({
  selector: 'app-otrdashboard',
  standalone: true,
  imports: [RouterOutlet, KENDO_ICONS, ProjectTreeComponent, IspoDashboardComponent, KENDO_TABSTRIP, KENDO_LABEL],
  templateUrl: './otrdashboard.component.html',
  styleUrl: './otrdashboard.component.scss'
})
export class OTRDashboardComponent {
public moreHorizontalIcon = moreHorizontalIcon;
public collapseIcon = chevronDoubleLeftIcon;
}
