var p0Data = [
  {
    title: "1. 請問文中小亮想購買的是什麼產品",
    name: "0-1",
    choose: null,
    specialQue: true,
    options: [
      {
        title: '筆電',
        value: 'laptop',
      },
      {
        title: '行動電源',
        value: 'power pack',
      },
      {
        title: '滑鼠',
        value: 'mouse',
      },
    ],
  },
  {
    title: "2. 關於您詢問的問題，客服有立刻提供解答嗎?",
    name: "0-2",
    choose: null,
    specialQue: true,
    options: [
      {
        title: '有',
        value: 'yes',
      },
      {
        title: '沒有',
        value: 'no',
      },
    ],
  },
  {
    title: "3. 請問您感覺客服有在線上嗎?",
    name: "0-3",
    choose: null,
    specialQue: true,
    options: [
      {
        title: '有',
        value: 'yes',
      },
      {
        title: '沒有',
        value: 'no',
      },
    ],
  },
  {
    title: "4. 您瀏覽網站所提供的產品資訊是?",
    name: "0-4",
    choose: null,
    specialQue: true,
    options: [
      {
        title: '豐富',
        value: 'rich',
      },
      {
        title: '貧乏',
        value: 'poor',
      },
    ],
  },
];

var p1Data = [
  {
    title: "1. 幫助我更容易預期，產品實際可能的樣子",
    name: "1-1",
    degreeBottom: "非常沒幫助",
    degreeTop: "非常有幫助",
    choose: null
  },
  {
    title: "2. 讓我可以獲得，像在實體商店一樣的豐富資訊",
    name: "1-2",
    degreeBottom: "非常少資訊",
    degreeTop: "非常多資訊",
    choose: null
  },
  {
    title: "3. 有助於我想像，在實體商店接觸產品的可能感受",
    name: "1-3",
    degreeBottom: "非常不能想像",
    degreeTop: "非常可以想像",
    choose: null
  },
  {
    title: "4. 有助我衡量產品",
    name: "1-4",
    degreeBottom: "完全沒有幫助",
    degreeTop: "非常有幫助",
    choose: null
  },
  {
    title: "5. 有助於我熟悉產品",
    name: "1-5",
    degreeBottom: "完全沒有幫助",
    degreeTop: "非常有幫助",
    choose: null
  },
  {
    title: "6. 有助於我理解產品的品質優劣",
    name: "1-6",
    degreeBottom: "完全沒有幫助",
    degreeTop: "非常有幫助",
    choose: null
  }
];

var p2Data = [
  {
    title: "1. 好像在與人實際接觸",
    name: "2-1",
    degreeBottom: "非常不像",
    degreeTop: "非常像",
    choose: null
  },
  {
    title: "2. 它好像具備社交能力",
    name: "2-2",
    degreeBottom: "非常少思考",
    degreeTop: "非常多思考",
    choose: null
  },
  {
    title: "3. 它好像具備人性的溫暖",
    name: "2-3",
    degreeBottom: "非常少時間",
    degreeTop: "非常多時間",
    choose: null
  },
  {
    title: "4. 它好像具備人的敏感與靈活度",
    name: "2-4",
    degreeBottom: "完全沒有幫助",
    degreeTop: "非常有幫助",
    choose: null
  },
  {
    title: "5. 是一件享受的事",
    name: "2-5",
    degreeBottom: "完全沒有用",
    degreeTop: "非常有用",
    choose: null
  },
  {
    title: "6. 是存在樂趣的事",
    name: "2-6",
    degreeBottom: "完全不具參考價值",
    degreeTop: "非常具有參考價值",
    choose: null
  },
  {
    title: "7. 是興奮的",
    name: "2-7",
    degreeBottom: "完全不具參考價值",
    degreeTop: "非常具有參考價值",
    choose: null
  },
  {
    title: "8. 是有趣的",
    name: "2-8",
    degreeBottom: "完全不具參考價值",
    degreeTop: "非常具有參考價值",
    choose: null
  }
];

var p3Data = [
  {
    title: "1. 我相信能夠做出，一個受到大家歡迎的選擇",
    name: "3-1",
    degreeBottom: "非常少努力",
    degreeTop: "非常多努力",
    choose: null
  },
  {
    title: "2. 我相信能夠做出，大多數人都認為是好的選擇",
    name: "3-2",
    degreeBottom: "非常少思考",
    degreeTop: "非常多思考",
    choose: null
  },
  {
    title: "3. 我相信能夠做出，大多數人都可接受的選擇",
    name: "3-3",
    degreeBottom: "非常少時間",
    degreeTop: "非常多時間",
    choose: null
  },
  {
    title: "4. 我感覺一定不可能會有產品符合我的需求",
    name: "3-4",
    degreeBottom: "完全沒有幫助",
    degreeTop: "非常有幫助",
    choose: null
  },
  {
    title: "5. 我有信心能找到符合喜好的產品",
    name: "3-5",
    degreeBottom: "完全沒有用",
    degreeTop: "非常有用",
    choose: null
  },
  {
    title: "6. 我相信能夠找到滿足需求的產品",
    name: "3-6",
    degreeBottom: "完全不具參考價值",
    degreeTop: "非常具有參考價值",
    choose: null
  },
  {
    title: "7. 我感覺存在貨幣交易的風險",
    name: "3-7",
    degreeBottom: "完全不具參考價值",
    degreeTop: "非常具有參考價值",
    choose: null
  },
  {
    title: "8. 我感覺存在產品購買的風險",
    name: "3-8",
    degreeBottom: "完全不具參考價值",
    degreeTop: "非常具有參考價值",
    choose: null
  },
  {
    title: "9. 我感覺存在產品服務的風險",
    name: "3-9",
    degreeBottom: "完全不具參考價值",
    degreeTop: "非常具有參考價值",
    choose: null
  },
  {
    title: "10. 我感覺存在隱私洩露的風險",
    name: "3-10",
    degreeBottom: "完全不具參考價值",
    degreeTop: "非常具有參考價值",
    choose: null
  }
];