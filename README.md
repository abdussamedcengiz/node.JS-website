# Node.js Blog Sitesi (framework'suz)

Express gibi bir framework kullanmadan, yalnizca Node.js'in `http` ve `fs`
modulleriyle yazilmis kucuk blog sitesi. Amac Express'in arka planda ne yaptigini
elle yaparak gormek: yonlendirme, istek govdesini okuma, dosya sunma ve
yonlendirme (redirect) adim adim yaziliyor.

## Nasil calisiyor

- `app.js` sunucuyu ayaga kaldiriyor, gelen istegi `routes.js`'e devrediyor.
- `routes.js` `request.url` ve `request.method` degerlerine bakarak hangi HTML
  dosyasinin okunacagina karar veriyor.
- `/create` adresine POST edilen yazi, govde parcalari (`chunk`) birlestirilip
  `blogs.txt` dosyasina ekleniyor -- veritabani yok, kayit duz metin dosyasinda.
- Eslesmeyen adresler `404.html` donduruyor.

## Sayfalar

| Adres | Dosya |
|---|---|
| `/` | `index.html` |
| `/blogs` | `blogs.html` |
| `/create` (POST) | Yaziyi `blogs.txt`'ye ekler, `/` adresine yonlendirir |
| digerleri | `404.html` |

## Calistirma

```bash
npm install
node app.js
```

Sunucu **5000** portunda calisiyor: http://localhost:5000

## Bilinen sorunlar

- `app.js` ekrana "node.js server at port 4000" yaziyor ama sunucu 5000
  portunu dinliyor.
- `app.js` icinde kullanilmayan bir `requestListener` fonksiyonu ve ayni
  modulu iki kez iceri alan (`routes`, `routeHandler`) satirlar duruyor.
- `node_modules` klasoru depoya commit'lenmis.
