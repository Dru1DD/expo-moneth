import { makeAutoObservable } from "mobx"

export class CatagoryStore {
    activeCatagory = 0
    catagoryList = []

    activeIncomeCatagory = 0
    incomeCatagoryList = []

    constructor () {
        makeAutoObservable(this)
    }

    changeActiveCatagory(itemNumber) {
        this.activeCatagory = itemNumber
    }

    addCatagory (item) {
        this.catagoryList.push(item)
    }    
    changeActiveIncomeCatagory(itemNumber) {
        this.activeIncomeCatagory = itemNumber
    }

    addIncomeCatagory(item) {
        this.incomeCatagoryList.push(item)
    }

    setDefaultCatagories(exspenseCatagories, incomeCatagories) {
        this.catagoryList = exspenseCatagories
        this.incomeCatagoryList = incomeCatagories
    }
}