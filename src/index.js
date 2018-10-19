import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'


class Program extends React.Component {
render(){
    return(
<div className="container">
                 <h1 className="Burelis">Būrelis</h1>
                 <h2 className="ProgBur">Programavimo būrelis pradedantiems ir pažengusiems 7-18 metų<br/> moksleiviams</h2>
                 <ul className="ulx">
                    <li className="l1">Pradedančiųjų ir pažengusiųjų programos, kurias priskiriame mokiniams pagal jų amžių, žinias bei pasirinktą būrelio lokaciją</li>
                    <li className="l2">HTML, CSS, JavaScript, HTML5, PHP, JAVA, C#, .NET, Python, C++ programavimo kalbos</li>
                    <li className="l3">Moksleiviai mokosi kurdami individualius projektus</li>
                    <li className="l4">Moksleiviams nuo 12 metų į programą įeina ir realių projektų kūrimas skirtingiems klientams (mokykloms, darželiams, labdaros organizacijoms ir kt.)</li>

                 </ul>
                 <p className="empty">
                 <br/>
                 </p> 
                 <p className="p1">
                 CodeAcademy Kids programavimo akademijos moksleiviai mokosi plačiausiai naudojamų programavimo kalbų kurdami unikalius projektus. Nenorime <br/>
                 moksleivio statyti į rėmus ir liepti mokytis vienos programavimo kalbos, norime, kad mūsų moksleivis vėliau galėtų pats priimti apsvarstytą <br/>
                 sprendimą apie tai,kokios programavimo kalbos ekspertu nori būti. CodeAcademy Kids mokiniai mokosi HTML, CSS, JavaScript, HTML5, PHP, JAVA, C#, .NET, Python,<br/>
                 C++ programavimo kalbų, kurdami kompiuterinius žaidimus, internetines svetaines, mobilias aplikacijas, prekinius ženklus, programuodami dronus ir kt.<br/>
                 Šis programavimo būrelis yra skirtas visiems 7-18 metų moksleiviams. 
                 </p> <strong>&nbsp;</strong>
                <div className="bluewidth"></div>
                <h3 className="kainairlaikas">Užsiėmimų kaina ir laikas</h3>
                <div className="ulx2">
                    <ul>
                        <li>Būrelį galima lankyti 1 arba 2 kartus per savaitę;</li>
                        <li>Vieno užsiėmimo trukmė – dvi astronominės valandos (120 min)</li>
                        <li>Skirtingos grupės visomis darbo dienomis ir šeštadieniais</li>
                        <li>Yra galimybė panaudoti NVŠ (neformalaus vaikų švietimo) krepšelį</li>
                    </ul>
                </div>
                <br/>
                <br/>
                
       <Cak />          
     </div>









    )
    

}

}
class Cak extends React.Component{
    render(){
      return(
        <div className="container">
            <div className="cak-tabs">
            <ul className="cak-tabs-nav">
                            <li className="ulli1"><a href="#">Be NVŠ krepšelio</a></li>
                            <li className="ulli2"><a href="#">Su NVŠ krepšeliu*</a></li>
                </ul>
                <div className="cak-tabs-content">
                    <div className="cak-tab tab-1">
                        <div className="cak-table-wrapper">
                            <div className="cak-table-inner">
                            <table className="tablex">
                                <thead className="theadx">
                                
                                    <tr>
                                        <th className="thx">Abonementai</th>
                                        <th className="thx">1 kartas per savaitę</th>
                                        <th className="thx">2 kartai per savaitę</th>
                                        <th className="thx">Sutaupote</th>
                                    </tr>

                                </thead>
                                    <tbody className="tbodyx">
                                    <tr>
                                        <td>1 mėnesio</td>
                                        <td>50&nbsp;€</td>
                                        <td>99&nbsp;€</td>
                                        <td>–</td>
                                    </tr>
                                    <tr>
                                            <td>3 mėnesių</td>
                                            <td>142,50&nbsp;€</td>
                                            <td>285,5&nbsp;€</td>
                                            <td>-</td>
                                                
                                    </tr>
                                    <tr>
                                        <td>Pusės metų</td>
                                        <td>270&nbsp;€</td>
                                        <td>534,6&nbsp;€</td>
                                        <td>30€ – 59,4€</td>
                                        
                                    </tr>
                                    <tr>
                                        <td>Sezono</td>
                                        <td>425 €</td>
                                        <td>841,5 €</td>
                                        <td>–</td>
                                    </tr>
                                    
                                    
                                    
                                    </tbody>
                            </table>
                            </div>
                        </div>      
                    </div>
                
                        
                        
                                                {/* <div className="cak-tab tab-2">
                                                    <div className="cak-table-wrapper">
                                                        <div className="cak-table-inner">
                                                                <table> </table>
                                                                        <thead>
                                                                            <tr>
                                                                                <th>Abonementai</th>
                                                                                <th>1 kartas per savaitę</th>
                                                                                <th>2 kartai per savaitę</th>
                                                                                <th>Sutaupote</th>
                                                                            </tr>
                                                                        </thead>
                                                                                <tbody></tbody>
                                                                                    <tr>
                                                                                        <td>1 mėnesio</td>
                                                                                        <td>35 €</td>
                                                                                        <td>84 €</td>
                                                                                        <td>–</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>3 mėnesių</td>
                                                                                        <td>99,75 €</td>
                                                                                        <td>239,4 €</td>
                                                                                        <td>-</td>
                                                                                        
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>Pusės metų</td>
                                                                                        <td>189 €</td>
                                                                                        <td>453,6&nbsp;€</td>
                                                                                        <td>-</td>
                                                                                        </tr>
                                                                                    <tr>
                                                                                        <td>Sezono</td>
                                                                                        <td>297,5 €</td>
                                                                                        <td>714 €</td>
                                                                                        <td>-</td>
                                                                                    </tr>
                                                        </div>

                                                    </div>  
                                                </div>                                    */}
                </div>                                                

         
         
         
            </div> 

         <div className="cak-block-center">
                <p></p>
                <p>*labiausiai suskubti raginame tuos, kurie daliai būrelio kainos padengti norėtų panaudot Neformalaus Vaikų Švietimo krepšelį. Buvome informuoti, jog keičiasi krepšelių skyrimo tvarka ir šiais metais Vilniaus miesto savivaldybė bandys suteikti organizacijai tiek krepšelių, kiek mokinių bus užregistruota mokinių registre rugsėjo 24 d.</p>
         </div>         

           <div className="full-width-blue">
                <div className="row">
                   <div className="col-md-10 offset">
                       <div className="row">
                            <div className="col-md-4 setx">
                            <img src="./img1.png"/>
                            
                            </div>
                            <div className="col-md-8 sety">
                            <h3 className="h3x">Internetinių svetainių kūrimas</h3>
                            <button className="Daugiau">Daugiau</button>
                            <button className="Registruokis">Registruokis</button>
                            </div>
                        
                        </div>    
                        
                   
                    </div>
                    <div className="col-md-10 offset">
                    <div className="row">
                        <div className="col-md-4 setx">
                         <img src="./img2.png"/>
                        </div>
                        <div className="col-md-8 sety">
                        <h3 className="h3x">Kompiuterinių žaidimų kūrimas</h3>
                        <button className="Daugiau">Daugiau</button>
                            <button className="Registruokis">Registruokis</button>
                        </div>
                        
                    </div>    
                        
                   
                    </div>
                    <div className="col-md-10 offset">
                        <div className="row">
                            <div className="col-md-4 setx">
                             <img src="./img3.png"/>
                            </div>
                            <div className="col-md-8 sety">
                            <h3 className="h3x">Mobilių aplikacijų kūrimas</h3>
                            <button className="Daugiau">Daugiau</button>
                            <button className="Registruokis">Registruokis</button>
                            </div>
                        </div>
                        
                        
                   
                    </div>
                    <div className="col-md-10 offset">
                        <div className="row">
                            <div className="col-md-4 setx">
                            <img src="./img4.png"/>
                            
                            </div>
                            <div className="col-md-8 sety">
                            <h3 className="h3x">Prekinio ženklo kūrimas</h3>
                            <button className="Daugiau">Daugiau</button>
                            <button className="Registruokis">Registruokis</button>
                            </div>
                        </div>
                        
                        
                   
                    </div>
                    <div className="col-md-10 offset">
                        <div className="row">
                            <div className="col-md-4 setx">
                            
                            <img src="./img5.png"/>
                            </div>
                            <div className="col-md-8 sety">
                            <h3 className="h3x">II lygis: programinių sistemų kūrimas</h3>
                            <button className="Daugiau">Daugiau</button>
                            <button className="Registruokis">Registruokis</button>
                            </div>
                            
                        </div>    
                        
                   
                    </div>

                 </div>


            </div>
            <div className="full-width-gray">
                    <div className="bluewidth1"></div>
                    <h3 className="text-center">Dėstytojai</h3>
                    <p className="dest1">
                    Mūsų dėstytojai - patyrę programuotojai, žaidimų kūrėjai ir dizaineriai. Siekiame sudaryti kuo geresnes sąlygas savo mokytojams - kuo labiau motyvuotas ir 
                    džiaugsmingas yra dėstytojas, tuo geresnį ir kokybiškesnį dėmesį gauna kiekvienas moksleivis. 
                    </p>
                    <p className="dest2">
                    Nori prisijungti prie CodeAcademy Kids dėstytojų komandos ir padėti moksleiviams perprasti kompiuterines technologijas? Laukiame Tavo CV el. paštu
                    info@codeacademykids.com.
                    </p>
                        <div className="row">
                            <div className="col-md-3 portfolio">

                                <img src="./face1.jpg" className="face1"/>
                                <h3 className="h3face">Jevgenij Bogdasic</h3>
                                <h4 className="h4face">Internetinių svetainių kūrimas</h4>

                            </div>
                            <div className="col-md-3 portfolio">
                            <img src="./face2.jpg" className="face2"/>
                            <h3 className="h3face">Edvinas Gervelis</h3>
                                <h4 className="h4face">Mobilių aplikacijų kūrimas</h4>
                            </div>
                            <div className="col-md-3 portfolio">
                            <img src="./face3.jpg" className="face3"/>
                            <h3 className="h3face">Deividas Krunkauskas</h3>
                                <h4 className="h4face">Kompiuterinių žaidimų dizainas</h4>
                            </div>
                            <div className="col-md-3 portfolio">
                            <img src="./face4.jpg" className="face4"/>
                            <h3 className="h3face">Rokas Šimkus</h3>
                                <h4 className="h4face">Internetinių svetainių kūrimas</h4>
                            </div>
                        
                        
                        
                        </div>
                    
            </div>
            



        <div><Footer /></div>
         </div>  /*Container dIV */
         
     )


    }
}
 
class Footer extends React.Component{
    render(){
     return(
        <div className="footer">
            <div className="row">
               <div className="col-md-3 col-sm-6">
                  
               </div>
               <div className="col-md-3 col-sm-6">

               </div>
               <div className="col-md-3 col-sm-6">

               </div>
               <div className="col-md-3 col-sm-6">

               </div>

                    
             </div>

        </div>




     )}

   
}
ReactDOM.render(<Program />, document.getElementById('root'));
