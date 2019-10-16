import React from  'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Expenses from './Expenses'
import AddExpenses from '../components/AddExpenses'

const Navigation = createSwitchNavigator({
      Expenses,
      AddExpenses
  })


export default createAppContainer(Navigation)