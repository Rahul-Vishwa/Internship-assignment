import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Posts } from '../store/inputs';

const columns: GridColDef[] = [
  { 
    field: 'userId', 
    headerName: 'User Id', 
    type: 'number',
    width: 100 
  },
  {
    field: 'id',
    headerName: 'Id',
    type: 'number',
    width: 100,
  },
  {
    field: 'title',
    headerName: 'Title',
    width: 250,
    editable: true,
  },
  {
    field: 'body',
    headerName: 'Body',
    width: 400,
    editable: true,
    sortable:false
  }
];

export default function Component1({data}:{data:Posts[]}) {
    return <div className='align-center'>
        <Box sx={{ height: 400, width: 1000 }}>
        <DataGrid
            rows={data}
            columns={columns}
            initialState={{
                pagination: {
                    paginationModel: {
                        pageSize: 5,
                    },
            },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
            />
        </Box>
    </div>
}