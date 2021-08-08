// Core
import * as yup from 'yup';

// Elements
import {
    emailInput,
    emailInputError,
    messageInput,
    messageInputError,
    nameInput,
    nameInputError,
} from './elements';

// Types
import { FieldNames, IYupErrors } from './types';

export const schema = yup.object().shape({
    [FieldNames.name]: yup.string().required('Required field'),
    [FieldNames.email]: yup.string().email('Email should be valid').required('Required field'),
    [FieldNames.message]: yup.string().required('Required field'),
});

export const setValidationErrors = (errors: IYupErrors[]) => {
    for (const errorElement of errors) {
        const { path, message } = errorElement;
        if (path === FieldNames.name && nameInputError && nameInput) {
            nameInput.classList.add('form__input--error');
            nameInputError.textContent = message;
        } else if (path === FieldNames.email && emailInput && emailInputError) {
            emailInput.classList.add('form__input--error');
            emailInputError.textContent = message;
        } else if (path === FieldNames.message && messageInput && messageInputError) {
            messageInput.classList.add('form__input--error');
            messageInputError.textContent = message;
        }
    }
};

export const resetValidationErrors = () => {
    if (nameInputError && nameInput) {
        nameInput.classList.remove('form__input--error');
        nameInputError.textContent = '';
    }

    if (emailInput && emailInputError) {
        emailInput.classList.remove('form__input--error');
        emailInputError.textContent = '';
    }

    if (messageInput && messageInputError) {
        messageInput.classList.remove('form__input--error');
        messageInputError.textContent = '';
    }
};


