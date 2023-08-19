import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { DepartmentData } from '../store/inputs';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


interface Props{
    department:DepartmentData
    departmentIndex:number
    data:DepartmentData[]
    setData: React.Dispatch<React.SetStateAction<DepartmentData[]>>
}

export default function CreateChild({department, departmentIndex, data, setData}:Props){
    const [showSubList, setShowSubList]=React.useState(true)

    const handleSubDepartmentChange=(departmentIndex:number, subDepartmentIndex:number)=>{
        const temp=[...data]
        const subDepartment=temp[departmentIndex].sub_departments[subDepartmentIndex]
        subDepartment.checked=!subDepartment.checked
        temp[departmentIndex].checked=temp[departmentIndex].sub_departments.every(sub=>sub.checked)
        setData(temp)
    }

    return <div>
        {
            showSubList && <div>
                <button 
                    className='arrow-button'
                    onClick={()=>setShowSubList(false)}
                >
                    <KeyboardArrowUpIcon />
                </button>
            </div>
        }
        {
            !showSubList && <div>
                <button 
                    className='arrow-button'
                    onClick={()=>setShowSubList(true)}
                >
                    <KeyboardArrowDownIcon />
                </button>
            </div>
        }
        {
            showSubList &&
            department.sub_departments.map((subDepartment, subDepartmentIndex)=>(
                <div className='sub_department'>
                    <Checkbox 
                        checked={subDepartment.checked}
                        onChange={()=>handleSubDepartmentChange(departmentIndex, subDepartmentIndex)}
                    />
                    <span>
                        {subDepartment.sub_department}
                    </span>
                </div>
            ))
        }
    </div>
}