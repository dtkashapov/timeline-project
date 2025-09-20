import { EventTypes } from '../enums';

export interface IntervalDates {
    dateStart: string;
    dateEnd: string;
}

export interface IEventData {
    dateStart: string;
    dateEnd: string;
    type: EventTypes;
}

export interface IData {
    events: IEventData[];
    intervalDates: IntervalDates;
}

export interface ITimelineEvent {
    event: IEventData;
    position: number;
    width: number;
    color: string;
}
