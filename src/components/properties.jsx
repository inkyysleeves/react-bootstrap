import React from 'react';
import Axios from 'axios';
import PropertyCard from '../components/PropertyCard';
import '../css/Properties.css';

class Properties extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: '',
      error: false,
    };
  }

  componentDidMount() {
    Axios.get('http://localhost:3000/api/v1/PropertyListing')
      .then(res => {
        const properties = res.data;
        this.setState({ properties });
      })
      .catch(() => this.setState({
      }));
  }

  render() {
    if (!this.state.properties) {
      return null;
    }

    return (
      <div className="propertyContainer">
        {this.state.properties.map(property => {
          return <PropertyCard key={property._id} property={property} />;
        })
        }
      </div>
    );
  }
}


export default Properties;
