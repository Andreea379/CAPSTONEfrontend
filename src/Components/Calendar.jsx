import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserArticles } from "../redux/actions/newArticle";

const Calendar = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile.profile);
  const profileLoading = useSelector((state) => state.profile.profileLoading);
  const profileError = useSelector((state) => state.profile.profileError);
  console.log(profile);

  const userArticles = useSelector((state) => state.article.userArticles);
  const userArticlesLoading = useSelector(
    (state) => state.profile.userArticlesLoading
  );
  const userArticlesError = useSelector(
    (state) => state.profile.userArticlesError
  );
  console.log(userArticles);

  const profileData = profile[0];
  const articles = profileData?.article || [];
  console.log(articles);
  const publishedDates = articles.map((article) => article.publishedAt);
  console.log(publishedDates);

  const [currentDate, setCurrentDate] = useState(new Date());
  useEffect(() => {
    dispatch(fetchUserArticles());
  }, [dispatch]);

  const isArticlePublishedOnDay = (day) => {
    const dateStr = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day
    ).toDateString();
    return publishedDates.some((publishedDate) => {
      const publishedDateObj = new Date(publishedDate);
      return publishedDateObj.toDateString() === dateStr;
    });
  };

  const getDateColor = (day) => {
    const currentDay = currentDate.getDate();

    if (isArticlePublishedOnDay(day)) {
      return "color-green";
    } else if (day === currentDay) {
      return "color-blue";
    } else {
      return "";
    }
  };
  const generateCalendar = () => {
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();

    const firstDayOfMonth = new Date(year, month, 1);
    const firstDayIndex = firstDayOfMonth.getDay();

    const lastDayOfMonth = new Date(year, month + 1, 0);
    const totalDaysInMonth = lastDayOfMonth.getDate();

    let calendarDays = [];

    for (let i = 0; i < firstDayIndex; i++) {
      calendarDays.push(null);
    }

    for (let day = 1; day <= totalDaysInMonth; day++) {
      calendarDays.push(day);
    }

    return calendarDays;
  };

  const calendarDays = generateCalendar();
  const handleNextMonth = () => {
    setCurrentDate((prevDate) => {
      const newMonth = prevDate.getMonth() + 1;
      return new Date(prevDate.getFullYear(), newMonth);
    });
  };

  const handlePrevMonth = () => {
    setCurrentDate((prevDate) => {
      const newMonth = prevDate.getMonth() - 1;
      return new Date(prevDate.getFullYear(), newMonth);
    });
  };

  if (userArticlesLoading) return <div>Loading profiles...</div>;
  if (userArticlesError) return <div>Error profiles: {userArticlesError}</div>;
  if (profileLoading) return <div>Loading profiles...</div>;
  if (profileError) return <div>Error profiles: {profileError}</div>;
  return (
    <div className="calendar">
      <div className="calendar-header">
        <button onClick={handlePrevMonth}>Prev</button>
        <span>{currentDate.toLocaleString("default", { month: "long" })}</span>
        <span>{currentDate.getFullYear()}</span>
        <button onClick={handleNextMonth}>Next</button>
      </div>
      <div className="calendar-grid">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, index) => (
          <div key={index} className="calendar-day-header">
            {day}
          </div>
        ))}
        {calendarDays.map((day, index) => (
          <div
            key={index}
            className={`date-cell ${day ? getDateColor(day) : ""}`}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Calendar;
