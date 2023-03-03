import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { HomeLoanComponent } from './home-loan/home-loan.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { BannersliderComponent } from './bannerslider/bannerslider.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { SinglaPageComponent } from './singla-page/singla-page.component';
import { OverviewComponent } from './overview/overview.component';
import { MapComponent } from './map/map.component';
import { AminitiesComponent } from './aminities/aminities.component';
import { SinglefloorPlanComponent } from './singlefloor-plan/singlefloor-plan.component';
import { SingleAboutComponent } from './single-about/single-about.component';
import { PropertyComponent } from './property/property.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { MutualFundsComponent } from './mutual-funds/mutual-funds.component';
import { ListPropByDeveloperComponent } from './list-prop-by-developer/list-prop-by-developer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  
  {path: '', component : HomeComponent },
  // {path: '',redirectTo:'/home', pathMatch:'full' },
  { path:'contact', component: ContactComponent },
  {path:'services',component:ServicesComponent},
  {path:'homeloan',component:HomeLoanComponent},
  {path:'about',component:AboutComponent},
  {path: 'banner', component : BannersliderComponent },
  {path: 'property', component : PropertyComponent },
  {path: 'insurance', component : InsuranceComponent },
  {path: 'mutual-funds', component : MutualFundsComponent },
  {path: 'searchPage', component : SearchResultComponent },
  {path: 'searchpropertybydeveloper/:id', component : ListPropByDeveloperComponent },
  {path: 'singlePage/:id', component : SinglaPageComponent },
  {path: '**', component : PageNotFoundComponent },
//   {path: 'singlePage', children: [
//     {path: 'amenities', component: AminitiesComponent}
//  ]} 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ContactComponent,ServicesComponent,HomeComponent,HomeLoanComponent,AboutComponent,SearchResultComponent,BannersliderComponent,SinglaPageComponent,PropertyComponent,InsuranceComponent,MutualFundsComponent,ListPropByDeveloperComponent,PageNotFoundComponent];