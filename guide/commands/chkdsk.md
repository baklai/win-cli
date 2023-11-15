---
title: Перевірка та відновлення цілісності файлової системи
description: chkdsk • перевірка та відновлення цілісності файлової системи
---

# Перевірка та відновлення цілісності диска

Команда **[chkdsk](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/chkdsk 'Microsoft Dosc')** виконує перевірку цілісності файлової системи на диску та відновлює пошкоджені файли та каталоги.

## Синтаксис

```cmd
chkdsk [<диск>]: [/f] [/r]
```

## Параметри

- `[<диск>]` вказує літеру диска (наприклад, `C:`), який потрібно перевірити та відновити.
- `/f` виправити помилки на диску.
- `/r` виконати повну перевірку диска та відновлення.
- `/?` відображає довідку стосовно команди.

## Приклади

1. Перевірити та виправити помилки на диску C

```cmd
chkdsk C: /f
```

2. Виконати повну перевірку та відновлення на диску D

```cmd
chkdsk D: /r
```