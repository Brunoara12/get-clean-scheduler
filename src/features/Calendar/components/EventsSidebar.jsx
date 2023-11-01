import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addEvent } from '../../../../src/store/calendarSlice'

import { formatDate } from '@fullcalendar/core'
import { Box, List, ListItem, ListItemText } from '@mui/material';

const EventsSidebar = () => {
    const currentEvents = useSelector((state) => state.events)
    return (
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
                                formatDate(event.start, {
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric",
                                })
                            }
                        />
                    </ListItem>
                ))}
            </List>
        </Box>
    )
}

export default EventsSidebar