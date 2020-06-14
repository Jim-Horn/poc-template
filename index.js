import React from 'react';
import { render } from 'react-dom';
import Start from './components/Start';

const DefaultView = () => {
    return <Start />;
};
render(<DefaultView />, document.getElementById('base-target'));
