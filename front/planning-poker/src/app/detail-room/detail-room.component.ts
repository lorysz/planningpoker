import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-room',
  templateUrl: './detail-room.component.html',
  styleUrls: ['./detail-room.component.css']
})
export class DetailRoomComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  backCreateRoom() {
    this.route.navigateByUrl('');
  }
}
