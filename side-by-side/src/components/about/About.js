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
        <h1>מיזם החממה.</h1>
        <p>
          לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית להאמית קרהשק סכעיט
          דז מא, מנכם למטכין נשואי מנורךגולר מונפרר סוברט לורם שבצק יהול, לכנוץ
          בעריר גק ליץ, ושבעגט. קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח.
          עמחליף לורם איפסום דולור סיט אמט, מוסן מנת. להאמית קרהשק סכעיט דז מא,
          מנכם למטכין נשואי מנורך. נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן
          קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון בלרק -
          וענוף לפרומי בלוף קינץ תתיח לרעח. לת צשחמי הועניב היושבב שערש שמחויט -
          שלושע ותלברו חשלו שעותלשך וחאית נובש ערששף. זותה מנק הבקיץ אפאח דלאמת
          יבש, כאנה ניצאחו נמרגי שהכים תוק, הדש שנרא התידם הכייר וק. נולום ארווס
          סאפיאן - פוסיליס קוויס, אקווזמן קוואזי במר מודוף. אודיפו בלאסטיק
          מונופץ קליר, בנפת נפקט למסון בלרק - וענוף הועניב היושבב שערש שמחויט -
          שלושע ותלברו חשלו שעותלשך וחאית נובש ערששף. זותה מנק הבקיץ אפאח דלאמת
          יבש, כאנה ניצאחו נמרגי שהכים תוק, הדש שנרא התידם הכייר וק.
        </p>
      </div>
    </div>
  );
}

export default About;