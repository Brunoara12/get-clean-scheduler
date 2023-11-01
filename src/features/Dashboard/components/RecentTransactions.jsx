import React from 'react'
import { mockTransactions } from '../../../../src/data/mockData'
import { Box } from '@mui/material'

const RecentTransactions = () => {
    return (
        <>
            <Box className="flex justify-between items-center p-4"
                borderBottom={`4px solid var(--color-background)`}
            >
                <h5 className='text-skin-base font-semibold'>
                    Recent Transactions
                </h5>
            </Box>
            {mockTransactions.map((transaction, i) => (
                <Box
                    key={`${transaction.txId}-${i}`}
                    className="flex justify-between items-center p-4"
                    borderBottom={`4px solid var(--color-background)`}
                >
                    <Box>
                        <h5 className='text-skin-green font-semibold'>
                            {transaction.txId}
                        </h5>
                        <p className='text-skin-base'>
                            {transaction.user}
                        </p>
                    </Box>
                    <Box className='text-skin-base'>
                        {transaction.date}
                    </Box>
                    <Box className='bg-skin-buttGreen py-1 px-2 rounded-md'>
                        ${transaction.cost}
                    </Box>
                </Box>
            ))}
        </>

    )
}

export default RecentTransactions