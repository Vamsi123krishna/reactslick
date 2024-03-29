import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div data-testid="planets">
      <div className="bg-container-slider">
        <button className="previous-btn"></button>
        <Slider>
          {planetsList.map(eachItem => (
            <PlanetItem eachItem={eachItem} key={eachItem.id} />
          ))}
        </Slider>
        <button className="previous-btn"></button>
      </div>
    </div>
  )
}

export default PlanetsSlider
