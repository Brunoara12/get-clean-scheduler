import React from 'react'
import { BarChart } from "../features/Charts/index"
import { Box } from '@mui/material'
import Header from '../components/ui/Header'

const BarChartPage = () => {
    return (
        <div className='flex flex-1 flex-col m-auto min-w-0'>
            <Header title='Bar Chart' subtitle='Simple Bar Chart' />
            <Box className="h-[75vh]">
                <BarChart />
            </Box>
        </div>
    )
}

export default BarChartPage