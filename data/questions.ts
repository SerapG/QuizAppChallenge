// Type for a single quiz question
export type Question = {
    question: string;
    options: string[];
    answerIndex: number;
    hint: string;
};

// Type for the entire questions object (category: list of questions)
export type QuestionsData = {
    [key: string]: Question[];
};


const questions: QuestionsData = {
    history: [
        {
            question: 'II. Dünya Savaşı hangi yıl sona erdi?',
            options: ['1939', '1945', '1950', '1941'],
            answerIndex: 1,
            hint: 'Almanya teslim oldu, Japonya’ya atom bombası atıldı'
        },
        {
            question: 'Osmanlı Devleti hangi padişah döneminde yıkıldı?',
            options: ['II. Abdülhamid', 'Vahdettin', 'I. Mahmud', 'Yavuz Sultan Selim'],
            answerIndex: 1,
            hint: 'Son Osmanlı padişahıdır.',
        },
        {
            question: 'Kurtuluş Savaşı hangi yıl başladı?',
            options: ['1918', '1919', '1920', '1923'],
            answerIndex: 1,
            hint: 'Mustafa Kemal’in Samsun’a çıktığı yıl.',
        },
    ],
    movies: [
        {
            question: '"Inception" (Başlangıç) filminin yönetmeni kimdir?',
            options: ['Christopher Nolan', 'Steven Spielberg', 'James Cameron', 'Martin Scorsese'],
            answerIndex: 0,
            hint: 'The Dark Knight üçlemesini de yönetti.',
        },
        {
            question: '"Titanic" filmi hangi yıl vizyona girdi?',
            options: ['1995', '1997', '2000', '1999'],
            answerIndex: 1,
            hint: 'James Cameron’un büyük bütçeli filmi.',
        },
        {
            question: 'Oscar Ödülleri hangi ülke tarafından verilir?',
            options: ['İngiltere', 'Fransa', 'ABD', 'Almanya'],
            answerIndex: 2,
            hint: 'Hollywood’un merkezi.',
        },
    ],
    general: [
        {
            question: 'Kanada’nın başkenti neresidir?',
            options: ['Toronto', 'Vancouver', 'Ottawa', 'Montreal'],
            answerIndex: 2,
            hint: 'O harfiyle başlar.',
        },
        {
            question: 'İnsan vücudundaki en büyük organ hangisidir?',
            options: ['Akciğer', 'Karaciğer', 'Deri', 'Beyin'],
            answerIndex: 2,
            hint: 'Bizi dış etkenlerden korur.',
        },
        {
            question: 'Güneş sistemi içerisindeki en büyük gezegen hangisidir?',
            options: ['Mars', 'Jüpiter', 'Satürn', 'Dünya'],
            answerIndex: 1,
            hint: 'Gaz devi olarak bilinir.',
        },
    ],
    music: [
        {
            question: '"Popun Kralı" olarak bilinen sanatçı kimdir?',
            options: ['Elvis Presley', 'Tarkan', 'Michael Jackson', 'Barış Manço'],
            answerIndex: 2,
            hint: '"Thriller" albümünü çıkarmıştır.',
        },
        {
            question: 'Türkçe rock müziğin öncülerinden biri kimdir?',
            options: ['Cem Karaca', 'Sezen Aksu', 'Bergen', 'İbrahim Tatlıses'],
            answerIndex: 0,
            hint: '"Resimdeki Gözyaşları" şarkısıyla tanınır.',
        },
        {
            question: 'Nota sisteminde "Do" notasından sonra hangi nota gelir?',
            options: ['Mi', 'Re', 'Fa', 'La'],
            answerIndex: 1,
            hint: 'İkinci sıradaki notadır.',
        },
    ],
};

export default questions;