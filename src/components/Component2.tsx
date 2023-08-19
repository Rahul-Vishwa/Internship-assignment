import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { DepartmentData } from '../store/inputs';
import CreateChild from './CreateChild';

const data: DepartmentData[] = [
    {
      department: "customer_service",
      sub_departments: [
        { sub_department: "support", checked: false },
        { sub_department: "customer_success", checked: false },
      ],
      checked: false,
    },
    {
      department: "design",
      sub_departments: [
        { sub_department: "graphic_design", checked: false },
        { sub_department: "product_design", checked: false },
        { sub_department: "web_design", checked: false },
      ],
      checked: false,
    },
]

function Component2(){
    const [departments, setDepartments]=React.useState(data)

    const handleDepartmentChange=(index:number)=>{
        const temp=[...departments]
        temp[index].sub_departments=temp[index].sub_departments.map(subDepartment=>({
            ...subDepartment,
            checked: !temp[index].checked
        }))
        temp[index].checked=!temp[index].checked
        setDepartments(temp)
    }
    
    return <div className='align-center'>
        <div className='checklist'>
            {
                departments.map((department, departmentIndex)=>(
                    <div>
                        <div>
                            <Checkbox 
                                checked={department.checked}
                                onChange={()=>handleDepartmentChange(departmentIndex)}
                            /> 
                            <span className='department'>
                                {department.department}
                            </span>
                            <div>
                                <CreateChild department={department} departmentIndex={departmentIndex} data={departments} setData={setDepartments}/>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
}

export default Component2