import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-nz',
  templateUrl: './nz.component.html',
  styleUrls: ['./nz.component.scss']
})
export class NzComponent implements OnInit {
  cardsList: Array<string>;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('name');
    this.cardsList = Array(3).fill(`${name} is from route parameter`)
  }

}
