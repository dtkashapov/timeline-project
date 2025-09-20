import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { TimelineService } from '../../../pages/timeline/services';

@Component({
    selector: 'app-loader',
    imports: [AsyncPipe],
    templateUrl: './loader.component.html',
    styleUrl: './loader.component.scss',
})
export class LoaderComponent {
    readonly timelineService = inject(TimelineService);

    readonly loading$ = this.timelineService.isLoading$;
    readonly error$ = this.timelineService.error$;

    refresh(): void {
        this.timelineService.refresh();
    }
}
