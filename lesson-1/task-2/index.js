/**
 * Задача 2.
 *
 * Добавьте роботу геттер и сеттер для приватного свойства energy.
 * Нужно, чтобы внешний код мог узнать заряд батареи робота.
 *
 * Условия:
 * - заданную форму конструктора включая его параметры менять нельзя — можно только дополнять;
 * - для отображения инфрмации о количестве энергии необходимо динамически создать элемент "p" с классом text-success;
 * - для отображения инфрмации об ошибке необходимо динамически создать элемент "p" с классом text-danger;
 * - все "p" элементы необходимо добавлять в "div" с классом messages.
 * 
 * Генерировать ошибки если:
 * - новый заряд батареи устанавливается в значении меньшем, чем 0;
 * - новый заряд батареи устанавливается в значении большем, чем значение MAX_ENERGY_CAPACITY;
 * - при создании экземпляра CleanerRobot изначальный уровень энергии зада в не рамок допустимого диапазона.
 * 
 * Приблизительный план действий:
 * 1. Добавить идентификатор в форму, который будет использоваться для добавления обработчика onsubmit
 * 2. Создать экземпляр CleanerRobot
 * 3. При сабмите формы устанавливать новое значение уровня энергии робота при помощи метода setEnergy
 * 4. При клике на элемент button читать значение уровня энергии робота и выводить его в p элемент с классом text-success
 * 5. Если в работе робота возникнут ошибки выводить их в p элемент с классом text-danger
 * 
 * Подсказки:
 * - в HTML допускается добавление идентификаторов для более удобной работы с дом
 * - вам могут потребоваться следующие методы и свойства — innerHTML, getElementById, createElement, onsubmit, onclick
 */

function CleanerRobot(initialEnergy = 0 /* Изначальный заряд батареи */) {
    this.getEnergy = getEnergy;
    this.setEnergy = setEnergy;

    const MAX_ENERGY_CAPACITY = 100; /* Максимальная ёмкость батареи. */
    let energy = null;

    this.setEnergy(initialEnergy);

    function getEnergy() {
        // Реализация метода по чтению уровня заряда робота
    }
    function setEnergy() {
        // Реализация метода по установке уровня заряда робота
    }
}

const cleanerRobot = new CleanerRobot(22);

// Ниже необходимо написать логику работы с DOM

/* Текущий заряд батареи: 22 */
/* Информацию необходимо вывести в p элемент с классом text-success */
console.log(`Текущий заряд батареи: ${cleanerRobot.getEnergy()}`);

/* Этот код необходимо вызвать при сабмите формы */
cleanerRobot.setEnergy(55);

/* Текущий заряд батареи: 55 */
/* Информацию необходимо вывести в p элемент с классом text-success */
console.log(`Текущий заряд батареи: ${cleanerRobot.getEnergy()}`);

try {
    new CleanerRobot(-1);
} catch (error) {
    /* Error: New energy level can not be less than 0. */
    /* Информацию необходимо вывести в p элемент с классом text-danger */
    console.log(`${error.name}: ${error.message}`);
}

try {
    cleanerRobot.setEnergy(-22);
} catch (error) {
    /* Error: New energy level can not be less than 0. */
    /* Информацию необходимо вывести в p элемент с классом text-danger */
    console.log(`${error.name}: ${error.message}`);
}

try {
    cleanerRobot.setEnergy(101);
} catch (error) {
    /* Error: New energy level can not be more than 100. */
    /* Информацию необходимо вывести в p элемент с классом text-danger */
    console.log(`${error.name}: ${error.message}`);
}
