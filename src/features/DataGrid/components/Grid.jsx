import React from 'react'
import { DataGrid } from "@mui/x-data-grid"
import PropTypes from 'prop-types'

import Header from '../../../components/ui/Header'

import { mockDataTeam } from '../../../data/mockData'
import { AdminPanelSettingsOutlined, LockOpenOutlined, SecurityOutlined } from '@mui/icons-material'



function Grid({ title, subtitle }) {


    const accessRender = ({ row: { access } }) => {
        return (
            <div
                className={'flex justify-center w-[60%] ml-auto mr-auto p-1 rounded' +
                    access === "admin" ? " bg-greenAccent-600" : " bg-greenAccent-700"}>
                {access === "admin" && <AdminPanelSettingsOutlined />}
                {access === "manager" && <SecurityOutlined />}
                {access === "user" && <LockOpenOutlined />}
                <p className='text-grey-100 ml-1'>
                    {access}
                </p>

            </div>
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
        <div className='m-5 flex flex-col w-[100%]'>
            <Header title={title} subtitle={subtitle} />
            <div className='mt-10 h-[75vh] w-auto'>
                <DataGrid
                    rows={mockDataTeam}
                    columns={columns} />
            </div>
        </div>
    )
}

Grid.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
}

export default Grid;