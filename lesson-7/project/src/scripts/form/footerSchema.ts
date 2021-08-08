// Core
import * as yup from 'yup';

// Elements
import {
    footerEmailInput,
    footerEmailInputError,
} from './elements';

// Types
import { IYupErrors, FooterFieldNames } from './types';

export const footerSchema = yup.object().shape({
    [FooterFieldNames.email]: yup.string().email('Email should be valid').required('Required field'),
    [FooterFieldNames.subject]: yup.string().required('Required field subject'),
});

export const setFooterValidationError = (errors: IYupErrors[]) => {
    for (const errorElement of errors) {
        const {path, message} = errorElement;
        if (path === FooterFieldNames.email && footerEmailInput && footerEmailInputError) {
            footerEmailInput.classList.add('form__input--error');
            footerEmailInputError.textContent = message;
        }
    }
};

export const resetFooterValidationErrors = () => {
    if (footerEmailInput && footerEmailInputError) {
        footerEmailInput.classList.remove('form__input--error');
        footerEmailInputError.textContent = '';
    }
};
