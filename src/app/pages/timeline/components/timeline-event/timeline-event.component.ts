import { Component, inject, Input } from '@angular/core';
import { ITimelineEvent } from '../../interfaces';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { TimelineTooltipComponent } from '../timeline-tooltip';

@Component({
    selector: 'app-timeline-event',
    templateUrl: './timeline-event.component.html',
    styleUrls: ['./timeline-event.component.scss'],
})
export class TimelineEventComponent {
    @Input() event!: ITimelineEvent;

    readonly overlay = inject(Overlay);

    private overlayRef: OverlayRef | null = null;

    showTooltip(event: MouseEvent, timelineEvent: ITimelineEvent): void {
        this.hideTooltip();

        const target = event.currentTarget as HTMLElement;
        const positionStrategy = this.overlay
            .position()
            .flexibleConnectedTo(target)
            .withPositions([
                {
                    originX: 'center',
                    originY: 'top',
                    overlayX: 'center',
                    overlayY: 'bottom',
                    offsetY: 8,
                },
            ]);

        this.overlayRef = this.overlay.create({
            positionStrategy,
            scrollStrategy: this.overlay.scrollStrategies.close(),
            hasBackdrop: false,
        });

        const tooltipPortal = new ComponentPortal(TimelineTooltipComponent);
        const tooltipRef = this.overlayRef.attach(tooltipPortal);

        tooltipRef.instance.event = timelineEvent.event;
        tooltipRef.instance.color = timelineEvent.color;
    }

    hideTooltip(): void {
        if (this.overlayRef) {
            this.overlayRef.dispose();
            this.overlayRef = null;
        }
    }
}
