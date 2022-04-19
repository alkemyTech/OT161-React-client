import React from 'react';
import { screen, render, waitFor, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import NewsForm from './NewsForm';
import { BrowserRouter } from 'react-router-dom';
import user from '@testing-library/user-event';

const axiosMock = {
	get: jest.fn(() =>
		Promise.resolve({ data: { data: [{ id: 200, name: 'Test category' }] } })
	),
};
describe('Formulario de novedades', () => {
	// Render NewsForm component when start test
	beforeEach(async () => {
		render(
			<BrowserRouter>
				<NewsForm />
			</BrowserRouter>
		);
		await waitFor(() => {
			screen.getByText('Formulario de novedades');
		});
	});
	afterEach(() => {
		cleanup();
	});
	it('Deberia mostar un error si los campos no estan completos', async () => {
		user.click(screen.getByText('Submit'));
		await waitFor(() => {
			expect(screen.getByText('El titulo es requerido')).toBeInTheDocument();
			expect(screen.getByText('El contenido es requerido')).toBeInTheDocument();
			expect(screen.getByText('La imagen es requerida')).toBeInTheDocument();
			expect(screen.getByText('La categoria es requerida')).toBeInTheDocument();
		});
	});
	it('Deberia escribir en los campos y mostrarlo correctamente', async () => {
		const titleInput = screen.getByTestId('titulo');
		const contentInput = screen.getByLabelText('Rich Text Editor, main');
		const imageInput = screen.getByTestId('image');
		axiosMock.get.mockResolvedValue();
		const titleInputValue = 'Example title';
		const contentInputValue = 'Example content';
		const file = new File(['hello'], 'hello.png', { type: 'image/png' });

		user.type(titleInput, titleInputValue);
		user.type(contentInput, contentInputValue);
		user.upload(imageInput, file);

		await waitFor(() => {
			expect(titleInput).toHaveValue(titleInputValue);
			expect(contentInputValue).toBe(contentInputValue);
			expect(imageInput.files[0]).toStrictEqual(file);
		});
	});
});
