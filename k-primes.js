function consecKprimes(k, arr) {
    // your code
    function kPrime(n){
        let count = 0;
        let divisor = 2;
        while (n % divisor === 0) {
            count++;
            n /= divisor;
        }
        divisor = 3;
        while (divisor * divisor <= n) {
            while (n % divisor === 0) {
                count++;
                n /= divisor;
            }
            divisor += 2;
        }
        if (n > 1) {
            count++
        }
        return count;
    }
    let count = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        let num = arr[i];
        let num1 = arr[i + 1];
        if (kPrime(num) === k && kPrime(num1) === k) {
            count++
        }
    }
    return count;
}