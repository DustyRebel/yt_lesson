import {makeAutoObservable} from "mobx";

export default class DeviceStore{
    constructor(){
        this._types = [
            {id: 1, name: "Holod"},
            {id: 2, name: "Smart"}
        ]
        this._brands = [
            {id: 1, name: "Samsung"},
            {id: 2, name: "Apple"}
        ]
        this._devices = [
            {id: 1, name: "Popa", price: 1000, rating: 5, img: `https://zoobonus.ua/storage/breeds/images/big/fNBSdOaPk4TqC5lJwxX9TlsPGlF8BSZTV2lQGwZa.jpeg`},
            {id: 2, name: "Popa2", price: 2000, rating: 5, img: `https://zoobonus.ua/storage/breeds/images/big/fNBSdOaPk4TqC5lJwxX9TlsPGlF8BSZTV2lQGwZa.jpeg`},
            {id: 1, name: "Popa3", price: 3000, rating: 5, img: `https://zoobonus.ua/storage/breeds/images/big/fNBSdOaPk4TqC5lJwxX9TlsPGlF8BSZTV2lQGwZa.jpeg`},
            {id: 2, name: "Popa4", price: 4000, rating: 5, img: `https://zoobonus.ua/storage/breeds/images/big/fNBSdOaPk4TqC5lJwxX9TlsPGlF8BSZTV2lQGwZa.jpeg`}
        ]
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


    get types () {
        return this._types
    }

    get brands () {
        return this._brands
    }

    get devices () {
        return this._devices
    }
}