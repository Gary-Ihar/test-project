export function parseWalletId(id: string) {
  const firstTenSymbols = id.slice(0, 10);
  const lastFourSymbols = id.slice(-4);
  return `${firstTenSymbols}...${lastFourSymbols}`;
}
