import { Console } from '@woowacourse/mission-utils';

const OutputView = {
    print(message) {
        Console.print(message);
    },

    printMenu() {
        Console.print("<주문 메뉴>");
        // ...
    }
    // ...
}

export default OutputView;