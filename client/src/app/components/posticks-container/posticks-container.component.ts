import { Component, OnInit } from '@angular/core';
import { PostickService } from '../../services/postick/postick.service';

@Component({
  selector: 'app-posticks-container',
  templateUrl: './posticks-container.component.html',
  styleUrls: ['./posticks-container.component.css']
})
export class PosticksContainerComponent implements OnInit {

  constructor(private postickService:PostickService) { }

  posticks:string[];

  ngOnInit() {
    this.posticks = this.postickService.posticks;
    this.postickService.getAll();
  }

}
