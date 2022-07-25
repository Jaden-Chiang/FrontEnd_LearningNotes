var grid = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]
];

var numIslands = function (grid) {
    const nr = grid.length;
    const nc = grid[0].length;
    let res = 0;

    // 如果grid为空则直接返回
    if (nr == 0) return res;

    // 创建一个队列，记录当前为1的位置
    let zeroList = [];

    for (var r = 0; r < nr; r++) {
        for (var c = 0; c < nc; c++) {
            if (grid[r][c] == 1) {
                // 将r, c加入队列，记录位置
                zeroList.push([r, c]);
                res++;
                grid[r][c] = 2;
                while (zeroList.length > 0) {
                    // 获取存储的位置
                    let pos = zeroList.shift();
                    let posr = pos[0];
                    let posc = pos[1];
                    for (const node of [[posr - 1, posc], [posr + 1, posc], [posr, posc - 1], [posr, posc + 1]]) {
                        // console.log(node);
                        // console.log(node[0]);
                        // console.log(node[1]);
                        // 检查坐标合法性
                        if (node[0] < 0 || node[0] >= nr || node[1] < 0 || node[1] >= nc || grid[node[0]][node[1]] != 1) {
                            continue
                        }
                        grid[node[0]][node[1]] = 2;
                        zeroList.push([node[0], node[1]])
                    }
                }
            }
        }
    }

    return res;
};

console.log(numIslands(grid));