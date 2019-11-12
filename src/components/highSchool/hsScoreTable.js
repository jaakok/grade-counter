const grades = [
  { id: 'L', title: 'L', index: 0},
  { id: 'M', title: 'M', index: 1},
  { id: 'E', title: 'E', index: 2},
  { id: 'C', title: 'C', index: 3},
  { id: 'B', title: 'B', index: 4},
  { id: 'A', title: 'A', index: 5}
]

const math = [
  {
    id: 'mathLong',
    title: 'Pitkä',
    scores: [46, 43, 40, 35, 27, 19]
  },
  {
    id: 'mathShort',
    title: 'Lyhyt',
    scores: [40, 35, 27, 19, 13, 6]
  },
  {
    id: 'null',
    title: 'Ei suoritettu',
    scores: [0, 0, 0, 0, 0, 0]
  }
]

const fin = [
  {
    id: 'fin',
    title: 'Äidinkieli',
    scores: [46, 41, 34, 26, 18, 10],
    grade: null
  }
]

const forLang = [
  {
    id: 'secondLangLong',
    title: 'Toinen kotimainen kieli (Pitkä)',
    scores: [46, 41, 34, 26, 18, 10]
  },
  {
    id: 'secondLangMed',
    title: 'Toinen kotimainen kieli (Keskipitkä)',
    scores: [38, 34, 26, 18, 12, 5]
  },
  {
    id: 'secondLangShort',
    title: 'Toinen kotimainen kieli (Lyhyt)',
    scores: [30, 27, 21, 15, 9, 3]
  },
  {
    id: 'forLangLong',
    title: 'Vieras kieli (Pitkä)',
    scores: [46, 41, 34, 26, 18, 10]
  },
  {
    id: 'forLangShort',
    title: 'Vieras kieli (Lyhyt)',
    scores: [46, 41, 34, 26, 18, 10]
  }
]

const score = [
  {
    id: 'phys',
    title: 'Fysiikka',
    scores: [30, 27, 21, 15, 9, 3]
  },
  {
    id: 'chem',
    title: 'Kemia',
    scores: [30, 27, 21, 15, 9, 3]
  },
  {
    id: 'bio',
    title: 'Biologia',
    scores: [30, 27, 21, 15, 9, 3]
  },
  {
    id: 'geo',
    title: 'Maantiede',
    scores: [30, 27, 21, 15, 9, 3]
  },
  {
    id: 'hed',
    title: 'Terveystieto',
    scores: [30, 27, 21, 15, 9, 3]
  },
  {
    id: 'psych',
    title: 'Psykologia',
    scores: [30, 27, 21, 15, 9, 3]
  },
  {
    id: 'phi',
    title: 'Filosofia',
    scores: [46, 43, 40, 35, 27, 19]
  },
  {
    id: 'his',
    title: 'Historia',
    scores: [30, 27, 21, 15, 9, 3]
  },
  {
    id: 'soc',
    title: 'Yhteiskuntaoppi',
    scores: [30, 27, 21, 15, 9, 3]
  },
  {
    id: 'rel',
    title: 'Uskonto/ET',
    scores: [30, 27, 21, 15, 9, 3]
  },
  {
    id: 'forLang',
    title: 'Vieras kieli(Pitkä/Lyhyt)',
    scores: [30, 27, 21, 15, 9, 3]
  }
]

const totalScores = [
  {
    id: 'mathLong',
    title: 'Pitkä',
    scores: [46, 43, 40, 35, 27, 19]
  },
  {
    id: 'mathShort',
    title: 'Lyhyt',
    scores: [40, 35, 27, 19, 13, 6]
  },
  {
    id: 'null',
    title: 'Ei suoritettu',
    scores: [0]
  },
  {
    id: 'fin',
    title: 'Äidinkieli',
    scores: [46, 41, 34, 26, 18, 10],
    grade: null
  },
  {
    id: 'secondLangLong',
    title: 'Toinen kotimainen kieli (Pitkä)',
    scores: [46, 41, 34, 26, 18, 10]
  },
  {
    id: 'secondLangMed',
    title: 'Toinen kotimainen kieli (Keskipitkä)',
    scores: [38, 34, 26, 18, 12, 5]
  },
  {
    id: 'secondLangShort',
    title: 'Toinen kotimainen kieli (Lyhyt)',
    scores: [30, 27, 21, 15, 9, 3]
  },
  {
    id: 'forLangLong',
    title: 'Vieras kieli (Pitkä)',
    scores: [46, 41, 34, 26, 18, 10]
  },
  {
    id: 'forLangShort',
    title: 'Vieras kieli (Lyhyt)',
    scores: [46, 41, 34, 26, 18, 10]
  },
  {
    id: 'phys',
    title: 'Fysiikka',
    scores: [30, 27, 21, 15, 9, 3]
  },
  {
    id: 'chem',
    title: 'Kemia',
    scores: [30, 27, 21, 15, 9, 3]
  },
  {
    id: 'bio',
    title: 'Biologia',
    scores: [30, 27, 21, 15, 9, 3]
  },
  {
    id: 'geo',
    title: 'Maantiede',
    scores: [30, 27, 21, 15, 9, 3]
  },
  {
    id: 'hed',
    title: 'Terveystieto',
    scores: [30, 27, 21, 15, 9, 3]
  },
  {
    id: 'psych',
    title: 'Psykologia',
    scores: [30, 27, 21, 15, 9, 3]
  },
  {
    id: 'phi',
    title: 'Filosofia',
    scores: [46, 43, 40, 35, 27, 19]
  },
  {
    id: 'his',
    title: 'Historia',
    scores: [30, 27, 21, 15, 9, 3]
  },
  {
    id: 'soc',
    title: 'Yhteiskuntaoppi',
    scores: [30, 27, 21, 15, 9, 3]
  },
  {
    id: 'rel',
    title: 'Uskonto/ET',
    scores: [30, 27, 21, 15, 9, 3]
  },
  {
    id: 'forLang',
    title: 'Vieras kieli(Pitkä/Lyhyt)',
    scores: [30, 27, 21, 15, 9, 3]
  }
]

export {score, totalScores, grades, math, forLang}
