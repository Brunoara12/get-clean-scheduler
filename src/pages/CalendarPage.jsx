import { Calendar, EventsSidebar } from "../features/Calendar/index"
import Header from "../components/ui/Header"
import { Box } from "@mui/material"

const CalendarPage = () => {
    return (
        <div className='flex flex-1 min-w-0'>

            <Box className="flex flex-1 flex-col min-w-0 m-5">
                <Header title="Calendar" subtitle="Full Calendar Interactive Page" />
                <Box className="flex justify-between h-[75vh]">
                    <EventsSidebar />
                    <Calendar />
                </Box>
            </Box>
        </div>
    )
}

export default CalendarPage