// import angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SuiModule } from '@richardlt/ng2-semantic-ui';
import { FlexLayoutModule } from '@angular/flex-layout';

const SHARED_MODULES: Array<any> = [ CommonModule, FormsModule, ReactiveFormsModule, FlexLayoutModule, SuiModule ];

@NgModule({
	declarations: [],
	imports: [ ...SHARED_MODULES, RouterModule ],
	exports: [ ...SHARED_MODULES ]
})
export class SharedModule {}
