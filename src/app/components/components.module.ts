import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularMaterialModule } from '../angular-material/angular-material.module';

import { UserDetailsComponent } from './user-details/user-details.component';
import { FilterComponent } from './filter/filter.component';
import { FormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';
import { PipesModule } from '../pipes/pipes.module';




@NgModule({
  declarations: [ 
    UserDetailsComponent, 
    FilterComponent, TableComponent,
   ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule,
    PipesModule,
       
  ],
  exports: [
    UserDetailsComponent,
    FilterComponent,
    FormsModule,
    TableComponent,

  ]
})
export class ComponentsModule { }
