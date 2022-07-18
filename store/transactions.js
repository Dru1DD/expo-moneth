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
                    note: ''
                }
            ]
        },
    ]

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
}