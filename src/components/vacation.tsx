import { useEffect, useState } from "react";
import IVacation from "../objects/vacation";
import { ReactComponent as Like } from '../images/heart.svg'
import {connect} from 'react-redux';
import { addVacation, deleteVacation, setCurrent } from "../redux/actions/vac_actions";
import '../styles/styleMain.css';

const Vacation = ({vacItem, dispatch}:{vacItem:IVacation, dispatch?:any })=>{
    const [isSelect, setIsSelect]  = useState(vacItem.isEnter);
    const [isLiked, setisLiked] = useState<boolean>();

    useEffect(() => {
        setisLiked(vacItem?.isLiked);
        setIsSelect(vacItem?.isEnter as boolean)
    }, [vacItem])

    const onVacation = ()=>{
        dispatch(setCurrent(vacItem));
    }

    const onLike =()=>{
        vacItem.isLiked = !vacItem.isLiked;
        setisLiked(vacItem.isLiked);
        const func = vacItem.isLiked ? addVacation : deleteVacation;
        dispatch(func(vacItem));
    }

    return(
        <section className={isSelect ? "selected_vacation" : "no_selected_vacation"}>
                <img src={vacItem.image} className="logo" onClick={()=>onVacation()}/>
                <div  className="infoBox"  >
                    <div className="company">{vacItem.company}</div>
                    <div className="name">{vacItem.name}</div>
                    <div className="city">{vacItem.city}</div>
                    <div className="skils">
                        {vacItem.skils?.map(e=><label>{e}</label>)}
                    </div>
                </div>
                <div className="likedBox">
                    <Like 
                    className={isLiked ? "likedBoxHeart":"noLikedBoxHeart"}
                    onClick={()=>onLike()}
                    />
                    <div className="date">
                        {vacItem.date}
                    </div>
                </div>
        </section>
    );

}

export default connect()(Vacation);