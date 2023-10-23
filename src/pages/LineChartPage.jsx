import React from 'react'
import { LineChart } from "../features/Charts/index"
import { Box } from '@mui/material'
import Header from '../components/ui/Header'

const LineChartPage = () => {
    return (
        <div className='flex flex-1 flex-col m-auto min-w-0'>
            <Header title='Line Chart' subtitle='Simple Line Chart' />
            <Box className="h-[75vh]">
                <LineChart />
            </Box>
        </div>
    )
}

export default LineChartPage