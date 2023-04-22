import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule, } from '@angular/material/form-field';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatInputModule} from '@angular/material/input'
import { MatChipsModule} from "@angular/material/chips";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import { HeaderComponent } from './header/header.component';
import { NewCardComponent } from './new-card/new-card.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { CardComponent } from './card/card.component';
import { BigCardComponent } from './big-card/big-card.component';
import { SortByComponent } from './sort-by/sort-by.component';


@NgModule({
  declarations: [
    HeaderComponent,
    NewCardComponent,
    RegistrationComponent,
    LoginComponent,
    CardComponent,
    BigCardComponent,
    SortByComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatAutocompleteModule
  ],
  exports:[
    HeaderComponent,
    NewCardComponent,
    RegistrationComponent,
    LoginComponent,
    CardComponent,
    BigCardComponent,
    SortByComponent
  ],
})
export class ComponentModule { }
