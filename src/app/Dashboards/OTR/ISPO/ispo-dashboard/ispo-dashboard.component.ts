import { Component, CUSTOM_ELEMENTS_SCHEMA, OnDestroy, OnInit } from '@angular/core';
import { ProjectData } from '../../../../Classes/common-classes';
import { EventManagerService } from '../../../../Services/event-manager.service';
import { KENDO_SVGICON } from '@progress/kendo-angular-icons';
import { xIcon, bellIcon, arrowDownIcon, moreHorizontalIcon, searchIcon,
         handleResizeIcon, gearIcon, arrowLeftIcon, arrowRightIcon, 
         chevronDownIcon,
         chevronLeftIcon,
         chevronRightIcon} from '@progress/kendo-svg-icons';
import { FormsModule } from '@angular/forms';
import { KENDO_LABEL } from '@progress/kendo-angular-label';
import { KENDO_BUTTONS } from '@progress/kendo-angular-buttons';
import { DataLoaderService } from '../../../../Services/data-loader.service';
import { FiscalWeekData } from '../../../../Interfaces/common-interfaces';
import { KENDO_GRID, GridComponent, GridDataResult, DataStateChangeEvent} from '@progress/kendo-angular-grid';
import { KENDO_DROPDOWNS } from '@progress/kendo-angular-dropdowns';
import { Icon_NotificationImportant, Icon_FullScreen, Icon_ExitFullScreen, Icon_More_Vertical, Icon_UserList, Icon_Drag, Icon_Link } from '../../../../Common/Icons';
// import {
//   DataBindingDirective,
//   KENDO_GRID_EXCEL_EXPORT,
//   KENDO_GRID_PDF_EXPORT,
// } from "@progress/kendo-angular-grid";

@Component({
  selector: 'app-ispo-dashboard',
  standalone: true,
  //imports: [KENDO_SVGICON, FormsModule, KENDO_GRID, KENDO_LABEL, KENDO_BUTTONS, KENDO_DROPDOWNS],
  imports: [KENDO_SVGICON, FormsModule, KENDO_LABEL, KENDO_BUTTONS, KENDO_DROPDOWNS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './ispo-dashboard.component.html',
  styleUrl: './ispo-dashboard.component.scss'
})
export class IspoDashboardComponent implements OnInit {
  // data
  SelectedProject: ProjectData | null = null;
  HasAnyNotification: boolean = true;
  public ShowNotification: boolean = true;
  public TabularData: any[] = [];
  public FiscalWeekData: any[] = [];
  private FiscalWeekDataTemp: any[] = [];
  private SummaryData: any;
  public DocumentTypeSelectionList: any[] = [];
  public FWStart: number = 0;
  public FWEnd: number = 0;
  public ActivityCount: number = 0;
  public searchText: string = '';

  // input List
  viewTypes: string[] = ["Individual", "Office", "Project"];
  DocumentTypes: string[] = ['a', 'b', 'c'];
  Funcitons: string[] = ['a', 'b', 'c'];
  StatusList: string[] = ["Completed", "Backlog", "Open"];
  ActivityTypeList: string[] = ["510", "560", "590"];
  FinishByList: string[] = ["Late Finish", "Early Finish"];
  DateTypeList: string[] = ["Late Finish Date", "Early Finish Date"];

  public selectedViewType: string = '';
  public selectedFunctions: string = '';
  public selectedDocumentTypes: string = '';
  public selectedStatusList: string = '';
  public selectedActivityTypes: string = '';
  public selectedFinishBy: string = '';
  public selectedDateType: string = '';

  // icons
  public bellIcon = Icon_NotificationImportant;
  public closeIcon = xIcon;
  public downArrow = chevronDownIcon;
  public moreHorizontalIcon = moreHorizontalIcon;
  public searchIcon = searchIcon;
  public fullScreenIcon = Icon_FullScreen;
  public settingsIcon = gearIcon;
  public leftArrowButton = chevronLeftIcon;
  public rightArrowButton = chevronRightIcon;

  constructor(private eventManager: EventManagerService, private dataLoader: DataLoaderService) {}

  ngOnInit(): void {
    this.eventManager.eventHandler.subscribe(msg => {
      this.notifyEvent(msg);
    });

    this.dataLoader.dataLoadedEventMgr.subscribe(msg => {
      this.notifyEvent(msg);
    }); 
  }

  notifyEvent(message: string) {
    if (message === "PROJECT_SELECTION_CHANGED") {
        this.onProjectSelectionChanged();
    }
    else if (message === "ISPO_TABULARDATA_LOADED") {
        this.setTabularData();
    }
    else if (message === "ISPO_FW_DATA_LOADED") {
        this.setFWData();
    }
    else if (message === "ISPO_SUMMARY_DATA_LOADED") {
        this.setSummaryData();
    }
  }

  onProjectSelectionChanged() {
    let fullProjectList = this.dataLoader.getSelectedProjects();
    this.SelectedProject = fullProjectList?.at(0);
    this.reloadFullData();
  }

  reloadFullData() {
    this.dataLoader.publish("LOAD_ISPO_TABULARDATA");
    this.dataLoader.publish("LOAD_ISPO_FWDATA");
    this.dataLoader.publish("LOAD_ISPO_SUMMARY_DATA");
  }

  reloadTabularData() {
    this.dataLoader.publish("LOAD_ISPO_TABULARDATA");
  }

  setTabularData() {
    this.TabularData = this.dataLoader.getISPOTabularData();
    this.ActivityCount = this.TabularData?.length;
  }

  setFWData() {
    this.FiscalWeekData = [];
    this.FiscalWeekDataTemp = this.dataLoader.getISPOFWData();

    if (this.FiscalWeekDataTemp != undefined && this.FiscalWeekDataTemp.length > 0){
      let todayItemIndex = this.FiscalWeekDataTemp.findIndex((x: any) => (x as FiscalWeekData).fiscalWeek == "Today");

      if (todayItemIndex == -1) {
        todayItemIndex = 0;
      }
      this.FWStart = todayItemIndex;
      this.FWEnd = todayItemIndex + 4;
      this.setFWDataToShow(this.FWStart, this.FWEnd);
    }
  }

  setFWDataToShow(start: number, end: number) {
    this.FiscalWeekData = this.FiscalWeekDataTemp.slice(start, end);
  }

  canEnableFWPrev() {
    return this.FiscalWeekData == undefined || this.FWStart == 0;
  }

  canEnableFWNext() {
    return this.FiscalWeekData == undefined || (this.FWEnd + 1) == this.FiscalWeekDataTemp.length;
  }

  onPrevFW() {
      this.FWStart -= 4;

      if(this.FWStart < 0) {
        this.FWStart = 0;
      }

      this.FWEnd = this.FWStart + 4;

      this.setFWDataToShow(this.FWStart, this.FWEnd);
  }

  onNextFW() {
    this.FWEnd += 4;

      if(this.FWEnd >= this.FiscalWeekDataTemp.length) {
        this.FWEnd = this.FiscalWeekDataTemp.length - 1;
      }

      this.FWStart = this.FWEnd - 4;

      this.setFWDataToShow(this.FWStart, this.FWEnd);
  }

  setSummaryData() {
    this.DocumentTypeSelectionList = [
    { ID: 1, Label: 'Total Documents', Count: this.SummaryData?.total, isSelected: false },
    { ID: 2, Label: 'Backlogs', Count: this.SummaryData?.backlog, isSelected: false },
    { ID: 3, Label: 'Forecast', Count: this.SummaryData?.opencount, isSelected: false },
    { ID: 3, Label: 'Not Acknowledged', Count: this.SummaryData?.opencount, isSelected: false },
    { ID: 3, Label: 'Step', Count: this.SummaryData?.opencount, isSelected: false },
    { ID: 3, Label: 'RuleStream', Count: this.SummaryData?.opencount, isSelected: false }
  ];
  }

  onDocumentTypeClicked(item: any) {
    item.isSelected = true;
    this.DocumentTypeSelectionList.forEach(x => {
      if (x.ID != item.ID) {
        x.isSelected = false;
      }
    });
  }

  searchTable() {

  }

  onFiscalWeek(index: any) {
    let actualIndex = this.FWStart + index as number;
    this.reloadTabularData();
  }

  onFilterSelectionChange() {
    this.reloadTabularData();
  }

  onViewTypeSelectionChanged() {
    this.reloadFullData();
  }

  onCloseNotification() {
    this.ShowNotification = false;
  }
}
