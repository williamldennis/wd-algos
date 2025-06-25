//depth first search 
// define a function that takes a graph 
// you give it a starting node
//call function {
// you mark that node as visited 
// you add that node to the results
// you check that node for neghbors
// you visit each of the neighbors

const graph: Record<string, string[]> = {
    A: ["B", "C"],
    B: ["D"],
    C: [],
    D: []
};

function dfs(graph: Record<string, string[]>, start: string, visited = new Set<string>(), result: string[] = []): string[] {

    if (visited.has(start)) return result

    visited.add(start)
    result.push(start)

    for (const neighbor of graph[start] || []) {
        if (!visited.has(neighbor)) {
            dfs(graph, neighbor, visited, result)
        }
    }
    return result

}

const result = dfs(graph, "A")
console.log("result: ", result)
