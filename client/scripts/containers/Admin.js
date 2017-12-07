import React from 'react';
import { Route, Link, NavLink } from 'react-router-dom';
import Dashboard from './Dashboard';
import AddBooks from './AddBooks';
import EditBooks from './EditBooks';
import RequestedBooks from './RequestedBooks';
import Footer from '../components/globals/Footer.js';


class Admin extends React.Component {
  render() {
    return (
    <div>
      <div className="admin-nav__wrapper">
        <aside className="admin-nav">
          <div className="admin-nav__logo-wrapper">    
            <img className="admin-nav__logo" src="/assets/images/lightbulb.svg" alt="" />
          </div>    
          <nav>
            <ul>
              <li className="link-wrapper">
                <NavLink to={`/admin/dashboard`}>Dashboard</NavLink>
              </li>
              <li className="link-wrapper">
                <NavLink to={`/admin/add-books`} activeClassName="active">Add Book</NavLink>
              </li>
              <li className="link-wrapper">
                <NavLink to={`/admin/edit-books`} activeClassName="active">Edit Book</NavLink>
              </li>
              <li className="link-wrapper">
                <NavLink to={`/admin/requests`} activeClassName="active">Requests</NavLink>
              </li>
              <li className="link-wrapper">
                <NavLink to={`/library`} activeClassName="active">My Library</NavLink>
              </li>
            </ul>
          </nav>
        </aside>
        

        <Route
          path="/admin/dashboard"
          render={() => <Dashboard fetchBooks={this.props.fetchBooks} /> }
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
      <Footer />
    </div>
    );
  }
}

export default Admin;
