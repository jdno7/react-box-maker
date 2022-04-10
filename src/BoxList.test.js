import { getByTestId, render, screen } from '@testing-library/react';
import BoxList from './BoxList';
import {fireEvent} from '@testing-library/react'

test('renders BoxList Component', () => {
  render(<BoxList />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
});

test('Snapshot Test', () => {
    const {asFragment} = render(<BoxList/>)
    expect(asFragment()).toMatchSnapshot()
})

it('should render Box Elements with remove buttons', () => {
    const {queryAllByText} = render(<BoxList/>)
    expect(queryAllByText("X").length).toEqual(7)
})

it('should remove Box Element with Click on X Btn', () => {
    const {queryByTestId} = render(<BoxList/>)
    const azureBoxRemoveBtn = queryByTestId('Azure')
    fireEvent.click(azureBoxRemoveBtn)
    expect(queryByTestId('Azure')).not.toBeInTheDocument()
})

it('Add a new Box', () => {
    const {queryByTestId, getByLabelText, getByText} = render(<BoxList/>)
    const colorInput = getByLabelText('Box Color:')
    const widthInput = getByLabelText('Box Width:')
    const heightInput = getByLabelText('Box Height:')
    const btn = getByText('Add Box!')
    
    expect(queryByTestId('BG-Magenta')).not.toBeInTheDocument()
    fireEvent.change(colorInput, {target:{value: "Magenta"}})
    fireEvent.change(widthInput, {target:{value: "200px"}})
    fireEvent.change(heightInput, {target:{value: "200px"}})
    fireEvent.click(btn)
    expect(queryByTestId('BG-Magenta')).toBeInTheDocument()
    

})