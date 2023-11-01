import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    events: [
        {
            id: "12315",
            title: "All-day event",
            date: "2023-10-14",
            start: new Date("2023-10-14").toISOString()
        },
        {
            id: "5123",
            title: "Timed event",
            date: "2023-10-28",
            start: new Date("2023-10-28").toISOString()
        },
    ]
}

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState,
    reducers: {
        addEvent: (state, action) => {
            const event = {
                id: nanoid(),
                title: action.payload.title,
                start: action.payload.start,
                end: action.payload.end,
                allDay: action.payload.allDay
            }

            state.events.push(event)
        },
        removeEvent: (state, action) => {
            state.events = state.events.filter(e => e.id !== action.payload)
        }
    }
})

export const { addEvent, removeEvent } = calendarSlice.actions

export default calendarSlice.reducer