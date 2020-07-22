import React from 'react';
import { Button } from './styles'
import EntypoIcons from 'react-native-vector-icons/Entypo';

export default function NewButton() {
  return (
    <Button>
       <EntypoIcons name="plus" size={22} color="#000" />
    </Button>
  )
}
