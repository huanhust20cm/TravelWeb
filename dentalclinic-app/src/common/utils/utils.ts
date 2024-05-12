export const useUtils = () => {
  const createUrl = (url: string, params?: Record<string, undefined | string | number>) => {
    let str = '';
    if (params) {
      Object.keys(params)
        .filter((item) => params[item])
        .forEach((item, index) => {
          str += `${index === 0 ? '?' : '&'}${item}=${params[item]}`;
        });
      return url + str;
    } else {
      return url;
    }
  };

  const debounce = (func: A, wait = 300) => {
    let timeout: ReturnType<typeof setTimeout> | null = null;
    return function (...args: A[]) {
      if (timeout) {
        clearTimeout(timeout);
      }

      timeout = setTimeout(() => {
        func(...args);
      }, wait);
    };
  };

  const isObject = (val: A) => {
    return typeof val === 'object' && val !== null;
  };

  const getLableByValue = (options: SelectOption<string | number>[], targetValue: string | number): string => {
    const label = options.filter((item) => item.value === targetValue)[0]?.label ?? '';
    return label;
  };

  const combineClassNames = (...arg: (string | boolean | undefined)[]): string => {
    /**
     * Use case 1: combineClassNames('class1', 'class2')   => "class1 class2"
     * Use case 2: combineClassNames('class1', some_conditions && 'class2')
     * use case 3: combineClassNames('class1, some_conditions ? 'class2' : 'class3')
     */
    const result = [];
    for (const item of arg) {
      if (typeof item === 'string' && item.trim()) result.push(item);
    }
    return result.join(' ');
  };

  const getQuery = (locationSearch: string) => {
    const strt = locationSearch.substring(locationSearch.indexOf('?') + 1);
    const arr = strt.split('&');
    const result: Record<string, string> = {};
    arr.forEach((item) => {
      const keyValue = item.split('=');
      result[keyValue[0]] = keyValue[1];
    });
    return result;
  };

  return {
    debounce,
    getQuery,
    createUrl,
    isObject,
    getLableByValue,
    combineClassNames
  };
};
