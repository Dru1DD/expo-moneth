import { makeAutoObservable } from "mobx"

export class CatagoryStore {
    activeCatagory = 0
    catagoryList = [
        {
            iconName: 'shoppingcart',
            title: 'Супермаркеты',
            vectorIcons: 'AntDesign'
        },
        {
            iconName: 'fast-food',
            title: 'Готовая еда',
            vectorIcons: 'Ionicons'
        },
        {
            iconName: 'emoji-transportation',
            title: 'Транспорт',
            vectorIcons: 'MaterialIcons'
        }, 
        {
            iconName: 'toys',
            title: 'Развлечения',
            vectorIcons: 'MaterialIcons'
        }, 
        {
            iconName: 'shopping-outline',
            title: 'Шопинг',
            vectorIcons: 'MaterialCommunityIcons'
        },
        {
            iconName: 'heartbeat',
            title: 'Здоровье',
            vectorIcons: 'FontAwesome'
        },
        {
            iconName: 'home',
            title: 'Дом',
            vectorIcons: 'FontAwesome'
        },
        {
            iconName: 'mobile-phone',
            title: 'Сотовый телефон',
            vectorIcons: 'FontAwesome'
        }
    ]

    constructor () {
        makeAutoObservable(this)
    }

    changeActiveCatagory(itemNumber) {
        this.activeCatagory = itemNumber
    }

    addCatagory (item) {
        this.catagoryList.push(list)
    }
}