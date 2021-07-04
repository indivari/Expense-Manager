import React, { useState } from 'react'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

interface DatePickType {
  selectedDate?: Date,
  onChange(date: Date): void
}

const DatePick: React.FC<DatePickType> = ({ selectedDate: defaultDate, onChange }) => {
  return (
    <DatePicker
      selected={defaultDate}
      onChange={(date: Date) => onChange(date)}
    />
  )
}

export default DatePick
