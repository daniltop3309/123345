import React from 'react'

function Second() {

  const [ value, setValue ] = React.useState('')

    React.useEffect(() => {
        document.title = value
    },[value])  
    
  return (
    <div>
        <input value={value} onChange={event => setValue(event.target.value)} />
    </div>
  )
}

export default Second   