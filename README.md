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
| digerleri | `404.html` (404 durum koduyla) |

## Calistirma

```bash
npm install
npm start
```

Sunucu **5000** portunda calisiyor: http://localhost:5000

## Sinirlar

- Yazilar veritabani yerine `blogs.txt` dosyasina ekleniyor; ayni anda iki
  istek gelirse dosyaya yazma sirasi garanti degil.
- Yazi icerigi govdeden `split("=")[1]` ile aliniyor; iceriginde `=` gecen
  bir yazi dogru ayristirilamaz.
- Sayfa sunumu disinda hicbir sey yok: duzenleme, silme, kimlik dogrulama
  bu deponun kapsaminda degil.
