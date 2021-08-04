import {EEvent, IEventEmitter, TData, THandler, TPerson} from './types';




export class EventEmitter implements IEventEmitter {
    events = Object.create(null);


    constructor() {
        this
            .on(EEvent.REGISTER, (person: TData) => {
            console.log(`Пользователь ${person.name} был успешно зарегистрирован`);
            })
            .on(EEvent.CHANGE_BALANCE, ({ name, amount }: TData) => {
                console.log(`На счету ${name} — ${amount}$`);
            });
    }

    on (type: string, handler: THandler<TPerson>) {
        if (type in this.events) {
            this.events[type].push(handler);
        } else {
            this.events[type] = [handler];
        }
        return this;
    }

    emit(type: string, data: TData) {
        const handlers = this.events[type];

        if (Array.isArray(handlers)) {
            handlers.forEach((handler) => handler(data));
        }

        return this;
    }
}
