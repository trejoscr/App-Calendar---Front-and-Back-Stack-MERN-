export const CalendarEvent = ({event}) => {
    const {title, user} = event;
  return (
    <>
        <span><b>{title}</b> - {user.name}</span>
    </>
  )
}
