import { EventService } from './../event.service';
import { Component } from '@angular/core';

@Component({
    selector: 'app-events',
    templateUrl: './events.component.html',
    styleUrls: ['./events.component.css']
})
export class EventsComponent {
    events = [];
    constructor(private _eventService: EventService) { }

    ngOnInit() {
        this._eventService.getEvents()
            .subscribe(
                res => this.events = res,
                err => console.log(err)
            )
    }
}
