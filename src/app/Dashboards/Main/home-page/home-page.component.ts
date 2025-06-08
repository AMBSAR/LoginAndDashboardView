import { Component } from '@angular/core';
import {IEPModuleData} from '../../../Classes/common-classes';
import {Router} from '@angular/router';
import { ToolTitleCardComponent } from '../tool-title-card/tool-title-card.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ToolTitleCardComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})

export class HomePageComponent {
 moduleList : IEPModuleData[] = [
    { Icon:'/assets/Images/npi_icon.png', ModuleName: 'NPD', RouterLink: '/main/NPD'},
    { Icon:'/assets/Images/otr_icon.png', ModuleName: 'OTR', RouterLink: '/main/OTR'} 
  ];

   constructor(private router: Router){}

  onModuleSelect(link: string) {
    this.router.navigate([link]);
    //this.router.navigate([{ outlets: { primary: 'main', Dashboard: link } }]);
    //this.router.navigate([{ outlets: { primary: ['main'], Dashboard: [link] } }]);
  }
}
