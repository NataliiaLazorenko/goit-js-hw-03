/*
 * Напиши сценарій керування особистим кабінетом інтернет - банку.
 * Є об'єкт account, в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.
 */

/*
 * Типів транзацкій всього два.
 * Можна покласти або зняти гроші з рахунку.
 */

const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Кожна транзакція - це об'єкт з властивостями: id, type і amount
 */
let id = 0;

const account = {
  // Поточний баланс рахунку
  balance: 0,

  // Історія транзакцій
  transactions: [],

  /*
   * Метод створює і повертає об'єкт транзакції.
   * Приймає суму і тип транзакції.
   */
  createTransaction(amount, type) {
    let operation = {
      id: (id += 1),
      type,
      amount,
    };

    return operation;
  },

  /*
   * Метод відповідає за додавання суми до балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій
   */
  deposit(amount) {
    this.balance += amount;
    console.log(
      `Сума поповнення: ${amount}, баланс після поповнення: ${this.balance}`,
    );

    const operationDeposit = this.createTransaction(
      amount,
      Transaction.DEPOSIT,
    );

    this.transactions.push(operationDeposit);
  },

  /*
   * Метод відповідає за зняття суми з балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій.
   *
   * Якщо amount більше, ніж поточний баланс, виводь повідомлення
   * про те, що зняття такої суми не можливо, недостатньо коштів.
   */
  withdraw(amount) {
    if (amount > this.balance) {
      return console.log(
        'Недостатньо коштів на рахунку, виконання операції неможливе',
      );
    }

    this.balance -= amount;
    console.log(`Знято: ${amount}, баланс після зняття: ${this.balance}`);

    const operationWithdraw = this.createTransaction(
      amount,
      Transaction.WITHDRAW,
    );

    this.transactions.push(operationWithdraw);
  },

  /*
   * Метод повертає поточний баланс
   */
  getBalance() {
    console.log('Поточний баланс: ', this.balance);
    return this.balance;
  },

  /*
   * Метод шукає і повертає об'єкт транзакції по id
   */
  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (transaction.id === id) {
        console.log(`Операція з id = ${id}: `, transaction);
        return transaction;
      }
    }

    console.log(`Операції з id = ${id} не існує`);
  },

  /*
   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */
  getTransactionTotal(type) {
    let totalAmount = 0;

    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        totalAmount += transaction.amount;
      }
    }

    console.log(`Загальна сума операцій ${type}: `, totalAmount);
    return totalAmount;
  },
};

// Перевірка роботи
console.log(account);
account.deposit(200);
account.withdraw(300);
account.deposit(500);
account.deposit(700);
account.withdraw(200);
account.deposit(300);
account.withdraw(500);
account.withdraw(100);
account.getBalance();
account.getTransactionDetails(3);
account.getTransactionTotal('deposit');
account.getTransactionTotal('withdraw');
account.getTransactionDetails(20);
account.getTransactionDetails(7);
console.log(account);
