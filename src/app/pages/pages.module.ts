import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskViewComponent } from './task-view/task-view.component';
import { NewListComponent } from './new-list/new-list.component';
import { NewTaskComponent } from './new-task/new-task.component';



@NgModule({
  declarations: [TaskViewComponent, NewListComponent, NewTaskComponent],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
