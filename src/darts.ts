export function calcPoints(hits: string): number {
  const parts = hits.trim().split(/\s+/);
  if (parts.length % 2 !== 0 || parts.length === 0) throw new Error("Invalid throw input");

  let total = 0;
  for (let i = 0; i < parts.length; i += 2) {
    const multiplier = parseInt(parts[i]);
    const sector = parseInt(parts[i + 1]);

    if (isNaN(multiplier)) throw new Error("Invalid throw input");
    if (multiplier < 1 || multiplier > 3) throw new Error("Invalid throw input");
    if (isNaN(sector) || (sector < 1 || sector > 20) && sector !== 25) throw new Error("Invalid throw input");

    total += multiplier * sector;
  }
  return total;
}

export function possibleCheckout(x: number): string {
  if (x < 0) throw new Error("Points cannot be negative");
  if (x >= 501) return null;

  const remaining = 501 - x;
  if (remaining <= 1) return null;

  if (remaining % 2 !== 0) return null;
  
  const target = remaining / 2;
  if (target <= 20 || target === 25) return `Double ${target}`;
  
  return null;
}