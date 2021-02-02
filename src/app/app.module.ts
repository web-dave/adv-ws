import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookModule } from './book/book.module';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { createCustomElement } from '@angular/elements';
import { BookComponent } from './book/book.component';

@NgModule({
  declarations: [MainNavigationComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BookModule
  ]
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
    const bookFeature = createCustomElement(BookComponent, { injector });
    console.log(bookFeature);
    customElements.define('book-shop', bookFeature);
  }
  ngDoBootstrap() {}
}
