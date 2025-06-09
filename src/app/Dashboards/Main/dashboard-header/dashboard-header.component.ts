import { Component, Input, OnInit } from '@angular/core';
// import { KENDO_SVGICON } from '@progress/kendo-svg-icons';
import { KENDO_ICONS } from "@progress/kendo-angular-icons";
import { sortDescIcon, commentIcon, questionCircleIcon, bellIcon } from '@progress/kendo-svg-icons';
import { EventManagerService } from '../../../Services/event-manager.service';


@Component({
  selector: 'app-dashboard-header',
  standalone: true,
  imports: [KENDO_ICONS],
  templateUrl: './dashboard-header.component.html',
  styleUrl: './dashboard-header.component.scss'
})


export class DashboardHeaderComponent implements OnInit {
  SelectedMainDashboard: String = '';

  public unOrderedListIcon = sortDescIcon;
  public messagesIcon = commentIcon;
  public helpIcon = questionCircleIcon;
  public notificationIcon = bellIcon;

  LoggedInUserImage: string = '';
  showNotification: boolean = true;
  NotificationCount: number = 1;

  constructor(private eventManager: EventManagerService) {}

  ngOnInit(): void {
    this.eventManager.eventHandler.subscribe(msg => {
      this.notifyEvent(msg);
    });
  }

  notifyEvent(message: string) {
    if (message === "MAIN_DASHBOARD_SELECTION_CHANGED") {
        this.SelectedMainDashboard = this.eventManager.getMainDashboard();
    }
  }
}
