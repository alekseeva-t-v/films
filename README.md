# Рейтинг фильмов

Учебный проект курса [React для JS-разработчиков](https://netology.ru/programs/react)

## **Задача**

Создание React-компонента, отображающего рейтинг фильма в виде звёзд:

![preview](./public/images/preview.png)

## **Описание компонента**

Для отображения рейтинга создан компонент `Stars`, который принимает следующие атрибуты:

* `count` — рейтинг фильма, число, по умолчанию 0.

Если рейтинг меньше `1` или больше `5`, или вообще не число, то компонент не имеет какого-либо представления в DOM.

Звёзды рейтинга представлены тегом `<ul>` с классом `card-body-stars`. Для отображения символа звезды внутри тега `<li>` используется компонент `Star`.

Компонент должен создавать DOM элемент следующей структуры:

```JavaScript
<ul class="card-body-stars u-clearfix">
  <li>
    <svg fill="#D3BCA2" height="28" viewBox="0 0 18 18" width="28" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z"/>
      <path d="M0 0h18v18H0z" fill="none"/>
    </svg>
  </li>
</ul>
```
## **Стек технологий**
![HTML](./public/images/html.svg)
![CSS](./public/images/css.svg)
![JS](./public/images/js.svg)
![REACT](./public/images/react.svg)
![GIT](./public/images/git.svg)

## [**Демо**](https://films-mu-eight.vercel.app/)

Реализовано только отображение звёздочек, карточку фильма реализовывать не требовалось
