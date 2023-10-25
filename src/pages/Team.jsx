import { Grid } from "../features/DataGrid/index"
import { AdminPanelSettingsOutlined, LockOpenOutlined, SecurityOutlined } from '@mui/icons-material'
import { mockDataTeam } from '../data/mockData'

const Team = () => {

    const accessRender = ({ row: { access } }) => {
        return (
            <div
                className={'flex justify-center w-[60%] ml-auto mr-auto p-1 rounded ' +
                    (access === "admin" ? "bg-skin-buttRed" : "bg-skin-buttGreen")
                }>
                {access === "admin" && <AdminPanelSettingsOutlined />}
                {access === "manager" && <SecurityOutlined />}
                {access === "user" && <LockOpenOutlined />}
                <p className='text-skin-base ml-1'>
                    {access}
                </p>

            </div >
        )
    }

    const columns = [
        { field: "id", headerName: "ID", flex: 1 },
        { field: "name", headerName: "Name", flex: 1, cellClassName: "name-column--cell" },
        { field: "age", headerName: "Age", type: "number", headerAlign: "left", align: "left", flex: 1 },
        { field: "phone", headerName: "Phone Number", flex: 1 },
        { field: "email", headerName: "Email", flex: 1 },
        { field: "access", headerName: "Access Level", flex: 1, renderCell: accessRender },
    ]

    return (
        <div className='flex flex-1  min-w-0'>
            <Grid
                title="Team"
                subtitle="Managing the Team Members"
                columns={columns}
                rowData={mockDataTeam} />
        </div>
    )
}

export default Team