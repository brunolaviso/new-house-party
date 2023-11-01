import { useEffect, useState } from "react";
import { Card, CardWrapper, CountdownWrapper } from "./styles";

export function Countdown() {
  const targetDate = new Date("2023-12-02T12:00:00");
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState<number>(0);

  const interval = setInterval(() => {
    const currentDate = new Date();
    const difference = targetDate.getTime() - currentDate.getTime();
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    setDays(days);
    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);
  }, 1000);

  useEffect(() => {
    return () => clearInterval(interval);
  }, [interval]);

  return (
    <CountdownWrapper>
      <h2>Contagem Regressiva</h2>
      <CardWrapper>
        <Card>
          <strong>{days}</strong>
          <span>Dias</span>
        </Card>
        <Card>
          <strong>{hours}</strong>
          <span>Horas</span>
        </Card>
        <Card>
          <strong>{minutes}</strong>
          <span>Minutos</span>
        </Card>
        <Card>
          <strong>{seconds}</strong>
          <span>Segundos</span>
        </Card>
      </CardWrapper>
    </CountdownWrapper>
  );
}