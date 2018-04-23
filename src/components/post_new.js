import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'; 

class PostNew extends Component {
  renderField(field){
    return (
      <div className="form-group">
        <label>{ field.label }</label>
        <input 
        className="form-control"
        type="text"
        { ...field.input }
        />
        {field.meta.error}
      </div>
    );
  }
  
  render(){
    return (
      <form>
        <Field
          label="Title"
          name="title"
          component={this.renderField}
        />
         <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
         <Field
          label="Content"
          name="content"
          component={this.renderField}
        />
      </form>
      
        
    );
  }
}

function validate(values){
  const errors = {};

  if(!values.title) {
    errors.title = 'Please enter a title.';
  }

  if (!values.categories) {
    errors.categories = 'Please enter a categoory.';
  }

  if (!values.content) {
    errors.content = 'Please enter some content.'
  }

  return errors; 
}

export default reduxForm({
  validate,
  form: 'newPostForm'
})(PostNew); 