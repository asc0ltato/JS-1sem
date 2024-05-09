// Задание 2. Cделать поиск и замену многострочного вхождения: заменить [u] … [/u] на тэг подчеркивания: <u>.
const str = `[u]мой\n текст[/u]`;
const regexp = /\[u\]([\s\S]*)\[\/u\]/gim; 
const subst = '<u>$1</u>';
const result = str.replace(regexp, subst);
console.log(result);