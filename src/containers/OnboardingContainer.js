import React from 'react'
import FocusAreas from '../components/FocusAreas'
import OnboardingNavBar from '../components/OnboardingNavBar'

class OnboardingContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            viewPage: 5,
            selectedFocusAreas: []
        }
    }

    handleClickFocusArea = id => {
        this.setState(prevState => {
            if(prevState.selectedFocusAreas.some(areaId => areaId === id)) {
                return {
                    selectedFocusAreas: prevState.selectedFocusAreas.filter(areaId => areaId !== id)
                }
            } else {
                return {
                    selectedFocusAreas: [
                        ...prevState.selectedFocusAreas,
                        id
                    ]
                }
            }
        })
    }

    render() {
        return <div>
            <FocusAreas selected={this.state.selectedFocusAreas} handleClick={this.handleClickFocusArea} />
            <OnboardingNavBar page={this.state.page} />
        </div>
    }

}

export default OnboardingContainer