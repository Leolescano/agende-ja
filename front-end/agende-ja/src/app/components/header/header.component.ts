import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    standalone: true,
})
export class HeaderComponent {
    @Input() iconRight: string = '';
    @Input() iconLeft: string = 'fa-arrow-left';
    @Input() title: string = '';

    returnPage() {
        window.history.back();
    }
}