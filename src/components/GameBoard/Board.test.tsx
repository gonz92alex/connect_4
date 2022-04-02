import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { GameBoard } from './GameBoard';

test('Probando el tablero', () => {
  const component = render(<Board />);
  const text = component.getByText('TABLERO');
  expect(text).toBeDefined()
});
