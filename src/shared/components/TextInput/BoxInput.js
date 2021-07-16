import React from 'react'
import { TextField } from "@material-ui/core"
import {
  withStyles,
} from '@material-ui/core/styles'
import {useLayoutEffect, useRef} from 'react'

function BoxInput({ autoFocus, label,classes, ...rest }) {
  const CustomTextField = withStyles({
    root: {
      '& input': {
        color: 'white',
        fontSize: "1.4em",
        textAlign: "center",
        height: "0.75em"
      },
      '& input:valid + fieldset': {
        borderColor: 'white',
        borderWidth: 2,
      },
      '& input:invalid + fieldset': {
        borderColor: 'white',
        borderWidth: 2,
      },
      '& input:valid:focus + fieldset': {
        borderWidth: 2,
        padding: '4px !important', // override inline-style
      },
      '&:hover + fieldset' : {
        borderColor: 'white'
      },
      width: "53px"
    },
  })(TextField);
  return (
    <div>
      <CustomTextField
        variant="outlined"
        inputProps={{ maxLength: 1 }}
        label={label}
        value={rest.value}
        inputProps={{maxLength: 1, minLength: 1, inputMode: 'numeric'}}
        autoFocus={autoFocus}
        autoComplete="none"
        onInput={(e) => {
          e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
        }}
        {...rest}
      />
    </div>
  )
}

export default BoxInput
