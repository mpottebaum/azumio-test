import React from 'react'

const FocusAreas = props => {

    const renderOptions = () => options.map(
        option => <div
                    className={isSelected(option.id) ? 'option active-opt' : 'option inactive-opt'}
                    onClick={() => props.handleClick(option.id)}
                >
                    <p className='option-text'>{option.name}</p>
                </div>
    )
    const isSelected = id => props.selected.some(areaId => areaId === id)

    return <div className='page-container'>
        <div className='form-text'>
            <h3 className='form-question'>What are your main areas of focus?</h3>
            <p>This will help us build a personalized experience for you</p>
        </div>
        <div className='options'>
            {renderOptions()}                
        </div>
    </div>
}

export default FocusAreas


const options = [
    {
        name: 'Blood Glucose',
        id: 1
    },
    {
        name: 'Medication',
        id: 2
    },
    {
        name: 'Food Tracking',
        id: 3
    },
    {
        name: 'Exercise',
        id: 4
    },
    {
        name: 'Weight Management',
        id: 5
    },
    {
        name: 'Blood Pressure',
        id: 6
    },
    {
        name: 'A1C',
        id: 7
    },
]