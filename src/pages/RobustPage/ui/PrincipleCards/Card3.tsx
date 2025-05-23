import { PrincipleCard } from '@/entities/PrincipleCard/PrincipleCard';
import DialogModal from '@/shared/modals/DialogModal/DialogModal';
import { CodeBlock } from '@/shared/ui/CodeBlock/CodeBlock';
import { useRef } from 'react';
import { FaGear } from 'react-icons/fa6';

const CardModal = () => {
  return (
    <div>
      <ol>
        <li>
          <b>{'Стандартные решения > Кастомные хаки'}</b>
          <ul>
            <li>
              Избегайте:
              <CodeBlock>
                {'/* Хак для IE */'}
                {'*zoom: 1;'}
              </CodeBlock>
            </li>
            <li>
              Используйте:
              <CodeBlock>
                {'/* Современный стандарт */'}
                {'display: flow-root;'}
              </CodeBlock>
            </li>
          </ul>
          <br />
        </li>
        <li>
          <b>Отказ от устаревающих технологий</b>
          <p>Замените:</p>
          <ul>
            <li>
              <b>Flash</b> {'-> HTML5 Canvas/WebGL'}
            </li>
            <li>
              <b>Silverlight</b> {'-> Web Components'}
            </li>
            <li>
              <b>jQuery</b> {'-> нативный JavaScript'}
            </li>
          </ul>
          <br />
        </li>
        <li>
          <b>Прогрессивное улучшение</b>
          <p>Стратегия:</p>
          <CodeBlock>
            {'<!-- Базовая версия -->'} <br />
            {'<form method="post">'} <br />
            &nbsp;&nbsp;{'<input type="text" name="search">'} <br />
            {'</form>'} <br />
            <br />
            {'<!-- Улучшение для современных браузеров -->'} <br />
            {'<script>'} <br />
            &nbsp;&nbsp;{"if ('fetch' in window) {"} <br />
            &nbsp;&nbsp;&nbsp;&nbsp;
            {"form.addEventListener('submit', async (e) => {"} <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'e.preventDefault();'} <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'// AJAX-запрос'} <br />
            &nbsp;&nbsp;&nbsp;&nbsp;{'});'} <br />
            &nbsp;&nbsp;{'}'} <br />
            {'</script>'} <br />
          </CodeBlock>
        </li>
      </ol>
    </div>
  );
};

const CardContent = () => {
  return (
    <>
      <p>Принципы будущей совместимости:</p>
      <ul>
        <li>Использование стандартных решений вместо кастомных хаков</li>
        <li>Отказ от устаревающих технологий (Flash, Silverlight)</li>
        <li>Прогрессивное улучшение вместо graceful degradation</li>
      </ul>
    </>
  );
};
export const Card3 = () => {
  const modalRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <PrincipleCard
        header="Устойчивость к изменениям"
        icon="gear"
        iconElement={<FaGear size={50} color="#EE8EAC" />} 
        content={<CardContent />}
        buttonText="Принципы будущей совместимости"
        onButtonClick={() => modalRef.current?.showModal()}
      />
      <DialogModal
        ref={modalRef}
        header="Что проверять?"
        content={<CardModal />}
        buttonText="Хорошо"
      />
    </>
  );
};
