import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
    readonly router = inject(Router);

    navigateToTimeline(): void {
        void this.router.navigate(['/timeline']);
    }
}
