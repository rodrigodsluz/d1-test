import React, {useReducer, createContext, useContext} from 'react'

export const DataContext = createContext()

export const Data = ({ initialState, reducer, children }) => {
    return (
        <DataContext.Provider value = { useReducer(reducer, initialState) }>
            {children}
        </DataContext.Provider>
    )
}

export const useDataValue = () => useContext(DataContext)