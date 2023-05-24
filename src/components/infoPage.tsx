import { useEffect, useState } from 'react';
import IVacation from '../objects/vacation';
import '../styles/styleForHreader.css';


export default function InfoPage({vacation}:{vacation:IVacation}) {
  const [current, setCurrent] = useState<IVacation>(vacation);

  useEffect(() => {
    setCurrent(vacation);
}, [vacation])

  return (
    <div className='InfoVacation'>
            <div className="img-and-title">
                <img src={ current?.image }  alt="" className="logo_info" />

                <div className="title-info">
                    <div className="title">{ current?.name }</div>

                    <div className="company-and-city">
                        { `${ current?.company }\t | \t${ current?.city }` }
                    </div>
                </div>
            </div>

            <div className="price">
                От { current?.workZP } до  200 000
            </div>
            <div className="all-desc">
                <div className="description">
                    { current?.desc?.map(item => {
                        return (
                            <p className="paragraph">
                                { item }
                            </p>
                            )
                    }) }
                </div>

                <div className="exp-in">
                    <p className="you-have paragraph">И если у вас есть:</p>
                    <div>
                    {
                        current?.expIn?.map(el => {
                            return (
                                <p className="paragraph">
                                    { el }
                                </p>
                                )
                        })
                    }
                    </div>
                </div>

                <div className="knowledge">
                    <p className="paragraph important">
                        Обязательные знания:
                    </p>
                    <div>
                    {
                        current?.skils?.map(item => {
                            return (
                                <p className="paragraph">
                                    {item }
                                </p>
                                )
                        })
                    }
                    </div>
                </div>
            </div>
    </div>
  );
}

