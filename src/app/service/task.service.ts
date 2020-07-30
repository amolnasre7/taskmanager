import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { Task } from '../models/task.model';
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private webrequestservice: WebRequestService) {}
  createList(title: string) {
    return this.webrequestservice.post('lists', { title });
  }

  getLists() {
    return this.webrequestservice.get('lists');
  }

  getTasks(listId: string) {
    return this.webrequestservice.get(`lists/${listId}/tasks`);
  }
  createTask(title: string, listId: string) {
    return this.webrequestservice.post(`lists/${listId}/tasks`, { title });
  }
  complete(task: Task) {
    return this.webrequestservice.patch(`lists/${task._listId}/tasks/${task._id}`,{
      complete: true
    })
  }
}
