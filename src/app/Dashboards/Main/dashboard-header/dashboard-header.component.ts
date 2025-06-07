import { Component } from '@angular/core';
// import { KENDO_SVGICON } from '@progress/kendo-svg-icons';
import { KENDO_ICONS } from "@progress/kendo-angular-icons";
import { sortDescIcon, commentIcon, questionCircleIcon, bellIcon } from '@progress/kendo-svg-icons';


@Component({
  selector: 'app-dashboard-header',
  standalone: true,
  imports: [KENDO_ICONS],
  templateUrl: './dashboard-header.component.html',
  styleUrl: './dashboard-header.component.scss'
})


export class DashboardHeaderComponent {
  SelectedMainDashboard: String = '';

  public unOrderedListIcon = sortDescIcon;
  public messagesIcon = commentIcon;
  public helpIcon = questionCircleIcon;
  public notificationIcon = bellIcon;

  LoggedInUserImage: string = '';
  showNotification: boolean = true;
  NotificationCount: number = 1;
}
