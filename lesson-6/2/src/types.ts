export interface IEventEmitter {
    on(type: string, handler: (data?: TData) => void): void;
    emit(type: string, data: TData): void;
}
export interface IBank {
    register(person: TData): number;
}

export type TPerson = {
    personId: number;
    amount: number;
};

export type THandler<T> = (data: T) => void;

export type TData = {
    personId?: number;
    name?: string;
    balance?: number;
    amount?: number;
};

export enum EEvent {
    ADD =            'add',
    CHANGE_BALANCE = 'changeBalance',
    WITHDRAW =       'withdraw',
    REGISTER =       'register'
}

export type TPersonReg = {
    name: string;
    balance: number;
}

export type TPersonList = { [key: string] :TPersonReg };



