import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() title = "";
  @Output() close = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  closeProfil(): void {
    this.close.emit();
  }

}
