let mesaj: string = "selam dünya";
console.log(mesaj);

//sonrasında ise komutların js dosyasına çevirilmesi için "tsc app.ts" diyerek çalıştırılabilir bir js dosyasını çıkarmam gerek.

//! ama eger çıktıya gerek kalmadan direkt olarak node js uygulaması olarak kullanmak istiyorsak "ts-node app.ts" dersek çıktı olmadan direkt olarak sonucu verir.

const h2 = document.createElement("h2");
h2.textContent = mesaj;
document.body.appendChild(h2);
