import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../index.css';

function Kompaniya() {
  const [kompaniya, setKompaniya] = useState(null); // Obyekt sifatida boshlash
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
        setKompaniya(data); // Ma'lumotlarni holatga saqlash
        setLoading(false);
      })
      .catch(error => {
        console.error('Fetch error:', error);
        setError(error); // Xatolikni holatga saqlash
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
      {kompaniya && (
        <div>
          <img className='unique_page_img' src='https://piamg.uz/uploads/news_inner/KK/KK/pE/mosaic-financial-vybrana-konsultantom-po-privatizatsii.jpg' alt="" />
          <div className="container">
            <Link className='link' to={'/'}>
              <h3 className='logo'>BOSH SAHIFA</h3>
            </Link>
            {
              kompaniya.about_companies && kompaniya.about_companies.map((subItem, subIndex) => (
                <div key={subIndex}>
                  <h4 className='kompaniya_h4'>{subItem?.name}</h4>
                  <h1 className='kompaniya_h1'>{subItem?.title}</h1>
                  <p className='kompaniya_p'>{subItem?.body}</p>
                  <img className='kompaniya_img' src={subItem?.image} alt="" />
                  <p className='kompaniya_desc'>{subItem?.text}</p>
                  {
                    subItem.company_images && subItem.company_images.map((imgItem, imgIndex) => (
                      <div key={imgIndex}>
                        <img className='kompaniya_img_small' src={imgItem?.image} alt="" />
                      </div>
                    ))
                  }
                         <h1 className='kompaniya_bottom_h1'> 
                    {subItem.history_name}
                  </h1>
                  {
                    subItem.history && subItem.history.map((item, inx )=> (
                      <div>
                  <ul className='kompaniya_collaction'>
                    <li className='kompaniya_item'>{item}</li>
                  </ul>
                      </div>
                  ))
                }
                </div>
              ))
            }
          </div>
        </div>
      )}
    </div>
  );
}

export default Kompaniya;
