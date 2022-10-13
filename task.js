class Good {

    constructor(id, name, description, sizes, price, available) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.sizes = sizes;
        this.price = price;
        this.available = available;
    }
  
    setAvailable(available) {
        this.available = available;
    }
  
  }

class GoodsList {
    good
	#goods

	constructor(sortPrice, sortDir) {

        this.#goods = []
        this.sortPrice = sortPrice
        this.sortDir = sortDir
    }

    get list() {
        let result = []
        let filter = /брюки/gi

        for (let good of this.#goods) {

            if (filter.test(good.name)) {
                result.push(good) 
                // в этом месте творится тайная магия, так как при запуске программы
                // без <console.log(filter.test(good.name))> внутри этого условия - 
                // в массив result добавляется только первое встреченное значение 
                // подходящие под условие, а с этой строчкой - все встреченные
                console.log(filter.test(good.name))
            }
        }
        console.log(result)
        let resultSort = result.slice().sort()
        if (this.sortPrice == true) {
            if (this.sortDir == true) {
                resultSort.sort(function(a, b){
                    var c = a.price,
                        d = b.price;

                    if( c < d ){
                        return -1;
                    }else if( c > d ){
                        return 1;
                    }
                    return 0;
                })
                return resultSort
            } else {
                resultSort.sort(function(a, b){
                    var c = a.price,
                        d = b.price;
                
                    if( c < d ){
                        return 1;
                    }else if( c > d ){
                        return -1;
                    }
                    return 0;
                })
                return resultSort
            } 
        } else {
            resultSort
        }
    }

	add (good) {
        if (good.available == true) {
		this.#goods.push(good);
        }
	}

    remote (id) {
        let idIndex = []
        for (let good of this.#goods) {
            idIndex.push(good.id)
        }
        let index = idIndex.indexOf(id);
        if (index >= 0) {
        this.#goods.splice(index, 1);
        return this.#goods
    }
    }

}

class BasketGood extends Good {

    constructor(id, name, description, sizes, price, available, amount) {
        super (id, name, description, sizes, price, available);
        this.amount = amount;

    }

  }

class Basket {
    goods

    constructor() {
        this.goods = []
    }

    add2 (good, amount) {
        if (good.available == true) {
		this.goods.push(good);
        }
	}

    add (good, amount) {
        if (this.goods.indexOf(good)!=-1) {
            let index = this.goods.indexOf(good)
            this.goods[index].amount = goods[index].amount + amount
            return this.goods
        } else {
            good.amount = amount
            console.log(good)
            this.goods.push(good)
            return this.goods
        }
    }

    remove(good, amount) {
        if (this.goods.indexOf(good)!=-1) {
            let index = this.goods.findindex(good)
            this.goods[index].amount = this.goods[index].amount - amount
            if (this.goods[index].amount == 0) {
                goods.splice(index, 1)
            }
        }
    }
    clear() {
        this.goods = []
    }

    removeUnavailable() {
        let result = goods.filter(good => good.available == true);
        return result
    }

    get list() {
        return this.goods
    }

    get totalAmount() {
        var totalAmount = 0;
        var index, len;
        for (index = 0, len = goods.length; index < len; ++index) {
            totalAmount = totalAmount + goods[index].amount;
        }
    }

    get totalSum() {
        var totalSumm = 0;
        var index, len;
        for (index = 0, len = goods.length; index < len; ++index) {
            totalSumm = totalSumm + goods[index].good.price * goods[index].amount
        }
    }

    get totalSummmm() {
        var totalSumm = 0;
        const sumWithInitial = goods.reduce(
        (totalSumm, good) => totalSumm + good.price * good.amount, totalSumm);
        console.log(sumWithInitial);
    }
    }
  
let good1 = new Good(1, "галстук", "в ассортименте", [], 500, true)
let good2 = new Good(2, "пиджак", "мужской, классический", [40, 42, 44, 48], 5000, true)
let good3 = new Good(3, "брюки", "мужские, классические", [40, 42, 46, 50], 4000, true)
let good4 = new Good(4, "брюки", "мужские, джинсы", [40, 42, 44, 46, 48], 4500, true)
let good5 = new Good(5, "рубашка", "в ассортименте", [40, 44, 50], 4000, true)

let goodsList = new GoodsList(true, true)
goodsList.add(good1)
goodsList.add(good2)
goodsList.add(good3)
goodsList.add(good4)
goodsList.add(good5)
// console.log(goodsList.remoteOf(3))
// console.log(goodsList.list)

let basketGood2 = new BasketGood(good2, 2)
let basketGood1 = new BasketGood(good1, 1)
let basketGood5 = new BasketGood(good5, 1)
console.log(basketGood2)

let basket = new Basket()
basket.add(basketGood2)
basket.add(basketGood1)
basket.add(basketGood5)
// console.log(basket.list)


