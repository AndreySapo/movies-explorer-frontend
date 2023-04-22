import './AboutProject.css'

// ! компонент с описанием дипломного проекта
function AboutProject() {
  return (
    <section className="AboutProject" id='AboutProject'>
      <h3 className="AboutProject__title block-header">О проекте</h3>
      <ul className="AboutProject__list-text">
        <li>
          <h3 className="AboutProject__list-text-el-header">Дипломный проект включал 5 этапов</h3>
          <p className="AboutProject__list-text-el-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </li>
        <li>
          <h3 className="AboutProject__list-text-el-header">На выполнение диплома ушло 5 недель</h3>
          <p className="AboutProject__list-text-el-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </li>
      </ul>
      <ul className="AboutProject__list-graph">
        <li>
          <p className="AboutProject__list-graph-header AboutProject__list-graph-header_color-fill">1 неделя</p>
        </li>

        <li>
          <p className="AboutProject__list-graph-header AboutProject__list-graph-header_color-empty">4 недели</p>
        </li>

        <li>
          <p className="AboutProject__list-graph-text">Back-end</p>
        </li>

        <li>
          <p className="AboutProject__list-graph-text">Front-end</p>
        </li>
      </ul>
    </section>
  );
}

export default AboutProject