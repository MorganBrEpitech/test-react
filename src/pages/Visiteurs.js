import React from 'react';
import Navigation from '../components/Navigation';

const Visiteurs = () => {
    return (
        <div>
            <Navigation />
            <section className='visiteur-page'>
                <h1>Table Visiteurs :</h1>
                <table>
                    <tr>
                        <td className='title-td'>Nom Visiteur</td>
                        <td className='title-td'>Prénom</td>
                        <td className='title-td'>ID</td>
                        <td className='title-td'>Email</td>
                        <td className='title-td'>Dernière connexion</td>
                        <td className='title-td'>Nombre de connexions ce mois</td>
                        <td className='title-td'>Nombre d’articles consultés</td>
                        <td className='title-td'>Déjà acheté ?</td>
                    </tr>

                    <tr>
                        <td className=''>Martin</td>
                        <td className=''>Gabriel</td>
                        <td className=''>24</td>
                        <td className=''>g.martin99@gmail.com</td>
                        <td className=''>2021/01/01</td>
                        <td className=''>2</td>
                        <td className=''>4</td>
                        <td className=''>Oui</td>
                    </tr>
                    <tr>
                        <td className=''>Petit</td>
                        <td className=''>Marie</td>
                        <td className=''>25</td>
                        <td className=''>m.petit99@gmail.com</td>
                        <td className=''>2021/01/04</td>
                        <td className=''>1</td>
                        <td className=''>5</td>
                        <td className=''>Oui</td>
                    </tr>
                    <tr>
                        <td className=''>Robert</td>
                        <td className=''>Luc</td>
                        <td className=''>26</td>
                        <td className=''>l.robert99@gmail.com</td>
                        <td className=''>2021/01/03</td>
                        <td className=''>5</td>
                        <td className=''>7</td>
                        <td className=''>Oui</td>
                    </tr>
                    <tr>
                        <td className=''>Richard</td>
                        <td className=''>Stéphanie</td>
                        <td className=''>27</td>
                        <td className=''>s.richard99@gmail.com</td>
                        <td className=''>2020/12/11</td>
                        <td className=''>0</td>
                        <td className=''>2</td>
                        <td className=''>Non</td>
                    </tr>
                </table>
            </section>
        </div>
    );
};

export default Visiteurs;