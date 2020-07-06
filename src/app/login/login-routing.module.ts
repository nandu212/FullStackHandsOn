import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login.component";
import { WelcomeComponent } from "./welcome/welcome.component";

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'welcome', component: WelcomeComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoginRoutingModule {

}