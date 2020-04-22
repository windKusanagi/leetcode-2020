/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  const graph = {};
  prerequisites.forEach(([to, from]) => {
    if (graph[from]) {
      graph[from].push(to);
    } else {
      graph[from] = [to];
    }
  });

  const states = new Array(numCourses).fill(0);
  const order = [];

  for (let i = 0; i < numCourses; i++) {
    if (dfs(graph, i, states, order)) return [];
  }

  return order.reverse();
};

const dfs = (graph, cur, states, order) => {
  if (states[cur] === 1) return true;
  if (states[cur] === 2) return false;
  states[cur] = 1;
  for (let i = 0; i < graph[cur].length; i++) {
    if (dfs(graph, graph[cur][i], states, order)) return true;
  }

  states[cur] = 2;
  order.push(cur);
  return false;
};
