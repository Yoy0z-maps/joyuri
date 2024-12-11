import React, { useState } from "react";
import { schedule } from "../constant/Schedule";

const Calendar = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const todayDate = today.getDate();

  // 이번 달의 첫 번째 날과 마지막 날
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);

  // 첫 번째 날의 요일 (0: 일요일, 1: 월요일, ..., 6: 토요일)
  const startDay = firstDayOfMonth.getDay();

  // 이번 달의 총 일수
  const daysInMonth = lastDayOfMonth.getDate();

  // 달력에 표시할 날짜 배열 생성
  const calendarDays = [];
  for (let i = 0; i < startDay; i++) {
    calendarDays.push(null); // 빈 칸
  }
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(i);
  }

  // 선택된 날짜 상태 관리
  const [selectedDate, setSelectedDate] = useState(todayDate);

  // 이번 달의 일정 날짜 추출
  const scheduleDates = schedule
    .filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate.getFullYear() === year && eventDate.getMonth() === month;
    })
    .map((event) => new Date(event.date).getDate());

  // 오늘 일정 필터링
  const todaySchedule = schedule.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year &&
      eventDate.getMonth() === month &&
      eventDate.getDate() === todayDate
    );
  });

  return (
    <div className="calendar flex w-full h-full gap-[100px]">
      <div className="flex flex-col items-center justify-center">
        <p className="text-[24px] text-navigation font-semibold mb-[30px]">
          DECEMBER
        </p>
        <div className="grid grid-cols-7 gap-[30px]">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="font-medium text-center text-[24px]">
              {day}
            </div>
          ))}
          {calendarDays.map((day, index) => (
            <div
              key={index}
              className={`relative h-11 w-11 flex items-center justify-center font-medium text-[24px] cursor-pointer ${
                day === selectedDate
                  ? "bg-navigation text-white rounded-md transition-all duration-500"
                  : ""
              }`}
              onClick={() => day && setSelectedDate(day)}
            >
              {day}
              {day && scheduleDates.includes(day) && (
                <div className="absolute bottom-1 w-[5px] h-[5px] bg-red-500 rounded-full"></div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 flex flex-col items-start justify-center">
        <div className="flex flex-col items-start justify-center mb-[40px]">
          <p className="text-[24px] font-semibold mb-[10px]">Today Schedule</p>
          {todaySchedule.length > 0 ? (
            todaySchedule.map((event) => (
              <div key={event.id} className="mt-2">
                <p className="text-[16px]">{event.title}</p>
              </div>
            ))
          ) : (
            <p className="text-[16px]">No schedule for today.</p>
          )}
        </div>
        <div className="flex flex-col items-start justify-center">
          <p className="text-[24px] font-semibold mb-[10px]">
            Upcoming Schedule
          </p>
          {schedule.map((event) => (
            <div
              key={event.id}
              className="w-[250px] flex flex-col items-start justify-center bg-gray-100 rounded-md p-[10px] mb-[20px]"
            >
              <p className="text-[18px] font-medium line-clamp-1">
                {event.title}
              </p>
              <p className="text-[14px] font-medium text-gray-500">
                {event.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
