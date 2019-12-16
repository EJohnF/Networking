# Запросы на сервер

## Цели занятия

1. Получать информацию с сервера для отображения в приложении, используя несколько подходов
2. Работать с асинхронным хранилищем (redux-thunk) - обращение к серверу
3. Настраивать собственный сервер "на-лету"

## План

0. Разбор вопросов по ДЗ
1. [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) с [pokemon](https://pokeapi.co/) - fetch('https://pokeapi.co/api/v2/ability/'). 
    * Задание - отобразить в концоле всех ловких покемонов
2. Обзор архитектуры приложения. Как подключён thunk
3. Знакомство с [axios](https://github.com/axios/axios)
4. Знакомство с [lodash](https://lodash.com/docs/4.17.15)
5. Знакомство с [firabase](https://invertase.io/oss/react-native-firebase/)
6. Задание: Добавить в приложение фильтрацию по имени и (опционально) дате появления пива
 
## Integrate Firebase

1. Создать проект
2. Добавить приложения внутри проекта
3. Пройтись по шагам инструкции (обновить файлы в натив коде)
4. Переключиться на Realtime database
6. Разрешить write/read в Rules

## Домашнее задание:

1. Подключить Redux к списку гостей (хранить в сторе сам список гостей, а так же ключи фильтрации)
2. Синхронизировать список гостей с облачным хранилищем, используя ключи данного проекта, и путь `/intites` c двумя полями:
    * name (string)
    * withPartner (bool)
   Для сдачи достаточно отображать и добавлять гостей в список на сервере. На максимальный бал - добавить функционал изменения имени и значения withPartner

Опционально:
1. Настроить собственные проект firebase и настроить в нём хранилище
2. Добавить Authorisation - два поля сверху экрана email/password. И отображать списки отдельно для каждого пользователя. 

## Ссылка на опрос

https://otus.ru/polls/5402/
