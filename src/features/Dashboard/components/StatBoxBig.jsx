import { Box } from '@mui/material'
import React from 'react'
import ProgressCircle from '../../../../src/components/ui/ProgressCircle'

const StatBoxBig = () => {
    return (
        <Box className='p-7'>
            <h5 className='text-skin-base font-semibold'>
                Campaign
            </h5>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                mt="25px"
            >
                <ProgressCircle size="125" />
                <h5 className='text-skin-green mt-4 text-center'>
                    $48,352 revenue generated
                </h5>
                <h5 className='text-skin-base text-center'>Includes extra misc expenditures and costs</h5>
            </Box>
        </Box>
    )
}

export default StatBoxBig