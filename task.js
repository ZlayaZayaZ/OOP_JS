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

class GoodsList extends Good {
    good
	#goods

	constructor(sortPrice, sortDir) {
        // проблема в этом месте. Если оставить строчку ниже в конструкторе
        // данного класса - получается что мы каждый раз при создании нового объекта
        // данного класса будем ловить ошибку, что он не понимает зачем нам нужны эти
        // параметры и какие конкретно брать, если объектов предыдущего класса - несколько

        // а если убрать эту строчку - то node ругается, что ему "не с чем работать"
        // внутри методов класса. Не понимаю куда ее перенести, чтобы все работало
        // (по сути эта проблема так же касается всех методов ниже)
        good = super(id, name, description, sizes, price, available)
        this.#goods = []
        let filter = /брюки/gmi
        let result = []
        for (let good in this.#goods) {
            if (filter.test(good.name)) {
                result.push(good) 
            }
        }
        //let result = #goods.filter(good.name => filter.test(good.name));
        this.sortPrice = sortPrice
        this.sortDir = sortDir
    }

    get list() {
        if (this.sortPrice == true) {
            if (this.sortDir == true) {
                result.price.sort = 1
                return result
            } else {
                result.price.sort = -1
                return result
            } 
        } else {
            result
        }
    }

	add (good) {
        if (good.available == true) {
		this.#goods.push(good);
        }
	}

	remote (id) {
		for (let good of this.#goods) {
            let index = this.#goods.findindex(good.id == id)
            if (index == -1) {
                console.log('елемент не найден')
            } else {
                this.#goods.splice(index, 1)
                return this.#goods
            }

		}
	}
}

class BasketGood extends Good {
    good
    goods

    constructor(id, name, description, sizes, price, available, amount) {
        good = super (id, name, description, sizes, price, available)
        this.amount = amount;
        goods = []
    }

    add(good, amount) {
        if (this.goods.indexOf(good)!=-1) {
            let index = this.goods.findindex(good)
            this.goods[index].amount = goods[index].amount + amount
        } else {
            this.goods.push(id = good.id,
                name = good.name,
                description = good.description,
                sizes = good.sizes,
                price = good.price,
                available  = good.available,
                amount = amount,
                )
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

  }

class Basket extends BasketGood {
    goods

    constructor() {
        goods = super(goods)
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

let goodsList = new GoodsList(true, false)
goodsList.add(good1)
goodsList.add(good2)
goodsList.add(good3)
goodsList.add(good4)
goodsList.add(good5)
console.log(goodsList.list)