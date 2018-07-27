import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NavigationComponent } from "./navigation.component";
import { LayoutComponent } from "../layout/layout.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    NavigationComponent,
    LayoutComponent
  ],
  exports: [
    NavigationComponent,
    LayoutComponent
  ],
  providers : []
})
export class NavigationModule { }
