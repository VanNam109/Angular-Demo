import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai-tap3',
  templateUrl: './bai-tap3.component.html',
  styleUrls: ['./bai-tap3.component.scss']
})
export class BaiTap3Component implements OnInit {

  school = 'Cybersoft';
  name: string = "Cybersoft";
  constructor() { }

  ngOnInit() {
  }

  print() {
    this.school = 'ABC';
  }

}
