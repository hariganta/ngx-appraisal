// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Components
import { YaHousingComponent } from './ya-housing.component';
import { BaseFormComponent } from './../../shared/components/base-form/base-form.component';

// YA Housing Form Routes
const ROUTES: Route[] = [
  {
    path: '',
    component: YaHousingComponent
  }
];


@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    BaseFormComponent,
    YaHousingComponent
  ],
  exports: [RouterModule]
})
export class YaHousingModule { }