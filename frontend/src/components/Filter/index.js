import React from 'react';

import FilterInfos from '../FilterInfos';
import {useDataValue} from '../../context/data';

import './index.css';

const Filter = () => {
    const [{filter}] = useDataValue();
    return(  
        <>   
            {filter.map(filterInfo => {
                 return(
                    <FilterInfos 
                        id={filterInfo.id} 
                        quantity={filterInfo.quantity}
                        name={filterInfo.name} 
                        key={filterInfo.id} 
                    />
                )
               })
            }
        </>
    )
}

export default Filter;
