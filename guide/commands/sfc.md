---
title: Перевірка цілісності системних файлів
description: sfc • перевірка цілісності системних файлів
---

# Перевірка цілісності системних файлів

Команда **[sfc](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/sfc 'Microsoft Dosc')** перевіряє та відновлює пошкоджені системні файли на комп'ютері.

## Синтаксис

```cmd
sfc /scannow
```

## Параметри

- `/scannow` запускає перевірку цілісності системних файлів та їх відновлення.
- `/?` відображає довідку стосовно команди.

## Приклади

1. Запустити перевірку цілісності системних файлів

```cmd
sfc /scannow
```
