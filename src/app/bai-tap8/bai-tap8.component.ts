
import { Component, OnInit, ViewChild } from '@angular/core';
import { DanhSachDatComponent } from './danh-sach-dat/danh-sach-dat.component';
import { DanhSachGheComponent } from './danh-sach-ghe/danh-sach-ghe.component';
import { GheComponent } from './ghe/ghe.component';
@Component({
  selector: 'app-bai-tap8',
  templateUrl: './bai-tap8.component.html',
  styleUrls: ['./bai-tap8.component.scss']
})
export class BaiTap8Component implements OnInit {

  @ViewChild(DanhSachDatComponent, {static: true}) dsdComponent:DanhSachDatComponent;
  @ViewChild(DanhSachGheComponent, {static:true}) dsgComponent:DanhSachGheComponent;
  constructor() { }

  ngOnInit(): void {
  }
  xuLyChonGhe(ghe:any){
    this.dsdComponent.xuLyChonGhe(ghe);
  }
  xuLyHuyGhe(soGhe:any){
    this.dsgComponent.xuLyHuyGhe(soGhe);
  }
}
