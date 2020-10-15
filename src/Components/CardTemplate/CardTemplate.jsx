import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { Card,Rate } from 'antd'

const CardTamplate = ({ name, image, id, rating }) => (
  <Link to={`/movie/${id}`}>
    <Card style={{margin: '5%',border: '1px solid #e9e9e9'}}>
     {image && <div className='custom-image'>
        <img alt={name} width='100%' src={`${image}`} />
      </div>}
      <div className='custom-card'>
        <h3>{name}</h3>
      </div>
      <div>
        <h3>{rating}/5</h3>
      </div>
      <Rate className='rate' count={5} disabled  defaultValue={rating} />
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
