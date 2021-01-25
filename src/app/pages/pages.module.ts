import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
	declarations: [ HomeComponent, AboutComponent ],
	imports: [ CommonModule, SharedModule, PagesRoutingModule ]
})
export class PagesModule {}
