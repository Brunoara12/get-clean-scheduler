import { DataGrid } from "@mui/x-data-grid"
import PropTypes from 'prop-types'

import Header from '../../../components/ui/Header'

import { mockDataTeam } from '../../../data/mockData'
import { AdminPanelSettingsOutlined, LockOpenOutlined, SecurityOutlined } from '@mui/icons-material'
import { Box } from "@mui/material"



function Grid({ title, subtitle }) {

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
        <div className='m-5 flex flex-col flex-1 min-w-0'>
            <Header title={title} subtitle={subtitle} />
            <Box className='mt-10 h-[75vh] w-auto'
                sx={{
                    "& .MuiDataGrid-root": {
                        border: 'none',
                    },
                    "& .MuiDataGrid-cell": {
                        color: 'var(--color-text-base)',
                        border: 'none',
                    },
                    "& .name-column--cell": {
                        color: 'var(--color-text-green)',
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: 'var(--color-background-accent)',
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: 'var(--color-button-bl)',
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        borderBottom: "none",
                        backgroundColor: 'var(--color-button-bl)',
                    },
                    "& .MuiCheckbox-root": {
                        color: `var(--color-button-rd) !important`,
                    },
                }}>
                <DataGrid
                    rows={mockDataTeam}
                    columns={columns} />
            </Box>
        </div>
    )
}

Grid.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
}

export default Grid;