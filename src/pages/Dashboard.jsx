import Header from '../components/ui/Header'
import { Calendar } from '../features/Calendar/components/Calendar'

function Dashboard() {
    return (
        <div className='m-5'>
            <div className='flex justify-between items-center'>
                <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
            </div>
            <Calendar></Calendar>
        </div>
    )
}

export default Dashboard

