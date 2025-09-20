import { Pipe, PipeTransform } from '@angular/core';
import { IEventData, IntervalDates, ITimelineEvent } from '../interfaces';
import { EVENT_DATA_MAPPER } from '../constants';

@Pipe({
    name: 'mapTimelineEvent',
})
export class MapTimelineEventPipe implements PipeTransform {
    transform(event: IEventData, intervalDates: IntervalDates): ITimelineEvent {
        const timelineStart = new Date(intervalDates.dateStart);
        const timelineEnd = new Date(intervalDates.dateEnd);
        const timelineDuration = timelineEnd.getTime() - timelineStart.getTime();

        const startDate: Date = new Date(event.dateStart);
        const endDate: Date = new Date(event.dateEnd);

        return {
            event,
            position: this.calculatePosition(startDate, timelineStart, timelineDuration),
            width: this.calculateWidth(startDate, endDate, timelineDuration),
            color: EVENT_DATA_MAPPER[event.type],
        };
    }

    private calculatePosition(
        startDate: Date,
        timelineStart: Date,
        timelineDuration: number
    ): number {
        const startTime = startDate.getTime() - timelineStart.getTime();
        return (startTime / timelineDuration) * 100;
    }

    private calculateWidth(startDate: Date, endDate: Date, timelineDuration: number): number {
        const eventDuration = endDate.getTime() - startDate.getTime();
        return (eventDuration / timelineDuration) * 100;
    }
}
