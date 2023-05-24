import '../styles/styleMain.css';
import { useEffect, useState } from 'react';
import IVacation from '../objects/vacation';
import InfoPage from './infoPage';
import ConteinerCom from './conteinerCom';
import ContainerCompForWorks from './containerCompForWorks';
import { setFilter } from '../redux/actionsFilter';
import ContainerComForLikeds from './containerComForLikeds';

export default function LikedMainPage({vacs, dispatch} : {vacs: IVacation[], dispatch : any}) {
  const [vacations_, setVacations] = useState<IVacation[]>([])
    const [currentVacation, setCurrent] = useState<IVacation>({});
    const [showInfo, setShowInfo] = useState(false);
    const [showVacations, setShowVacations] = useState(true);
    const [isFirst, setIsFirst] = useState(true);
    
    useEffect(()=>{setVacations(vacs);
        setCurrent(vacs.filter(el=>el.isEnter).at(0) as IVacation)},[vacs]);

        useEffect(() => {
          if(!isFirst) {
              setShowInfo(true);
              setShowVacations(false);
          } else if(currentVacation?.desc !== undefined) {
              setIsFirst(false);
          }
          if(currentVacation !== undefined) {   
              setVacations(vacations_?.map(el => {
                  return {
                      ...el,
                      isSelected: el.name === currentVacation.name
                  } as IVacation;
              }))
          }
        },[currentVacation]);

  return (
    <div className='MenuFilter'>
        <div className='mainPartOfProject'>
        <ContainerComForLikeds setCurrent={undefined} />
        {
        <ConteinerCom />
        }
        </div>
    </div>
  );
}
