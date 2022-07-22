import { makeAutoObservable } from "mobx"

export class AccountsStore {
    activeAccount = 0
    activeCurrencySymbol = '$'
    activeCurrencyAbbreviation = 'USD'
    activeCurrencyName = 'US Dollar'

    accountsList = []
    sum = 0

    constructor() {
        makeAutoObservable(this)
    }

    changeActiveAccount(itemNumber) {
        this.activeAccount = itemNumber
    }

    incomeHandler(id, count) {
        this.accountsList.forEach((item) => {
            if(item.id === id) {
                item.count += ~~count
            }
        })

        this.sum = this.accountsList.reduce((acc, curValue) => acc.count + curValue.count)
    }

    exspenseHandler(id, count) {
        this.accountsList.forEach((item) => {
            if(item.id === id) {
                item.count -= ~~count
            }
        })
        this.sum = this.accountsList.reduce((acc, curValue) => acc.count + curValue.count)
    }

    transferHandler(firstTitle, secondTitle, sum) {
        this.accountsList.forEach(item => {
            if(item.title === firstTitle) {
                item.count -= ~~sum
            }

            if(item.title === secondTitle) {
                item.count += ~~ sum
            }
        })
    }

    updateCurrency (item) {
        this.activeCurrencySymbol = item.symbol
        this.activeCurrencyName = item.name
        this.activeCurrencyAbbreviation = item.abbreviation
    }

    addAccount (item) {
        this.accountsList.push(item)
    }

    loadDefaultSum(){
        this.sum = this.accountsList.reduce((acc, curValue) => acc.count + curValue.count)
    }

    setAccountsData(list) {
        this.accountsList = list
    }
}