/**
 * Необходимо создать ссылку для отправки запросов используя ресурс https://pipedream.com/requestbin
 * https://enpwsww9acfm91c.m.pipedream.net - моя ссылка
 * Затем полученную ссылку вставить в axios
 * */

// Core
import axios from 'axios';
import toastr from 'toastr';

// Types
import { ISubmitEvent, IResponse } from './types';
import { form, footerForm } from './elements';

// Schemas
import {
    schema,
    setValidationErrors,
    resetValidationErrors,
} from './schema';

import {
    footerSchema,
    setFooterValidationError,
    resetFooterValidationErrors,
} from './footerSchema';


if (!form) {
    throw new Error('элемент с идентификатором form не найден');
}
if (!footerForm) {
    throw new Error('элемент с идентификатором form не найден');
}

// eslint-disable-next-line @typescript-eslint/no-misused-promises
form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const submitEvent = event as unknown as ISubmitEvent;
    const formData = new FormData(submitEvent.target);

    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    const payload = {
        name,
        email,
        message,
    };

    try {
        await schema.validate(payload, { abortEarly: false });
    } catch (error) {
        if (Array.isArray(error.inner)) {
            setValidationErrors(error.inner);
        }

        return null;
    }

    try {
        const src = await axios.post<IResponse>('https://enpwsww9acfm91c.m.pipedream.net', payload);

        resetValidationErrors();

        toastr.info(
            `${src.data.body.name}, ваше сообщение успешно получено!`,
            'Мы свяжемся с вами в ближайшее время.',
        );
    } catch (error) {
        toastr.error(error.message);
    }
});



footerForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const submitEvent = event as unknown as ISubmitEvent;
    const formData = new FormData(submitEvent.target);
    const email = formData.get('email');
    const subject = "Хочу получать интересные предложения от компании";

    const payload = {
        email,
        subject,
    };

    try {
        await footerSchema.validate(payload, { abortEarly: false });
    } catch (error) {
        if (Array.isArray(error.inner)) {
            setFooterValidationError(error.inner);
        }
        return null;
    }

    try {
        const src = await axios.post<IResponse>('https://enpwsww9acfm91c.m.pipedream.net', payload);

        resetFooterValidationErrors();
        toastr.info(
            `${src.data.body.email}, Заявка принята!`,
            'Вы подписаны на рассылку.',
        );
    } catch (error) {
        toastr.error(error.message);
    }
});
