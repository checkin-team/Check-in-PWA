import React from 'react'
import { Button } from "@material-ui/core"

function Basic({ children, ...details }) {
  return (
    <div>
      <Button
        type="submit"
        style={{ textTransform: 'none', fontSize: '15px', fontWeight: 600, color: '#ff5656' }}
        color="secondary"
        variant="contained"
        {...details}
      >
        {children}
      </Button>
    </div>
  )
}

export default Basic
