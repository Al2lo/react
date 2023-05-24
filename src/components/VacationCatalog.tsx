import IVacation from '../objects/vacation';
import { useEffect, useState } from 'react';
import Vacation from '../components/vacation'





export default function VacationCatalog ({vacations,setCurrent = undefined}:{vacations:IVacation[], setCurrent:any}){
        const [vacs, setVacations] = useState<IVacation[] | undefined>(vacations);

        useEffect(() => {
            setVacations(vacs);
        }, [vacs]);
    
    return(
        <div className='catalogVacs'>
                {
                vacs?.map(item => 
                    <Vacation vacItem={item} />
                    )
                }
        </div>
    );
}
