import React from "react";

const BookingPage = () => {
  const styles = {
    border: "0",
    width: "100%",
    height: "100vh",
    frameBorder: "0",
  };
  return (
    <iframe
      src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0nTuPQTYTOkzTdQyWY0XTGCekTmGuepFcEfDSFQM0hJjcnr97YKvGvqJLMTFx6Ou8YZqQLdv6N?gv=true"
      style={styles}
    />
  );
};

export default BookingPage;
