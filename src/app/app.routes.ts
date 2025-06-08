import { Routes } from '@angular/router';
import { LoginViewComponent } from './Dashboards/Login/login-view/login-view.component';
import { IEPMainDashboardComponent } from './Dashboards/Main/iepmain-dashboard/iepmain-dashboard.component';
import { OTRDashboardComponent } from './Dashboards/OTR/otrdashboard/otrdashboard.component';
import { PageNotFoundComponent } from './Dashboards/page-not-found/page-not-found.component';
import { PageTBDComponent } from './Dashboards/page-tbd/page-tbd.component';
import { OperationsDashboardComponent } from './Dashboards/OTR/operations-dashboard/operations-dashboard.component';
import { HomePageComponent } from './Dashboards/Main/home-page/home-page.component';
import { authGuard } from './Common/Guards/auth.guard';

// export const routes: Routes = [
//     {
//         path: 'login',
//         component: LoginViewComponent
//     },
//     {
//         path: 'main',
//         component: IEPMainDashboardComponent,
//         canActivate : [authGuard],
//     },
//     {
//         path: 'home',
//         loadComponent: () =>
//             import('./Dashboards/Main/home-page/home-page.component').then(c => c.HomePageComponent),
//         //component: HomePageComponent,
//         outlet: 'Dashboard',
//         //canActivate : [authGuard],
//     },
//     {
//         path: 'OTR',
//         loadComponent: () =>
//             import('./Dashboards/OTR/otrdashboard/otrdashboard.component').then(c => c.OTRDashboardComponent),
//         //component: OTRDashboardComponent,
//         outlet: 'Dashboard',
//         //canActivate : [authGuard],
//     },
//     {
//         path: 'Operations',
//         loadComponent: () =>
//             import('./Dashboards/OTR/operations-dashboard/operations-dashboard.component').then(c => c.OperationsDashboardComponent),
//         outlet: 'ToolDashboard',
//                 //canActivate : [authGuard]
//     },
//     {
//         path: 'NPD',
//         loadComponent: () =>
//             import('./Dashboards/page-tbd/page-tbd.component').then(c => c.PageTBDComponent),
//         outlet: 'Dashboard',
//         //canActivate : [authGuard]
//     }, {
//         path: '**',
//         loadComponent: () =>
//             import('./Dashboards/page-not-found/page-not-found.component').then(c => c.PageNotFoundComponent),
//         outlet: 'Dashboard',
//         //canActivate : [authGuard]
//     },
//     {
//         path: '',
//         redirectTo: '/main',
//         pathMatch: 'full'
//     },
//     {
//         path: '**',
//         component: PageNotFoundComponent
//     }
// ];


export const routes: Routes = [
    {
        path: 'login',
        component: LoginViewComponent
    },
    {
        path: 'main',
        loadComponent: () =>
            import('./Dashboards/Main/iepmain-dashboard/iepmain-dashboard.component').then(c => c.IEPMainDashboardComponent),

        children: [
            {
                path: 'home',
                loadComponent: () =>
                    import('./Dashboards/Main/home-page/home-page.component').then(c => c.HomePageComponent),
            },
            {
                path: 'OTR',
                loadComponent: () =>
                    import('./Dashboards/OTR/otrdashboard/otrdashboard.component').then(c => c.OTRDashboardComponent),
                //canActivate: [authGuard],
                children: [
                    {
                        path: 'Operations',
                        loadComponent: () =>
                            import('./Dashboards/OTR/operations-dashboard/operations-dashboard.component').then(c => c.OperationsDashboardComponent),
                        canActivate: [authGuard]
                    },
                    {
                        path: '',
                        redirectTo: '/main/OTR/Operations',
                        pathMatch: 'full',
                    },
                    {
                        path: '**',
                        loadComponent: () =>
                            import('./Dashboards/page-tbd/page-tbd.component').then(c => c.PageTBDComponent),
                        //canActivate : [authGuard]
                    },
                ],
            },
            {
                path: 'NPD',
                loadComponent: () =>
                    import('./Dashboards/page-tbd/page-tbd.component').then(c => c.PageTBDComponent),
                //canActivate : [authGuard]
            },
            {
                path: '',
                redirectTo: '/main/home',
                pathMatch: 'full',
            },
            {
                path: '**',
                component: PageNotFoundComponent
            }
        ],
        // children: [
        //     {
        //         path: 'home',
        //         loadComponent: () =>
        //             import('./Dashboards/Main/home-page/home-page.component').then(c => c.HomePageComponent),
        //         outlet: 'Dashboard',
        //     },
        //     {
        //         path: 'OTR',
        //         loadComponent: () =>
        //             import('./Dashboards/OTR/otrdashboard/otrdashboard.component').then(c => c.OTRDashboardComponent),
        //         outlet: 'Dashboard',
        //         children: [
        //             {
        //                 path: 'Operations',
        //                 loadComponent: () =>
        //                     import('./Dashboards/OTR/operations-dashboard/operations-dashboard.component').then(c => c.OperationsDashboardComponent),
        //                 outlet: 'ToolDashboard',
        //                 canActivate: [authGuard]
        //             }
        //         ],
        //         canActivate: [authGuard],
        //     },
        //     {
        //         path: 'NPD',
        //         loadComponent: () =>
        //             import('./Dashboards/page-tbd/page-tbd.component').then(c => c.PageTBDComponent),
        //         outlet: 'Dashboard',
        //         //canActivate : [authGuard]
        //     },
        //     {
        //         path: '',
        //         redirectTo: 'main/(Dashboard:home)',
        //         outlet: 'Dashboard',
        //         //canActivate : [authGuard]
        //     },
        //     {
        //         path: '**',
        //         loadComponent: () =>
        //             import('./Dashboards/page-tbd/page-tbd.component').then(c => c.PageTBDComponent),
        //         outlet: 'Dashboard',
        //         //canActivate : [authGuard]
        //     }
        // ],

        //canActivate: [authGuard],
    },
    {
        path: '',
        //redirectTo: '/login',
        redirectTo: '/main/OTR',
        pathMatch: 'full',
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];
