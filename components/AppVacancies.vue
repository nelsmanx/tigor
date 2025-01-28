<script setup></script>

<template>
  <section class="vacancies">
    <div class="container">
      <div class="vacancies__headline">
        <h2 class="vacancies__title">Приглашаем Вас к&nbsp;сотрудничеству</h2>
        <p class="vacancies__desc">
          Мы предоставляем квалифицированный персонал для вашего бизнеса на позиции линейного состава: курьеров, сборщиков, кладовщиков и грузчиков. Наши сотрудники готовы обеспечить оперативность, надежность и профессиональный подход к выполнению задач.<br />
          <b>Обратитесь к нам, чтобы укомплектовать вашу команду активными и мотивированными специалистами!</b>
        </p>
      </div>
      <ul class="vacancies__list">
        <li class="vacancies__item vacancies__item--button">
          <button class="vacancies__item-button button-basic" data-bs-toggle="modal" data-bs-target="#modal-callback">Оставить заявку</button>
        </li>
        <li class="vacancies__item">
          <div class="vacancies__item-inner">
            <div class="vacancies__item-icon">
              <img class="vacancies__item-icon-img vacancies__item-icon-img--1" src="/images/vacancies/1.svg" alt="" aria-hidden="true">
            </div>
            <p class="vacancies__item-title">Водители-курьеры</p>
            <p class="vacancies__item-desc">На авто компании, своём автомобиле, пеший и вело</p>
          </div>
        </li>
        <li class="vacancies__item">
          <div class="vacancies__item-inner">
            <div class="vacancies__item-icon">
              <img class="vacancies__item-icon-img vacancies__item-icon-img--2" src="/images/vacancies/2.svg" alt="" aria-hidden="true">
            </div>
            <p class="vacancies__item-title">Сборщики/пикеры</p>
            <p class="vacancies__item-desc">Торговые сети</p>
          </div>
        </li>
        <li class="vacancies__item">
          <div class="vacancies__item-inner">
            <div class="vacancies__item-icon">
              <img class="vacancies__item-icon-img vacancies__item-icon-img--3" src="/images/vacancies/3.svg" alt="" aria-hidden="true">
            </div>
            <p class="vacancies__item-title">Кладовщики, Грузчики</p>
            <p class="vacancies__item-desc">На склады компании</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.vacancies {
  padding: 82px 0 0;
}

.vacancies__headline {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  align-items: center;
  margin-bottom: 50px;
}

.vacancies__title {
  max-width: 500px;
  font-family: var(--secondary-font-family);
  font-size: var(--section-title-fz);
  font-weight: 400;
  color: var(--font-basic);
}

.vacancies__desc {
  font-weight: 400;
  font-size: 22px;
  line-height: 1.54545;
  color: var(--font-basic);
}

.vacancies__list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

.vacancies__item {
  display: flex;
  align-items: center;
  height: 120px;
  padding: 18px 30px;
  border-radius: 30px;
  background-color: #f5f7fa;
}

.vacancies__item--button {
  padding: 18px;
}

.vacancies__item-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 8px;
  font-family: var(--secondary-font-family);
  font-size: 28px;
  font-weight: 400;
  color: #1c1c1c;
  border-radius: 16px;
}

.vacancies__item-inner {
  display: grid;
  grid-template-areas:
    "icon title"
    "icon desc";
  grid-template-columns: auto 1fr;
  align-items: start;
  gap: 5px 23px;
}

.vacancies__item-icon {
  grid-area: icon;
  display: flex;
  justify-content: center;
  align-items: center;
  --scale: 1;
  width: calc(54px * var(--scale));
  height: calc(54px * var(--scale));
  background-color: #fee02e;
  border-radius: 12px;
}

.vacancies__item-icon-img--1 {
  width: calc(35px * var(--scale));
}

.vacancies__item-icon-img--2 {
  width: calc(31px * var(--scale));
}

.vacancies__item-icon-img--3 {
  width: calc(32px * var(--scale));
}

.vacancies__item-title {
  grid-area: title;
  font-size: 22px;
  font-weight: 600;
  color: #0c352c;
}

.vacancies__item-desc {
  grid-area: desc;
  font-size: 20px;
  font-weight: 400;
  color: rgba(12 53 44/ 0.7);
}

@media (max-width: 1799.98px) {
  .vacancies__item {
    height: 110px;
    padding: 15px 25px;
    border-radius: 24px;
  }

  .vacancies__item-title {
    font-size: 20px;
  }

  .vacancies__item-desc {
    font-size: 18px;
  }

  .vacancies__item-inner {
    gap: 5px 15px;
  }

  .vacancies__item-button {
    font-size: 26px;
  }
}

@media (max-width: 1599.98px) {
  .vacancies__list {
    grid-template-columns: repeat(3, 1fr);
  }

  .vacancies__item--button {
    order: 3;
    grid-column: 2/3;
  }
}

@media (max-width: 1399.98px) {
  .vacancies__headline {
    display: block;
    margin-bottom: 45px;
  }

  .vacancies__title {
    max-width: none;
    margin-bottom: 30px;
  }

  .vacancies__list {
    grid-template-columns: repeat(2, 1fr);
  }

  .vacancies__item--button {
    order: 0;
    grid-column: auto;
  }
}

@media (max-width: 1199.98px) {
  .vacancies__item-button {
    font-size: 24px;
  }
}

@media (max-width: 991.98px) {
  .vacancies__desc {
    font-size: 20px;
  }

  .vacancies__list {
    gap: 20px;
  }

  .vacancies__item {
    height: 100px;
  }

  .vacancies__item-inner {
    gap: 2px 12px;
  }

  .vacancies__item-title {
    font-size: 18px;
  }

  .vacancies__item-desc {
    font-size: 16px;
  }

  .vacancies__item-icon {
    --scale: 0.85;
  }

  .vacancies__item-button {
    font-size: 22px;
  }
}

@media (max-width: 767.98px) {
  .vacancies__desc {
    font-size: 18px;
  }

  .vacancies__item {
    height: 80px;
    padding: 10px 12px;
    border-radius: 16px;
  }

  .vacancies__item-icon {
    display: none;
  }

  .vacancies__item-button {
    font-size: 20px;
  }
}

@media (max-width: 575.98px) {
  .vacancies__headline {
    margin-bottom: 30px;
  }

  .vacancies__desc {
    font-size: 16px;
  }

  .vacancies__list {
    grid-template-columns: 100%;
    gap: 15px;
  }

  .vacancies__item {
    height: 70px;
  }

  .vacancies__item-title {
    font-size: 16px;
  }

  .vacancies__item-desc {
    font-size: 14px;
  }

  .vacancies__item-icon {
    display: flex;
    --scale: 0.75;
  }

  .vacancies__item-button {
    font-size: 18px;
  }
}

@media (max-width: 479.98px) {
  .vacancies__item-button {
    font-size: 16px;
    border-radius: 12px;
  }
}
</style>