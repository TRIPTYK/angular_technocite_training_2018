import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormSkuComponent } from './form-sku/form-sku.component';
import { SkuReactiveComponent } from './sku-reactive/sku-reactive.component';

@NgModule({
  declarations: [AppComponent, FormSkuComponent, SkuReactiveComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
