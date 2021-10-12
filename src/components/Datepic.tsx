import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker, {DayRange} from "react-modern-calendar-datepicker";

const App = () => {
  const [selectedDayRange, setSelectedDayRange] = React.useState<DayRange>({
    from: null,
    to: null
  });
  return (
    <DatePicker
      value={selectedDayRange}
      onChange={setSelectedDayRange}
      inputPlaceholder="Select a week"
      shouldHighlightWeekends
    />
  );
};
export default App;