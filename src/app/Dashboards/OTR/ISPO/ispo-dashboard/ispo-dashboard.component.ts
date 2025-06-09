import { Component, OnInit } from '@angular/core';
import { ProjectData } from '../../../../Classes/common-classes';
import { EventManagerService } from '../../../../Services/event-manager.service';
import { KENDO_SVGICON } from '@progress/kendo-angular-icons';
import { xIcon, bellIcon } from '@progress/kendo-svg-icons';

@Component({
  selector: 'app-ispo-dashboard',
  standalone: true,
  imports: [KENDO_SVGICON],
  templateUrl: './ispo-dashboard.component.html',
  styleUrl: './ispo-dashboard.component.scss'
})
export class IspoDashboardComponent implements OnInit {
  SelectedProject: ProjectData | null = null;
  HasAnyNotification: boolean = true;

  public bellIcon = bellIcon;
  public closeIcon = xIcon;

  constructor(private eventManager: EventManagerService) {}

  ngOnInit(): void {
    this.eventManager.eventHandler.subscribe(msg => {
      this.notifyEvent(msg);
    });
  }

  notifyEvent(message: string) {
    if (message === "PROJECT_SELECTION_CHANGED") {
        this.SelectedProject = this.eventManager.getProjectSelection();
    }
  }
}
