import {EventEmitter} from '@angular/core'

//service to manage teh array of users, including storing them and moving them between teh active and inactive roles
export class UsersService
{
    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];

    userStatusUpdated = new EventEmitter<boolean>();

    onSetToInactive(id: number) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);

        this.userStatusUpdated.emit(false);
    }

    onSetToActive(id: number) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);

        this.userStatusUpdated.emit(true)
    }
}