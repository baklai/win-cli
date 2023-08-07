---
title: Копіювання та переміщення файлів
description: copy & move • копіювання та переміщення файлів
---

# Копіювання та переміщення файлів

Команда **[copy](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/copy 'Microsoft Dosc')** копіює файли, а **[move](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/move 'Microsoft Dosc')** переміщує файли з одного місця в інше.

## Синтаксис

```cmd
copy [вихідний_шлях] [цільовий_шлях]
move [вихідний_шлях] [цільовий_шлях]
```

## Параметри

- `вихідний_шлях`: Вказує шлях до файлу, який потрібно скопіювати або перемістити.
- `цільовий_шлях`: Вказує шлях, де має з'явитися копія файлу або де файл має бути переміщений.

## Приклади

1. Скопіювати файл в інший каталог:

   ```cmd
   copy C:\Source\File.txt D:\Target\
   ```

2. Перемістити файл в інший каталог:

   ```cmd
   move C:\Source\File.txt D:\Destination\
   ```
