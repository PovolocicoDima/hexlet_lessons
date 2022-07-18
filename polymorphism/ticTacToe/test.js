const board = [
    { row: [null, null, null] },
    { row: ['0', '0', '0'] },
    { row: [null, null, null] },
];



const board2 = [

]

const right = ['0', '0', '0'];

const result = board.filter(({ row }) => {
    return row.toString() === right.toString();
});
