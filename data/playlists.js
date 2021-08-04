const category01 = [
  {
    src: 'jlz.mp3',
    shortDescription: 'M-I_1_FIX 0.01 JLZ',
    descriptions: [
      'FIX 0.01',
      'JLZ',
      'M-I. LT POST-STUDIES',
      'TOQUE N.2 REMIX',
      'VITOR ARAÚJO',
    ],
  },
  {
    src: 'hurtmold.mp3',
    shortDescription: 'M-I_2_FIX 0.02 HURTMOLD',
    descriptions: [
      'FIX 0.02',
      'HURTMOLD',
      'M-I. LT POST-STUDIES',
      'TOQUE N.2 REMIX',
      'VITOR ARAÚJO',
    ],
  },
  {
    src: 'rakta.mp3',
    shortDescription: 'M-I_3_MUT 0.01 RAKTA',
    descriptions: [
      'MUT 0.01',
      'RAKTA',
      'M-I. LT POST-STUDIES',
      'CANTO N.3 REMIX',
      'VITOR ARAÚJO',
    ],
  },
  {
    src: 'alada.mp3',
    shortDescription: 'M-I_4_MUT 0.02 ALADA',
    descriptions: [
      'MUT 0.02',
      'ALADA',
      'M-I. LT POST-STUDIES',
      'CANTO N.3 REMIX',
      'VITOR ARAÚJO',
    ],
  },
  {
    src: 'bellanassif.mp3',
    shortDescription: 'M-I_5_CRD 0.01 BELLA&T.NASSIF',
    descriptions: [
      'CRD 0.01',
      'BELLA + THIAGO NASSIF',
      'M-I. LT POST-STUDIES',
      'CANTO N.1 REMIX',
      'VITOR ARAÚJO',
    ],
  },
  {
    src: 'djdiaki.mp3',
    shortDescription: 'M-I_6_CRD 0.02 DJ DIAKI',
    descriptions: [
      'CRD 0.02',
      'DJ DIAKI',
      'M-I. LT POST-STUDIES',
      'CANTO N.1 REMIX',
      'VITOR ARAÚJO',
    ],
  },
]

const category02 = [
  {
    src: 'test-b-1.mp3',
    shortDescription: 'M2_1_FIX 0.01 JLZ',
  },
  {
    src: 'test-b-2.mp3',
    shortDescription: 'M2_2_FIX 0.02 HURTMOLD',
  },
  {
    src: 'test-b-3.mp3',
    shortDescription: 'M2_3_MUT 0.01 RAKTA',
  },
  {
    src: 'test-b-4.mp3',
    shortDescription: 'M2_4_FIX 0.01 JLZ',
  },
]

const playlists = [
  category01,
  category02,
  [...category01, ...category02],
  category02,
]

export default playlists
