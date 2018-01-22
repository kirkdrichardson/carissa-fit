const WORDS = ['lorem', 'ipsum', 'villa', 'adversperascebat', 'et', 'tu', 'veritas', 'lia'];

export const randomNum = max => Math.round(Math.random() * max);
export const getStr = len => [...Array(len)].map(() => WORDS[randomNum(WORDS.length - 1)]).join(' ');
