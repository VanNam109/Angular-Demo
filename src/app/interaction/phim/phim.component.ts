import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-phim',
  templateUrl: './phim.component.html',
  styleUrls: ['./phim.component.scss']
})
export class PhimComponent implements OnInit {

  @Input() chiTietPhim: any;
  //EventEmitter dùng để giả lập 1 sự kiện
  @Output() chonPhim = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  xemChiTiet() {
    //
    this.chonPhim.emit(this.chiTietPhim);
  }
}
