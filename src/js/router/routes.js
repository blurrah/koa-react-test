import React from 'react';
import { Router, Route, DefaultRoute } from 'react-router';
import Application from '../Application';

export default (
    <Route path='/'>
        <DefaultRoute handler={Application} name='application' />
    </Route>
);
