export function originRouterUtils(): string {
  return global.window && window.origin;
}
