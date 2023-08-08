---
title: Управління локальними групами
description: net localgroup • управління локальними групами
---

# Управління локальними групами

Команда **[net localgroup](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/net-localgroup 'Microsoft Dosc')** дозволяє виконувати операції з локальними групами на комп'ютері.

## Синтаксис

```cmd
net localgroup [ім'я_групи] [/add] [/delete] [/addmember] [/domain]
```

## Параметри

- `[ім'я_групи]`: Вказує ім'я локальної групи для виконання дії.
- `/add`: Створити нову локальну групу.
- `/delete`: Видалити локальну групу.
- `/addmember`: Додати користувача до локальної групи.
- `/domain`: Виконати дію на доменному контролері (якщо комп'ютер є частиною домену).

## Приклади

1. Створити нову локальну групу:

```cmd
net localgroup NewGroup /add
```

2. Додати користувача до локальної групи:

```cmd
net localgroup ExistingGroup UserName /addmember
```
