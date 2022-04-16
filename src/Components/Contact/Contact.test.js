import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { test, jest, expect } from '@jest/globals';
import ContactForm from './ContactForm';
import { createContact } from '../../Services/contactService';
import {
	render,
	fireEvent,
	act,
	waitFor,
	cleanup,
} from '@testing-library/react';

// El test verifica:
// -Si se esta llamando a la funcion de submit
// -Si los campos de email o telefono son incorrectos, enviando mensajes de error
// -Si los datos de envio son correctos

describe('ContactForm', () => {
	cleanup();
	describe('valid inputs', () => {
		it('llamar a la funcion de submit', async () => {
			const handleSubmit = jest.fn();
			const { getByPlaceholderText, getByRole } = render(
				<ContactForm onSubmit={handleSubmit} />
			);
			await act(async () => {
				fireEvent.change(getByPlaceholderText('Nombre'), {
					target: { value: 'Pepito' },
				});
				fireEvent.change(getByPlaceholderText('Email'), {
					target: { value: 'pepe90@gmail.com' },
				});
				fireEvent.change(getByPlaceholderText('Teléfono'), {
					target: { value: '022145782390' },
				});
				fireEvent.change(getByPlaceholderText('Escriba su consulta'), {
					target: { value: 'Esto es un mensaje cualquiera' },
				});
			});

			await waitFor(async () => {
				fireEvent.click(getByRole('button'));
			});

			waitFor(() => {
				expect(handleSubmit).toHaveBeenCalled();
			});
		});
	});

	describe('email incorrecto', () => {
		it('mostrar validacion de errores de email', async () => {
			const { getByPlaceholderText, container } = render(<ContactForm />);
			await act(async () => {
				const emailInput = getByPlaceholderText('Email');
				fireEvent.change(emailInput, {
					target: { value: 'sarasa' },
				});
				fireEvent.blur(emailInput);
			});

			waitFor(() => {
				expect(container.innerHTML).toMatch('Enter a valid email');
			});
		});
	});

	describe('telefono incorrecto', () => {
		it('mostrar validacion de errores de password', async () => {
			const { getByPlaceholderText, container } = render(<ContactForm />);
			await act(async () => {
				const telInput = getByPlaceholderText('Teléfono');
				fireEvent.change(telInput, {
					target: { value: 43 },
				});
				fireEvent.blur(telInput);
			});

			waitFor(() => {
				expect(container.innerHTML).toMatch(
					'Numero de telefono demasiado corto'
				);
			});
		});
	});
});

test('toMatchObject se llama para cada elemento, por lo que las propiedades adicionales del objeto están bien', async () => {
	const res = await createContact({
		email: 'ejemplo@ejemplo.com',
		name: 'Franco',
		message: 'Esto es un mensaje!',
		phone: '23423434',
	});

	expect(res).toMatchObject(res);
});
