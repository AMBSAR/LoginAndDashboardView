import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { KENDO_ICONS } from "@progress/kendo-angular-icons";
import {anchorIcon, tableIcon, folderAddIcon, folderIcon, checkOutlineIcon, myspaceIcon, gearIcon, logoutIcon} from '@progress/kendo-svg-icons';
import { UserAuthenticatorService } from '../../../Services/user-authenticator.service';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [KENDO_ICONS, CommonModule, RouterModule],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.scss'
})

export class NavigationBarComponent {

  constructor(private authService: UserAuthenticatorService) { }

  home = { name: 'anchor', icon: anchorIcon, router: '/main/home' };
items = [
    { name: 'ProjectInfo', icon: tableIcon, router: '/main/OTR/ProjectInfo' },
    { name: 'Operations', icon: folderAddIcon, router: '/main/OTR/Operations' },
    { name: 'Quality', icon: folderIcon, router: '/main/OTR/Quality' },
    { name: 'Engineering', icon: checkOutlineIcon, router: '/main/OTR/Engineering' },
    { name: 'Privilege', icon: myspaceIcon, router: '/Privilege' },
    { name: 'ControlPanel', icon: gearIcon, router: '/ControlPanel' },
    { name: 'Logout', icon: logoutIcon, router: '/login' }
  ];

  dashboardSelected(link: string) {
    if (link === '/login') {
      this.authService.clearLoginData();
    }
  }
}
