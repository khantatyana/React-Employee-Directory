import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import SearchForm from "./SearchForm";
import EmployeeDetail from "./EmployeeDetail";
import API from "../utils/API";
import Header from "./Header";
import Footer from "./Footer";

class OmdbContainer extends Component {

  state = {
    employees: [{}],
    filteredEmployees: [{}]
  };

  componentDidMount() {
    API.search()
      .then(res => {

        this.setState({ employees: res.data.results, filteredEmployees: res.data.results });
        console.log(this.state.employees);
      }
      )
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const filt = event.target.value;
    const filteredList = this.state.employees.filter((item) => {
      let values = Object.values(item).join("").toLowerCase();
      return values.indexOf(filt.toLowerCase()) !== -1;
    })
    this.setState({filteredEmployees: filteredList});
  };

  handleOnClick = event => {

    console.log("clicked");
    let sorting = event.target.getAttribute("fieldname");
    let properties = Array.isArray(sorting) ? sorting : sorting.split(".")

    let sortedList = this.state.employees;
    sortedList = sortedList.sort((a, b) => {
      let aValue = properties.reduce((previous, current) => previous && previous[current], a);
      let bValue = properties.reduce((previous, current) => previous && previous[current], b);
      if(aValue < bValue) { return -1; }
      if(aValue > bValue) { return 1; }
      return 0;
    })

    this.setState({filteredEmployees: sortedList});

  }
  render() {
    return (
      
      <Container >
        <Header></Header>
        <Row>
        <Col size="md-3">
            <Card heading="Search by name">
              <SearchForm
                handleInputChange={this.handleInputChange}
              />
            </Card>
          </Col>
          <Col size="md-9">
            <EmployeeDetail
              employees = {this.state.filteredEmployees}
              handleOnClick={this.handleOnClick}
              />
          </Col>
          
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default OmdbContainer;
