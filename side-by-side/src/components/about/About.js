import React from "react";
import love from "../../assests/love.svg";
import './About.css'

function About() {
  return (
    <div className="about-page">
      <div className="img-side">
        <img src={love} alt="love" className="love" />
      </div>
      <div className="contnt-side">
        <h1>מיזם החממה</h1>
        <p>
        תכנית החממה החלה כרעיון חדשני בזמן התפרצות מגיפת הקורונה,
כאשר העולם השתנה באופן פתאומי, אנשים איבדו את משרותיהם,
ילדים ללא מסגרות חינוך ישבו בבתיהם, וכולנו שמרנו על ריחוק חברתי ומאד לא טבעי.

המשבר הזה, שעד עכשיו אנו מרגשים את השפעותיו הכלכליות, הריגשיות והנפשיות
עיכב משפחות רבות בניסיונם לצמוח להתפתח ולהתקדם לחיים מיטביים ועצמאיים
באופן בו היו רוצות להיות. 

ההבנה הזו התחזקה בכל פעם שנפגשנו עם עובדים סוציאליים, שלוחות הרווחה בערי הארץ,
המוסד לביטוח לאומי והמשפחות עצמן שחיות את שגרת היום יום מיום ליום. 

מה שסייע לפרוייקט לקרום עור וגידים
היה טמון בניסיונה של עמותת כתף לכתף, שלאחר שנים של עשיית חסד,
ליווי משפחות לעצמאות כלכלית ותעסוקתית, ופיתוח מודלים מנצחים של התמודדות עם עוני
איפשרו לרעיון להבשיל לכדי מעשה מציאות - אתם צופים בו כעת.

אם כן, חזוננו הוא לקיים מסגרת תומכת ורכה לכל משפחה בכל צורה,
שמבקשת להטיב את חיים על ידי תוכן איכותי, כלים מהימנים, השראה והטבות כלכליות.
זאת תוך כדי יצירת קהילה חברים היברדית-דיגיטלית, בה משתתפיה תומכים ומקיימים ביניהם
חיבורים, קשרים וסיוע ברוח ״ואהבה לרעך כמוך״.

רוצים לקחת חלק? רוצים להשתתף בתכנית? לתרום את חלקכם?
מוזמנים ליצור קשר באחד מהאפשרויות הבאות:
*מייל *וואצאפ *פייסבוק *אינסטגרםw

        </p>
      </div>
    </div>
  );
}

export default About;
