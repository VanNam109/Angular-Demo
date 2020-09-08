import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-danh-sach-phim',
  templateUrl: './danh-sach-phim.component.html',
  styleUrls: ['./danh-sach-phim.component.scss']
})
export class DanhSachPhimComponent implements OnInit {

  danhSachPhim: any[] = [
    { tenPhim: "Captain America 3", hinhAnh: 'assets/images/cap3.jpg', gia: 85000 },
    { tenPhim: "Justice League", hinhAnh: 'assets/images/Justice_League_film_poster.jpg', gia: 70000 },
    { tenPhim: "Doraemon Và Những bạn khủng long mới", hinhAnh: 'assets/images/doraemon.jpg', gia: 85000 }
  ];

  constructor() { }

  phimDangChon: any = null;

  ngOnInit() {
  }
  xemChiTiet(chiTietPhim: any) {
    this.phimDangChon = chiTietPhim;
    console.log(chiTietPhim);
  }
}
