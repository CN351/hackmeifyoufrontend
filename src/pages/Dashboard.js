import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../components/Navbar'
import CovCases from "../components/CovCases.js"
import News from '../components/News';
import { Link, Redirect } from 'react-router-dom';
import axios from '../api/axios';
import Login from './Login';

export default function Dashboard() {
    const [CheckUpDetail, setCheckUpDetail] = React.useState('Check the initial symptoms of COVID-19, in order to get the right treatment.')
    const [image, setImage] = useState('')

    useEffect(async () => {
        if (image === '') {
            await axios.get('/image').then(res => {
                console.log(res.data[0]);
                setImage(res.data[0])
            })
        }
    }, [image])
    return (
        <>
            <div className='container-dash'>

                <div className='hompital-img-head' style={{
                    backgroundImage: `url(${image.image})`
                }}>
                    <p className='hompital'>HOMPITAL</p>

                </div>

                <div className='headcase'>
                    <p>COVID TODAY</p>
                </div>
                <CovCases></CovCases>

                <div className='checkup-banner'>

                    <p className='header-checkup'>Check up</p>
                    <p className='checkep-detail'>{CheckUpDetail}</p>
                    <Link to="/checkup" style={{ color: 'white' }}>
                        <button type="button" class="btn btn-outline-light" style={{ fontSize: 20, marginLeft: 1150, padding: 12.5, borderRadius: 25, marginBottom: 140 }}>
                            Check up now
                        </button>
                    </Link>

                </div>
                <News></News>
                <div className="end">
                    <div className="hompital-lastline">
                        <p>HOMPITAL</p>
                    </div>
                </div>
            </div >
        </>
    )
}
