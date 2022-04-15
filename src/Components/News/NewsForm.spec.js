import React from 'react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NewsForm from './NewsForm';
describe('News form tests', () => {
	// Render NewsForm component when start test
	beforeEach(<NewsForm />);

	it('load and display news form', () => {
		expect(screen.getByText(/Formulario de novedades/)).toBeInTheDocument();
	});
});
