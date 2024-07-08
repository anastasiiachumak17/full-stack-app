
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AdminProfile from './AdminProfile';
import UserList from './UserList';
import CompanyList from './CompanyList';

const AdminView = () => {
    return (
        <div>
            <h1>Admin View</h1>
            <Switch>
                <Route path="/admin/profile" component={AdminProfile} />
                <Route path="/admin/users" component={UserList} />
                <Route path="/admin/companies" component={CompanyList} />
            </Switch>
        </div>
    );
};

export default AdminView;
