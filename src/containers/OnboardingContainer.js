import React from 'react'
import FocusAreas from '../components/FocusAreas'
import OnboardingNavBar from '../components/OnboardingNavBar'
import '../stylesheets/OnboardingContainer.css';


class OnboardingContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            selectedFocusAreas: []
        }
    }

    handleClickFocusArea = id => {
        this.setState(prevState => {
            return prevState.selectedFocusAreas.some(areaId => areaId === id) ?
            {
                selectedFocusAreas: prevState.selectedFocusAreas.filter(areaId => areaId !== id)
            }
            :
            {
                selectedFocusAreas: [...prevState.selectedFocusAreas, id]
            }
        })
    }

    render() {
        return <div className='container'>
            <FocusAreas selected={this.state.selectedFocusAreas} handleClick={this.handleClickFocusArea} />
            <OnboardingNavBar />
        </div>
    }

}

export default OnboardingContainer