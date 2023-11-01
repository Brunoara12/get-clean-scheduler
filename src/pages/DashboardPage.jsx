import ProgressCircle from '../components/ui/ProgressCircle'
import Header from '../components/ui/Header'
import { Box, Button, IconButton } from '@mui/material'
import { DownloadOutlined, EmailOutlined, PersonAddOutlined, PointOfSaleOutlined, TrafficOutlined } from '@mui/icons-material'
import { StatBox, RevenueGenerated, RecentTransactions, StatBoxBig, MonthlySales } from '../features/Dashboard/index'
import { LineChart, PieChart, BarChart } from '../features/Charts'
import { Calendar } from '../features/Calendar'
import DashboardComponent from '../../src/components/ui/DashboardComponent'

function DashboardPage() {
    return (
        <Box className='flex flex-1 min-w-0 flex-col m-5'>
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
                <DashboardComponent colSpan={3}>
                    <StatBox
                        title={"21"}
                        subtitle="Emails Sent"
                        progress="0.75"
                        increase="+13%"
                        icon={<EmailOutlined className='text-skin-green text-2xl' />} />
                </DashboardComponent>
                <DashboardComponent colSpan={3}>
                    <StatBox
                        title={"9/10"}
                        subtitle="Clients Confirmed Tomorrow"
                        progress="0.90"
                        increase="+5%"
                        icon={<PersonAddOutlined className='text-skin-green text-2xl' />} />
                </DashboardComponent>
                <DashboardComponent colSpan={3}>
                    <StatBox
                        title={"$10,344"}
                        subtitle="Sales This Month"
                        progress="0.34"
                        increase="+57%"
                        icon={<PointOfSaleOutlined className='text-skin-green text-2xl' />} />
                </DashboardComponent>
                <DashboardComponent colSpan={3}>
                    <StatBox
                        title={"546"}
                        subtitle="Traffic Inbound"
                        progress="0.47"
                        increase="+87%"
                        icon={<TrafficOutlined className='text-skin-green text-2xl' />} />
                </DashboardComponent>

                {/* ROW 2 */}
                <DashboardComponent colSpan={8} rowSpan={2}>
                    <RevenueGenerated />
                </DashboardComponent>
                <DashboardComponent colSpan={4} rowSpan={2} overflow>
                    <RecentTransactions />
                </DashboardComponent>

                {/* ROW 3 */}
                <DashboardComponent colSpan={12} rowSpan={4}>
                    <Calendar />
                </DashboardComponent>

                {/* ROW 4 */}
                <DashboardComponent colSpan={4} rowSpan={2} >
                    <StatBoxBig />
                </DashboardComponent>
                <DashboardComponent colSpan={4} rowSpan={2} >
                    <MonthlySales />
                </DashboardComponent>

            </Box>
        </Box>
    )
}

export default DashboardPage

