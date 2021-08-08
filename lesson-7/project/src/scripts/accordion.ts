export const accordionItems = document.querySelectorAll('.accordion__item-header');
export const items = Array.from(accordionItems);

const removeAccordionOpenClass = (elements: Element[]) => {
    for (const element of elements) {
        const closestEl = element.closest('.accordion__item');

        closestEl?.classList.remove('accordion__item--open');
    }
};

const addAccordionOpenClass = (element: Element) => {
    setTimeout(() => {
        const closestEl = element.closest('.accordion__item');

        closestEl?.classList.add('accordion__item--open');
    }, 500);
};

const addAccordionListeners = (elements: Element[]) => {
    for (const element of elements) {
        element.addEventListener('click', () => {
            removeAccordionOpenClass(elements);

            addAccordionOpenClass(element);
        });
    }
};

addAccordionListeners(items);
