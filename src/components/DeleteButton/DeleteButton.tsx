import React, { FC } from 'react'
import './DeleteButton.css'

interface ComponentProps {
  label: String
  onClick(): void
}

export const DeleteButton: React.FC<ComponentProps> = ({ label, onClick }) => {
  return (
    <button className="delete-button" onClick={onClick}>
      {label}
    </button>
  )
}
