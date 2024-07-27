import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../index.css';

function Kompaniya() {
  const [kompaniya, setKompaniya] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://uzavtomotors.pythonanywhere.com/kompaniya-haqida/')
      .then(response => {
        console.log('Fetch response:', response);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched data:', data);
        setKompaniya(data); // Ma'lumotlarni davlatga saqlash
        setLoading(false);
      })
      .catch(error => {
        console.error('Fetch error:', error);
        setError(error); // Xatolikni davlatga saqlash
        setLoading(false);
      });
  }, []); // Faqat bir marta bajariladi

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  console.log('Kompaniya state:', kompaniya);

  return (
    <div className='kompaniya'>
      {
        Array.isArray(kompaniya) && kompaniya.map((item, index) => (
          <div key={index}>
            <img className='unique_page_img' src='https://piamg.uz/uploads/news_inner/KK/KK/pE/mosaic-financial-vybrana-konsultantom-po-privatizatsii.jpg' alt="" />
            <div className="container">
              <Link className='link' to={'/'}>
                <h3 className='logo'>BOSH SAHIFA</h3>
              </Link>
              {
                item.about_companies && item.about_companies.map((subItem, subIndex) => (
                  <div key={subIndex}>
                    <h4 className='kompaniya_h4'>{subItem?.name}</h4>
                    <h1 className='kompaniya_h1'>{subItem?.title}</h1>
                    <p className='kompaniya_p'> “UzAuto Motors Powertrain”  maqbul quvvat va optimal yoqilg'i sarfi uchun mo'ljallangan benzin va ikki xil yonilg’ili (benzin / gaz) B-DOHC (Double Overhead Camshaft) ikkinchi avlod dvigatellarini ishlab chiqaradi. Ular O'zbekiston bozori uchun mo’ljallangan bo’lib, shuningdek, Rossiya, AQSh va MDH davlatlariga ham eksport qilinadi. Dvigatellar 1,2 litr va 1,5 litr hajmda Chevrolet Spark, Cobalt, Gentra, Nexia3 modellari uchun ishlab chiqariladi.</p>
                    <img className='kompaniya_img' src="https://umpt.uz/storage/dsadsadsa.jpg" alt="" />
                    <p className='kompaniya_desc'>“UzAuto Motors Powertrain”  shuningdek, dvigatelning asosiy tarkibiy qismlari: tirsakli val, silindr bloki, silindr bloki kallagini ishlab chiqarishga ixtisoslashgan va bu zavod ishlab chiqarish jarayonining bir qismi hisoblanadi. Mahsulotlar sifat standartlari bo’yicha jahon talablariga va GM - GMS (Global Manufacturing System) ishlab chiqarish tizimi talablariga javob beradi.</p>
                    <p className='kompaniya_desc'> 
                      Kompaniyaning asosiy xususiyati uning Markaziy Osiyoda silindr bloki uchun alyumin kallagi qismlari ishlab chiqaradigan birinchi va yagona zavod ekanligidir. Quyish va yig'ish bo’limlari bir joyda joylashgani va bu tarkibiy qismlarni tashish narxini pasaytirishi zavodning haqiqatan ham noyob ishlab chiqarish ekanligini tasdiqlaydi.
                    </p>
                    <p className='kompaniya_desc'>
                      Bizning missiyamiz - xavfsizlikka rioya qilgan holda bir jamoa bo’lib, ishlab chiqarish tizimini doimiy ravishda takomillashtirish orqali jahon darajasidagi dvigatellarni yetkazib berish bilan mijozlar talabini kutilgandan ham yuqori darajada qondirish. “UzAuto Motors Powertrain”  sog’likni saqlash va xavfsizlik tizimini birinchi darajali vazifa sifatida ko’rib, mehnat muhofazasi va xavfsizlik tizimiga rioya etishga va uni takomillashtirishga intiladi. Bizning xavfsizlik bo’yicha shiorimiz: "Har bir xodim o‘z uyiga sog‘-salomat qaytishi lozim. Har ishdan. Har sohadan. Har kuni".
                    </p>
                    <p className='kompaniya_desc'>
                      Barcha “UzAuto Motors Powertrain”  xodimlari GM kompaniyasining global ishlab chiqarish jarayonlarini o’rgangan va puxta tayyorgarlikdan o’tgan. Ko'plab mutaxassislar chet elda malaka oshirib, GM ning boshqa korxonalarida tajriba orttirishgan. Bizning kompaniya katta yo'lni bosib o'tdi va integratsiyalashgan sifatning yuqori darajasiga ko'tarildi va shu orqali 2014-yilda ISO 9001 sifat sertifikati, 2015-yilda General Motors "BIQ 3" va 2018-yilda "BIQ 4" sifat sertifikatiga erishdi.
                    </p>
                    <p className='kompaniya_desc'>
                      “UzAuto Motors Powertrain”  atrof-muhitni muhofaza qilishga ham katta ahamiyat beradi. 2014-yilda kompaniya ekologik menejment tizimini joriy qildi va ISO 14001 xalqaro sertifikatiga ega bo'ldi. 2018-yilda esa energiya sarfini kamaytirish va energiya tejash madaniyatini oshirishga erishgan holda ISO 50001 energiya menejmenti tizimini joriy etdi. Kompaniyada oqava suvlarni tozalash uchun noyob inshoot o'rnatilgan bo’lib, bu oqava suvlar tarkibidagi neft mahsulotlari miqdorini yuqori darajada tozalash imkonini beradi.
                    </p>
                    <p className='kompaniya_desc'>
                      “UzAuto Motors Powertrain”  O’zbekiston avtomobillari uchun jahon sifat standartlariga mos keladigan dvigatellarni ishlab chiqaruvchi eng yaxshi ishchilarni yollovchi va iqtisodiyot rivojiga munosib hissa qo'shib kelayotgan mamlakatimizning yetakchi korxonalaridan biri ekanligidan faxrlanadi.
                    </p>
                    <img className='kompaniya_img_small' src="https://umpt.uz/storage/1.JPG" alt="" />
                    <img className='kompaniya_img_small' src="https://umpt.uz/storage/2.JPG" alt="" />
                    <img className='kompaniya_img_very_small' src="https://umpt.uz/storage/3.JPG" alt="" />
                    <img className='kompaniya_img_very_small' src="https://umpt.uz/storage/4.JPG" alt="" />
                    <h1 className='kompaniya_bottom_h1'> 
                      Kompaniyaning rivojlanish tarixi va xronologiyasi
                    </h1>
                    <ul className='kompaniya_collaction'>
                      <li className='kompaniya_item'>2008 yil oktyabr GM va “O‘zAvtoSanoat” AK o‘rtasida GM QK tashkil etish bo‘yicha shartnoma imzolandi Powertrain Uzbekistan, dvigatel ishlab chiqarish zavodi.</li>
                      <li className='kompaniya_item'>2008 yil noyabr Zavodning poydevor qo‘yish marosimi va qurilishning rasmiy boshlanishi</li>
                      <li className='kompaniya_item'>2011 yil iyul Birinchisi ishlab chiqarilgan GM Powertrain Uzbekistan kompaniyasida dvigatel</li>
                      <li className='kompaniya_item'>2011 yil avgust O‘zbekiston Prezidenti Islom Karimov GM Powertrain Uzbekistan kompaniyasiga tashrif buyurdi</li>
                      <li className='kompaniya_item'>2011 yil noyabr Zavodning ochilish marosimi GM Powertrain Uzbekistan</li>
                      <li className='kompaniya_item'>2012 yil iyun 1,2 litrli yangi dvigatellarni muntazam ishlab chiqarish boshlandi</li>
                      <li className='kompaniya_item'>2019 yil oktyabr “O‘zAvtoSanoat” AK va GM O‘zbekiston avtomobil sanoati rivojlanishini aks ettiruvchi qo‘shma korxonadan Alyans tuzilmasigacha bo‘lgan hamkorlikning yangi bosqichiga o‘tdi.</li>
                      <li className='kompaniya_item'>2019 yil noyabr Kompaniyaning nomi OAJ deb o'zgartirildi General Motors Powertrain Uzbekistan “UzAuto Motors Powertrain” AJda</li>
                      <li className='kompaniya_item'>2020 yil iyul oyining yubiley soni 1 000 000 dvigatel</li>
                      <li className='kompaniya_item'>2022 yil dekabr CSS Prime dvigatellarini ishga tushirish 1,2 LIF va 1,2 L4H</li>
                    </ul>
                  </div>
                ))
              }
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default Kompaniya;
