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
