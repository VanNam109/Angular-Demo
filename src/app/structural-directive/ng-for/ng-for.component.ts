import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent implements OnInit {

  danhSachNhanVien = [
    { ten: 'Nguyen', tuoi: 18 },
    { ten: 'Khoa', tuoi: 20 },
    { ten: 'Duy', tuoi: 21 },
    { ten: 'Nam', tuoi: 22 },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
