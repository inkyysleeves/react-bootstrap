import React from 'react';
import Axios from 'axios';

class Properties extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: '',
    }
  };
};
    componentDidMount() {
      Axios.get('http://localhost:3000/api/v1/PropertyListing')
        .then(res => {
          const properties = res.data;
          this.setState({ properties });
          console.log(this.state.properties);
        })
        .catch(() => this.setState({
          error: true,
        }));
    }
    render() {
      return (
        <ul>
          { this.state.properties.map(houses => <li>{this.state.properties}</li>)}
        </ul>
      )
    }
  }
  

export default Properties;
