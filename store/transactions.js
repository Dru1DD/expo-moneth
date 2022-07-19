import { makeAutoObservable } from "mobx"

export class TransactionStore {
    transactionList = [
        {
            date: 'Wednesday, 18 June 2022',
            transactions: [
                {
                    id: new Date().getTime() + 2,
                    iconName: 'shoppingcart',
                    vectorIcons: 'AntDesign',
                    catagory: 'Supermarket',
                    account: 'Debit card',
                    price: 20,
                    isIncome: false,
                    isTransfer: false,
                    currencySymbol: '$',
                    addTime: new Date().getTime(),
                    budgetAfter: 140,
                    note: ''
                },
                {
                    id: new Date().getTime() + 1,
                    iconName: 'shoppingcart',
                    vectorIcons: 'AntDesign',
                    catagory: 'Supermarket',
                    account: 'Debit card',
                    price: 20,
                    isIncome: false,
                    isTransfer: false,
                    currencySymbol: '$',
                    addTime: new Date().getTime(),
                    budgetAfter: 120,
                    note: ''
                }
            ]
        },
    ]


    balanceList = [ 0, 0, 0, 0, 0, 0, 0 ]

    incomeList = []
    incomeSum = 0

    exspenseList = []
    exspenseSum = 0

    constructor() {
        makeAutoObservable(this)
    }

    addTransaction(item) {
        const { date, transactions } = item
        const list = this.transactionList

        const transactionsDay = list.find((elem) => date === elem.date)

        if(!transactionsDay) {
            list.push(item)
        } else {
            const indexOfItem = list.indexOf(transactionsDay)

            const helpfulArray =  [...transactionsDay.transactions, ...transactions]
            list[indexOfItem].transactions = helpfulArray
        }

        this.transactionList = list
    }

    loadDefaultIncomeList() {
        let list = []
        let sum = 0
        this.transactionList.forEach(item => {
            item.transactions.forEach(elem => {
                if (elem.isIncome && !elem.isTransfer) {
                    list.push(elem)
                    sum += elem.price
                }
            })
        })
        this.incomeSum = sum
        this.incomeList = [...this.incomeList, ...list]
    }

    addIncomeItem(item) {
        this.incomeList.push(item)
        this.incomeSum += ~~item.price

        this.balanceList.push(~~item.budgetAfter)
    }

    addExspenseItem(item) {
        this.exspenseList.push(item)
        this.exspenseSum += ~~item.price

        this.balanceList.push(~~item.budgetAfter)
    }

    loadDefaultExspenseList() {
        let list = []
        let sum = 0

        this.transactionList.forEach(item => {
            item.transactions.forEach(elem => {
                if (!elem.isIncome && !elem.isTransfer) {
                    list.push(elem) 
                    sum += elem.price
                }
            })
        })
        this.exspenseSum = sum
        this.exspenseList = [...this.exspenseList, ...list]
    }

    loadDefaultBalanceList() {
        const localBudgetlist = []

        this.transactionList.forEach(elem => {
            elem.transactions.forEach(item => {
                localBudgetlist.push(item.budgetAfter)
            })
        })

        if(localBudgetlist.length === 0 ) {
            this.balanceList = [ 0, 0, 0, 0, 0, 0, 0]
        } else if (localBudgetlist.length === 1) {
            this.balanceList  = [...localBudgetlist, 0, 0, 0, 0, 0, 0]
        } else if (localBudgetlist.length === 2) {
            this.balanceList = [...localBudgetlist, 0, 0, 0, 0, 0]
        } else if (localBudgetlist.length === 3) {
            this.balanceList = [...localBudgetlist, 0, 0, 0, 0]
        } else if (localBudgetlist.length === 4) {
            this.balanceList = [...localBudgetlist, 0, 0, 0]
        } else if(localBudgetlist.length === 5) {
            this.balanceList = [...localBudgetlist, 0, 0 ]
        } else if (localBudgetlist.length === 6) {
            this.balanceList = [...localBudgetlist, 0]
        } else if (localBudgetlist.length >= 7) {
            this.balanceList = localBudgetlist
        }
    }

    updateBalanceList(balance) {
        const localBudgetList = this.balanceList

        if(localBudgetList.length === 0 ) {
            this.balanceList = [ balance, 0, 0, 0, 0, 0, 0]
        } else if (localBudgetList.length === 1) {
            this.balanceList  = [...localBudgetList, balance, 0, 0, 0, 0, 0]
        } else if (localBudgetList.length === 2) {
            this.balanceList = [...localBudgetList, balance, 0, 0, 0, 0]
        } else if (localBudgetList.length === 3) {
            this.balanceList = [...localBudgetList, balance, 0, 0, 0]
        } else if (localBudgetList.length === 4) {
            this.balanceList = [...localBudgetList, balance, 0, 0]
        } else if(localBudgetList.length === 5) {
            this.balanceList = [...localBudgetList, balance, 0 ]
        } else if (localBudgetList.length === 6) {
            this.balanceList = [...localBudgetList, balance]
        } else if (localBudgetList.length >= 7) {
            this.balanceList = localBudgetList
        }
    }
}