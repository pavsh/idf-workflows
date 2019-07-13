export default {
  title: 'פתיחת משתמש שננעל',
  fileName: 'unlockUser',
  description: 'אם אתם לא מצליחים להיכנס למשתמש שלכם ונראה שהוא נעול',
  steps: [
    {
      title: "הולכים לקב''ם, הם יודעים לפתוח",
      description: 'מבקשים מהם שיפתחו את המשתמש, הם מכירים את הנוהל',
      isBottleneck: true,
    },
    {
      title: "במידה ויש עיכוב עם הקב''ם, לכו למחשוב",
      description:
        'המחשוב היחידתי שלכם יכול להוציא לכם סיסמא זמנית שתוכלו להשתמש בה למרות שהמשתמש שלכם נעול',
      isBottleneck: true,
    },
  ],
};
