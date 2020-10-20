import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { Card } from 'antd'

const CardTamplate = ({ name, image, id, rating }) => (
  <Link to={`/ShowDetails/${id}`}>
    <Card className='card-container' style={{ marginBottom : '16px', border: '1px solid #e9e9e9'}}>
     {image && <div className='custom-image'>
        <img alt={name} width='100%' src={`${image}`} />
      </div>}
      <div className='custom-card'>
        <h3>{name}</h3>
      </div>
      <div>
        <h3>{rating}</h3>
      </div>
    </Card>
  </Link>
)
CardTamplate.propTypes = { 
  name: PropTypes.string,
  image: PropTypes.string,
  id: PropTypes.number,
  rating:  PropTypes.number,
 
};
export default CardTamplate
