---
title: Прокси
description: 'Настройка прокси-сервера'
position: 3
category: Руководство
---

Настройка прокси-сервера с помощью команды **[netsh](https://docs.microsoft.com/ru-ru/windows-server/administration/windows-commands/netsh 'Microsoft Dosc')**.
Служебная программа командной строки, которая позволяет отображать или изменять сетевую конфигурацию компьютера, либо локально, либо удаленно.

### Туннелировать весь интернет-трафик через прокси

```cmd[cmd]
netsh winhttp set proxy proxy-server="http://proxy:port" bypass-list="127.0.0.1;localhost"
```

- `proxy-server` адрес прокси-сервера
- `bypass-list` список исключений, разделенных `;`

### Посмотреть текущие настройки прокси

```cmd[cmd]
netsh winhttp show proxy
```

### Сбросить все настройки прокси

```cmd[cmd]
netsh winhttp reset proxy
```
