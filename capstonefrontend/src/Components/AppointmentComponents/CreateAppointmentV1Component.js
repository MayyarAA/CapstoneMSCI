import React, { useState } from "react";
import Calendar from "react-calendar";

function CreateAppointmentV1Component() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}

export { CreateAppointmentV1Component };
