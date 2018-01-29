import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SetupComponent} from './setup/setup.component';
import {RoutesComponent} from './routes/routes.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'setup'
    }, {
        path: 'setup',
        component: SetupComponent
    },
    {
        path: 'routes',
        component: RoutesComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

