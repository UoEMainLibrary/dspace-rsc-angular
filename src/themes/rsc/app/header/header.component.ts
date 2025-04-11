import { Component } from '@angular/core';
import { HeaderComponent as BaseComponent } from '../../../../app/header/header.component';
import { TranslateModule } from '@ngx-translate/core';
import { RootModule } from '../../../../app/root.module';
import { SharedModule } from '../../../../app/shared/shared.module';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarModule } from '../../../../app/navbar/navbar.module';
import { RouterLink } from '@angular/router';

/**
 * Represents the header with the logo and simple navigation
 */
@Component({
    selector: 'ds-header',
    styleUrls: ['header.component.scss'],
    // styleUrls: ['../../../../app/header/header.component.scss'],
    templateUrl: 'header.component.html',
    standalone: true,
    imports: [RouterLink, NavbarModule, NgbDropdownModule, SharedModule, RootModule, TranslateModule]
})
export class HeaderComponent extends BaseComponent {
}
