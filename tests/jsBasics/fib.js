const fib = (n) => {
    return n <= 1 ? n : fib(n - 2) + fib(n - 1);
};

export default fib;