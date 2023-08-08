---
title: Виведення списку файлів та папок в поточному каталозі
description: dir • виведення списку файлів та папок в поточному каталозі
---

# Виведення списку файлів та папок

Команда **[dir](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/dir 'Microsoft Dosc')** виводить список файлів і папок у поточному каталозі.

## Синтаксис

```cmd
dir
```

## Параметри

- `/A`: Виводить всі файли, включаючи приховані.
- `/B`: Виводить лише імена файлів і папок (без додаткових деталей).
- `/S`: Виводить включаючи підкаталоги.
- `/O`: Сортує вивід (наприклад, `/ON` для сортування за іменем).

## Приклади

1. Вивести список файлів і папок у поточному каталозі:

```cmd
dir
```

2. Вивести список файлів і папок з додатковою інформацією:

```cmd
dir /A /S
```

3. Вивести лише імена файлів у поточному каталозі:

```cmd
dir /B
```