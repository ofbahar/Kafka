## Kafka Producer-Consumer Uygulaması
### Açıklam
- Apache Kafka için producer - consumer uygulamaları, bunları yönetmek için oluşturulan Dockerfile ve docker-compose yml dosyalarını içeren Github reposudur.
- Uygulamalar ve Dockerfile dosyaları kendilerine ait klasörlerde bulunmaktadırlar.

### Kullanımı
- Aşağıdaki komutlarla repomuzu klonlayalım ve klasörün içerisine girelim;
```
git clone https://github.com/ofbahar/Kafka.git
cd Kafka
```
- Bu uygulamaları kullanabilmek için halihazırda çalışan Apache Kafka uygulaması bulunması gerekiyor. Eğer bulunmuyorsa;
```
docker-compose -f kafka-compose.yml up -d
```
- **docker-compose.yml** dosyasında kafka uygulamamız ile iletişim kurulabilmesi için bulunan **ENV** değişkenleri mevcut. Bu değişkenleri çalışan kafka uygulamamıza göre ayarlayalım.
- **docker-compose.yml** dosyamızda producer ve consumer konteynerlerini build etmek için gerekli parametreler bulunmakta, ayrıyeten build etme ihtiyacımız bulunmuyor.
- Gerekli ayarlamaları yaptıktan sonra;
```
docker-compose up
```
  komutuyla docker imajlarımız hazırlanıp çalımaya başlayacaklardır.
