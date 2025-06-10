export interface UserDataList {
  users: User[]
}

export interface User {
  id: string
  ssoid: string
  password: string
  firstName: string
  lastName: string
  emailId: string
  role: string
  icon: string
  location: string
  country: string
  userType: string
  gessostatus: string
  disciplines: Discipline[]
  isActive: boolean
  createdBy: string
  updatedBy: string
  updatedAt: number
  managerSSO: string
  version: string
  accessprivilegerole: string
  globalId: string
  empId: string
  loginId: string
}

export interface Discipline {
  id: string
  departments: Department[]
}

export interface Department {
  id: string
}

// For Project list
export interface ProjectDetails {
    projectId:             string;
    contractName:          string;
    racYear:               number;
    deliveryYear:          number;
    projectStatus:         string;
    racYearList:           number[];
    deliveryYearList:      number[];
    projectStatusList:     string[];
    isActive:              boolean;
    jobNumber:             string[];
    installationType:      any[];
    epcName:               string;
    country:               string;
    plantSiteCountry:      string[];
    plantSiteCustomerName: string[];
    equipSerialNumber:     string[];
    driverMmNames:         string[];
    drivenMmNames:         string[];
    connectorMmNames:      string[];
    trains:                Train[];
    tpsSegment:            string;
    tpsSegmentList:        string[];
    isMyProject:           boolean;
}

export interface Train {
    trainId:   string;
    trainName: string;
    mmInfo:    MmInfo[];
}

export interface MmInfo {
    type:      string;
    mmNames:   string[];
    childJobs: any[];
    jobNumber: string;
}

// ISPO Tabular data
export interface ISPOTabularDataList {
    activities: ISPOActivityData[];
}

export interface ISPOActivityData {
    id:                            number;
    PROJECT_ID:                    string;
    PRIMARY_RESOURCE_NAME:         string;
    ACT_ID:                        string;
    ACTIVITY_NAME:                 string;
    STEP_ID:                       string;
    STEP_NAME:                     string;
    EARLY_DATE:                    string;
    IMPACTED_NCR:                  string;
    LATE_FINISH:                   string;
    PROMISE_DATE:                  string | null;
    COMMENT:                       null;
    ACKNOWLEDGE:                   null;
    ACKNOWLEDGE_DATE:              null;
    PROJECT_NAME:                  string;
    ROLE:                          string;
    PRIMARY_RESOURCE_SSO:          string;
    LONG_DUMMY:                    null;
    ACT_TYPE:                      string;
    REAL_CODE:                     string;
    EARLY_STATUS:                  string;
    ACTUAL_FINISH:                 string;
    TYPE:                          string;
    EARLY_DUE_WEEK:                string;
    AGING:                         null;
    UNIFIER_PROJECT_STATUS:        null;
    "P6-PROJ_CONTR_DELIVERY_DATE": null;
    PROJECT_PHASE:                 string;
    CONTRACT_NUMBER:               string;
    PL:                            null;
    SUB_PL:                        null;
    RAC_DT:                        string;
    PLANNING_DATE:                 null;
    TRAIN_TYPE:                    null;
    SYSTEM_DATE:                   null;
    ORGANIZATION_NAME:             null;
    JOB_TYPE:                      null;
    DIVISION:                      null;
    EXCLUDE:                       null;
    FUNCTION:                      null;
    DOC_TYPE:                      null;
    LATE_STATUS:                   string;
    MAIN_FUNCTION:                 null;
    ITEM_AGGREGATION:              null;
    RCA:                           null | string;
    PO_NUMBER:                     null;
    VDR_EARLY_DATE:                null;
    PO_SPECIFICATION_ID:           null;
    "SIGN-OFF_STATUS":             null;
    VENDOR:                        null;
    APPROVE_TYPE:                  null;
    DOCUMENT_DUE_DATE:             null;
    UNIFIER_DOCUMENT_STATUS:       null;
    UNIFIER_REVISION_STATUS:       null;
    DOC_EMISSION_CODE:             null;
    PM:                            string;
    PROJECT_TYPE:                  null;
    DELAY_CUSTOMER:                null;
    CUSTOMER_DOC:                  null;
    RETURN_DATE_ACTUAL:            null;
    LAST_SUBMISSION:               null;
    FIRST_SUBMISSION:              null;
    DWG_ISSUE_NUMBER_FINAL:        null;
    PP:                            string;
    ADDITIONAL_CUSTOMER_DOC:       null;
    PE:                            string;
    DOC_RETURN_CODE:               null;
    RETURN_DATE_PLANNED:           null;
    PROJECT_STATUS_Primavera:      null;
    "TEAM LEADER":                 null;
    GENERAL:                       null;
    Sub_Division:                  null;
    FLAG:                          null;
    WA_IN_JOT_REQUIRED:            null;
    SORT_DATE:                     Date;
    dummy:                         null;
    configurator:                  boolean;
    latefinishwarning:             boolean;
}

//FiscalWeekData
export interface FiscalWeekData {
    year:          number;
    fiscalWeek:    string;
    isCurrentWeek: string;
    startDate:     Date;
    endDate:       Date;
    total:         string;
    notCompleted:  string;
}

// SummaryData
export interface SummaryData {
    PreviousotdPercentage:   string;
    previousfw:              number;
    previouscompletedontime: string;
    previousbacklogcount:    string;
    currentotdPercentage:    string;
    currentFW:               number;
    currentcompletedontime:  string;
    currentbacklogcount:     string;
    currentwillmeet:         string;
    currentwontmeet:         string;
    nextotdPercentage:       string;
    nextFW:                  number;
    nextcompletedontime:     string;
    nextbacklogcount:        string;
    nextwontmeet:            string;
    nextwillmeet:            string;
    total:                   string;
    completedontime:         string;
    latecount:               string;
    backlog:                 string;
    opencount:               string;
    otdpercentage:           string;
    percentagecompletion:    string;
    autoasignedcount:        string;
    unasignedcount:          string;
    latepercentage:          number;
}

//ColumnList
export interface ColumnList {
    type:    string;
    columns: Column[];
}

export interface Column {
    column_name: string;
    display_yn:  boolean;
    freeze_yn:   boolean;
    sequence:    number;
    isActive:    boolean;
    id:          null;
}

