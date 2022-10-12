import React from 'react';
import {InputModif} from "./Input"
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'InputModif',
    component: InputModif,
    argTypes: {
        fontColor: { control: 'color' },
      },
      
  }

const Template = (args) => <InputModif {...args}/> 
export const Input = Template.bind({})
export const Number = Template.bind({})
export const Password = Template.bind({})

Input.args = {
    label : "Ini Input",

}

Number.args = {
    label : "Ini Label Number",
    type  : "number",
    width: 100,
    borderRadius: 10
}

Password.args = {
    label : "Ini Label Password",
    type  : "password",
    width: 100,
    borderRadius: 40
}
