import React from 'react';

import FilterItem from '../FilterItem';
import {useDataValue} from '../../context/data';

import './index.css';

const Filter = () => {
    const [{filter}] = useDataValue();
    return(  
        <>   
            {filter.map(filterItem => {
                 return(
                    <FilterItem 
                        id={filterItem.id} 
                        quantity={filterItem.quantity}
                        name={filterItem.name} 
                        key={filterItem.id} 
                    />
                )
               })
            }
        </>
    )
}

export default Filter;
