import { Language } from '../types';

export const teamTranslations: Record<string, Record<Language, string>> = {
  halaba: {
    en: 'Halaba Ketema (Berberewochu)',
    am: 'ሀላባ ከተማ (በርበሬዎቹ)',
    om: 'Halaba Ketema (Berberewochu)',
  },
  cbe_sa: {
    en: 'Ethiopia Nigd Bank (CBE SA)',
    am: 'ኢትዮጵያ ንግድ ባንክ',
    om: 'Baankii Daldala Itoophiyaa (CBE)',
  },
  insurance: {
    en: 'Ethiopian Medhin (Insurance)',
    am: 'ኢትዮጵያ መድን',
    om: 'Inshuraansii Itoophiyaa (Medhin)',
  },
  fasil: {
    en: 'Fasil Kenema',
    am: 'ፋሲል ከነማ',
    om: 'Faasiil Kanamaa',
  },
  adama: {
    en: 'Adama Kenema SC',
    am: 'አዳማ ከነማ',
    om: 'Adaamaa Kanamaa',
  },
  electric: {
    en: 'Ethio Electric',
    am: 'ኢትዮ ኤሌክትሪክ',
    om: 'Ityoo Elektiriik',
  },
  bahirdar: {
    en: 'Bahir Dar Kenema',
    am: 'ባሕር ዳር ከነማ',
    om: 'Baahir Daar Kanamaa',
  },
  bunna: {
    en: 'Ethiopian Coffee SC',
    am: 'የኢትዮጵያ ቡና',
    om: 'Buna Itoophiyaa',
  },
  saintgeorge: {
    en: 'Saint George SC (Kidus Giorgis)',
    am: 'ቅዱስ ጊዮርጊስ',
    om: 'Qulqulluu Giyoorgis',
  },
  defence: {
    en: 'Defence Force SC (Mekelakeya)',
    am: 'መከላከያ',
    om: 'Garee Raayyaa Ittisaa',
  },
  sidama: {
    en: 'Sidama Coffee SC',
    am: 'ሲዳማ ቡና',
    om: 'Buna Sidaamaa',
  },
  wolaitta: {
    en: 'Wolaitta Dicha',
    am: 'ወላይታ ድቻ',
    om: 'Walaayittaa Dicha',
  },
  hosaena: {
    en: 'Hadiya Hossana',
    am: 'ሀዲያ ሆሳዕና',
    om: 'Haadiyaa Hosaa’inaa',
  },
  diredawa: {
    en: 'Dire Dawa Kenema',
    am: 'ድሬዳዋ ከነማ',
    om: 'Dirre Dhawaa Kanamaa',
  },
  gamochencha: {
    en: 'Gamo Chencha',
    am: 'ጋሞ ጬንቻ',
    om: 'Gaamoo Cencaa',
  },
  welwalo: {
    en: 'Welwalo Adigrat University',
    am: 'ወልዋሎ ዓዲግራት ዩኒቨርሲቲ',
    om: 'Walwaaloo Yuunivarsiitii Addigraat',
  },
  shaggar: {
    en: 'Shaggar City',
    am: 'ሻገር ከተማ',
    om: 'Magaalaa Shaggar',
  },
  negelle: {
    en: 'Negelle Arsi',
    am: 'ነገሌ አርሲ',
    om: 'Nageellee Arsii',
  },
  hawassa: {
    en: 'Hawassa Kenema',
    am: 'ሀዋሳ ከነማ',
    om: 'Hawaasaa Kanamaa',
  },
};

export const normalizeTeamKey = (rawId?: string, rawName?: string): string => {
  const str = `${rawId || ''} ${rawName || ''}`.toLowerCase();
  if (str.includes('halaba')) return 'halaba';
  if (str.includes('cbe') || str.includes('nigd') || rawId === '149377') return 'cbe_sa';
  if (str.includes('medhin') || str.includes('insurance') || rawId === '146921') return 'insurance';
  if (str.includes('adama') || rawId === '141024') return 'adama';
  if (str.includes('electric') || rawId === '146920') return 'electric';
  if (str.includes('fasil') || rawId === '141026') return 'fasil';
  if (str.includes('bahir') || rawId === '141025') return 'bahirdar';
  if (str.includes('bunna') || (str.includes('coffee') && !str.includes('sidama'))) return 'bunna';
  if (str.includes('george') || str.includes('giorgis')) return 'saintgeorge';
  if (str.includes('defence') || str.includes('mekelakeya')) return 'defence';
  if (str.includes('welwalo')) return 'welwalo';
  if (str.includes('dicha') || str.includes('wolaitta')) return 'wolaitta';
  if (str.includes('hosaena') || str.includes('hossana')) return 'hosaena';
  if (str.includes('diredawa') || str.includes('dire dawa')) return 'diredawa';
  if (str.includes('chencha') || str.includes('gamo')) return 'gamochencha';
  if (str.includes('sidama')) return 'sidama';
  if (str.includes('shaggar')) return 'shaggar';
  if (str.includes('negelle')) return 'negelle';
  if (str.includes('hawassa')) return 'hawassa';
  return (rawId || '').replace(/[^a-z0-9]/g, '');
};

export const getLocalizedTeamName = (teamId?: string, teamName?: string, lang: Language = 'en'): string => {
  const key = normalizeTeamKey(teamId, teamName);
  if (teamTranslations[key]?.[lang]) {
    return teamTranslations[key][lang];
  }
  // If teamName is already in Amharic (e.g. contains Ge'ez script) and lang is 'am', return it
  if (lang === 'am' && teamName && /[\u1200-\u137F]/.test(teamName)) {
    return teamName;
  }
  return teamName || teamId || 'Team';
};

export const playerTranslations: Record<string, Record<Language, string>> = {
  'Biniam Teklu': { en: 'Biniam Teklu', am: 'ቢንያም ተክሉ', om: 'Biniyaam Takluu' },
  'Mekonnen Abera': { en: 'Mekonnen Abera', am: 'መኮንን አበራ', om: 'Makonnin Abarraa' },
  'Henok Haile': { en: 'Henok Haile', am: 'ሄኖክ ኃይሌ', om: 'Heenook Haayilee' },
  'Biruk Tadesse': { en: 'Biruk Tadesse', am: 'ብሩክ ታደሰ', om: 'Biruk Taaddasaa' },
  'Samson Fikru': { en: 'Samson Fikru', am: 'ሳምሶን ፍቅሩ', om: 'Saamsoon Fiqruu' },
  'Kassahun Negash': { en: 'Kassahun Negash', am: 'ካሳሁን ነጋሽ', om: 'Kaassaahuun Nagaash' },
  'Mohammed Seid': { en: 'Mohammed Seid', am: 'መሀመድ ሰይድ', om: 'Mahaammad Sa’iid' },
  'Amanuel Tesfaye': { en: 'Amanuel Tesfaye', am: 'አማኑኤል ተስፋዬ', om: 'Amaanu’eel Tasfaayee' },
  'Yohannes Bekele': { en: 'Yohannes Bekele', am: 'ዮሐንስ በቀለ', om: 'Yohaannis Baqqalaa' },
  'Desta Alemayehu': { en: 'Desta Alemayehu', am: 'ደስታ አለማየሁ', om: 'Dastaa Alamayyahu' },
  'Abdi Gemeda': { en: 'Abdi Gemeda', am: 'አብዲ ገመዳ', om: 'Abdi Gamadaa' },
  'Elias Zewdu': { en: 'Elias Zewdu', am: 'ኤልያስ ዘውዱ', om: 'Eeliyaas Zawuduu' },
  'Mulugeta Wolde': { en: 'Mulugeta Wolde', am: 'ሙሉጌታ ወልዴ', om: 'Muluugeetaa Waldee' },
  'Biniam Getachew': { en: 'Biniam Getachew', am: 'ቢንያም ጌታቸው', om: 'Biniyaam Getaachoo' },
  'Tarekegn Assefa': { en: 'Tarekegn Assefa', am: 'ታሪከኝ አሰፋ', om: 'Taarikaññ Asaffaa' },
  'Fikadu Shiferaw': { en: 'Fikadu Shiferaw', am: 'ፍቃዱ ሽፈራው', om: 'Fiqaaduu Shifarraaw' },
  'Kaleb Amankwah': { en: 'Kaleb Amankwah', am: 'ካሌብ አማንክዋህ', om: 'Kaaleeb Amaankwaa' },
  'Romaric': { en: 'Romaric', am: 'ሮማሪክ', om: 'Roomaariik' },
  'Yonatan Hailu': { en: 'Yonatan Hailu', am: 'ዮናታን ኃይሉ', om: 'Yoonaataan Haayiluu' },
  'Dr. Kassim Ahmed': { en: 'Dr. Kassim Ahmed', am: 'ዶ/ር ቃሲም አህመድ', om: 'Dr. Qaasim Ahimad' },
  'Solomon Kebede': { en: 'Solomon Kebede', am: 'ሰለሞን ከበደ', om: 'Solomoon Kabbadaa' },
  'Getachew Dinberu': { en: 'Getachew Dinberu', am: 'ጌታቸው ድንበሩ', om: 'Getaachoo Dinbaruu' },
  'Worku Mengistu': { en: 'Worku Mengistu', am: 'ወርቁ መንግስቱ', om: 'Warquu Mangistuu' },
  'Dr. Nahom Tsegaye': { en: 'Dr. Nahom Tsegaye', am: 'ዶ/ር ናሆም ፀጋዬ', om: 'Dr. Naahoom Tsaggaayee' },
  'Melaku Belachew': { en: 'Melaku Belachew', am: 'መላኩ በላቸው', om: 'Malaakuu Balaachoo' },
};

export const getLocalizedPersonName = (name: string, lang: Language = 'en'): string => {
  return playerTranslations[name]?.[lang] || name;
};

export const positionTranslations: Record<string, Record<Language, string>> = {
  Goalkeeper: { en: 'Goalkeeper', am: 'ግብ ጠባቂ', om: 'Eegduu Galchii' },
  Defender: { en: 'Defender', am: 'ተከላካይ', om: 'Ittisaa' },
  Midfielder: { en: 'Midfielder', am: 'አማካኝ', om: 'Giddu-galeessa' },
  Forward: { en: 'Forward', am: 'አጥቂ', om: 'Fuuldura' },
  ALL: { en: 'All Positions', am: 'ሁሉም ቦታዎች', om: 'Bakka Hunda' },
};

export const getLocalizedPosition = (pos: string, lang: Language = 'en'): string => {
  return positionTranslations[pos]?.[lang] || pos;
};

export const roleTranslations: Record<string, Record<Language, string>> = {
  'Club President': { en: 'Club President', am: 'የክለቡ ፕሬዝዳንት', om: 'Pirezidaantii Kilabichaa' },
  'Head Coach': { en: 'Head Coach', am: 'ዋና አሰልጣኝ', om: 'Leenjisaa Ol’aanaa' },
  'Assistant Coach': { en: 'Assistant Coach', am: 'ረዳት አሰልጣኝ', om: 'Gargaaraa Leenjisaa' },
  'Goalkeeping Coach': { en: 'Goalkeeping Coach', am: 'የግብ ጠባቂዎች አሰልጣኝ', om: 'Leenjisaa Eegdota Galchii' },
  'Chief Medical Officer & Physiotherapist': { en: 'Chief Medical Officer & Physiotherapist', am: 'ዋና የህክምና ባለሙያና ፊዚዮቴራፒስት', om: 'Ogeessa Fayyaa fi Fiiziyooteraapistii' },
  'Academy Director & Youth Scout': { en: 'Academy Director & Youth Scout', am: 'የአካዳሚ ዳይሬክተር እና የታዳጊዎች መልማይ', om: 'Daayrektara Akaadaamii' },
};

export const getLocalizedRole = (role: string, lang: Language = 'en'): string => {
  return roleTranslations[role]?.[lang] || role;
};

export const departmentTranslations: Record<string, Record<Language, string>> = {
  Management: { en: 'Management', am: 'አመራር', om: 'Hoggansa' },
  Coaching: { en: 'Coaching', am: 'አሰልጣኝ ቡድን', om: 'Leenjii' },
  Medical: { en: 'Medical', am: 'ህክምና ክፍል', om: 'Kutaa Fayyaa' },
};

export const getLocalizedDepartment = (dept: string, lang: Language = 'en'): string => {
  return departmentTranslations[dept]?.[lang] || dept;
};

export const venueTranslations: Record<string, Record<Language, string>> = {
  'Halaba Stadium, Halaba Kulito': { en: 'Halaba Stadium, Halaba Kulito', am: 'ሀላባ ስታዲየም፣ ሀላባ ቁሊቶ', om: 'Istaadiyeemii Halabaa, Halaba Qulitoo' },
  'Halaba Stadium': { en: 'Halaba Stadium', am: 'ሀላባ ስታዲየም', om: 'Istaadiyeemii Halabaa' },
  'Wolaita Sodo Stadium, Wolaita Sodo': { en: 'Wolaita Sodo Stadium, Wolaita Sodo', am: 'ወላይታ ሶዶ ስታዲየም፣ ወላይታ ሶዶ', om: 'Istaadiyeemii Walaayittaa Soddoo' },
  'Hawassa University Stadium': { en: 'Hawassa University Stadium', am: 'ሀዋሳ ዩኒቨርሲቲ ስታዲየም', om: 'Istaadiyeemii Yuunivarsiitii Hawaasaa' },
  'Adama Stadium': { en: 'Adama Stadium', am: 'አዳማ ስታዲየም', om: 'Istaadiyeemii Adaamaa' },
  'Adama ASTU Stadium': { en: 'Adama ASTU Stadium', am: 'አዳማ አስቱ ስታዲየም', om: 'Istaadiyeemii ASTU Adaamaa' },
  'Abebe Bikila Stadium, Addis Ababa': { en: 'Abebe Bikila Stadium, Addis Ababa', am: 'አበበ ቢቂላ ስታዲየም፣ አዲስ አበባ', om: 'Istaadiyeemii Abbabaa Biqilaa, Finfinnee' },
};

export const getLocalizedVenue = (venue: string, lang: Language = 'en'): string => {
  if (venueTranslations[venue]?.[lang]) return venueTranslations[venue][lang];
  for (const [key, val] of Object.entries(venueTranslations)) {
    if (venue.includes(key)) return val[lang];
  }
  return venue;
};

export const roundTranslations: Record<string, Record<Language, string>> = {
  'Round 1': { en: 'Round 1', am: 'ሳምንት 1', om: 'Marsaa 1' },
  'Round 2': { en: 'Round 2', am: 'ሳምንት 2', om: 'Marsaa 2' },
  'Round 3': { en: 'Round 3', am: 'ሳምንት 3', om: 'Marsaa 3' },
  'Round 4': { en: 'Round 4', am: 'ሳምንት 4', om: 'Marsaa 4' },
  'Round 5': { en: 'Round 5', am: 'ሳምንት 5', om: 'Marsaa 5' },
};

export const getLocalizedRound = (round?: string, lang: Language = 'en'): string => {
  if (!round) return '';
  if (roundTranslations[round]?.[lang]) return roundTranslations[round][lang];
  const num = round.replace(/[^\d]/g, '');
  if (num) {
    if (lang === 'am') return `ሳምንት ${num}`;
    if (lang === 'om') return `Marsaa ${num}`;
  }
  return round;
};

export const competitionTranslations: Record<string, Record<Language, string>> = {
  ETHIOPIAN_PREMIER_LEAGUE: { en: 'Ethiopian Premier League', am: 'የኢትዮጵያ ፕሪሚየር ሊግ', om: 'Liigii Piriimeeraa Itoophiyaa' },
  'Ethiopian Premier League': { en: 'Ethiopian Premier League', am: 'የኢትዮጵያ ፕሪሚየር ሊግ', om: 'Liigii Piriimeeraa Itoophiyaa' },
  ETHIOPIAN_CUP: { en: 'Ethiopian Cup', am: 'የኢትዮጵያ ዋንጫ', om: 'Waancaa Itoophiyaa' },
  'Ethiopian Cup': { en: 'Ethiopian Cup', am: 'የኢትዮጵያ ዋንጫ', om: 'Waancaa Itoophiyaa' },
  CAF_CONFEDERATION_CUP: { en: 'CAF Confederation Cup', am: 'የካፍ ኮንፌዴሬሽን ዋንጫ', om: 'Waancaa Konfedereeshinii CAF' },
};

export const getLocalizedCompetition = (comp: string, lang: Language = 'en'): string => {
  if (competitionTranslations[comp]?.[lang]) return competitionTranslations[comp][lang];
  if (comp.includes('Premier League') || comp.includes('PREMIER_LEAGUE')) {
    if (lang === 'am') return comp.replace(/Ethiopian Premier League/g, 'የኢትዮጵያ ፕሪሚየር ሊግ').replace(/Round/g, 'ሳምንት');
    if (lang === 'om') return comp.replace(/Ethiopian Premier League/g, 'Liigii Piriimeeraa Itoophiyaa').replace(/Round/g, 'Marsaa');
  }
  return comp;
};

export const statusTranslations: Record<string, Record<Language, string>> = {
  FINISHED: { en: 'Full Time', am: 'ሙሉ ጊዜ', om: 'Xumurameera' },
  UPCOMING: { en: 'Upcoming', am: 'የሚመጣ', om: 'Kanneen Dhufan' },
  LIVE: { en: 'Live Now', am: 'በቀጥታ', om: 'Kallattiin' },
  POSTPONED: { en: 'Postponed', am: 'የተላለፈ', om: 'Dabarfameera' },
};

export const getLocalizedStatus = (status: string, lang: Language = 'en'): string => {
  return statusTranslations[status]?.[lang] || status;
};

export const categoryTranslations: Record<string, Record<Language, string>> = {
  ALL: { en: 'All Stories', am: 'ሁሉም ዜናዎች', om: 'Oduu Hunda' },
  CLUB_NEWS: { en: 'Club News', am: 'የክለብ ዜና', om: 'Oduu Kilabii' },
  MATCH_REPORTS: { en: 'Match Reports', am: 'የጨዋታ ሪፖርት', om: 'Gabaasa Taphaa' },
  TRANSFERS: { en: 'Transfers', am: 'ዝውውሮች', om: 'Jijjiirraa' },
  INTERVIEWS: { en: 'Interviews', am: 'ቃለ-ምልልስ', om: 'Gaaf-deebii' },
  ACADEMY: { en: 'Youth Academy', am: 'ታዳጊዎች አካዳሚ', om: 'Akaadaamii Dargaggootaa' },
  COMMUNITY: { en: 'Community & Fans', am: 'ደጋፊዎችና ማህበረሰብ', om: 'Hawaasa & Deeggartoota' },
};

export const getLocalizedCategory = (cat: string, lang: Language = 'en'): string => {
  return categoryTranslations[cat]?.[lang] || cat.replace(/_/g, ' ');
};

export const shopCategoryTranslations: Record<string, Record<Language, string>> = {
  ALL: { en: 'All Merchandise', am: 'ሁሉም እቃዎች', om: 'Meeshaalee Hunda' },
  JERSEY: { en: 'Match Jerseys', am: 'የጨዋታ ማሊያዎች', om: 'Jeersiiwwan Taphaa' },
  KIT: { en: 'Jackets & Training', am: 'ጃኬቶችና የስልጠና ልብሶች', om: 'Uffata Shaakalaa' },
  ACCESSORY: { en: 'Accessories & Scarves', am: 'የደጋፊዎች ሻርፕና ቁሳቁስ', om: 'Meeshaalee Deggartootaa' },
};

export const getLocalizedShopCategory = (cat: string, lang: Language = 'en'): string => {
  return shopCategoryTranslations[cat]?.[lang] || cat;
};

export const getFormBadgeLocalized = (formChar: string, lang: Language = 'en'): string => {
  if (lang === 'am') {
    if (formChar === 'W') return 'አ'; // አሸነፈ
    if (formChar === 'D') return 'አቻ'; // አቻ
    if (formChar === 'L') return 'ተ'; // ተሸነፈ
  }
  if (lang === 'om') {
    if (formChar === 'W') return 'M';
    if (formChar === 'D') return 'Q';
    if (formChar === 'L') return 'A';
  }
  return formChar;
};
