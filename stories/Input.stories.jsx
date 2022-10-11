import React from 'react';
import {InputModif} from "./Input"
export default {
    title: 'InputModif',
    component: InputModif
  }

const Template = (args) => <InputModif {...args}/> 

export const Number = Template.bind({})

Number.args = {
    label : "Ini Label Number",
    type  : "number",
    width: 100
}

