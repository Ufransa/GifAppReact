import { useState } from "react"



// eslint-disable-next-line react/prop-types
export const AddCategory = ( { onNewCategory } ) => {

    const [ inputValue, setInputValue ] = useState('')

    const onInputChange = (event) => {
        setInputValue( event.target.value )
    }

    const onSubmit = ( event ) => {
        // preventDefault evita que se recarge la pagina cuando se submitea
        event.preventDefault()

        const newInputValue = inputValue.trim()

        if (newInputValue.length <=1 ) return

        onNewCategory( newInputValue )

        setInputValue('')
    }

  return (

    <form onSubmit={ onSubmit }>
        <input 
            type="text"
            placeholder="Buscar Gifs"
            value={ inputValue }
            onChange={ onInputChange } 
        />
    </form>
    
  )
}
