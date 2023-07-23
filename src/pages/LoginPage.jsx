import React from 'react';
import {Form} from 'react-final-form';
import { Field } from 'react-final-form';
import TextField from '@material-ui/core/TextField'
const onSubmit=true;
const LoginPage = () => {
  return (
    <div>
{/* <Form>
  <Field name="Input Field">
  {props => (
    <div>
      <TextField
        name={props.input.name}
        value={props.input.value}
        onChange={props.input.onChange}
      />
    </div>
  )}
  </Field>
</Form> */}
<Form onSubmit={onSubmit}>
  {props => (
    <form onSubmit={props.handleSubmit}>
  <Field name="Input Field">
  {props => (
    <div>
      <TextField
        name={props.input.name}
        value={props.input.value}
        onChange={props.input.onChange}
      />
    </div>
  )}
  </Field>
      

      <button type="submit">Submit</button>
    </form>
  )}
</Form>
    </div>
  )
}

export default LoginPage