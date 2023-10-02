# Client Side Routing(İstemci Tarafı Rotalama) w/ React Router v.5

Konular:

* React Router
* Link ve NavLink kullanarak belirli routelara bağlantı vermek
* Route Parametreleri Atama
* Componentlere Proplar göndererek Router render etme

## Talimatlar

### Görev 1: Proje Kurulumu

* [X] Repoyu **Forklayın** , ve forku klonlayın.
* [X] **Not** Çalıştıracağınız 2 server var o yüzden talimatları dikkatlice okuyun.
* [X] **Root klasöründe**: `npm install` yazarak kütüphaneleri indirin.
* [X] `npm start` ya da `node server.js` komutuyla çalıştırın. (Bu işlemle ilgili ilerleyen adımlarda daha açıklayıcı bilgiler bulacaksın)
* [X] Başka bir terminal penceresinde `client` klasörüne girin ve `npm install` yazarak kütüphaneleri indirin.
* [X] `client` klasöründeyken `npm start` yazarak client uygulamasını çalıştırın.

* [X] Öncelikle uygulamanız client üzerinden çalışmaya başlayınca şuradaki gibi bir tarayıcı penceresi göreceksiniz:  [bknz](./Assets/filmler-anasayfa.png) `localhost:3000` (eğer 3000 portu boşta değilse 3001 portu kullanılabilir).

### Görev 2: MVP (MUÜ)

#### Tasarım Görselleri

Uygulamanızı bitirdiğinizde 2 adet route'u olacaktır:

* [X] [route SS'/'](./Assets/ilk-route.png)
* [X] [route SS '/filmler/:id'](./Assets/ikinci-route.png)

#### Route'ların uygulanması

[React Router 5 dökümantasyonu](https://v5.reactrouter.com/web/guides/quick-start)

* [X] App componentine Route eklemek için hazılayın (`<Router>` & `<Switch>`)
* [X] App dosyanıza 2 adet route ekleyin. (`<Route ... >`)
  * [X] `Route` sıralaması hakkında sorun yaşamamak için `exact` propunu inceleyin: [Route exact prop dökümantasyonu](https://v5.reactrouter.com/web/api/Route/exact-bool)  
  * [X] Birinci route'unuz `/` olacak ve `FilmListesi` bileşenini yükleyecek. Bu bileşene proplarla filmler apisinden alınan datayı aktarın.
  * [X] Diğer route `/filmler/` parametresinden sonra `id` parametresini alacak (örnek: `/filmler/2`, `/filmler/3`). `id` dinamik olacak. Bu route `Film` bileşenini yükleyecek.

#### İşlevsellik Kazandırın

* [X] Bir kullanıcı `FilmListesi` içindeki film cardına tıkladığında seçilen filmin detaylarını görebilmeli {`/movies/{tıklanılan film idsi}`.
* [X] URL'den seçilen film idsini almak için `Film.js` dosyasının 7. satırını düzenlenemeniz gerekir.
* [X] `KaydedilenlerListesi` bileşindeki `AnaSayfa` butonuna işlevsellik kazındırın, Anasayfaya geri dönmeli.
* [X] Artık film listesinde ileri geri ilerleyebiliyor olmalısın ve bir filmin detaylarını görebilmelisin.

### Görev 3: Esnek görevler

Eğer Görev 1 ve 2'yi tamamladıktan sonra bu göreve geçebilirsin.

#### Kodumuzu DRY olacak şekilde düzenleyin

* [X] `Film`, `FilmDetayları` ve `FilmListesi` bileşenleri içindeki JSX'lerin oldukça benzer olduğunu farketmişsindir. `Film` bileşeninde "detaylı" görünümünde bulunan ana farklılık starların listesidir.
* [X] `FilmCard.js` içinde bir Film Card'ı döndüren bir bileşen oluşturun. `Film` ve `FilmDetayları` bileşenlerini kaldırıp, yeni oluşturduğunuz `FilmCard` bileşeniyle uygulamayı yeniden geliştirin.
* [X] Film Card, bir filmi star listesi olsun ya da olmasın görüntülemeye yetecek kadar esnek olmalıdır.

#### `Film Kaydet` işlevini ekleyin

* [X] Halihazırda kullanmadığımız bir `Kaydedilenler Listesi` bileşenimizin olduğunu fark etmişsindir. Bu adımda bir film kaydetmek için bir işlevsellik ekleyeceksin. `Film` bileşenine `KaydedilenlerListesineEkle` fonksiyonunu gönderin. Daha sonra `Kaydet` butonuna bir click handler ekleyin. `Film.js` içindeki 24-27 satır arasındaki kodun başındaki yorum etiketini kaldırman gerekmektedir.

#### Kaydedilen Film listesini `Link` e çevirin

* [X] Kaydedilen filmler, filmin kendisine linklenmelidir. `filmiKaydet` fonksiyonunun ne işe yaradığını düşünün.

#### Kaydedilen Film `Link` lerini `NavLink`e dönüştürün

* [X] Navlink
