import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UsersComponent } from './users/users.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material_ui/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogintestComponent } from './logintest/logintest.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FilterPipe } from './users/filter.pipe';
import { DialogcontentComponent } from './contactus/dialogcontent/dialogcontent.component';
import { ImageuploadComponent } from './imageupload/imageupload.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { TextlimitPipe } from './sharecomponent/textlimit.pipe';
import { QuizAppComponent } from './quiz-app/quiz-app.component';
import { WelcomeQuizComponent } from './welcome-quiz/welcome-quiz.component';
import { DialogQuizComponent } from './quiz-app/dialog-quiz/dialog-quiz.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductService } from './service/product.service';
import { UsersService } from './services/users.service';
import { TestComponent } from './test/test.component';
import { ModifyrequestInterceptor } from './modifyrequest.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UsersComponent,
    UserdetailsComponent,
    ContactusComponent,
    HomeComponent,
    LoginComponent,
    LogintestComponent,
    DashboardComponent,
    FilterPipe,
    DialogcontentComponent,
    ImageuploadComponent,
    ProductsComponent,
    CartComponent,
    TextlimitPipe,
    QuizAppComponent,
    WelcomeQuizComponent,
    DialogQuizComponent,
    ProductDetailsComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [ProductService, UsersService, {provide: HTTP_INTERCEPTORS, useClass:ModifyrequestInterceptor, multi: true} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
