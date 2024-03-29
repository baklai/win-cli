---
title: Спискок файлів та папок
description: dir • спискок файлів та папок
---

# Спискок файлів та папок

Команда **[dir](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/dir 'Microsoft Dosc')** виводить список файлів і папок у поточному каталозі.

## Синтаксис

```cmd
dir
```

## Параметри

- `/a` виводить всі файли, включаючи приховані.
- `/b` виводить лише імена файлів і папок (без додаткових деталей).
- `/s` виводить включаючи підкаталоги.
- `/o` сортує вивід (наприклад, `/ON` для сортування за іменем).
- `/?` відображає довідку стосовно команди.

## Приклади

1. Вивести список файлів і папок у поточному каталозі

```cmd
dir
```

2. Вивести список файлів і папок з додатковою інформацією

```cmd
dir /a /s
```

3. Вивести лише імена файлів у поточному каталозі

```cmd
dir /b
```
