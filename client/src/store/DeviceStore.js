import {makeAutoObservable} from "mobx";

export default class DeviceStore{
    constructor(){
        this._types = [
            {id: 1, name: "Брелки"},
            {id: 2, name: "Кулоны"},
            {id: 3, name: "Серьги"},
            {id: 4, name: "Шейкеры"}
        ]
        this._brands = [
            {id: 1, name: "Красный"},
            {id: 2, name: "Синий"},
            {id: 3, name: "Розовый"},
            {id: 4, name: "Прозрачный"}
        ]
        this._devices = [
            {id: 1, name: "Popa", price: 1000, rating: 5, img: `https://zoobonus.ua/storage/breeds/images/big/fNBSdOaPk4TqC5lJwxX9TlsPGlF8BSZTV2lQGwZa.jpeg`},
            {id: 2, name: "Popa2", price: 2000, rating: 5, img: `https://zoobonus.ua/storage/breeds/images/big/fNBSdOaPk4TqC5lJwxX9TlsPGlF8BSZTV2lQGwZa.jpeg`},
            {id: 3, name: "Popa3", price: 3000, rating: 5, img: `https://zoobonus.ua/storage/breeds/images/big/fNBSdOaPk4TqC5lJwxX9TlsPGlF8BSZTV2lQGwZa.jpeg`},
            {id: 4, name: "Popa4", price: 4000, rating: 5, img: `https://zoobonus.ua/storage/breeds/images/big/fNBSdOaPk4TqC5lJwxX9TlsPGlF8BSZTV2lQGwZa.jpeg`},
            {id: 5, name: "Popa4", price: 4000, rating: 5, img: `https://zoobonus.ua/storage/breeds/images/big/fNBSdOaPk4TqC5lJwxX9TlsPGlF8BSZTV2lQGwZa.jpeg`},
            {id: 6, name: "Popa4", price: 4000, rating: 5, img: `https://zoobonus.ua/storage/breeds/images/big/fNBSdOaPk4TqC5lJwxX9TlsPGlF8BSZTV2lQGwZa.jpeg`},
            {id: 7, name: "Popa4", price: 4000, rating: 5, img: `https://zoobonus.ua/storage/breeds/images/big/fNBSdOaPk4TqC5lJwxX9TlsPGlF8BSZTV2lQGwZa.jpeg`},
            {id: 8, name: "Popa4", price: 4000, rating: 5, img: `https://zoobonus.ua/storage/breeds/images/big/fNBSdOaPk4TqC5lJwxX9TlsPGlF8BSZTV2lQGwZa.jpeg`},
            {id: 9, name: "Popa4", price: 4000, rating: 5, img: `https://zoobonus.ua/storage/breeds/images/big/fNBSdOaPk4TqC5lJwxX9TlsPGlF8BSZTV2lQGwZa.jpeg`},
            {id: 10, name: "Popa4", price: 4000, rating: 5, img: `https://zoobonus.ua/storage/breeds/images/big/fNBSdOaPk4TqC5lJwxX9TlsPGlF8BSZTV2lQGwZa.jpeg`}
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }

    setTypes(types){
        this._types = types
    }

    setBrands(brands){
        this._brands = brands
    }

    setDevices(devices){
        this._devices = devices
    }

    setSelectedType(type) {
        this._selectedType = type
    }

    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }


    get types () {
        return this._types
    }

    get brands () {
        return this._brands
    }

    get devices () {
        return this._devices
    }

    get selectedType () {
        return this._selectedType
    }

    get selectedBrand () {
        return this._selectedBrand
    }
}