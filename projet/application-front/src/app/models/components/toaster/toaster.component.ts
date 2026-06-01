import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.scss']
})
export class ToasterComponent implements OnInit {
  @Input() message: string = ""
  @Input() success: boolean = false
  @Input() error: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

}
