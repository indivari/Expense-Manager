import React, { FC } from 'react'
import './PrimaryButton.css'

interface ComponentProps {
  label: String
  onClick(): void
}

export const PrimaryButton: React.FC<ComponentProps> = ({ label, onClick }) => {
  return (
    <button className="primary-button" onClick={onClick}>
      {label}
    </button>
  )
}
