/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  if (prerequisites.length === 1) return true;
  const states = new Array(numCourses).fill(0);
  const graph = {};
  prerequisites.forEach(([to, from]) => {
    if (graph[from]) {
      graph[from].push(to);
    } else {
      graph[from] = [to];
    }
  });
  for (let i = 0; i < numCourses; i++) {
    if (dfs(graph, states, i)) {
      return false;
    }
  }

  return true;
};

const dfs = (graph, states, cur) => {
  if (states[cur] === 2) return false;
  if (states[cur] === 1) return true;
  states[cur] = 1;

  for (let i = 0; graph[cur] && i < graph[cur].length; i++) {
    if (dfs(graph, states, graph[cur][i])) {
      return true;
    }
  }

  states[cur] = 2;

  return false;
};

console.log(
  canFinish(2, [
    [1, 0],
    [0, 1],
  ])
);
