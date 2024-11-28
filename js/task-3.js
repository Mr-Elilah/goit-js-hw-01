function getElementWidth(content, padding, border) {
  const contentWidth = parseFloat(content);
  const paddingWidth = parseFloat(padding);
  const borderWidth = parseFloat(border);

  const elementWidth = contentWidth + 2 * paddingWidth + 2 * borderWidth;

  return elementWidth;
}

console.log(getElementWidth('50px', '8px', '4px'));
console.log(getElementWidth('60px', '12px', '8.5px'));
console.log(getElementWidth('200px', '0px', '0px'));

//Напиши скрипт управління особистим кабінетом інтернет банку
//Є об'єкт account у якому необхідно реалізувати
//методи для роботи з балансом та історією транзакцій

// Типів транзакцій лише два.
// Можна покласти чи зняти гроші з рахунку

const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

//Кожна транзакція це об'єкт з властивостями id, type, amount

const account = {
  //поточний баланс рахунку
  balance: 0,

  //Історія транзакцій
  transactions: [],

  //Метод створює та повертає об'єкт транзакцій
  //Приймає суму та тип транзакцій
  createTransaction(amount, type) {
    return {
      amount,
      type,
    };
  },
  //Метод відповідає за додавання суми до балансу.
  //Приймає суму транцякції.
  //Викликає createTransaction для створення об'єкта транзакції
  //після чого додає їх у історію транзакцій
  deposit(amount) {
    this.balance += amount;
    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.transactions.push(transaction);
  },

  //Метод відповідає за зняття суми з балансу.
  //Приймає суму транцякції.
  //Викликає createTransaction для створення об'єкта транзакції
  //після чого додає їх у історію транзакцій
  //Якщо amount більше ніж поточний баланс, виводимо повідомлення про те,
  //що недостатньо коштів на рахунку
  withdraw(amount) {},

  //Метод повертає поточний баланс
  getBalance() {},

  //Метод шукає та повертає об'єкт транзакції по id
  getTransactionDetails(id) {},

  //Метод повертає кількість засобів певного типу
  //транзакції з усієї історії транзакцій
  getTransactionType(type) {},
};
account.deposit(1000);
account.deposit(3000);
console.log(account.balance);
console.log(account.transactions);
