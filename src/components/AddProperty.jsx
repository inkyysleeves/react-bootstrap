import React from 'react';
import Axios from 'axios';
import Alert from '../components/Alert';

class AddProperty extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        title: 'spacious end terrace',
        type: 'Flat',
        bedrooms: 0,
        price: 0,
        bathrooms: 0,
        city: 'Manchester',
        email: 'your email here',
      },
      alertMessage: null,
      isError: null,
    };
  }


     handleAddProperty = event => {
       event.preventDefault();
       this.setState({
         alertMessage: '',
         isSuccess: false,
         isError: false,
       });

       Axios.post('http://localhost:3000/api/v1/PropertyListing', {
         title: this.state.fields.title,
         type: this.state.fields.type,
         city: this.state.fields.city,
         bedrooms: this.state.fields.bedrooms,
         bathrooms: this.state.fields.bathrooms,
         price: this.state.fields.price,
         email: this.state.fields.email,
       }).then(() => {
         this.setState({
           alertMessage: 'Property added',
           isSuccess: true,
         });
       }).catch((error) => {
         // eslint-disable-next-line no-console
         console.log(error);
         this.setState({
           alertMessage: 'Server Error, Property Failed To Add',
           isError: true,
         });
       });
     };

   handleFieldChange = event => {
     this.setState({
       fields: {
         ...this.state.fields,
         [event.target.name]: event.target.value,
       },
     });
   };

   render() {
     return (
       <React.Fragment>
         {this.state.isSuccess && <Alert message={this.state.alertMessage} success />}
         {this.state.isError && <Alert message={this.state.alertMessage} />}
         <div className="AddProperty">
           welcome to the add property page.
           <form onSubmit={this.handleAddProperty}>
             <input
               name="title"
               value={this.state.fields.title}
               onChange={this.handleFieldChange}
             />
             <div>
               <label className="button-font">
             Type:
                 <select name="type" value={this.state.fields.type} onChange={this.handleFieldChange}>
                   <option value="Flat">Flat</option>
                   <option value="Detached">Detached</option>
                   <option value="Semi-Detached">Semi-Detached</option>
                   <option value="Terraced">Terraced</option>
                   <option value="End-Of-Terrace">End Of Terrace</option>
                   <option value="Cottage">Cottage</option>
                   <option value="Bungalow">Bungalow</option>
                 </select>
               </label>
             </div>
             <div>
               <label className="button-font">
             Bedrooms:
                 <select name="bedrooms" value={this.state.fields.bedrooms} onChange={this.handleFieldChange}>
                   <option value="1">1</option>
                   <option value="2">2</option>
                   <option value="3">3</option>
                   <option value="4">4</option>
                   <option value="5">5</option>
                   <option value="6">6</option>
                   <option value="7">7</option>
                   <option value="8">8</option>
                   <option value="9">9</option>
                   <option value="10">10</option>
                 </select>
               </label>
             </div>
             <div>
               <label className="button-font">
             Price:
                 <input name="price" type="number" min="1" max="250000" value={this.state.fields.price} onChange={this.handleFieldChange} />
               </label>
             </div>
             <div>
               <label className="button-font">
             City:
                 <select name="city" value={this.state.fields.city} onChange={this.handleFieldChange}>
                   <option value="manchester">Manchester</option>
                   <option value="leeds">Leeds</option>
                   <option value="sheffield">Sheffield</option>
                   <option value="london">London</option>
                   <option value="nottingham">Nottingham</option>
                 </select>
               </label>
             </div>
             <div>
               <label className="button-font">
             Email:
                 <input
                   name="email"
                   value={this.state.fields.email}
                   onChange={this.handleFieldChange}
                 />
               </label>
             </div>
             <button type="submit" className="button-font">
             Add
             </button>
           </form>
         </div>
       </React.Fragment>
     );
   }
}

export default AddProperty;
