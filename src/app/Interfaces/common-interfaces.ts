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
