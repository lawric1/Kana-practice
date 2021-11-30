var romajiToHiragana = {
    'nn': 'ん', 
    'mb': 'んb',
    'mm': 'んm',
    'mp': 'んp',
    'bb': 'っb',
    'cc': 'っc',
    'dd': 'っd',
    'ff': 'っf',
    'gg': 'っg',
    'hh': 'っh',
    'jj': 'っj',
    'kk': 'っk',
    'll': 'っl',
    'pp': 'っp',
    'qq': 'っq',
    'rr': 'っr',
    'ss': 'っs',
    'tt': 'っt',
    'vv': 'っv',
    'ww': 'っw',
    'xx': 'っx',
    'yy': 'っy',
    'zz': 'っz',
    'ltsu': 'っ',
    'xtsu': 'っ',
    'hwyu': 'ふゅ',
    'vya': 'ゔゃ',
    'vyi': 'ゔぃ',
    'vyu': 'ゔゅ',
    'vye': 'ゔぇ',
    'vyo': 'ゔょ',
    'kya': 'きゃ',
    'kyi': 'きぃ',
    'kyu': 'きゅ',
    'kye': 'きぇ',
    'kyo': 'きょ',
    'kwa': 'くぁ',
    'kwi': 'くぃ',
    'kwu': 'くぅ',
    'kwe': 'くぇ',
    'kwo': 'くぉ',
    'gya': 'ぎゃ',
    'gyi': 'ぎぃ',
    'gyu': 'ぎゅ',
    'gye': 'ぎぇ',
    'gyo': 'ぎょ',
    'gwa': 'ぐぁ',
    'gwi': 'ぐぃ',
    'gwu': 'ぐぅ',
    'gwe': 'ぐぇ',
    'gwo': 'ぐぉ',
    'sya': 'しゃ',
    'syi': 'しぃ',
    'syu': 'しゅ',
    'sye': 'しぇ',
    'syo': 'しょ',
    'sha': 'しゃ',
    'shi': 'し',
    'shu': 'しゅ',
    'she': 'しぇ',
    'sho': 'しょ',
    'jya': 'じゃ',
    'jyi': 'じぃ',
    'jyu': 'じゅ',
    'jye': 'じぇ',
    'jyo': 'じょ',
    'zya': 'じゃ',
    'zyi': 'じぃ',
    'zyu': 'じゅ',
    'zye': 'じぇ',
    'zyo': 'じょ',
    'tsa': 'つぁ',
    'tsi': 'つぃ',
    'tsu': 'つ',
    'tse': 'つぇ',
    'tso': 'つぉ',
    'tya': 'ちゃ',
    'tyi': 'ちぃ',
    'tyu': 'ちゅ',
    'tye': 'ちぇ',
    'tyo': 'ちょ',
    'tha': 'てゃ',
    'thi': 'てぃ',
    'thu': 'てゅ',
    'the': 'てぇ',
    'tho': 'てょ',
    'cya': 'ちゃ',
    'cyi': 'ちぃ',
    'cyu': 'ちゅ',
    'cye': 'ちぇ',
    'cyo': 'ちょ',
    'cha': 'ちゃ',
    'chi': 'ち',
    'chu': 'ちゅ',
    'che': 'ちぇ',
    'cho': 'ちょ',
    'twa': 'とぁ',
    'twi': 'とぃ',
    'twu': 'とぅ',
    'twe': 'とぇ',
    'two': 'とぉ',
    'dya': 'ぢゃ',
    'dyi': 'ぢぃ',
    'dyu': 'ぢゅ',
    'dye': 'ぢぇ',
    'dyo': 'ぢょ',
    'dha': 'でゃ',
    'dhi': 'でぃ',
    'dhu': 'でゅ',
    'dhe': 'でぇ',
    'dho': 'でょ',
    'nya': 'にゃ',
    'nyi': 'にぃ',
    'nyu': 'にゅ',
    'nye': 'にぇ',
    'nyo': 'にょ',
    'hya': 'ひゃ',
    'hyi': 'ひぃ',
    'hyu': 'ひゅ',
    'hye': 'ひぇ',
    'hyo': 'ひょ',
    'hwa': 'ふぁ',
    'hwi': 'ふぃ',
    'hwe': 'ふぇ',
    'hwo': 'ふぉ',
    'fya': 'ふゃ',
    'fyu': 'ふゅ',
    'fyo': 'ふょ',
    'bya': 'びゃ',
    'byi': 'びぃ',
    'byu': 'びゅ',
    'bye': 'びぇ',
    'byo': 'びょ',
    'pya': 'ぴゃ',
    'pyi': 'ぴぃ',
    'pyu': 'ぴゅ',
    'pye': 'ぴぇ',
    'pyo': 'ぴょ',
    'mya': 'みゃ',
    'myi': 'みぃ',
    'myu': 'みゅ',
    'mye': 'みぇ',
    'myo': 'みょ',
    'rya': 'りゃ',
    'ryi': 'りぃ',
    'ryu': 'りゅ',
    'rye': 'りぇ',
    'ryo': 'りょ',
    'wha': 'うぁ',
    'whi': 'うぃ',
    'whu': 'う',
    'whe': 'うぇ',
    'who': 'うぉ',
    'ltu': 'っ',
    'xtu': 'っ',
    'lya': 'ゃ',
    'lyi': 'ぃ',
    'lyu': 'ゅ',
    'lye': 'ぇ',
    'lyo': 'ょ',
    'xya': 'ゃ',
    'xyi': 'ぃ',
    'xyu': 'ゅ',
    'xye': 'ぇ',
    'xyo': 'ょ',
    'lwa': 'ゎ',
    'xwa': 'ゎ',
    'ka': 'か',
    'ki': 'き',
    'ku': 'く',
    'ke': 'け',
    'ko': 'こ',
    'sa': 'さ',
    'si': 'し',
    'su': 'す',
    'se': 'せ',
    'so': 'そ',
    'ca': 'か',
    'ci': 'し',
    'cu': 'く',
    'ce': 'せ',
    'co': 'こ',
    'ta': 'た',
    'ti': 'ち',
    'tu': 'つ',
    'te': 'て',
    'to': 'と',
    'na': 'な',
    'ni': 'に',
    'nu': 'ぬ',
    'ne': 'ね',
    'no': 'の',
    'ha': 'は',
    'hi': 'ひ',
    'hu': 'ふ',
    'he': 'へ',
    'ho': 'ほ',
    'ma': 'ま',
    'mi': 'み',
    'mu': 'む',
    'me': 'め',
    'mo': 'も',
    'ya': 'や',
    'yu': 'ゆ',
    'yo': 'よ',
    'ra': 'ら',
    'ri': 'り',
    'ru': 'る',
    're': 'れ',
    'ro': 'ろ',
    'wa': 'わ',
    'wi': 'うぃ',
    'wu': 'う',
    'we': 'うぇ',
    'wo': 'を',
    'qa': 'くぁ',
    'qi': 'くぃ',
    'qu': 'く',
    'qe': 'くぇ',
    'qo': 'くぉ',
    'fa': 'ふぁ',
    'fi': 'ふぃ',
    'fu': 'ふ',
    'fe': 'ふぇ',
    'fo': 'ふぉ',
    'va': 'ゔぁ',
    'vi': 'ゔぃ',
    'vu': 'ゔ',
    've': 'ゔぇ',
    'vo': 'ゔぉ',
    'ga': 'が',
    'gi': 'ぎ',
    'gu': 'ぐ',
    'ge': 'げ',
    'go': 'ご',
    'za': 'ざ',
    'zi': 'じ',
    'zu': 'ず',
    'ze': 'ぜ',
    'zo': 'ぞ',
    'ja': 'じゃ',
    'ji': 'じ',
    'ju': 'じゅ',
    'je': 'じぇ',
    'jo': 'じょ',
    'da': 'だ',
    'di': 'ぢ',
    'du': 'づ',
    'de': 'で',
    'do': 'ど',
    'ba': 'ば',
    'bi': 'び',
    'bu': 'ぶ',
    'be': 'べ',
    'bo': 'ぼ',
    'pa': 'ぱ',
    'pi': 'ぴ',
    'pu': 'ぷ',
    'pe': 'ぺ',
    'po': 'ぽ',
    'la': 'ぁ',
    'li': 'ぃ',
    'lu': 'ぅ',
    'le': 'ぇ',
    'lo': 'ぉ',
    'xa': 'ぁ',
    'xi': 'ぃ',
    'xu': 'ぅ',
    'xe': 'ぇ',
    'xo': 'ぉ',
    'a': 'あ',
    'i': 'い',
    'u': 'う',
    'e': 'え',
    'o': 'お',
    'n': 'ん',
    '0': '０',
    '1': '１',
    '2': '２',
    '3': '３',
    '4': '４',
    '5': '５',
    '6': '６',
    '7': '７',
    '8': '８',
    '9': '９',
    '-': 'ー',
    ',': '、',
    'あ': 'ア',
    'い': 'イ',
    'う': 'ウ',
    'え': 'エ',
    'お': 'オ',
    'か': 'カ',
    'き': 'キ',
    'く': 'ク',
    'け': 'ケ',
    'こ': 'コ',
    'さ': 'サ',
    'し': 'シ',
    'す': 'ス',
    'せ': 'セ',
    'そ': 'ソ',
    'た': 'タ',
    'ち': 'チ',
    'つ': 'ツ',
    'て': 'テ',
    'と': 'ト',
    'な': 'ナ',
    'に': 'ニ',
    'ぬ': 'ヌ',
    'ね': 'ネ',
    'の': 'ノ',
    'は': 'ハ',
    'ひ': 'ヒ',
    'ふ': 'フ',
    'へ': 'ヘ',
    'ほ': 'ホ',
    'ま': 'マ',
    'み': 'ミ',
    'む': 'ム',
    'め': 'メ',
    'も': 'モ',
    'や': 'ヤ',
    'ゆ': 'ユ',
    'よ': 'ヨ',
    'ら': 'ラ',
    'り': 'リ',
    'る': 'ル',
    'れ': 'レ',
    'ろ': 'ロ',
    'わ': 'ワ',
    'を': 'ヲ',
    'ん': 'ン',
    'ゔ': 'ヴ',
    'が': 'ガ',
    'ぎ': 'ギ',
    'ぐ': 'グ',
    'げ': 'ゲ',
    'ご': 'ゴ',
    'ざ': 'ザ',
    'じ': 'ジ',
    'ず': 'ズ',
    'ぜ': 'ゼ',
    'ぞ': 'ゾ',
    'だ': 'ダ',
    'ぢ': 'ヂ',
    'づ': 'ヅ',
    'で': 'デ',
    'ど': 'ド',
    'ば': 'バ',
    'び': 'ビ',
    'ぶ': 'ブ',
    'べ': 'ベ',
    'ぼ': 'ボ',
    'ぱ': 'パ',
    'ぴ': 'ピ',
    'ぷ': 'プ',
    'ぺ': 'ペ',
    'ぽ': 'ポ',
    'ぁ': 'ァ',
    'ぃ': 'ィ',
    'ぅ': 'ゥ',
    'ぇ': 'ェ',
    'ぉ': 'ォ',
    'ゃ': 'ャ',
    'ゅ': 'ュ',
    'ょ': 'ョ',
    'ゎ': 'ヮ',
    'っ': 'ッ'
};

var hiraganaAlphabet = [
    'あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ', 'が', 'ぎ', 'ぐ', 'げ', 'ご', 'さ', 'し', 'す', 'せ', 'そ', 
    'ざ', 'じ', 'ず', 'ぜ', 'ぞ', 'た', 'ち', 'つ', 'て', 'と', 'だ', 'ぢ', 'づ', 'で', 'ど', 'な', 'に', 'ぬ', 'ね', 'の', 
    'は', 'ひ', 'ふ', 'へ', 'ほ', 'ば', 'び', 'ぶ', 'べ', 'ぼ', 'ぱ', 'ぴ', 'ぷ', 'ぺ', 'ぽ', 'ま', 'み', 'む', 'め', 'も', 
    'や', 'ゆ', 'よ', 'ら', 'り', 'る', 'れ', 'ろ', 'わ', 'を', 'ん'
];

var katakanaAlphabet = [
    'ア', 'イ',	'ウ', 'エ', 'オ', 'カ',	'キ', 'ク', 'ケ', 'コ', 'ガ', 'ギ', 'グ', 'ゲ', 'ゴ', 'サ',	'シ', 'ス', 'セ', 'ソ', 
    'ザ', 'ジ', 'ズ', 'ゼ', 'ゾ', 'タ',	'チ', 'ツ', 'テ', 'ト', 'ダ', 'ヂ', 'ヅ', 'デ', 'ド', 'ナ',	'ニ', 'ヌ', 'ネ', 'ノ', 
    'ハ', 'ヒ', 'フ', 'ヘ', 'ホ', 'バ',	'ビ', 'ブ', 'ベ', 'ボ', 'パ', 'ピ', 'プ', 'ペ', 'ポ', 'マ',	'ミ', 'ム', 'メ', 'モ', 
    'ヤ', 'ユ', 'ヨ', 'ラ',	'リ', 'ル', 'レ', 'ロ', 'ワ', 'ヲ', 'ン' 	
]