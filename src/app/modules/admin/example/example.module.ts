import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ExampleComponent } from 'app/modules/admin/example/example.component';
import { ProjectComponent } from './project/project.component';

const exampleRoutes: Route[] = [
    {
        path     : '',
        component: ExampleComponent
    },
    {
        path     : 'project',
        component: ProjectComponent
    }
];

@NgModule({
    declarations: [
        ExampleComponent,
        ProjectComponent
    ],
    imports     : [
        RouterModule.forChild(exampleRoutes)
    ]
})
export class ExampleModule
{
}
