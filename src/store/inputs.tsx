export interface Posts{
    userId:number
    id:number
    title:string
    body:string
}

export interface SubDepartment {
    sub_department: string;
    checked: boolean;
}

export interface DepartmentData {
    department: string;
    sub_departments: SubDepartment[];
    checked: boolean;
}