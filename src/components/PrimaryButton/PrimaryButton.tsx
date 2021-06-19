import React, { FC } from 'react'
import './PrimaryButton.css'

interface ComponentProps {
  label: String
}

export const PrimaryButton: React.FC<ComponentProps> = ({ label }) => {
  return <button className="primary-button">{label}</button>
}
