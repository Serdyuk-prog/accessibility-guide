import { PrincipleCard } from "@/entities/PrincipleCard/PrincipleCard";

const ContentMultimediaCard = () => {
  return (
    <>
      <p>
        Важно адаптировать контент для пользователей с нарушениями слуха или
        зрения.
      </p>
      <ul>
        <li>Субтитры для видео.</li>
        <li>Аудиоописание для визуального контента.</li>
        <li>Транскрипты для аудио.</li>
      </ul>
    </>
  );
};

export const Card2 = () => {
  return (
    <PrincipleCard
      header="Адаптация мультимедиа"
      icon="popcorn"
      content={<ContentMultimediaCard />}
      linkAddress="/home"
      buttonText="Практический пример"
    />
  );
};
