import React from 'react';

const ErrorMessageComponent = ({ children }) => (
    <div style={{ color: 'red', fontSize: '12px' }}>
        {children}
    </div>
);

export default ErrorMessageComponent;
