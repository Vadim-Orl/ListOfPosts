export function makeFirstLetterToUpper(s: string) {
    return s[0].toLocaleUpperCase() + s.slice(1)
}


export const debounce = <F extends (...args: any[]) => any>(func: F, waitFor = 200) => {
    let timeout: ReturnType<typeof setTimeout> | null = null;
  
    const debounced = (...args: Parameters<F>) => {
      if (timeout !== null) {
        clearTimeout(timeout);
        timeout = null;
      }
      timeout = setTimeout(() => func(...args), waitFor);
    };
  
    return debounced as (...args: Parameters<F>) => ReturnType<F>;
  };