import React from 'react'

export interface IExpense {
  _id?: string
  date?: Date
  category: string
  amount: number
}
