export interface ISubmitEvent {
    target: HTMLFormElement;
}

export interface IResponse {
    body: {
        name?: string;
        email?: string;
    };
}

export interface IYupErrors {
    path: string;
    message: string;
}

export enum FieldNames {
    name = 'name',
    email = 'email',
    message = 'message',
}

export enum FooterFieldNames {
    email = 'email',
    subject = 'message',
}
