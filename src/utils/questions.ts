export interface Answer {
  id: number;
  text: string;
}

export interface Question {
  id: number;
  title: string;
  answers: Answer[];
}

export const QUIZ_QUESTIONS: Question[] = [
  {
    id: 0,
    title: "Сколько вам лет?",
    answers: [
      {
        id: 0,
        text: "Нужны средства для ребёнка младше 10 лет",
      },
      {
        id: 1,
        text: "Мне меньше 25 лет",
      },
      {
        id: 2,
        text: "От 25 до 35 лет",
      },
      {
        id: 3,
        text: "От 35 до 45 лет",
      },
      {
        id: 4,
        text: "Мне больше 45 лет",
      },
    ],
  },
  {
    id: 1,
    title: "Какой у вас тип кожи?",
    answers: [
      {
        id: 0,
        text: "Сухая",
      },
      {
        id: 1,
        text: "Нормальная",
      },
      {
        id: 2,
        text: "Комбинированная",
      },
      {
        id: 3,
        text: "Жирная",
      },
    ],
  },
  {
    id: 2,
    title: "Беспокоят ли воспаления на лице?",
    answers: [
      {
        id: 0,
        text: "Да",
      },
      {
        id: 1,
        text: "Нет",
      },
      {
        id: 2,
        text: "Иногда",
      },
    ],
  },
];
