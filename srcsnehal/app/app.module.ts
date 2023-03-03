import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { BannersliderComponent } from './bannerslider/bannerslider.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OwlModule } from 'ngx-owl-carousel';  
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SearchResultComponent } from './search-result/search-result.component';
import { PartnerSliderComponent } from './partner-slider/partner-slider.component';
import { RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataNotFoundComponent } from './data-not-found/data-not-found.component';
import { HorizonKnowSliderComponent } from './horizon-know-slider/horizon-know-slider.component';
import { SearchresultPipe } from './search-result/searchresult.pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import {LazyLoadImageModule} from "ng-lazyload-image";
import { SinglaPageComponent } from './singla-page/singla-page.component';
import { AppImgDirective } from './singla-page/app-img.directive';
import { DragScrollModule } from 'ngx-drag-scroll';
import { SidebarComponent } from './sidebar/sidebar.component';
import { OverviewComponent } from './overview/overview.component';
import { SingleAboutComponent } from './single-about/single-about.component';
import { SinglefloorPlanComponent } from './singlefloor-plan/singlefloor-plan.component';
import { AminitiesComponent } from './aminities/aminities.component';
import { MapComponent } from './map/map.component';
import { ModalCComponent } from './modal-c/modal-c.component';
import { ReducelengthPipe } from './search-result/reducelength.pipe';
import { PropertyComponent } from './property/property.component';
import { SubPagesBannerComponent } from './sub-pages-banner/sub-pages-banner.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { MutualFundsComponent } from './mutual-funds/mutual-funds.component';
import { ListPropByDeveloperComponent } from './list-prop-by-developer/list-prop-by-developer.component';
import {MatSliderModule} from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TagInputModule } from 'ngx-chips';
import { ConvertdataobPipe } from './convertdataob.pipe';
import { FilterjsondataPipe } from './filterjsondata.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    routingComponents,
    BannersliderComponent,
    SearchResultComponent,
    PartnerSliderComponent,
    DataNotFoundComponent,
    HorizonKnowSliderComponent,
    SearchresultPipe,
    SinglaPageComponent,
    AppImgDirective,
    SidebarComponent,
    OverviewComponent,
    SingleAboutComponent,
    SinglefloorPlanComponent,
    AminitiesComponent,
    MapComponent,
    ModalCComponent,
    ReducelengthPipe,
    PropertyComponent,
    SubPagesBannerComponent,
    InsuranceComponent,
    MutualFundsComponent,
    ListPropByDeveloperComponent,
    PageNotFoundComponent,
    ConvertdataobPipe,
    FilterjsondataPipe,
  ],
  imports: [
    TagInputModule,
    BrowserModule,
    NgxSliderModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSlideToggleModule,
    AppRoutingModule,
    OwlModule,
    CarouselModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    AutocompleteLibModule,
    LazyLoadImageModule,
    DragScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
