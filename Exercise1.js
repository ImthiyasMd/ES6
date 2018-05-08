let data = [
    {text: 'ES6 is awesome', type: 'p'},
    {text: 'ES6 is significant update in JS history', type: 'li'},
    {text: 'const creates immutable variables', type: 'li'},
    {text: 'Block scoping via let and const', type: 'li'},
    {text: 'ES6 was released in 2015', type: 'h3'}
];

display = (list) => {
  let str = "";
  for(let ele of list){    
    let {text, type} = ele;
    str+=  (type == 'li') ? `Element type is li with text ${text}\n` : '';
  }
  console.log(str);
}
display(data);