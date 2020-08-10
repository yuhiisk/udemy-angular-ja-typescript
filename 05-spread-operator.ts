// スプレッド演算子 (Spread Operator)
let categories = ['post', 'news', 'info'];
// ...categories

// 複製
let copyCat = [...categories];
// console.log(copyCat);

// 後ろで展開
let pushCat = ['other', ...categories];
// console.log(pushCat);

// 前で展開
let unshiftCat = [...categories, 'other'];
// console.log(unshiftCat);

// 途中に挿入
let insertCat = ['other', ...categories, 'Q&A'];
// console.log(insertCat);

// 2つの配列をマージ
let mergeCat = [...categories, ...pushCat];
// console.log(mergeCat);

function list() {
  console.log(arguments.length);
}
// list(...categories); // list('post', 'news', 'info');
// new Date(...categories);

let post = { id: 1, content: 'dummy', created: '2020-04-01' };

// 複製
let copyObj = { ...post };
// console.log(copyObj);

// オブジェクトの連結
let pushObj = { ...post, created: '2020-04-05', updated: '2020-04-10' };
// console.log(pushObj);
let mergeObj = { ...post, ...pushObj };
// console.log(mergeObj);

// オブジェクトを配列に展開することはできない
// let test = [...post];

// 配列をオブジェクトに展開することは可能
let test = {...categories};
// console.log(test);