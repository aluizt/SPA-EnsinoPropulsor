import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from "@angular/material/dialog";
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { MenuInicialComponent } from './menu-inicial/menu-inicial.component';

import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import {MatIconModule} from '@angular/material/icon';


import { MonitoriasComponent } from './monitorias/monitorias.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import {DropdownModule} from 'primeng/dropdown';

import { MatAutocompleteModule,MatBadgeModule, MatBottomSheetModule, MatButtonModule,
         MatButtonToggleModule,MatCardModule,MatCheckboxModule,MatChipsModule,MatDatepickerModule, 
         MatDividerModule,MatExpansionModule,MatGridListModule,MatInputModule,MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';
import { EditarComponent } from './editar/editar.component';
import { EditarNoiteComponent } from './editar-noite/editar-noite.component';
import { EditarTardeComponent } from './editar-tarde/editar-tarde.component';
import { EditarVespertinoComponent } from './editar-vespertino/editar-vespertino.component';

@NgModule({

  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    MenuInicialComponent,
    MonitoriasComponent,
    EditarComponent,
    EditarNoiteComponent,
    EditarTardeComponent,
    EditarVespertinoComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    AppRoutingModule,
    FormsModule, 
    MaterialModule,
    MatIconModule,
    HttpModule,
    TableModule,
    ButtonModule,
    FormsModule,
    CalendarModule, 
    DropdownModule, 
    HttpClientModule,
  
  ],
  exports:[
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
  ],

  providers: [HttpClientModule],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
