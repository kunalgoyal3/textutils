import React from 'react'

export default function Alert(props) {
  return (
<div style={{height:'50px'}}>
  
     { props.alertText && <div class="alert alert-warning" role="alert">
      { props.alertText}
      </div>
}</div>

 


  )
}



