import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'todo-list';
  task="";
  tasks: {id:number, name:string}[]=[];

  addTask(){
    if(this.task.trim()==="") return;
    this.tasks.push({id: this.tasks.length +1, name:this.task});
  }

  removeTask(id: number){
    this.tasks=this.tasks.filter(task =>task.id !== id);
  }
}
