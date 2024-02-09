import { Component } from '@angular/core';
import {
  faBell,
  faInfoCircle,
  faClose,
  faAngleDown,
  faComment,
  faHandshake,
  faBars,
  faHandshakeAngle,
  faGear,
  faHouse,
  faChartSimple,
  faRightFromBracket
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  faBell = faBell;
  faInfoCircle = faInfoCircle;
  faClose = faClose;
  faAngleDown = faAngleDown;
  faComment=faComment
  faHandshake = faHandshake;

  faBars=faBars;
  faHandshakeAngle=faHandshakeAngle;
  faGear=faGear;
  faHouse=faHouse;
  faChartSimple=faChartSimple;
  faRightFromBracket=faRightFromBracket;

  isOpen: boolean = false;

  isOpenRedsocial: boolean = false;

  isOpenOverlayBoards: boolean = false;
  isOpenOverlayAvatar: boolean = false;
  constructor() {}
}
