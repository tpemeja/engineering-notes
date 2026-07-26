const DISPLAY_FORMAT: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', DISPLAY_FORMAT);
}

export function formatDateShort(date: Date): string {
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

export function toISODate(date: Date): string {
  return date.toISOString().split('T')[0];
}
