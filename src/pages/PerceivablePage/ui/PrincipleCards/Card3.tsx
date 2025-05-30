import { PrincipleCard } from '@/entities/PrincipleCard/PrincipleCard';
import BlockModal from '@/shared/modals/BlockModal/BlockModal';
import { TextLink } from '@/shared/ui/TextLink/TextLink';
import { useRef, useState } from 'react';
import { IoIosContrast } from 'react-icons/io';

const PrincipleCardModal = () => {
  return (
    <div>
      <p>
        Среди самых популярных методов проверки уровня контраста для соблюдения
        требований WCAG выделяются
        использование онлайн-инструментов, таких как
        <br />
        <TextLink href="https://webaim.org/resources/contrastchecker/">
          WebAIM's Color Contrast Checker
        </TextLink>{' '}
        и{' '}
        <TextLink href="https://developer.chrome.com/docs/devtools/accessibility/contrast?hl=ru">
          Chrome DevTools
        </TextLink>
        ,
        <br />
        которые позволяют быстро оценить контрастность текста и фона. Согласно
        WCAG, для текста нормального размера (менее 18 пунктов) минимальное
        соотношение контраста должно составлять 4.5:1, а для крупного текста (18
        пунктов и более) — 3:1. Также применяются расширения для браузеров,
        например{' '}
        <TextLink href="https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd">
          Axe
        </TextLink>
        , которые автоматически анализируют веб-страницы на соответствие
        стандартам доступности. Важно учитывать не только числовые значения
        контрастности, но и визуальное восприятие, чтобы обеспечить удобство
        чтения для пользователей с различными нарушениями зрения.
      </p>
    </div>
  );
};
export const Card3 = () => {
  const [showBlockModal, setShowBlockModal] = useState(false);
  const showModalRef = useRef<HTMLButtonElement>(null);

  const toggleBlockModal = () => {
    setShowBlockModal((state) => !state);
    if (showBlockModal) {
      showModalRef.current?.focus();
    }
  };
  return (
    <>
      <PrincipleCard
        header="Контраст и читаемость"
        icon="a-button-blood-type"
        iconElement={<IoIosContrast size={50} />}
        content={
          'Важно соблюдать требования по минимальному соотношению контраста текста и фона: 4.5:1. Проверить контраст довольно легко - нужно воспользоваться инструментами проверки. '
        }
        linkAddress="/home"
        buttonText="Популярные инструменты"
        onButtonClick={toggleBlockModal}
        buttonRef={showModalRef as React.RefObject<HTMLButtonElement>}
      />
      <BlockModal
        header="Инструменты проверки контрастности"
        content={<PrincipleCardModal />}
        buttonText="Хорошо"
        show={showBlockModal}
        onAction={toggleBlockModal}
        onCancel={toggleBlockModal}
      />
    </>
  );
};
