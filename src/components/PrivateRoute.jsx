import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { FormContext } from '../context/form-context';

export const PrivateRoute = ({ element, ...rest }) => {
    const { token } = useContext(FormContext);

    if (!token) {
        // Redirect to login if not logged in
        return <Navigate to="/login" />;
    }

    return <Route {...rest} element={element} />;
};
