import { formatDate } from '@fullcalendar/core'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list';
import { useState } from 'react';
import { Box, List, ListItem, ListItemText } from '@mui/material';

function Calendar() {
    const [currentEvents, setCurrentEvents] = useState([])

    const handleDateClick = (selected) => {
        const title = prompt("Please enter a new title for your event")
        const calendarApi = selected.view.calendar;
        calendarApi.unselect();

        if (title) {
            calendarApi.addEvent({
                id: `${selected.dateStr}-${title}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay,
            });
        }
    }

    const handleEventClick = (selected) => {
        if (window.confirm(`Are you sure you want to delete the event '${selected.event.title}'`)) {
            selected.event.remove()
        }
    }

    return (
        <Box className="flex justify-between">
            {/* CALENDAR SIDEBAR */}
            <Box className="flex-grow flex-shrink basis-[20%] bg-skin-bgAccent p-4 rounded">
                <h5 className='text-skin-base'>Events</h5>
                <List>
                    {currentEvents.map((event) => (
                        <ListItem
                            key={event.id}
                            className='bg-skin-buttGreen my-3 rounded-sm'
                        >
                            <ListItemText
                                primary={event.title}
                                secondary={
                                    <p>
                                        {formatDate(event.start, {
                                            year: "numeric",
                                            month: "short",
                                            day: "numeric",
                                        })}
                                    </p>
                                }
                            />
                        </ListItem>
                    ))}
                </List>
            </Box>

            {/* CALENDAR */}
            <Box
                className="flex-grow flex-shrink basis-[100%] ml-4"
                sx={{
                    "& .fc-view-harness": {
                        backgroundColor: "var(--color-background-accent)",
                    },
                    "& .fc-toolbar-title": {
                        color: "var(--color-text-base)"
                    },
                    "& .fc-col-header-cell-cushion": {
                        color: "var(--color-text-base)"
                    },
                    "& .fc-daygrid-day-number": {
                        color: "var(--color-text-base)"
                    },
                    "& .fc-scrollgrid-shrink-cushion": {
                        color: "var(--color-text-base)"
                    },
                    "& .fc-list-event": {
                        color: "var(--color-text-base)"
                    },
                    "& .fc-list-event:hover td": {
                        color: "var(--color-text-accent)",
                        backgroundColor: "var(--color-button-gr-hover)"
                    },
                }}>
                <FullCalendar
                    height="75vh"
                    plugins={[
                        dayGridPlugin,
                        timeGridPlugin,
                        interactionPlugin,
                        listPlugin,
                    ]}
                    headerToolbar={{
                        left: "prev,next today",
                        center: "title",
                        right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
                    }}
                    initialView="dayGridMonth"
                    editable={true}
                    selectable={true}
                    selectMirror={true}
                    dayMaxEvents={true}
                    select={handleDateClick}
                    eventClick={handleEventClick}
                    eventsSet={(events) => setCurrentEvents(events)}
                    initialEvents={[
                        {
                            id: "12315",
                            title: "All-day event",
                            date: "2023-10-14",
                        },
                        {
                            id: "5123",
                            title: "Timed event",
                            date: "2023-10-28",
                        },
                    ]}
                />
            </Box>

        </Box>
    )
}

export default Calendar;