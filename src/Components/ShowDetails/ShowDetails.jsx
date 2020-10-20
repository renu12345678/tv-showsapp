/* @flow */
import React, { Component } from 'react'
import { Row, Col,Tag,Button } from 'antd'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Utils from '../../Services/utilsService' 
import Api from '../../Services/dataService'

import './ShowDetails.css'
const ButtonGroup = Button.Group;

export default class ShowDetails extends Component {
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
            stars: data.rating.average,
            description: data.summary,
            genres: (data.genres),
            language:data.language,
            release_date:data.premiered
          })
        })
  }

  render () {
    return (
      <div className="container">
        <Link to="/">
        <ButtonGroup>
          <Button type="primary" className='backButton'>
            Go back
          </Button>
        </ButtonGroup>
        </Link>
      <Row gutter={16} className='showDetail'>
      <Col span={8} xs={{ span:24, offset: 0}} sm={{ span:8, offset: 1} } md={{ span:8, offset: 1} } lg={{ span:8, offset: 1} } xl={{ span:8, offset: 1} }>
          <img alt={this.state.name} width='85%' src={`${this.state.urlImage}`} />
        </Col>
        <Col span={8} xs={{ span:24, offset: 0}} sm={{ span:8, offset: 1} } md={{ span:8, offset: 1} } lg={{ span:8, offset: 1} } xl={{ span:8, offset: 1} }>
          <h1 className='showTitle'>{this.state.name}</h1>
          <hr />
          <strong className='description' > Description: </strong>
          <p className='descriptionTitle' dangerouslySetInnerHTML={{__html: this.state.description}}>
          </p>
          <hr />
          <div className='genere'>
            <span className='genereTitle'>
              <strong  >Generes: </strong>
            </span>
            {this.state.genres.map(genere => <Tag color={Utils.randomColor()} key={Math.random()}>{genere}</Tag>)}
          </div>
          <hr />
          <div className='rating'>
            <strong > Rating: </strong>
            <p className='labelValue'> {this.state.stars ? this.state.stars: 'NA'}</p>
          </div>
          <hr />
          <div className='language'>
            <strong > Language: </strong>
            <p className='languageTitle'> {this.state.language} </p>
          </div>
          <hr />
          {this.state.release_date ? <div className='premiered'>
            <strong > premiered: </strong>
            <p className='premieredTitle'> {this.state.release_date} </p>
          </div> : null }
        </Col>
      </Row>
      </div>
    )
  }
}
ShowDetails.propTypes = { 
  name: PropTypes.number,
  description: PropTypes.string,
  urlImage: PropTypes.string,
  stars: PropTypes.number,
  genres:  PropTypes.array,
  release_date: PropTypes.string,
};
