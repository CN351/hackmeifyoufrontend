import React, { useContext } from 'react';
import Navbar from '../components/Navbar'
import CovCases from "../components/CovCases.js"
import News from '../components/News';
import { Link, Redirect } from 'react-router-dom';

export default function Dashboard() {
    const [CheckUpDetail, setCheckUpDetail] = React.useState('Check the initial symptoms of COVID-19, in order to get the right treatment.')
    return (
        <>
            <div className='container-dash'>
                
                <div className='hompital-img-head'>
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
            </div>
        </>
    )
}
