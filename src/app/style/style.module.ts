import { CommonModule } from '@angular/common';
import { HostChildComponent } from './host-child/host-child.component';
import { HostContextChildComponent } from './host-context-child/host-context-child.component';
import { HostContextGrandChildComponent } from './host-context-grand-child/host-context-grand-child.component';
import { HostContextParentComponent } from './host-context-parent/host-context-parent.component';
import { HostContextSblingComponent } from './host-context-sbling/host-context-sbling.component';
import { HostGrandChildComponent } from './host-grand-child/host-grand-child.component';
import { HostParentComponent } from './host-parent/host-parent.component';
import { HostSblingComponent } from './host-sbling/host-sbling.component';
import { NgDeepChildComponent } from './ng-deep-child/ng-deep-child.component';
import { NgDeepGrandChildComponent } from './ng-deep-grand-child/ng-deep-grand-child.component';
import { NgDeepParentComponent } from './ng-deep-parent/ng-deep-parent.component';
import { NgDeepSblingComponent } from './ng-deep-sbling/ng-deep-sbling.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [HostParentComponent, HostChildComponent, HostSblingComponent, HostGrandChildComponent, HostContextChildComponent, HostContextSblingComponent, HostContextGrandChildComponent, HostContextParentComponent, NgDeepParentComponent, NgDeepChildComponent, NgDeepGrandChildComponent, NgDeepSblingComponent],
  imports: [
    CommonModule
  ],
  exports: [HostParentComponent, HostContextParentComponent, NgDeepParentComponent]
})
export class StyleModule { }
