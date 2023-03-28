import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { Typography } from '@mui/material'

const events = [
  { title: 'Meeting', start: new Date() }
]

export default function Calender() {
  return (
    <div>
      <Typography fontSize={"1.3rem"} fontWeight={"500"} color={"#001B33"}>AI-Assisted PM Scheduler</Typography>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView='dayGridMonth'
        weekends={false}
        events={events}
        eventContent={renderEventContent}
      />
    </div>
  )
}

// a custom render function
function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  )
}