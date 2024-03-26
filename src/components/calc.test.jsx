import React from 'react'
import Calculator from "./calc"
import {render, fireEvent} from '@testing-library/react'


test('Testar soma de 2 números', () => {
    let componenteCalculadora = render(<Calculator/>);

    const{getByText, getByTestId} = componenteCalculadora

    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect (getByTestId('display_test_id')).toHaveValue('5');
})

test('Testar subtração de 2 números', () => {
    let componenteCalculadora = render(<Calculator/>);

    const{getByText, getByTestId} = componenteCalculadora

    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('-'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('='));
    expect (getByTestId('display_test_id')).toHaveValue('1');
})

test('Testar multiplicação de 2 números', () => {
    let componenteCalculadora = render(<Calculator/>);

    const{getByText, getByTestId} = componenteCalculadora

    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('×'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('='));
    expect (getByTestId('display_test_id')).toHaveValue('6');
})

test('Testar divisão de 2 números', () => {
    let componenteCalculadora = render(<Calculator/>);

    const{getByText, getByTestId} = componenteCalculadora

    fireEvent.click(getByText('6'));
    fireEvent.click(getByText('÷'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('='));
    expect (getByTestId('display_test_id')).toHaveValue('3');
})

test('Testar limpar', () => {
    let componenteCalculadora = render(<Calculator/>);

    const{getByText, getByTestId} = componenteCalculadora

    fireEvent.click(getByText('C'));
    expect (getByTestId('display_test_id')).toHaveValue('');
})

test('Testar divisão por 0', () => {
    let componenteCalculadora = render(<Calculator/>);
    const{getByText, getByTestId} = componenteCalculadora

    fireEvent.click(getByText('6'));
    fireEvent.click(getByText('÷'));
    fireEvent.click(getByText('0'));
    fireEvent.click(getByText('='));

    expect (getByTestId('display_test_id')).toHaveValue('Infinity');
})

test('Testar error', () => {
    let componenteCalculadora = render(<Calculator/>);
    const{getByText, getByTestId} = componenteCalculadora

    fireEvent.click(getByText('6'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('='));

    expect (getByTestId('display_test_id')).toHaveValue('Error');
})