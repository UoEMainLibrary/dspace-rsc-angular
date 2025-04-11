import { Component, } from '@angular/core';
import { FooterComponent as BaseComponent } from '../../../../app/footer/footer.component';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
    selector: 'ds-footer',
    styleUrls: ['footer.component.scss'],
    templateUrl: 'footer.component.html',
    standalone: true,
    imports: [NgIf, RouterLink]
})
export class FooterComponent extends BaseComponent {}
