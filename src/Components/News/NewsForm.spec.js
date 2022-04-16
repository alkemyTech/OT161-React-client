import React from 'react';
import { screen, render, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import NewsForm from './NewsForm';
import { BrowserRouter } from 'react-router-dom';
describe('Formulario de novedades', () => {
	// Render NewsForm component when start test
	beforeEach(async () => {
		render(
			<BrowserRouter>
				<NewsForm />
			</BrowserRouter>
		);
		await waitFor(() => screen.getByText('Formulario de novedades'));
	});
	it('Deberia mostar un error si los campos no estan completos', async () => {
		fireEvent.click(screen.getByText('Submit'));
		await waitFor(() => {
			expect(screen.getByText('El titulo es requerido')).toBeInTheDocument();
			expect(screen.getByText('El contenido es requerido')).toBeInTheDocument();
			expect(screen.getByText('La imagen es requerida')).toBeInTheDocument();
			expect(screen.getByText('La categoria es requerida')).toBeInTheDocument();
		});
	});
});
