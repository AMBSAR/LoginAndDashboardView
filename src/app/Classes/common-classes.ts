import { MmInfo, ProjectDetails, Train } from "../Interfaces/common-interfaces";

export class IEPModuleData {
    Icon: string = '';
    ModuleName: string = '';
    RouterLink: string = '';

    constructor(icon: string, name: string, link: string) {
        this.Icon = icon;
        this.ModuleName = name;
        this.RouterLink = link;
    }
}

export class JobData {
    jobNumber: string = '';
    isSelected: boolean = false;
    isFavourite: boolean = false;

    constructor(jobNumber: string) {
        this.jobNumber = jobNumber;
    }
}

export class TrainData {
    trainId: string = '';
    trainName: string = '';
    isSelected: boolean = false;
    jobNumbers: JobData[] | null = null;

    constructor (train: Train) {
        this.trainId = train.trainId;
        this.trainName = train.trainName;
        
        if (train.mmInfo != null && train.mmInfo.length > 0) {
            train.mmInfo.forEach((x: MmInfo ) => {
                if (x.jobNumber != null && x.jobNumber != '') {
                this.jobNumbers?.push(new JobData(x.jobNumber));
                }
                
                if (x.childJobs != null && x.childJobs.length > 0) {
                    x.childJobs.forEach((x: string) => {
                        if (x != null && x != '') {
                        this.jobNumbers?.push(new JobData(x));
                        }
                    });
                }
            } )
        }
    }
}

export class ProjectData {
    projectId: string = '';
    projectName: string = '';
    isSelected: boolean = false;
    isFavourite: boolean = false;
    isActive: boolean = true;
    trains: TrainData[] | null = null;

    constructor (project: ProjectDetails) {
        this.projectId = project.projectId;
        this.projectName = project.contractName;
        this.isActive = project.isActive;

        if (project.trains != null && project.trains.length > 0) {
            project.trains.forEach((x: Train ) => {
                this.trains?.push(new TrainData(x));
            } )
        }
    }
}
