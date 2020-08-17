// スプレッド演算子

// 配列
// =========================
let categories = ['post', 'news', 'info'];
// ...categories

// 複製
let copyCat = [...categories]; // 'post', 'news', 'info'
// console.log(copyCat, copyCat === categories);

// 連結
let pushCat = ['other', ...categories];
// console.log(pushCat);

let unshiftCat = [...categories, 'other'];
// console.log(unshiftCat);

// 途中に挿入
let insertCat = ['other', ...categories, 'Q&A'];
// console.log(insertCat);

// 2つの配列をマージ
let mergeCat = [...categories, ...copyCat];
// console.log(mergeCat);


// オブジェクト
// =========================
let post = { id: 1, content: 'dummy', created: '2020-04-01' };

// 複製
let copyObj = { ...post };
// console.log(copyObj);

// 連結
let pushObj = { ...post, updated: '2020-04-05' };
// console.log(pushObj);

// オブジェクトのマージ
let mergeObj = { ...post, ...pushObj };
// console.log(mergeObj);

// 配列にオブジェクトを展開することはできない
// let test = [...post];
// 逆に配列はオブジェクトに展開できる
let test = { ...categories };
// console.log(test);
