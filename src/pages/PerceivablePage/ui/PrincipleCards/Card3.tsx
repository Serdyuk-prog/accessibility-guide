import { PrincipleCard } from '@/entities/PrincipleCard/PrincipleCard';

export const Card3 = () => {
  return (
    <PrincipleCard
      header="Контраст и читаемость"
      icon="a-button-blood-type"
      content={
        'Важно соблюдать требования по минимальному соотношению контраста текста и фона: 4.5:1. Проверить контраст довольно легко - нужно воспользоваться инструментами проверки. '
      }
      linkAddress="/home"
      buttonText="Популярные инструменты"
    />
  );
};
