import { Component, inject } from '@angular/core';
import { TimelineService } from './services';
import { Observable } from 'rxjs';
import { IData } from './interfaces';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TimelineEventComponent } from './components';
import { MapTimelineEventPipe } from './pipes';
import { LoaderComponent } from '../../shared/components/loader/loader.component';

@Component({
    selector: 'app-timeline',
    templateUrl: './timeline.component.html',
    styleUrls: ['./timeline.component.scss'],
    providers: [TimelineService],
    imports: [
        CommonModule,
        RouterModule,
        TimelineEventComponent,
        MapTimelineEventPipe,
        LoaderComponent,
    ],
})
export class TimelineComponent {
    readonly timelineService = inject(TimelineService);

    readonly data$: Observable<IData | null> = this.timelineService.data$;
}
