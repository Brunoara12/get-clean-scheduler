import { DataGrid, GridToolbar } from "@mui/x-data-grid"
import PropTypes from 'prop-types'

import Header from '../../../components/ui/Header'

import { Box } from "@mui/material"



function Grid({ title, subtitle, columns, rowData, toolBar = false, checkBox = false }) {

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
                        color: 'var(--color-text-blue)',
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
                        color: `var(--color-button-bl) !important`,
                    },
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                        color: 'var(--color-text-muted)',
                    },
                }}>
                <DataGrid
                    rows={rowData}
                    columns={columns}
                    slots={{
                        toolbar: toolBar ? GridToolbar : ''
                    }}
                    checkboxSelection={checkBox} />
            </Box>
        </div>
    )
}

Grid.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    columns: PropTypes.object,
    rowData: PropTypes.object,
    toolBar: PropTypes.bool,
    checkBox: PropTypes.bool
}

export default Grid;