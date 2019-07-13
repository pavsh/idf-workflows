export default {
  title: 'קביעת תור למרפאה חיצונית',
  fileName: 'torMirpaaHitzunit',
  description: 'איך קובעים תור למרפאת קבע או רופא מומחה',
  steps: [
    {
      title: 'אתר זימון תורים',
      description:
        'נכנסים באזרחי או ברשת הסודית, בוחרים את האיזור/מרפאה, את סוג הטיפול הרצוי ושאר הפרטים',
      isBottleneck: false,
    },
    {
      title: 'מוקד זימון תורים',
      description: 'מתקשרים לזימון תורים ומבקשים מהם לקבוע לנו תור',
      isBottleneck: false,
    },
    {
      title: 'זימון תורים באסמס',
      description:
        'שולחים אסמס לזימון תורים, עם הפרטים שלנו ושל התור שאנחנו רוצים, הם עונים עם תאריך שנקבע או עם הצעה לתור דומה. יש פחות חופש בבחירת התור אבל אפשר לשלוח אסמס בלילה ולקבל מענה בבוקר',
      isBottleneck: false,
    },
  ],
};
