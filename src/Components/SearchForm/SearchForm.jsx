import React, { Component } from 'react'
import { Input, Col, Row, Button, Select } from 'antd'
import './SearchForm.css'
import { genresFilter } from '../../Services/utilsService'
const { Option } = Select;

export default class SearchForm extends Component {
  constructor (props) {
    super(props)    
    this.state = {
      value: '',
      isSearch: false,
      Genres: ''
    }
    
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({ isSearch: true }, () =>this.props.handleSearch(true,this.state.value,this.state.Genres)
  )
  }
  handleSelectChange = (value) => {
    this.setState({ Genres: value},() =>  this.props.handleSearch(true,'',this.state.Genres))
   
  }
  render () {
    return (
      <div className="container">
      <Row justify ='content-around'>
        <Col span={14} span={6} xs={{ span:24, offset: 0} } sm={{ span:14, offset: 5} } md={{ span:14, offset: 5} } lg={{ span:14, offset: 5} } xl={{ span:14, offset: 5} }>
          <form className='searchform' onSubmit={this.handleSubmit}>
            <Input className='input'  placeholder='Search Shows...' onChange={this.handleChange} />
            <Button type="primary" className='search_button'  onClick={this.handleSubmit}>Search</Button>
          </form>
          </Col>
          <Col span={14} span={6} xs={{ span:24, offset: 0} } sm={{ span:14, offset: 5} } md={{ span:14, offset: 5} } lg={{ span:14, offset: 5} } xl={{ span:14, offset: 5} }>
          <h1 className='Genre_label'>Filter By Genres</h1>
        {<Select className='select-label' placeholder= 'Select Genre...' onSelect={(value)=>this.handleSelectChange(value)}>
       { genresFilter.map((genre,id) => ( <Option value={genre.value} key={id}>{genre.value}</Option>) )}
        </Select>}
        </Col>
      </Row>
      </div>
    )
  }
}