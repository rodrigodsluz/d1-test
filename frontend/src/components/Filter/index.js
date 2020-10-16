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
                        amount={filterInfo.amount}
                        name={filterInfo.name} 
                    />
                )
               })
            }
        </>
    )
}

export default Filter;
