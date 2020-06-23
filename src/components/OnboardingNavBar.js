import React from 'react'

const OnboardingNavBar = () => {

    return <div className='nav-container'>
        <p className='nav back'>BACK</p>
        <div className='nav-dots'>
            <div className='nav-dot inactive-nav'></div>
            <div className='nav-dot inactive-nav'></div>
            <div className='nav-dot inactive-nav'></div>
            <div className='nav-dot inactive-nav'></div>
            <div className='nav-dot active-nav'></div>
        </div>
        <p className='nav done'>DONE</p>
    </div>
}

export default OnboardingNavBar