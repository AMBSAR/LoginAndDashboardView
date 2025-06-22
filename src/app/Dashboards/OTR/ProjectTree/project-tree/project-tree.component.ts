import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import { KENDO_INPUTS } from '@progress/kendo-angular-inputs';
import { KENDO_ICONS } from "@progress/kendo-angular-icons";
import { arrowRightIcon } from '@progress/kendo-svg-icons';
import { KENDO_BUTTONS } from '@progress/kendo-angular-buttons';
import { KENDO_LABELS } from '@progress/kendo-angular-label';
import { KENDO_TREEVIEW, TreeItem } from '@progress/kendo-angular-treeview'
import { KENDO_TEXTBOX } from '@progress/kendo-angular-inputs';
import { chevronRightIcon, searchIcon, starOutlineIcon, starIcon, chevronDownIcon } from '@progress/kendo-svg-icons';
import { ProjectListLoaderService } from '../../../../Services/project-list-loader.service';
import { JobData, ProjectData, TrainData } from '../../../../Classes/common-classes';
import { Observable } from 'rxjs/internal/Observable';
import { async, of } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { KENDO_INDICATORS, LoaderType, LoaderThemeColor, LoaderSize, } from "@progress/kendo-angular-indicators";
import { DataLoaderService } from '../../../../Services/data-loader.service';


@Component({
  selector: 'app-project-tree',
  standalone: true,
  imports: [KENDO_INPUTS, KENDO_ICONS, KENDO_BUTTONS, KENDO_LABELS, KENDO_TREEVIEW,
    KENDO_TEXTBOX, FormsModule, KENDO_INDICATORS, CommonModule],
  templateUrl: './project-tree.component.html',
  styleUrl: './project-tree.component.scss'
})

export class ProjectTreeComponent implements OnInit {

  @Input()
  Type: string = 'All';

  count = 100;
  value = "input value";
  public arrowRightIcon = arrowRightIcon;
  public rightIcon = chevronRightIcon;
  public downIcon = chevronDownIcon;
  public searchIcon = searchIcon;
  public favouriteIcon = starIcon;
  public notFavouriteIcon = starOutlineIcon;
  public searchText: string = '';

  public ProjectDataList: any[] = [];
  private projectDataListTemp: any[] = [];
  private selectedProjects : any[] = [];
  public selectedKeys: any[] = [];

  public expandedKeys: any[] = ["0", "1"];

  public checkedKeys: any[] = ["0"];

  public isDataLoading = false;
  public selectedItem: any = null


  constructor(private dataLoaderService: ProjectListLoaderService, private dataLoader: DataLoaderService) { }

  public loaderType: LoaderType = <LoaderType>"pulsing";
  public loaderSize: LoaderSize = <LoaderSize>"medium";

  onAdvancedSearch() {
  }

  ngOnInit(): void {
    this.isDataLoading = true;
    this.dataLoaderService.loadDataFromServer();
    this.dataLoaderService.projectLoadedMsg.subscribe(msg => {

      this.onNotify(msg);
    });
  }

  async loadProjectData() {

    this.isDataLoading = true;
    if (this.Type === 'All') {
      this.projectDataListTemp = await this.dataLoaderService.getAllProjectDataList();
    }
    else if (this.Type === 'My') {
      this.projectDataListTemp = await this.dataLoaderService.getMyProjectDataList();
    }

    await this.applySearch();
    this.isDataLoading = false;
  }

  public hasChildren = (item: any) => {

    if (item instanceof ProjectData) {
      return item.trains != null && item.trains.length > 0;
    }
    else if (item instanceof TrainData) {
      return item.jobNumbers != null && item.jobNumbers.length > 0;
    }
    else if (item instanceof JobData) {
      return false;
    }

    return false;
  }

  public children = (dataitem: any): Observable<any[]> => of(dataitem.trains || dataitem.jobNumbers);

  public fetchChildren = (item: any) => {

    if (item instanceof ProjectData) {
      return of(item.trains);
    }
    else if (item instanceof TrainData) {
      return of(item.jobNumbers);
    }
    else if (item instanceof JobData) {
      return of([]);
    }

    return of([]);
  };

  public fetchText = (item: any): string => {

    if (item instanceof ProjectData) {
      return item.projectName;
    }
    else if (item instanceof TrainData) {
      return item.trainName;
    }
    else if (item instanceof JobData) {
      return item.jobNumber;
    }

    return '';
  };

  public getFavouriteIcon = (item: any) => {
    if (item instanceof ProjectData) {
      return item.isFavourite ? this.favouriteIcon : this.notFavouriteIcon;
    }
    else if (item instanceof TrainData) {
      return '';
    }
    else if (item instanceof JobData) {
      return item.isFavourite ? this.favouriteIcon : this.notFavouriteIcon;
    }

    return '';
  }

  public showFavouriteIcon = (item: any) => {

    if (item instanceof TrainData) {
      return false;
    }

    return true;
  }

  public getProjectCount(): number {
    return this.ProjectDataList?.length;
  }

  async searchTree() {
    await this.applySearch();
  }

  applySearch() {
    this.isDataLoading = true;

    if (this.searchText != undefined && this.searchText != '') {
      if (this.projectDataListTemp?.length > 0) {
        this.ProjectDataList = [];
        this.projectDataListTemp.forEach((x: any) => {
          if (x.projectName != undefined && (x.projectName as string).includes(this.searchText)) {
            this.ProjectDataList.push(x);
          }
        });
      }
    }
    else {
      this.ProjectDataList = this.projectDataListTemp;
    }

    this.isDataLoading = false;
  }

  public onSelectionChange(event: any): void {

    let index = parseInt(event.item.index);
    let project = this.ProjectDataList.at(index);

    if (this.checkedKeys.indexOf(event.item.index) > -1) {
      this.selectedProjects.push(project);
    }
    else {
      
    }
    
    // let strIndex: any = index;
    // if (this.checkedKeys.findIndex(strIndex) > 0) {
    //   this.selectedProjects.push(project);
    // }
    // else {
    //   let itemIndex = this.selectedProjects.findIndex(project);
    //   if (itemIndex > -1) {
    //     this.selectedProjects.splice(itemIndex);
    //   }
    //}

    this.dataLoader.setProjectSelection(this.selectedProjects);
    this.dataLoader.publish("PROJECT_SELECTION_CHANGED");
  }

  setProjectSelectionList() {

  }

  onNotify(msg: string) {
    if (msg == "DATA_LOADED") {
      this.loadProjectData();
    }
  }

  public onNodeClick(item: any): void {
    this.selectedItem = item;

    // this.dataLoader.setProjectSelection(this.selectedKeys);
    // this.dataLoader.publish("PROJECT_SELECTION_CHANGED");
  }

  public isSelected(item: any): boolean {
    return this.selectedItem === item;
  }

  isJobItem(item: any): boolean {
    try {
      return item.jobNumber !== undefined;
    } catch (error) {
      return false;
    }
  }
}

