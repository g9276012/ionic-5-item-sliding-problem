import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { WorkPage } from './work.page';

import { WorkPageRoutingModule } from './work-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkPageRoutingModule
  ],
  declarations: [WorkPage]
})
export class WorkPageModule { }
