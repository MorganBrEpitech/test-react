import React from 'react';
import Navigation from '../components/Navigation';

const Clics = () => {
    return (
        <div>
            <Navigation />
            <section className='clic-page'>
                <h1>Logs Clics :</h1>
                <table>
                    <tr>
                        <td className='title-td'>ID Article</td>
                        <td className='title-td'>ID User</td>
                        <td className='title-td'>Date du clic</td>
                        <td className='title-td'>Durée consultation (secondes)</td>
                        <td className='title-td'>Achat après clic</td>
                    </tr>

                    <tr>
                        <td className=''>1001</td>
                        <td className=''>24</td>
                        <td className=''>2021/01/01</td>
                        <td className=''>20</td>
                        <td className=''>Oui</td>
                    </tr>
                    <tr>
                        <td className=''>1002</td>
                        <td className=''>24</td>
                        <td className=''>2021/01/01</td>
                        <td className=''>25</td>
                        <td className=''>Non</td>
                    </tr>
                    <tr>
                        <td className=''>2001</td>
                        <td className=''>24</td>
                        <td className=''>2021/01/01</td>
                        <td className=''>22</td>
                        <td className=''>Oui</td>
                    </tr>
                    <tr>
                        <td className=''>2002</td>
                        <td className=''>24</td>
                        <td className=''>2021/01/01</td>
                        <td className=''>20</td>
                        <td className=''>Non</td>
                    </tr>
                    <tr>
                        <td className=''>2001</td>
                        <td className=''>25</td>
                        <td className=''>2021/01/04</td>
                        <td className=''>8</td>
                        <td className=''>Non</td>
                    </tr>
                    <tr>
                        <td className=''>2002</td>
                        <td className=''>25</td>
                        <td className=''>2021/01/04</td>
                        <td className=''>7</td>
                        <td className=''>Non</td>
                    </tr>
                    <tr>
                        <td className=''>2003</td>
                        <td className=''>25</td>
                        <td className=''>2021/01/04</td>
                        <td className=''>9</td>
                        <td className=''>Oui</td>
                    </tr>
                    <tr>
                        <td className=''>3001</td>
                        <td className=''>25</td>
                        <td className=''>2021/01/04</td>
                        <td className=''>10</td>
                        <td className=''>Oui</td>
                    </tr>
                    <tr>
                        <td className=''>3002</td>
                        <td className=''>25</td>
                        <td className=''>2021/01/04</td>
                        <td className=''>7</td>
                        <td className=''>Non</td>
                    </tr>
                    <tr>
                        <td className=''>1001</td>
                        <td className=''>26</td>
                        <td className=''>2021/01/03</td>
                        <td className=''>5</td>
                        <td className=''>Non</td>
                    </tr>
                    <tr>
                        <td className=''>1002</td>
                        <td className=''>26</td>
                        <td className=''>2021/01/03</td>
                        <td className=''>4</td>
                        <td className=''>Non</td>
                    </tr>
                    <tr>
                        <td className=''>2001</td>
                        <td className=''>26</td>
                        <td className=''>2021/01/03</td>
                        <td className=''>5</td>
                        <td className=''>Oui</td>
                    </tr>
                    <tr>
                        <td className=''>2001</td>
                        <td className=''>26</td>
                        <td className=''>2021/01/03</td>
                        <td className=''>5</td>
                        <td className=''>Non</td>
                    </tr>
                    <tr>
                        <td className=''>2003</td>
                        <td className=''>26</td>
                        <td className=''>2021/01/03</td>
                        <td className=''>4</td>
                        <td className=''>Non</td>
                    </tr>
                    <tr>
                        <td className=''>3001</td>
                        <td className=''>26</td>
                        <td className=''>2021/01/03</td>
                        <td className=''>3</td>
                        <td className=''>Non</td>
                    </tr>
                    <tr>
                        <td className=''>3002</td>
                        <td className=''>26</td>
                        <td className=''>2021/01/03</td>
                        <td className=''>4</td>
                        <td className=''>Non</td>
                    </tr>
                    <tr>
                        <td className=''>1001</td>
                        <td className=''>27</td>
                        <td className=''>2020/12/11</td>
                        <td className=''>32</td>
                        <td className=''>Non</td>
                    </tr>
                    <tr>
                        <td className=''>1002</td>
                        <td className=''>27</td>
                        <td className=''>2020/12/11</td>
                        <td className=''>27</td>
                        <td className=''>Non</td>
                    </tr>
                </table>
            </section>
        </div>
    );
};

export default Clics;