import ProgressCircle from '../components/ui/ProgressCircle'
import Header from '../components/ui/Header'
import { Calendar } from '../features/Calendar/components/Calendar'
import { Box, Button, IconButton } from '@mui/material'
import { DownloadOutlined, EmailOutlined, PersonAddOutlined, PointOfSaleOutlined, TrafficOutlined } from '@mui/icons-material'
import StatBox from '../features/Dashboard/components/StatBox'
import { mockTransactions } from '../../src/data/mockData'
import { LineChart, PieChart, BarChart } from '../features/Charts'

function DashboardPage() {
    return (
        <Box className='flex flex-1 min-w-0 flex-col'>
            <Box className='flex justify-between items-center'>
                <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

                <Box>
                    <Button
                        className='bg-skin-buttBlue text-skin-base text-sm font-bold py-2 px-5'>
                        <DownloadOutlined className='mr-2' />
                        Download Reports
                    </Button>
                </Box>
            </Box>
            {/* Grid Dashboard */}

            <Box className='grid grid-cols-12 auto-rows-[140px] gap-5'>
                {/* ROW 1 */}
                <StatBox
                    span={3}
                    title={"21"}
                    subtitle="Emails Sent"
                    progress="0.75"
                    increase="+13%"
                    icon={<EmailOutlined className='text-skin-green text-2xl' />} />
                <StatBox
                    span={3}
                    title={"9/10"}
                    subtitle="Clients Confirmed Tomorrow"
                    progress="0.90"
                    increase="+5%"
                    icon={<PersonAddOutlined className='text-skin-green text-2xl' />} />
                <StatBox
                    span={3}
                    title={"$10,344"}
                    subtitle="Sales This Month"
                    progress="0.34"
                    increase="+57%"
                    icon={<PointOfSaleOutlined className='text-skin-green text-2xl' />} />
                <StatBox
                    span={3}
                    title={"546"}
                    subtitle="Traffic Inbound"
                    progress="0.47"
                    increase="+87%"
                    icon={<TrafficOutlined className='text-skin-green text-2xl' />} />
                {/* ROW 2 */}
                <Box
                    className='bg-skin-bgAccent'
                    gridColumn="span 8"
                    gridRow="span 2"
                >
                    <Box
                        mt="25px"
                        p="0 30px"
                        display="flex "
                        justifyContent="space-between"
                        alignItems="center"
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
                    <Box height="250px" m="-20px 0 0 0">
                        <LineChart isDashboard={true} />
                    </Box>
                </Box>
                <Box
                    className='bg-skin-bgAccent'
                    gridColumn="span 4"
                    gridRow="span 2"
                    overflow="auto"
                >
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        borderBottom={`4px solid var(--color-background)`}
                        p="15px"
                    >
                        <h5 className='text-skin-base font-semibold'>
                            Recent Transactions
                        </h5>
                    </Box>
                    {mockTransactions.map((transaction, i) => (
                        <Box
                            key={`${transaction.txId}-${i}`}
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            borderBottom={`4px solid var(--color-background)`}
                            p="15px"
                        >
                            <Box>
                                <h5 className='text-skin-green font-semibold'>
                                    {transaction.txId}
                                </h5>
                                <p className='text-skin-base'>
                                    {transaction.user}
                                </p>
                            </Box>
                            <Box className='text-skin-base'>{transaction.date}</Box>
                            <Box
                                className='bg-skin-buttGreen'
                                p="5px 10px"
                                borderRadius="4px"
                            >
                                ${transaction.cost}
                            </Box>
                        </Box>
                    ))}
                </Box>

                {/* ROW 3 */}
                <Box className='bg-skin-bgAccent'
                    gridColumn="span 4"
                    gridRow="span 2"
                    p="30px"
                >
                    <h5 className='font-semibold'>
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
                <Box
                    className='bg-skin-bgAccent'
                    gridColumn="span 4"
                    gridRow="span 2"
                >
                    <h5 className='font-semibold pt-7 pr-7 pl-7'>
                        Sales Quantity
                    </h5>
                    <Box height="250px" mt="-20px">
                        <BarChart isDashboard={true} />
                    </Box>
                </Box>
                <Box
                    className='bg-skin-bgAccent'
                    gridColumn="span 4"
                    gridRow="span 2"
                    padding="30px"
                >
                    <h5 className='font-semibold mb-4'>
                        Geography Based Traffic
                    </h5>
                    <Box height="200px">
                        <PieChart isDashboard={true} />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default DashboardPage

