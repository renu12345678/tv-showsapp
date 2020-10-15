import React from 'react'
import { Link } from 'react-router-dom'
import { Card,Rate } from 'antd'

type Props = {
  name: number,
  date: string, 
  vote: number,
  image: number, 
  id: number
}

const CardTamplate = ({ name, date, image, id, rating }: Props) => (
  <Link to={`/movie/${id}`}>
    <Card style={{margin: '5%',border: '1px solid #e9e9e9'}}>
      <div className='custom-image'>
        <img alt={name} width='100%' src={`${image}`} />
      </div>
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

export default CardTamplate
