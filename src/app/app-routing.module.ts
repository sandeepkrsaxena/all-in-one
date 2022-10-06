import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ImageuploadComponent } from './imageupload/imageupload.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { QuizAppComponent } from './quiz-app/quiz-app.component';
import { CanAuthGaurdGuard } from './services/can-auth-gaurd.guard';
import { TestComponent } from './test/test.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UsersComponent } from './users/users.component';
import { WelcomeQuizComponent } from './welcome-quiz/welcome-quiz.component';

const routes: Routes = [
 { path: "", component: HomeComponent, pathMatch:"full" },
  {path: "users", component: UsersComponent},
  {path: "users/:id", component: UserdetailsComponent},
  {path: "contact-us", component: ContactusComponent},
  { path: "login", component: LoginComponent },
  {path: "dashboard", component: DashboardComponent},
  { path: "image-upload", component: ImageuploadComponent},
  { path: "products", component: ProductsComponent },
  { path: "products/:id", component: ProductDetailsComponent },
  { path: "cart", component:CartComponent },
  { path: "welcome-quiz", component: WelcomeQuizComponent },
  { path: "quiz-test", canActivate:[CanAuthGaurdGuard], component:QuizAppComponent },
  {path: "test", component:TestComponent},
  {path: "crud-app", loadChildren: () => import("./crud/crud/crud-form/crud-form.module").then(mode => mode.CrudFormModule)},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
