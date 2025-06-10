import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { FiscalWeekData, ISPOTabularDataList, SummaryData, ColumnList } from '../Interfaces/common-interfaces';

@Injectable({
  providedIn: 'root'
})

export class DataLoaderService {

  ISPO_Tabular_URL: string = '/assets/JSON_Files/ISPO_TabularData.json';
  ISPO_FW_URL: string = '/assets/JSON_Files/ISPOFiscalWeekData.json';
  ISPO_SUMMARY_URL: string = '/assets/JSON_Files/ISPOSummaryData.json';
  ISPO_COLUMNS_URL: string = '/assets/JSON_Files/ISPOSummaryData.json';

  private messageSource = new BehaviorSubject('projectTreeView');
  dataLoadedEventMgr = this.messageSource.asObservable();

  private ISPOTabularData: ISPOTabularDataList | undefined;
  private ISPOFWData: FiscalWeekData[] | undefined
  private ISPOSummaryData: SummaryData | undefined;
  private ISPOTabularColumns: ColumnList | undefined;
  private SelectedProjects: any[] | undefined;

  constructor(private http: HttpClient) { 
    this.dataLoadedEventMgr.subscribe(msg => {
      this.onNotify(msg);
    });
  }

  loadISPOTabularData() {
    this.ISPOTabularData = undefined;

    this.http.get<ISPOTabularDataList>(this.ISPO_Tabular_URL).subscribe((res) => {
      this.ISPOTabularData = res;

      this.publish("ISPO_TABULARDATA_LOADED");
    });
  }

  getISPOTabularData() : any {
      return this.ISPOTabularData;
    }

    loadISPOFWData() {
    this.ISPOFWData = undefined;

    this.http.get<FiscalWeekData[]>(this.ISPO_FW_URL).subscribe((res) => {
      this.ISPOFWData = res;

      this.publish("ISPO_FW_DATA_LOADED");
    });
  }

  getISPOFWData() : any {
      return this.ISPOFWData;
    }

    loadISPOSummaryData() {
    this.ISPOSummaryData = undefined;

    this.http.get<SummaryData>(this.ISPO_SUMMARY_URL).subscribe((res) => {
      this.ISPOSummaryData = res;

      this.publish("ISPO_SUMMARY_DATA_LOADED");
    });
  }

  getISPOSummaryData() : any {
      return this.ISPOSummaryData;
    }

    setProjectSelection(selectedProjects: any[]) {
      this.SelectedProjects = selectedProjects;
    }

    getSelectedProjects() {
      return this.SelectedProjects;
    }

  publish(message: string) {
    this.messageSource.next(message)
  }

  onNotify(msg: string){
    if (msg == "LOAD_ISPO_TABULARDATA") {
        this.loadISPOTabularData();
    }
    else if(msg == "LOAD_ISPO_FWDATA") {
      this.loadISPOFWData();
    }
    else if(msg == "LOAD_ISPO_SUMMARY_DATA") {
      this.loadISPOSummaryData();
    }
  }
}