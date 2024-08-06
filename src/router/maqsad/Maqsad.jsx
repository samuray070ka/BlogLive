import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../index.css';

function Maqsad() {
  const [maqsad, setMaqsad] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://uzavtomotors.pythonanywhere.com/goal/maqsad/')
      .then(response => {
        console.log('Fetch response:', response);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched data:', data);
        setMaqsad(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Fetch error:', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  console.log('Kompaniya state:', maqsad);

  return (
    <div className='maqsad'>
      {maqsad && (
        <div>
          <img className='unique_page_img' src='https://piamg.uz/uploads/news_inner/KK/KK/pE/mosaic-financial-vybrana-konsultantom-po-privatizatsii.jpg' alt="" />
          <div className="container">
            <Link className='link' to={'/'}>
              <h3 className='logo'>BOSH SAHIFA</h3>
            </Link>
            {
              maqsad.goal_companies && maqsad.goal_companies.map((item, inx) => (
                <div key={inx}>
                    <h1 className='kompaniya_h4'>{item.name}</h1>
                    <h3 className='maqsad_h3'>{item.title1}</h3>
            <ul className='maqsad_collaction'>
              {
                item.goal_list && item.goal_list.map((item, inx) => (
                  <li className='kompaniya_item' key={inx}>{item}</li>
                ))
              }
            </ul>
            <img className='kompaniya_img_small' src={item.image1} alt="" />
            <h3 className='maqsad_h3'>{item.title2}</h3>
            <div className="table-container">
              {
                item.table && item.table.map((item, inx) => (
                  <table className="styled-table">
                  <thead>
                    <tr>
                      <th>{item}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                       {item}
                      </td>
                    </tr>
                  </tbody>
                </table>
                ))
              }
             
            </div>
            <img className='kompaniya_img_small' src={item.image2} alt="" />
                  </div>
              ))
            }
          </div>
        </div>
      )}
    </div>
  );
}

export default Maqsad;
