import React, { Component } from 'react';
import axios from 'axios';

class ExampleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      error: null
    };
  }

  componentDidMount() {
    axios.get('https://localhost:8000/api/example')
      .then(response => this.setState({ data: response.data }))
      .catch(error => this.setState({ error }));
  }

  render() {
    const { data, error } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!data) {
      return <div>Loading...</div>;
    } else {
      return <div>{data.message}</div>;
    }
  }
}

export default ExampleComponent;