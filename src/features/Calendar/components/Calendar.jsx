import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list';
import { useState } from 'react';
import { Box } from '@mui/material';
import { EventsSidebar } from '..';
import { useDispatch, useSelector } from 'react-redux'
import { addEvent, removeEvent } from '../../../../src/store/calendarSlice'

function Calendar() {

    const dispatch = useDispatch()
    const currentEvents = useSelector(state => state.events)

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
            dispatch(addEvent({
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay
            }))
        }
    }

    const handleEventClick = (selected) => {
        if (window.confirm(`Are you sure you want to delete the event '${selected.event.title}'`)) {
            selected.event.remove()
            dispatch(removeEvent(selected.event.id))
        }
    }

    const formatEvents = () => {
        return currentEvents
    }

    return (
        <Box
            className="flex-grow flex-shrink basis-full p-7"
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
                //className="flex flex-1"
                height="100%"
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
                events={formatEvents()}
                eventClick={handleEventClick}
            />
        </Box>
    )
}

export default Calendar;