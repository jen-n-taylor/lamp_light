import React from 'react';
import _ from 'lodash';

class AuthorInput extends React.Component {
  constructor() {
    super();
    this.state = {
      author: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  onAddAuthors(e) {
    let newAuthor = _.startCase(this.state.author);
    console.log(newAuthor);
  }
  render(props) {
    return (
      <div>
          
      </div>
    )
  }
}

export default AuthorInput;