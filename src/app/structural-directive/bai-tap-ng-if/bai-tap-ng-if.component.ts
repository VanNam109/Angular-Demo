import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai-tap-ng-if',
  templateUrl: './bai-tap-ng-if.component.html',
  styleUrls: ['./bai-tap-ng-if.component.scss']
})
export class BaiTapNgIfComponent implements OnInit {
  status = false;
  name = '';
  login(name, pass) {
    if (name === 'cybersoft' && pass === 'cybersoft') {
      this.status = true;
      this.name = name;
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
