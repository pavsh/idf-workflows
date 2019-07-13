export default {
  title: 'איך עולים לשמירה - חובה',
  fileName: 'shmirotHova',
  description: 'איזה טפסים להדפיס, מתי צריך להיות איפה?',
  steps: [
    {
      title: 'טופס מק פורק',
      description: 'הדפיסו את הטופס מראש, המפקד שלכם צריך לחתום עליו',
      isBottleneck: true,
    },
    {
      title: 'נגררת הצבות',
      description: 'אפשר למצוא את זה באתר הפרט והיחידה ברשת הסודית',
      isBottleneck: false,
    },
    {
      title: 'פנקס מטווחים',
      description:
        'וודאו מראש שהפנקס שלכם בתוקף- שלא עברה חצי שנה מהתאריך שרשום עליו',
      isBottleneck: false,
    },
    {
      title: 'הוצאת נשק',
      description:
        "בבוקר השמירה יש להוציא נשק, תצטרכו להביא את הטפסים הנ''ל לנשקייה כדי להוציא נשק",
      isBottleneck: true,
    },
    {
      title: 'הרשמה',
      description:
        "בשעה 9:00 אתם צריכים להתייצב בחמ''ל ולהרשם אצל האחראי שמירות. שם יגידו לכם איזה שמירה אתם עושים.",
      isBottleneck: true,
    },
    {
      title: 'עליית משמר',
      description: 'בשעה 10:00 אתם צריכים להתייצב במגורי השומרים לעליית משמר',
      isBottleneck: false,
    },
    {
      title: 'שמירה',
      description:
        'השתדלו להגיע לשמירה קצת לפני הזמן, לא נעים לתת לשומרים לפניכם לחכות, וגם אתם לא הייתם רוצים שיאחרו לכם. אל תשכחו לקחת מים.',
      isBottleneck: false,
    },
  ],
};
