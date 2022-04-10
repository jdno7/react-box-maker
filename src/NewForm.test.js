import { getByTestId, render, screen } from '@testing-library/react';
import NewBoxForm from './NewBoxForm';
import {fireEvent} from '@testing-library/react'

test('renders BoxList Component', () => {
  render(<NewBoxForm />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
});

test('Snapshot Test', () => {
    const {asFragment} = render(<NewBoxForm/>)
    expect(asFragment()).toMatchSnapshot()
})