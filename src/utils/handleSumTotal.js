const handleSumTotal = cart => {
    const reducer = (acumulator, currentValue) => acumulator + currentValue.costoTotal;
    const sum = cart.reduce(reducer, 0);
    return sum;
}

export default handleSumTotal;
