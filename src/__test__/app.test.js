import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';
test('Load and displays starter data', async () =>{
   render(<App/>);

   const name=await screen.findByTestId('name');
    expect(name).toHaveTextContent('Your name is:Bayan');

})
test('testing the age', async()=>{
    render (<App/>);
    const name=await screen.findByTestId('age');
    expect(name).toHaveTextContent('Your age after five years:35');

})
