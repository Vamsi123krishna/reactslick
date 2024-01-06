// Write your code here

import './index.css'

const PlanetItem = props => {
  const {eachItem} = props

  const {id, name, imageUrl, description} = eachItem
  return (
    <>
      <div className="slides-container">
        <h1 className="main-head">Planets</h1>
        <div className="planets-container">
          <img src={imageUrl} alt={name} className="img-planet" />
          <h1 className="planetname">{name}</h1>
          <p className="description">{description}</p>
        </div>
      </div>
    </>
  )
}

export default PlanetItem
