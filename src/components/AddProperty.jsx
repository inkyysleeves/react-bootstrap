import React from 'react';
import { stringify } from 'querystring';

class AddProperty extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        title: '',
        type: '',
        bedrooms: '',
        price: '',
        bathrooms: '',
        city: '',
        email: 'your email here',
      },
    };
  }

   handleAddProperty = event => {
     event.preventDefault();
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
     console.log(this.state.fields);
     return (
       <div className="AddProperty">
           welcome to the add property page.
         <form onSubmit={this.handleAddProperty}>
           <input
             name="title"
             value={this.state.fields.title}
             onChange={this.handleFieldChange}
           />
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
           <label className="button-font">
             Price:
             <select name="price" value={this.state.fields.price} onChange={this.handleFieldChange}>
               <option value="0-20,000">£0 - £20,000</option>
               <option value="20,000-40,000">£20,000 - £40,000</option>
               <option value="40,000-80,000">£40,000 - £80,000</option>
               <option value="80,000-100,000">£80,000 - £100,000</option>
               <option value="100,000-150,000">£100,000 - £150,000</option>
               <option value="150,000-190,000">£150,000 - £190,000</option>
               <option value="190,000-210,000">£190,000 - £210,000</option>
               <option value="210,000-250,000">£210,000 - £250,000</option>
             </select>
           </label>
           <label className="button-font">
             City:
             <select name="city" value={this.state.fields.city} onChange={this.handleFieldChange}>
               <option value="manchester">Manchester</option>
               <option value="leeds">Leeds</option>
               <option value="sheffield">Sheffield</option>
               <option value="london">London</option>
               <option value="nottingham">Nottingham</option>
               <option value="liverpool">Liverpool</option>
               <option value="oxford">Oxford</option>
             </select>
           </label>
           <label className="button-font">
             Email:
             <input
               name="email"
               value={this.state.fields.email}
               onChange={this.handleFieldChange}
             />
           </label>
           <button type="submit">
             Add
           </button>
         </form>
       </div>
     );
   }
}

export default AddProperty;
