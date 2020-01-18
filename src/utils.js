import Cookies from 'universal-cookie';

export default class utils {
  static handleTriggerLang(lang) {
    const cookie = new Cookies();
    cookie.set("lang", lang, { maxAge: 200000 });
    window.location.reload(true);
  };

  static fetchGroupInfo(type) {
    const arrGroup = [
      [1,23, 2, 3, 4, 5, 7, 9, 10, 12],
      [13, 14, 15, 19, 20]
    ];
    return arrGroup[type].map(i => ({
      img: require(`src/assets/Group/1/${i}.png`),
      info: `INFO_${i}`
    }));
  }
}
