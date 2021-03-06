import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EventsComponent } from "./events/events.component";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { SpecialEventsComponent } from "./special-events/special-events.component";
import { AuthGuard } from "./authguard/auth.guard";

const routes: Routes = [
  { path: "events", component: EventsComponent },
  {
    path: "specialevents",
    component: SpecialEventsComponent,
    canActivate: [AuthGuard]
  },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
