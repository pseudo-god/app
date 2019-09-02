import Cookies from 'universal-cookie';

export default class utils {
  static handleTriggerLang(lang) {
    const cookie = new Cookies();
    cookie.set("lang", lang, { maxAge: 200000 });
    window.location.reload(true);
  };

  static fetchGroupInfo(type) {
    const arrGroup = [
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      [13, 14, 15, 16 , 17, 18, 19, 20, 21, 22, 23]
    ];
    return arrGroup[type].map(i => ({
      img: require(`src/assets/Group/1/${i}.png`),
      info: `INFO_${i}`
    }));
  }
}
