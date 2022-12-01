import {Injectable} from '@angular/core'

import { UsersService } from "./users.service";

//service to keep track of how many times users have been moved from active -> inactive and vise versa
@Injectable()
export class CounterService
{
    numMovedInactiveToActive: number = 0;
    numMovedActiveToInactive: number = 0;

    constructor(private usersService: UsersService)
    {
        //Have CounterService subscribe to event in the userService that is triggered whenever a user is amde
        //active or inactive. The event passes a boolean that this event can use ot know which of the two
        //counters (toActive or toInactive) to increment. This part gave me trouble becaseu despite setting up the counterService
        //in the app.module, I didn't realize that you are required to have a constructor define the instance in hte app.component
        //even though the reference to that variable instance for the counterService is never used, otherwise the CounterService
        //will never be created in the first place
        this.usersService.userStatusUpdated.subscribe(
            (wasSetToActive: boolean) => {
                if(wasSetToActive)
                {
                    this.numMovedInactiveToActive++;
                    console.log("Set Active Count: " + this.numMovedInactiveToActive);
                }   
                else
                {
                    this.numMovedActiveToInactive++
                    console.log("Set Inactive Count: " + this.numMovedActiveToInactive);
                }
            }
        )
    }

}