import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
   
  @Input()
  photoCover: string = "";

  @Input()
  cardCategory: string = "";

  @Input()
  cardTitle: string = "";

  @Input()
  cardDescription: string = "";

  @Input()
  cardDate: string = "";

  @Input()
  Id:string = "0"

  constructor() { }

  ngOnInit() {
  }

}