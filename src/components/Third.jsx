import React from 'react'

function Third() {

    const [ value, setValue ] = React.useState('')

    const setInLocalStorage = () => {
        localStorage.setItem(value,value)
    }

    return (
        <div>
            <input placeholder='Введите имя' onChange={event => setValue(event.target.value)}/><br></br>
            <button onClick={setInLocalStorage}>Завести данные в LocalStorage</button>
        </div>
    )
}

export default Third