import { CodeBlock } from '@/shared/ui/CodeBlock/CodeBlock';

export const ContentComparisonCard1Error = () => {
  return (
    <>
      <CodeBlock>
        {'<!-- Устаревший подход -->'}
        <br />
        {'<font color="red">Важное сообщение</font>'}
        <br />
        {'<table border="1" cellpadding="5">'}
        <br />
        &nbsp;&nbsp;{'<tr>'}
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;{'<td>Контент</td>'}
        <br />
        &nbsp;&nbsp;{'</tr>'}
        <br />
        {'</table>'}
        <br />
        <br />
        {'<!-- Устаревший JavaScript -->'}
        <br />
        {'<script language="JavaScript"'}
        <br />
        &nbsp;&nbsp;{'document.write("Привет, мир!");'}
        <br />
        {'</script>'}
      </CodeBlock>
      <br />
      <p>
        Проблемы:
        <ol>
          <li>
            Использование презентационных тегов ({'<font>'}, атрибуты border)
          </li>
          <li>Табличная вёрстка для не-табличных данных</li>
          <li>Устаревший синтаксис JavaScript</li>
        </ol>
      </p>
    </>
  );
};

export const ContentComparisonCard1Success = () => {
  return (
    <>
      <CodeBlock type="success">
        {'<!-- Современный подход -->'}
        <br />
        {'<p class="error-message">Важное сообщение</p'}
        <br />
        {'<div class="content-wrapper">'}
        <br />
        &nbsp;&nbsp;{'<p>Контент</p>'}
        <br />
        {'</div>'}
        <br />
        <br />
        {'<!-- CSS вместо HTML-атрибутов -->'}
        <br />
        {'<style>'}
        <br />
        &nbsp;&nbsp;{'.error-message { color: red; }'}
        <br />
        &nbsp;&nbsp;{'.content-wrapper { border: 1px solid; padding: 5px; }'}
        <br />
        {'</style>'}
        <br />
        <br />
        {'<!-- Современный JavaScript -->'}
        <br />
        {'<script type="module">'}
        <br />
        &nbsp;&nbsp;{'console.log("Привет, мир!");'}
        <br />
        {'</script>'}
      </CodeBlock>
      <br />
      <p>
        Рекомендации:
        <ol>
          <li>Заменить презентационные теги на семантические + CSS</li>
          <li>Перевести табличную вёрстку на Flexbox/Grid</li>
          <li>
            Обновить JavaScript-код
            <ul>
              <li>Заменить var на const/let</li>
              <li>Убрать устаревшие методы (document.write)</li>
              <li>Использовать современные API</li>
            </ul>
          </li>
        </ol>
      </p>
    </>
  );
};

export const ContentComparisonCard2Error = () => {
  return (
    <>
      <CodeBlock>
        {'// Прямое использование экспериментального API'}
        <br />
        {'if (window.PaymentRequest) {'}
        <br />
        &nbsp;&nbsp;{'// Код только для современных браузеров'}
        <br />
        {'} else {'}
        <br />
        &nbsp;&nbsp;{'// Нет fallback-реализации'}
        <br />
        {'}'}
      </CodeBlock>
      <br />
      <p>
        Проблемы:
        <ol>
          <li>Нет обработки случаев, когда API недоступно</li>
          <li>Резкое падение функциональности в старых браузерах</li>
          <li>Возможные ошибки в неподдерживаемых средах</li>
        </ol>
      </p>
    </>
  );
};

export const ContentComparisonCard2Success = () => {
  return (
    <>
      <CodeBlock type="success">
        {'// Прогрессивное улучшение с fallback'}
        <br />
        {'function processPayment() {'}
        <br />
        &nbsp;&nbsp;{'if (window.PaymentRequest) {'}
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;{'// Современная реализация'}
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;{'new PaymentRequest(...).show();'}
        <br />
        &nbsp;&nbsp;{'} else {'}
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;{'// Альтернативный вариант'}
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;{'showTraditionalForm();'}
        <br />
        &nbsp;&nbsp;{'}'}
        <br />
        <br />
        {'// Универсальная реализация'}
        <br />
        {'function showTraditionalForm() {'}
        <br />
        &nbsp;&nbsp;{'// Базовая форма оплаты, работающая везде'}
        <br />
        &nbsp;&nbsp;{'document.getElementById("fallback-form").style.display = "block";'}
        <br />
        {'}'}
      </CodeBlock>
      <br />
      <p>
        Рекомендации:
        <ol>
          <li>
            Всегда проверять поддержку API
            <CodeBlock>
              {'if (window.PaymentRequest) {'}
              <br />
              &nbsp;&nbsp;{'// Современная реализация'}
              <br />
              {'} else {'}
              <br />
              &nbsp;&nbsp;{'// Полифил или альтернатива'}
              <br />
              {'}'}
            </CodeBlock>
          </li>
          <li>Использовать полифилы для критически важных функций</li>
          <li>
            Реализовывать graceful degradation:
            <ul>
              <li>Сначала базовая функциональность</li>
              <li>Затем улучшения для современных браузеров</li>
            </ul>
          </li>
        </ol>
      </p>
    </>
  );
};
