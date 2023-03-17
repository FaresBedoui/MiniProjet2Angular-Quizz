import { NgModule } from "@angular/core";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatMenuModule} from '@angular/material/menu';




const Material =[MatToolbarModule,MatFormFieldModule,MatButtonModule, MatListModule,MatGridListModule,MatIconModule,MatMenuModule,MatButtonToggleModule];
@NgModule({
  imports:[Material],
  exports:[Material]
})

export class MaterialModule{}
