import { createSlice } from '@reduxjs/toolkit';

//import { addHours } from 'date-fns';
/* const tempEvent = {
    id: new Date().getTime(),
    title: 'Final del campeonado',
    notes: 'Jugar partido de ida de visita',
    start: new Date(),
    end: addHours(new Date(),3),
    bgColor: '#fafafa',
    user: {
      _id: '123',
      name: 'Andres'
    }
} */

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        onLoadingEvents: true,
        events: [
            //tempEvent
        ],
        activeEvents: null
    },
    reducers: {
        onSetActiveEvent: (state, {payload}) => {
            state.activeEvent = payload;
        },
        onAddNewEvent: (state, {payload}) => {
            state.events.push(payload);
            state.activeEvent = null;
        },
        onUpdateEvent: (state, {payload}) => {
            state.events = state.events.map(event => {
                if (event.id === payload.id) {
                    return payload;
                }
                return event;
            });
        },
        onDeleteEvent: (state) => {
            if (state.activeEvent) {
                state.events = state.events.filter(event => event.id !== state.activeEvent.id);
                state.activeEvent = null;
            }           
        },
        onLoadEvents: (state, {payload = []}) => {
            state.onLoadingEvents = false;
            //state.events = payload;
            payload.forEach(event => {
                const exists = state.events.some( dbEvent => dbEvent.id === event.id );
                if ( !exists ) {
                    state.events.push( event )
                }
            });
        },
        onLogoutCalendar: (state) => {
            state.onLoadingEvents = true;
            state.events = [];
            state.activeEvents = null;
        },
    }
});

// Action creators are generated for each case reducer function
export const { 
    onSetActiveEvent, 
    onAddNewEvent, 
    onUpdateEvent, 
    onDeleteEvent, 
    onLoadEvents,
    onLogoutCalendar
} = calendarSlice.actions;