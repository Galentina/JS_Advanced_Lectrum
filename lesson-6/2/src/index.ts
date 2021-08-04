// Для запуска файла использовать команду ts-node src/index.ts находясь в папке homeworks/2
import { EventEmitter } from './emitter';
import {IBank, TPerson, TPersonList, EEvent, TPersonReg} from "./types";

class Bank extends EventEmitter implements IBank{
    persons: TPersonList = {};

    constructor() {
        super();
        this.on(EEvent.ADD, (data: TPerson) => this.add(data));
        this.on(EEvent.WITHDRAW, (data: TPerson) => this.withdraw(data));
    }

    register(person: TPersonReg) {
        const id = Date.now();

        this.persons[id] = { ...person };
        this.emit(EEvent.REGISTER, person);  // person: name,balance

        return id;
    }

    protected add (data: TPerson) {
        const { personId, amount } = data;
        const person = this.persons[personId];

        if (!person) {
            throw new Error(`Пользователь с идентификатором ${personId} не найден`);
        }

        person.balance = person.balance + amount;

        this.emit(EEvent.CHANGE_BALANCE, { name: person.name, amount: person.balance}); // name, amount
    }

    protected withdraw (data: TPerson) {
        const { personId, amount } = data;
        const person = this.persons[personId];

        if (!person) {
            throw new Error(`Пользователь с идентификатором ${personId} не найден`);
        }
        if (person.balance < amount) {
            console.log(`У пользователя ${personId} не достаточно средств на балансе`)
        }
        else person.balance = person.balance - amount;

        this.emit(EEvent.CHANGE_BALANCE, { name: person.name, amount: person.balance}); // name, amount
    }
}

const bank = new Bank();

const personId = bank.register({
    name: 'Джон Доу',
    balance: 100
});

bank.emit(EEvent.ADD, { personId, amount: 20 }); //number, amount

// Задание со звёздочкой
bank.emit(EEvent.WITHDRAW, { personId, amount: 20});
