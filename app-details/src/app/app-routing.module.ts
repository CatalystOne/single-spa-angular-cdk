import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnotherComponentComponent } from './another-component/another-component.component';
import { CountryComponent } from './country/country.component';
import { APP_BASE_HREF } from '@angular/common';
import { EmptyRouteComponent } from './empty-route/empty-route.component';


const routes: Routes = [
  { path: 'home/anotherComponent', component: AnotherComponentComponent },
  { path: 'home/abc', component: CountryComponent },
  { path: '**', component: EmptyRouteComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: '/home'
    }
  ],
})
export class AppRoutingModule { }

export const routingComponents = [CountryComponent, AnotherComponentComponent];