import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { IEPModuleData } from '../../../Classes/common-classes'

@Component({
  selector: 'app-tool-title-card',
  standalone: true,
  imports: [],
  templateUrl: './tool-title-card.component.html',
  styleUrl: './tool-title-card.component.scss'
})
export class ToolTitleCardComponent implements OnInit {

  @Input()
  Data: IEPModuleData = new IEPModuleData('', '', '');

  @Output() ModuleSelectedEvent: EventEmitter<any>;

  constructor() {
    this.ModuleSelectedEvent = new EventEmitter();
  }

  selectItem(value: string) {
    this.ModuleSelectedEvent.emit(value);
  }

  ngOnInit(): void {

  }
}