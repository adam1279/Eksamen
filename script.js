function pairsInArray(arr, num) {
    result = 0;
    count = 0;
    for (item of arr) {
        if (item == num) {
            count++;
        } else if (count > 0) {
            result += count - 1;
            count = 0;
        }
    }
    return result;
}

class MyClass {
    constructor() {
        this.pairsInArray = pairsInArray;
    }
}

class MyClass2 {
    constructor() {
        
    }
    pairsInArray(arr, num) {
        result = 0;
        count = 0;
        for (item of arr) {
            if (item == num) {
                count++;
            } else if (count > 0) {
                result += count - 1;
                count = 0;
            }
        }
        return result;
    }
}

myClass = new MyClass();