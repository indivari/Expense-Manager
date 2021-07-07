import React, { FC } from 'react'
import './UpdateButton.css'

interface ComponentProps {
  label: String
  onClick(): void
}

export const UpdateButton: React.FC<ComponentProps> = ({ label, onClick }) => {
  return (
    <button className="update-button" onClick={onClick}>
      {label}
    </button>
  )
}
