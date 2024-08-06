import React from 'react'
import './Mahsulotlar.css'
import FontSizeAdjuster from '../../components/FontSizeAdjuster';
function Mahsulotlar() {
const styles = {
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '50px',
    marginTop: "50px"
  },
  th: {
    border: '1px solid #ddd',
    padding: '8px',
    background: '#fff',
  },
  td: {
    border: '1px solid #ddd',
    padding: '8px',
    background: '#198754',
    color: '#fff',
    textAlign: 'center',
  },
  img: {
    width: '100px',
    height: '100px',
  },
  
};
  return (
    <div className='grays'>
       <div className='hidden'>
      <FontSizeAdjuster />  
      </div>
      <table style={styles.table} className='cart_img'>
      <thead>
        <tr>
          <th style={styles.th}>Image</th>
          <th style={styles.th}>Engine</th>
          <th style={styles.th}>Type</th>
          <th style={styles.th}>Displacement</th>
          <th style={styles.th}>Power</th>
          <th style={styles.th}>Torque</th>
          <th style={styles.th}>Compression Ratio</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={styles.td} data-label="Image"><img style={styles.img} src="https://umpt.uz/storage/upload/products/4_1697004410.jpg" alt="Engine 1" /></td>
          <td style={styles.td} data-label="Engine">B-DOHC (2-AVLOD)</td>
          <td style={styles.td} data-label="Type">B12D (LKY)</td>
          <td style={styles.td} data-label="Displacement">MLA/ECT/EGR</td>
          <td style={styles.td} data-label="Power">1,249</td>
          <td style={styles.td} data-label="Torque">75,5</td>
          <td style={styles.td} data-label="Compression Ratio">70,5</td>
          <td style={styles.td} data-label="Compression Ratio">80</td>
          <td style={styles.td} data-label="Compression Ratio">10.5:1</td>
          <td style={styles.td} data-label="Compression Ratio">10.2:1</td>
          <td style={styles.td} data-label="Compression Ratio">10.2:1</td>
          <td style={styles.td} data-label="Compression Ratio">4</td>
          <td style={styles.td} data-label="Compression Ratio">4</td>
          <td style={styles.td} data-label="Compression Ratio">4</td>
          <td style={styles.td} data-label="Compression Ratio">108</td>
          <td style={styles.td} data-label="Compression Ratio">139</td>
        </tr>
        <tr>
          <td style={styles.td} data-label="Image"><img style={styles.img} src="https://umpt.uz/storage/upload/products/4_1697004410.jpg" alt="Engine 2" /></td>
          <td style={styles.td} data-label="Engine">B-DOHC (2-AVLOD)</td>
          <td style={styles.td} data-label="Type">B15D (L2C)</td>
          <td style={styles.td} data-label="Displacement">MLA/PDA/VGIS/EGR</td>
          <td style={styles.td} data-label="Power">1,485</td>
          <td style={styles.td} data-label="Torque">79,7</td>
          <td style={styles.td} data-label="Compression Ratio">74,7</td>
          <td style={styles.td} data-label="Compression Ratio">84,7</td>
          <td style={styles.td} data-label="Compression Ratio">10.5:1</td>
          <td style={styles.td} data-label="Compression Ratio">10.2:1</td>
          <td style={styles.td} data-label="Compression Ratio">10.2:1</td>
          <td style={styles.td} data-label="Compression Ratio">4</td>
          <td style={styles.td} data-label="Compression Ratio">4</td>
          <td style={styles.td} data-label="Compression Ratio">4</td>
          <td style={styles.td} data-label="Compression Ratio">108</td>
          <td style={styles.td} data-label="Compression Ratio">139</td>
        </tr>
        <tr>
          <td style={styles.td} data-label="Image"><img style={styles.img} src="https://umpt.uz/storage/upload/products/2_1697004370.jpg" alt="Engine 3" /></td>
          <td style={styles.td} data-label="Engine">B-DOHC (2-AVLOD)</td>
          <td style={styles.td} data-label="Type">B15D (LM9)</td>
          <td style={styles.td} data-label="Displacement">MLA/PDA</td>
          <td style={styles.td} data-label="Power">1,485</td>
          <td style={styles.td} data-label="Torque">79,7</td>
          <td style={styles.td} data-label="Compression Ratio">74,7</td>
          <td style={styles.td} data-label="Compression Ratio">84,7</td>
          <td style={styles.td} data-label="Compression Ratio">10.5:1</td>
          <td style={styles.td} data-label="Compression Ratio">10.2:1</td>
          <td style={styles.td} data-label="Compression Ratio">10.2:1</td>
          <td style={styles.td} data-label="Compression Ratio">4</td>
          <td style={styles.td} data-label="Compression Ratio">4</td>
          <td style={styles.td} data-label="Compression Ratio">4</td>
          <td style={styles.td} data-label="Compression Ratio">108</td>
          <td style={styles.td} data-label="Compression Ratio">139</td>
        </tr>
      </tbody>
    </table>
    </div>
  )
}

export default Mahsulotlar