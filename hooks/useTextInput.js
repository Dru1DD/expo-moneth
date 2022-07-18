import React, { useState, useCallback } from 'react'

export const useTextInput = (
    initialValue = "",
    placeholder = "text",
    keyboardType = "number-pad",
    multiline = false
) => {
    const [ value, setValue ] = useState(initialValue)
    
    const textInputHandler = useCallback((current) => {
        setValue(current)
    }, [])
    return {
        value, 
        textInputHandler,
        placeholder,
        keyboardType,
        multiline
    }
}