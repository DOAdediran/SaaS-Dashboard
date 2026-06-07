export function formatCurrencyNaira(value: number, short = true): string {
  const n = Number(value) || 0;
  if (!short) {
    return `₦${n.toLocaleString()}`;
  }

  const millions = n / 1_000_000;
  if (millions >= 1) {
    const rounded = Math.round(millions * 10) / 10;
    return `₦${rounded.toString().replace(/\.0$/, "")}M`;
  }

  const thousands = Math.round(n / 1000);
  return `₦${thousands}M`;
}

export function formatNumberShort(value: number): string {
  const n = Number(value) || 0;
  const millions = n / 1_000_000;
  if (millions >= 1) {
    const rounded = Math.round(millions * 10) / 10;
    return `${rounded.toString().replace(/\.0$/, "")}M`;
  }

  return `${Math.round(n / 1000)}`;
}

export default formatCurrencyNaira;
