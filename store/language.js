import i18n from 'i18n-js'
import { makeAutoObservable } from "mobx";

export class LanguageStore {
    defaultLanguage = 'ru'
    activeLanguage = 'ru'

    langList = [
        {
            code: "en",
            name: "English",
            native: "English"
        }, 
        {
            code: 'ua',
            name: 'Ukrainian',
            native: "Українська"
        },
        {
            code: 'ru',
            name: 'Russian',
            native: "Русский"
        },
        {
            code: 'pl',
            name: 'Polish',
            native: 'Polska'
        }
        
    ]

    constructor() {
        makeAutoObservable(this)
    }

    updateLanguage(lang) {
        this.activeLanguage = lang
    }

    updateDefaultLanguage(lang) {
        this.defaultLanguage = lang
        // i18n.locale = lang
    }
}