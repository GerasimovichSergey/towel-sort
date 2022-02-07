// You should implement your task here.
module.exports = function towelSort(matrix = []) {
    let arr = [];

    matrix.forEach((item, i) => {
        if (i % 2 > 0) {
            arr.push(...item.reverse());
        } else {
            arr.push(...item);
        }
    });

    return arr;
};
