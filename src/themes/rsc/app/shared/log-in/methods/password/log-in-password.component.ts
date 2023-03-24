import { Component, Inject, OnInit } from '@angular/core';
import { fadeOut } from '../../../../../../../app/shared/animations/fade';
import { LogInPasswordComponent as BaseComponent } from '../../../../../../../app/shared/log-in/methods/password/log-in-password.component';

/**
 * /users/sign-in
 * @class LogInPasswordComponent
 */
@Component({
  selector: 'ds-log-in-password',
  templateUrl: './log-in-password.component.html',
  styleUrls: ['./log-in-password.component.scss'],
  animations: [fadeOut]
})

export class LogInPasswordComponent extends BaseComponent {}
