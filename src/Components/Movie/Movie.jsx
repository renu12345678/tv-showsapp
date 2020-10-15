/* @flow */
import React, { Component } from 'react'
import { Row, Col, Rate, Tag,Button } from 'antd'
import  Icon  from '@ant-design/icons'
import { Link } from 'react-router-dom'
import Utils from '../../Services/utilsService'
import Api from '../../Services/dataService'

import './Movie.css'
const ButtonGroup = Button.Group;
type State = {
  name: number,
  description: string,
  urlImage: string,
  stars: number,
  genres: [],
  release_date: string,
  videoId: number
}

export default class Movie extends Component <State> {
  constructor (props) {
    super(props)

    this.state = {
      name: '',
      description: '',
      urlImage: '',
      stars: 0,
      genres: [],
      release_date: '',
      language: '',
    }
  }

  componentDidMount () {
    const idFilm = parseInt(this.props.match.params.id, 10)
    Api.getShowById(idFilm)
        .then(data => {
          console.log('dataApi', data)
          this.setState({
            urlImage:data.image && data.image.medium,
            name: data.name,
            stars: data.rating.average/2,
            description: data.summary,
            genres: (data.genres),
            language:data.language,
            release_date:data.premiered
          })
        })
  }

  render () {
    return (
      <div className="container" style={{overflow: 'hidden'}}>
        <Link to="/">
        <ButtonGroup>
          <Button type="primary" style={{margin: '4%'}}>
            <Icon type="left" />Go back
          </Button>
        </ButtonGroup>
        </Link>
      <Row gutter={16} style={{margin: '2%'}}>
      <Col span={8} xs={{ span:24, offset: 0} } sm={{ span:8, offset: 1} } md={{ span:8, offset: 1} } lg={{ span:8, offset: 1} } xl={{ span:8, offset: 1} }>
          <img alt={this.state.name} width='85%' src={`${this.state.urlImage}`} />
        </Col>
        <Col span={8} xs={{ span:24, offset: 0} } sm={{ span:8, offset: 1} } md={{ span:8, offset: 1} } lg={{ span:8, offset: 1} } xl={{ span:8, offset: 1} }>
          <h1 >{this.state.name}</h1>
          <hr />
          <strong  > Description: </strong>
          <p style={{textAlign: 'start'}}  dangerouslySetInnerHTML={{__html: this.state.description}}>
          </p>
          <hr />
          <div className='genere'>
            <span className='genereTitle'>
              <strong  >Generes: </strong>
            </span>
            {this.state.genres.map(genere => <Tag color={Utils.randomColor()} key={Math.random()}>{genere}</Tag>)}
          </div>
          <hr />
          <div>
            <strong > Rating: </strong>
            <p> {this.state.stars} /5 </p>
          </div>
          <Rate className='rate' count={5}  disabled value={this.state.stars} />
          <hr />
          <div className='trailer'>
            <strong > Language: </strong>
            <p> {this.state.language} </p>
          </div>
          <hr />
          <div className='premiered'>
            <strong > premiered: </strong>
            <p> {this.state.release_date} </p>
          </div>
        </Col>
      </Row>
      </div>
    )
  }
}
