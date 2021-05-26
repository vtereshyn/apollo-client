export function setIn(
  obj: Record<string, any>,
  path: Array<string | number>,
  updater: Function,
) {
  if (!path.length) {
    return obj;
  }

  let parent: any = obj;
  for (let i = 0; i < path.length - 1; i++) {
    const key = path[i];
    parent = parent[key];
  }

  const key = path[path.length - 1];
  parent[key] = updater(parent[key]);
  return obj;
}
