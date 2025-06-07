import { Routes } from '@angular/router';
import { LoginViewComponent } from './Dashboards/Login/login-view/login-view.component';
import { IEPMainDashboardComponent } from './Dashboards/Main/iepmain-dashboard/iepmain-dashboard.component';
import { OTRDashboardComponent } from './Dashboards/OTR/otrdashboard/otrdashboard.component';
import { PageNotFoundComponent } from './Dashboards/page-not-found/page-not-found.component';
import { PageTBDComponent } from './Dashboards/page-tbd/page-tbd.component';
import { OperationsDashboardComponent } from './Dashboards/OTR/operations-dashboard/operations-dashboard.component';
import { authGuard } from './Common/Guards/auth.guard';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginViewComponent
    },
    {
        path: 'home',
        component: IEPMainDashboardComponent,
        //canActivate : [authGuard],

        children: [
            {
                path: 'OTR',
                component: OTRDashboardComponent,
                //canActivate : [authGuard],

                children: [
                    {
                        path: 'Operations',
                        component: OperationsDashboardComponent,
                        //canActivate : [authGuard]
                    }, {
                        path: '**',
                        component: PageNotFoundComponent,
                        //canActivate : [authGuard]
                    }
                ]
            }, {
                path: 'NPD',
                component: PageTBDComponent,
                //canActivate : [authGuard]
            }, {
                path: '**',
                component: PageNotFoundComponent,
                //canActivate : [authGuard]
            }
        ]
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];
