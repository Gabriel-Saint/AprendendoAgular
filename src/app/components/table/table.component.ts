import { Component, EventEmitter, Output } from '@angular/core';
import { IUser } from '../../interfaces/user/user.interface';
import { UsersList } from '../../data/users-list';

@Component({
  selector: 'app-table',
  standalone: false,
  
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  userList: IUser[] = UsersList;
  displayedColumns: string[] = ['name', 'date', 'status'];

  @Output() userSelected: EventEmitter<IUser> = new EventEmitter<IUser>();  

  onUserSelected(user: IUser) {
    this.userSelected.emit(user);
  }
}
