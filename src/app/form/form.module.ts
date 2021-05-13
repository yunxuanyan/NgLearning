import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsComponent } from "./reactive-forms/reactive-forms.component";
import { ReactiveFormsModule } from "@angular/forms";
import { formRouting } from "./form.routing";

@NgModule({
  declarations: [ReactiveFormsComponent],
  imports: [CommonModule, ReactiveFormsModule, formRouting],
})
export class FormModule {}
