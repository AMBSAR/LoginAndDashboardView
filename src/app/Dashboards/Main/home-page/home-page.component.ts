import { Component, OnInit } from '@angular/core';
import {IEPModuleData} from '../../../Classes/common-classes';
import {Router} from '@angular/router';
import { ToolTitleCardComponent } from '../tool-title-card/tool-title-card.component';
import { EventManagerService } from '../../../Services/event-manager.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ToolTitleCardComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})

export class HomePageComponent implements OnInit{
 moduleList : IEPModuleData[] = [
    { Icon:'/assets/Images/npi_icon.png', ModuleName: 'NPD', RouterLink: '/main/NPD'},
    { Icon:'/assets/Images/otr_icon.png', ModuleName: 'OTR', RouterLink: '/main/OTR'} 
  ];

   constructor(private router: Router, private eventManager: EventManagerService){}

  onModuleSelect(selection: IEPModuleData) {
    this.eventManager.setMainDashboard(selection.ModuleName);
    this.eventManager.publish("MAIN_DASHBOARD_SELECTION_CHANGED");
    this.router.navigate([selection.RouterLink]);
    //this.router.navigate([{ outlets: { primary: 'main', Dashboard: link } }]);
    //this.router.navigate([{ outlets: { primary: ['main'], Dashboard: [link] } }]);
  }

  ngOnInit(): void {
    this.eventManager.setMainDashboard('');
    this.eventManager.publish("MAIN_DASHBOARD_SELECTION_CHANGED");
  }
}
