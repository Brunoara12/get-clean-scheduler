import React from 'react'
import { PieChart } from "../features/Charts/index"
import { Box } from '@mui/material'
import Header from '../components/ui/Header'

const PieChartPage = () => {
    return (
        <div className='flex flex-1 flex-col m-auto min-w-0'>
            <Header title='Pie Chart' subtitle='Simple Pie Chart' />
            <Box className="h-[75vh]">
                <PieChart />
            </Box>
        </div>
    )
}

export default PieChartPage