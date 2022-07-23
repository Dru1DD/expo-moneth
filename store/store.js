import { createContext } from "react";
import { TransactionStore } from "./transactions";
import { AccountsStore } from "./accounts";
import { CatagoryStore } from "./catagory";
import { LanguageStore } from "./language";

export class RootStore {
    transactions;

    constructor() {
        this.transactions = new TransactionStore();
        this.accounts = new AccountsStore();
        this.catagories = new CatagoryStore();
        this.language = new LanguageStore();
    }
}

export const rootStore = new RootStore(); 

export const StoreContext = createContext(rootStore);
export const StoreProvider = StoreContext.Provider;
