import React from 'react';
import Navigation from '../components/Navigation';

const Produits = () => {
    return (
        <div>
            <Navigation />
            <section className='produit-page'>
                <h1>Table Produits :</h1>
                <table>
                    <tr>
                        <td className='title-td'>ID Article</td>
                        <td className='title-td'>Marque</td>
                        <td className='title-td'>Type article</td>
                        <td className='title-td'>Article</td>
                        <td className='title-td'>Prix (€)</td>
                    </tr>

                    <tr>
                        <td className=''>1001</td>
                        <td className=''>Levis</td>
                        <td className=''>Jeans</td>
                        <td className=''>501</td>
                        <td className=''>99</td>
                    </tr>
                    <tr>
                        <td className=''>1002</td>
                        <td className=''>Levis</td>
                        <td className=''>Jeans</td>
                        <td className=''>511</td>
                        <td className=''>119</td>
                    </tr>
                    <tr>
                        <td className=''>2001</td>
                        <td className=''>Gap</td>
                        <td className=''>Jeans</td>
                        <td className=''>Slim natural</td>
                        <td className=''>99</td>
                    </tr>
                    <tr>
                        <td className=''>2002</td>
                        <td className=''>Gap</td>
                        <td className=''>Jeans</td>
                        <td className=''>Skinny</td>
                        <td className=''>119</td>
                    </tr>
                    <tr>
                        <td className=''>2003</td>
                        <td className=''>Gap</td>
                        <td className=''>Jeans</td>
                        <td className=''>Droit</td>
                        <td className=''>109</td>
                    </tr>
                    <tr>
                        <td className=''>3001</td>
                        <td className=''>Diesel</td>
                        <td className=''>Jeans</td>
                        <td className=''>Skinny</td>
                        <td className=''>129</td>
                    </tr>
                    <tr>
                        <td className=''>3002</td>
                        <td className=''>Diesel</td>
                        <td className=''>Jeans</td>
                        <td className=''>Slim</td>
                        <td className=''>139</td>
                    </tr>
                </table>
            </section>
        </div>
    );
};

export default Produits;