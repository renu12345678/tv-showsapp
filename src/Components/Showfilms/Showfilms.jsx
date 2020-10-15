import React, { Component } from 'react'
import CardTemplate from '../CardTemplate/CardTemplate'
import Api from '../../Services/dataService.js'
import { Row, Col } from 'antd'
import { Spin } from 'antd';
import './Showfilms.css'

export default class Showfilms extends Component {
  constructor (props) {
    super(props)
    this.state = {
      results: [],
      isLoading: false,
      genre: this.props.genre,
      searchValue: this.props.searchValue
    }
  }
  handleSearchCall (props) {
    this.setState({isLoading: true})
      Api.getSearch(props.searchValue)
          .then(data => {
            let searchResults = data.map(({score, ...show})=>show.show);
            this.setState({
              results: searchResults,
              isLoading: false,
              searchValue: ''
            })
          })
  }
  genreFilter() {
    let genreResult = this.state.results.filter(show => show.genres && show.genres.some(g => g === this.state.genre))
 console.log("Result...",genreResult);
 this.setState({results: genreResult, genre: ''})
  }
  handleApiCall (props) {
    this.setState({isLoading: true})
      Api.getShows()
          .then(data => {
            this.setState({
              results: data,
              isLoading: false
            }, () => this.state.genre ? this.genreFilter(): null )
          })    
  }

  componentWillReceiveProps (nextProps) {
    if(this.state.genre !== nextProps.genre){
      this.setState({genre: nextProps.genre})
    }
    nextProps.searchValue ? this.handleSearchCall(nextProps) : this.handleApiCall(nextProps)

  }

  componentDidMount () {
     
    this.state.searchValue ? this.handleSearchCall(this.props) : this.handleApiCall(this.props)
  }

  render () {
    console.log("movies......", this.state.results);
    const{ results } =this.state
    const sortedRating = results && results.sort((a,b)=> b.rating.average - a.rating.average);
    return (
      <div className ='example'>
      { this.state.isLoading ?  <Spin/>  :
      
        <Row gutter={16} style= {{marginLeft: '10%',marginRight: '10%', marginTop: '2%'}}>
          {
           sortedRating&& sortedRating.map(film => {
              return (
                <Col className='gutter-row' span={6} xs={24} sm={8} md={6} lg={6} xl={6} key={film.id}>               
                  <CardTemplate
                    name={film.name && film.name}
                    image={film.image && film.image.medium}
                    id={film.id && film.id}
                    rating={film.rating.average/2}
                  />     
                </Col>
              )
            })
          }
        </Row>}
      </div>
    )
  }
}
