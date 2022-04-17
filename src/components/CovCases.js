import React, { useState, useEffect } from 'react';

const CovCases = () => {

    const [newCase, setNewCase] = useState(0);
    const [totalCase, setTotalCase] = useState(0)
    const [newRecovered, setNewRecovered] = useState(0)

    const [patient, setPatient] = useState(0)
    const [totalRecovered, setTotalRecovered] = useState(0)
    const [totalDeath, setTotalDeath] = useState(0)

    useEffect(() => {
        fetch("https://covid19.ddc.moph.go.th/api/Cases/today-cases-all")
            .then(res => res.json())
            .then(
                (result) => {
                    // console.log(result[0].new_case);
                    setNewCase(result[0].new_case);
                    setTotalCase(result[0].total_case)
                    setNewRecovered(result[0].new_recovered)
                    setTotalRecovered(result[0].total_recovered)
                    setTotalDeath(result[0].total_death)
                    setPatient(totalCase - totalRecovered)
                }
            )
    })

    return (
        <><div className='Cov' />
            <div className='new-total-death'>

                <div className='new-patient-case'>
                    <p className='new-case-header'>ผู้ป่วยติดเชื้อรายใหม่</p>
                    <p className='num-new-case'>+<b>{newCase}</b></p>
                </div>

                <div className='total-case'>
                    <p className='header-total-case'>ผู้ป่วยติดเชื้อสะสม<img className='pic-total-case' src='Pics/patient.png'></img></p>
                    <p className='num-total-case'><b>{totalCase}</b></p>
                </div>

                <div className='new-Recovered-case'>
                    <p className='new-Recovered-header'>รักษาหายวันนี้</p>
                    <p className='num-Recovered-case'>+<b>{newRecovered}</b></p>
                </div>

            </div>

            <div className='total-patient-death'>
                <div className='patient'>กำลังรักษา<img className='pic-total-patient' src='Pics/docter.png'></img>
                    {/* totalcase - total recovered */}
                    <p className='num-total-patient'><b>{patient}</b></p>
                </div>

                <div className='Death'>เสียชีวิต<img className='pic-total-Death' src='Pics/Death.jpg'></img>
                    <p className='num-total-Death'><b>{totalDeath}</b></p>
                </div>

                <div className='Recovered'>หายเเล้ว<img className='pic-total-Recovered' src='Pics/Recovered.png'></img>
                    {/* totalrecovered */}
                    <p className='num-total-Recovered'><b>{totalRecovered}</b></p>
                </div>


            </div></>


    )
}

export default CovCases;