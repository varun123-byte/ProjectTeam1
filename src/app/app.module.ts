import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { LayoutComponent } from './Components/layout/layout.component';
import { SearchboxComponent } from './Components/searchbox/searchbox.component';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import {MatGridListModule} from '@angular/material/grid-list';
import { FooterComponent } from './Components/footer/footer.component';
import { JobsComponent } from './Components/jobs/jobs.component';
import { TestimonialComponent } from './Components/testimonial/testimonial.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JobListComponent } from './Components/job-list/job-list.component';
import {MatBadgeModule} from '@angular/material/badge';
import { ServicesComponent } from './Components/services/services.component';
import { BlogComponent } from './Components/blog/blog.component';
import { Layout1Component } from './Components/layout1/layout1.component';
import { DesignvComponent } from './Components/designv/designv.component';
import { TestComponent } from './Components/test/test.component';
import { JobDetailsDialogComponent } from './Components/job-details-dialog/job-details-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LayoutComponent,
    SearchboxComponent,
    FooterComponent,
    JobsComponent,
    TestimonialComponent,
    JobListComponent,
    ServicesComponent,
    BlogComponent,
    Layout1Component,
    DesignvComponent,
    TestComponent,
    JobDetailsDialogComponent,

  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatDividerModule,
    MatDialogModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatCardModule,
    MatGridListModule,
    NgbModule,
    MatBadgeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
