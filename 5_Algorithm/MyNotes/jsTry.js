var grid = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]
]

var numIslands = function (grid) {
    // 记录最终结果
    var res = 0;
    // 如果grid为空，则直接返回
    if (grid == null) return res;

    // 获取grid的宽和高
    const m = grid.length;
    const n = grid[0].length;

    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            if (grid[i][j] == 1) {
                dfs(grid, i, j);
                res++;
            }
        }
    }

    return res;
};

var dfs = function (grid, posi, posj) {
    if (!isInGird(grid, posi, posj)) return;
    if (grid[posi][posj] != 1) return;
    grid[posi][posj] = 2;
    dfs(grid, posi - 1, posj);
    dfs(grid, posi + 1, posj);
    dfs(grid, posi, posj - 1);
    dfs(grid, posi, posj + 1);
};

var isInGird = function (grid, posi, posj) {
    if (0 <= posi < grid.length && 0 <= posj < grid[0].length) {
        return true;
    } else {
        return false;
    }
};

console.log(numIslands(grid));