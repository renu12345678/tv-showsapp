import React, { Component } from 'react'
import { Row } from 'antd'
import SearchForm from '../SearchForm/SearchForm'
import Showfilms from '../Showfilms/Showfilms'

export default class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isSearch: false,
      searchValue: '',
      genre:''
    }
  }
  handleSearch = (flag,searchData,genre) => {
    this.setState({ isSearch: flag,searchValue:searchData,genre:genre })
  }

  render () {
    return (
    <div className="container">
    <Row justify="center-around">
      <SearchForm handleSearch={this.handleSearch} />
      { <Showfilms handleSearch={this.handleSearch} {...this.state} genre={this.state.genre}/> }
    </Row>
    </div>
    )
  }
}
