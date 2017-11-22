import React from 'react';
import { Route, Link } from 'react-router-dom';

import Dashboard from './Dashboard';
import AddBooks from './AddBooks';
import EditBooks from './EditBooks';
import RequestedBooks from './RequestedBooks';


class Admin extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <li>Navigation</li>
        </nav>

        <Route
          path="/admin/dashboard"
          component={Dashboard}
        />

        <Route
          path="/admin/add-books"
          render={() => <AddBooks fetchBooks={this.props.fetchBooks} /> }
        />

        <Route
          path="/admin/edit-books"
          render={() => <EditBooks fetchBooks={this.props.fetchBooks} /> }
        />

        <Route
          path="/admin/requested-books"
          render={() => <RequestedBooks fetchBooks={this.props.fetchBooks} />}
        />

      </div>

    );
  }
}

export default Admin;
