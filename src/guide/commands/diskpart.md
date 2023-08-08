---
title: Керування дисками та розділами
description: diskpart • кКерування дисками та розділами
---

# Управління дисками та розділами

Команда **[diskpart](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/diskpart 'Microsoft Dosc')** дозволяє керувати дисками, розділами та томами на вашому комп'ютері.

## Синтаксис

```cmd
diskpart
```

## Команди у режимі `diskpart`

- `list disk`: Вивести список всіх дисків на комп'ютері.
- `select disk [номер_диска]`: Вибрати диск для роботи.
- `list partition`: Вивести список розділів на обраному диску.
- `select partition [номер_розділу]`: Вибрати розділ для роботи.
- `format fs=ntfs quick`: Швидкий формат розділу в файлову систему NTFS.
- `exit`: Вийти з режиму `diskpart`.

## Приклади

1. Вивести список дисків на комп'ютері:

```cmd
diskpart
list disk
```

2. Вибрати диск та розділ для форматування:

```cmd
diskpart
select disk 1
select partition 2
format fs=ntfs quick
```
