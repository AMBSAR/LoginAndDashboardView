import { Component } from '@angular/core';
import {IEPModuleData} from '../../../Classes/common-classes'
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { DashboardHeaderComponent } from '../dashboard-header/dashboard-header.component';
import { ToolTitleCardComponent } from '../tool-title-card/tool-title-card.component';

@Component({
  selector: 'app-iepmain-dashboard',
  standalone: true,
  imports: [NavigationBarComponent, DashboardHeaderComponent, ToolTitleCardComponent],
  templateUrl: './iepmain-dashboard.component.html',
  styleUrl: './iepmain-dashboard.component.scss'
})
export class IEPMainDashboardComponent {
  moduleList : IEPModuleData[] = [
    { Icon:'/assets/Images/npi_icon.png', ModuleName: 'NPD', RouterLink: '/main/NPD'},
    { Icon:'/assets/Images/otr_icon.png', ModuleName: 'OTR', RouterLink: '/main/OTR'} 
  ];

  onModuleSelect(link: string) {

  }
}
