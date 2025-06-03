const dogs = [
    {
    name: "皮皮",
    gender: "女生",
    genderIcon: "asset/icon/gender-f.png",
    age: "2歲",
    description: "皮皮是一隻害羞但非常溫柔的小女生，剛來時總是躲在角落觀察大家， 但只要你蹲下來陪她一會兒，她就會輕輕靠過來，用眼神撒嬌。",
    image: "asset/doglist/dogList10.png"
  },
  {
    name: "阿布",
    gender: "男生",
    genderIcon: "asset/icon/gender-m.png",
    age: "3歲",
    description: "阿布是一隻活力滿滿的大男孩，最喜歡跑來跑去找人玩。他有點貪吃，但超級聽話，是個「用零食就能收服」的陽光寶寶！",
    image: "asset/doglist/dogList1.png"
  },
  {
    name: "嘟嘟",
    gender: "女生",
    genderIcon: "asset/icon/gender-f.png",
    age: "4歲",
    description: "嘟嘟是一隻文靜的小姐姐，走路總是小碎步，非常優雅。她喜歡坐在窗邊曬太陽，也愛被輕輕梳毛，像個安靜的小貴婦。",
    image: "asset/doglist/dogList2.png"
  },
  {
    name: "小芋",
    gender: "男生",
    genderIcon: "asset/icon/gender-m.png",
    age: "1歲半",
    description: "小芋是剛來不久的小寶寶，個性調皮可愛，會偷偷咬你的拖鞋再裝沒事。他對新環境很好奇，每天都像在探險。",
    image: "asset/doglist/dogList3.png"
  },
  {
    name: "茶茶",
    gender: "女生",
    genderIcon: "asset/icon/gender-f.png",
    age: "6歲",
    description: "茶茶是一位溫柔又有耐心的姐姐狗，總是在照顧其他比較膽小的狗狗。她走到哪裡都慢慢的，是最穩定的陪伴。",
    image: "asset/doglist/dogList4.png"
  },
  {
    name: "多多",
    gender: "男生",
    genderIcon: "asset/icon/gender-m.png",
    age: "2歲半",
    description: "多多是個撒嬌高手，一看到你坐下就會黏過來求抱抱。他的耳朵總是垂得剛剛好，可愛到讓人捨不得放開。",
    image: "asset/doglist/dogList5.png"
  },
  {
    name: "Momo",
    gender: "女生",
    genderIcon: "asset/icon/gender-f.png",
    age: "1歲",
    description: "Momo像一顆跳跳糖，總是在蹦蹦跳跳！她對每個人都很熱情，連第一次見面都會主動湊上來聞你、舔你，彷彿認識很久。",
    image: "asset/doglist/dogList6.png"
  },
  {
    name: "胖虎",
    gender: "男生",
    genderIcon: "asset/icon/gender-m.png",
    age: "5歲",
    description: "胖虎名字雖霸氣，其實內心超軟。他最喜歡被人輕拍下巴，還會發出舒服的「呼嚕聲」，是個療癒系大哥哥。",
    image: "asset/doglist/dogList7.png"
  },
  {
    name: "寶寶",
    gender: "女生",
    genderIcon: "asset/icon/gender-f.png",
    age: "7歲",
    description: "寶寶是一位溫柔長輩，走路慢吞吞、眼神卻很有故事。她曾經歷過一些風雨，但依然相信人類，也喜歡窩在人腿邊小睡。",
    image: "asset/doglist/dogList8.png"
  },
  
];
// 隨機排序
dogs.sort(() => Math.random() - 0.5);

// 套用到畫面
const cards = document.querySelectorAll('.dogcard');

cards.forEach((card, index) => {
  if (index < dogs.length) {
    const dog = dogs[index];
    card.querySelector('.dogcard-image').src = dog.image;
    card.querySelector('.name').textContent = dog.name;
    card.querySelector('.gender img').src = dog.genderIcon;
    card.querySelector('.age').textContent = dog.age;
    card.querySelector('p').textContent = dog.description;
  }
});

