import { BarChart } from '../../../features/Charts'
import { Box } from '@mui/material'
import React from 'react'

const MonthlySales = () => {
    return (
        <>
            <h5 className='text-skin-base font-semibold pt-7 pr-7 pl-7'>
                Sales Quantity
            </h5>
            <Box height="250px" mt="-20px">
                <BarChart isDashboard={true} />
            </Box>
        </>
    )
}

export default MonthlySales