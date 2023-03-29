import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { Typography } from '@mui/material'

const events = [
  { title: 'Meeting', start: new Date(), color:"red" }
]

export default function Calender() {
  return (
    <div>
      <Typography fontSize={"1.3rem"} fontWeight={"500"} color={"#001B33"}>AI-Assisted PM Scheduler</Typography>
      <FullCalendar
        plugins={[dayGridPlugin,timeGridPlugin,interactionPlugin]}
        initialView='dayGridMonth'
        headerToolbar={{
          start: 'prev,next today', 
          center: 'title',
          end: 'dayGridMonth,timeGridWeek,timeGridDay'
        }}
        events={events}
        editable={true}
        eventContent={renderEventContent}
      />
    </div>
  )
}

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  )
}