import { Component, Input } from '@angular/core';
import { EventTypes } from '../../enums';
import { IEventData } from '../../interfaces';

@Component({
    selector: 'app-timeline-tooltip',
    templateUrl: './timeline-tooltip.component.html',
    styleUrls: ['./timeline-tooltip.component.scss'],
})
export class TimelineTooltipComponent {
    @Input() event!: IEventData;
    @Input() color!: string;

    getEventTypeName(type: EventTypes): string {
        switch (type) {
            case EventTypes.NORMAL:
                return 'Нормальный';
            case EventTypes.DANGEROUS:
                return 'Опасный';
            case EventTypes.CRITICAL:
                return 'Критический';
            default:
                return 'Неизвестный';
        }
    }

    formatDate(dateString: string): string {
        const date = new Date(dateString);
        return date.toLocaleString('ru-RU', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });
    }
}
