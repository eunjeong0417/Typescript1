// function logText(text: string) {
//     console.log(text);
//     return text
// }

// logText('a');
// logText(100);
// logText(true);

//제네릭
//함수 호출 시점에 데이터 타입을 정의한다
// function logText<T>(text: T):T {
//     console.log(text);
//     return text;
// }

// logText<string>('abc');

function logText<T>(text: T):T {
    console.log(text);
    return text;
}

const hi = logText<string>('hello');
logText<number>(10);
const login = logText<boolean>(true)

const email: { value: string; selected: boolean }[] {
    
}

function createDropdownItem(item: { value: string; selected: boolean }) {
    
}

// interface Dropdown {
//     value: string;
//     selected: boolean;
// }

// const prt: Dropdown = { value: 10, selected: false}

//제네릭으로 선언하기

// interface Dropdown<T> {
//     value: T;
//     selected: boolean;
// }

// const abc: Dropdown<string> = { value: 'greeting', selected: true };

// const emails: Dropdown<string>[]
// const login: DropdownItem<number>

// interface LengthType {
//     length: number;
// }

// function title<T extends LengthType> (text:T):T {
//     text.length;
//     return text;
// }

interface ShoppingItem {
    name: string;
    price: number;
    stock: number;
}

function getItem<T extends keyof ShoppingItem>(item: T):T {
    return item;
}

getItem("name");
