import React, { useState } from 'react';
import '../styles/styleForHreader.css';
import {connect} from 'react-redux';
import IFilterCatalog from '../objects/catalogFilter';
import Filter from '../components/filterItem'

const FilterCatalog = ({filters,dispatch}:IFilterCatalog)=> {
    const [filter, setShowFiltres] = useState(filters);
    
    let i = 0;
  return (

    <div className='filter_catalog'>
        {filter.map(item=>
            <Filter
             img={item.img}
             items={item.items}
             type={item.type}
            key={i++}/>
            )}
    </div>
  );
}

export default connect()(FilterCatalog)

