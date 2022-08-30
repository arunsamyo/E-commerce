
import React from 'react';
import { Data } from "./Data";
import { AddToCard } from "../Services/Actions/Action";
import { useDispatch } from "react-redux";
const Home = () => {

    const dispatch = useDispatch();
    const submit = (val) => {
        // console.log(val)
        dispatch(AddToCard(val))
    }
    return (
        <>
            <div className='container-fluid mt-5'>
                <div className="container">
                    <div className="row">
                        {Data.map((v,i) => {
                            return (
                                <div className=' col-lg-6 col-sm-12 col-xl-4' key={i}>
                                    <div className="card mt-3" >
                                        <img className="card-img-top text-center" src={v.img} alt="Card image" />
                                        <div className="card-body">
                                            <h4 className="card-title">{v.name}</h4>
                                            <p className="card-text">{v.price}</p>
                                            <p className="card-text">{v.title}</p>
                                            <a href="#" className="btn btn-primary" onClick={() => submit(v)} >ADD CARD</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home