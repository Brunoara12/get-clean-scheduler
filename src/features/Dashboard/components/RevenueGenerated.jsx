import { LineChart } from '../../../features/Charts'
import { DownloadOutlined } from '@mui/icons-material'
import { Box, IconButton } from '@mui/material'
import React from 'react'

const RevenueGenerated = () => {
    return (
        <>
            <Box
                className="mt-6 px-7 flex justify-between items-center"
            >
                <Box>
                    <h5 className='text-skin-base font-semibold'>
                        Revenue Generated
                    </h5>
                    <h5 className='text-skin-green font-bold'>
                        $59,342.32
                    </h5>
                </Box>
                <Box>
                    <IconButton>
                        <DownloadOutlined className='text-skin-green text-2xl' />
                    </IconButton>
                </Box>
            </Box>
            <Box className="h-64 mt-[-20px]">
                <LineChart isDashboard={true} />
            </Box>
        </>
    )
}

export default RevenueGenerated