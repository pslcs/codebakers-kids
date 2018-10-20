import React from 'react';
import ReactDOM from 'react-dom';
import './news.scss';
import { BrowserRouter as Router, Route} from "react-router-dom";

let naujienos = [];
let naujiena1 = {
    title: "Kaip dėstymas CodeAcademy Kids prisideda prie gražesnės ateities?", 
    description: "Renkuosi dėstyti! Kaip programavimo dėstymas CodeAcademy Kids prisideda prie gražesnės ateities? Mokytis ir sėkmingai išmokti programuoti puikiausiai galima savarankiškai. Tačiau viskas vyksta gerokai sparčiau ir sklandžiau, kai šalia yra žmogus, noriai besidalinantis savo gausia patirtimi, paaiškinantis, kodėl vienas ar kitas...", 
    image: "https://www.codeacademykids.com/wp-content/uploads/2018/10/3D8A5235.jpg",
    date: "2018-10-15"
};
let naujiena2 = {
    title: "Mokslo metų pradžia Antakalnio gimnazistams pažymėta atnaujinta ir modernia aplinka",
    description: "Neseniai prasidėję nauji mokslo metai vienos Vilniaus gimnazijų moksleiviams reikš ir naujas galimybes bei pokyčius. Į klases sugrįžę sostinės Antakalnio gimnazijos mokiniai turės galimybę informatikos žinių semtis iš pagrindų atnaujintame ir modernizuotame informatikos kabinete. Naujai atgimusioje klasėje buvo atliktas kosmetinis...",
    image: "https://www.codeacademykids.com/wp-content/uploads/2018/10/Photo1.jpg",
    date: "2018-10-15"
};
let naujiena3 = {
    title: "Kuo sportas naudingas moksleiviams?",
    description: "Jau ilgą laiką neabejojama, kad sportas, aktyvus gyvenimo būdas – raktas į sveiką gyvenimą, tačiau, praktikuodami įvairias sporto rūšis dar mokomės laikytis disciplinos, prisiimti atsakomybę, pasitikėti savimi bei dirbti komandoje. Įvairūs mokslinių tyrimų rezultatai skelbia: dėl mankštos smegenys geriau aprūpinamos...",
    image: "https://www.codeacademykids.com/wp-content/uploads/2018/06/optimized-neonbrand-423333-unsplash.jpg",
    date: "2018-10-15"
};
let naujiena4 = {
    title: "Kodėl mokantis yra būtina gerti vandenį?",
    description: "Intensyvūs internetiniai kursai: testai, užduotys, garso ar vaizdo pamokos ir kt. reikalauja didelių protinių pastangų, todėl visiškai suprantama, kad kartais atrodo, jog smegenys „sustojo“. Tyrimai skelbia – norėdami vėl iš naujo „užkurti“ smegenis, išgerkite stiklinę vandens prieš pamoką ir po...",
    image: "https://www.codeacademykids.com/wp-content/uploads/2018/06/joanna-kosinska-288965-unsplash-2.jpg",
    date: "2018-10-15"
}
for(let i=0; i<1000; i++){
    naujienos.push(naujiena1);
}
let relatedNewsCards = [];
let gautosNaujienos = [];

class RelatedNews extends React.Component{
    constructor(props){
        super(props);
        this.state={
            relatedNews: []
        }
    }
    createCards(){
        for (let i=0; i < 4; i++){
            relatedNewsCards.push(<div className="relatedNewsCards"><div className="imgContainer"><img alt="" className="relatedNewsCardsIMG" src={this.props.value[i].image}/></div><h4>{this.props.value[i].date}</h4><a href={"/news/" + i}><h3>{this.props.value[i].title}</h3></a></div>)
        }
        this.setState({relatedNews: relatedNewsCards})
    }
    componentDidMount(){
        this.createCards()
        this.render();
    }
    render(){        
        return (
            <div className="relatedNews">
            {this.state.relatedNews}
            </div>
        )
    }
}

class Article extends React.Component{
    obtainNews = async() => {
        const apiCall = await fetch(`http://127.0.0.1:3000/blog`);
        const data = await apiCall.json()
        naujienos = await data;
        await this.getNews();
    }
    getNews(){
        let properNews = [];
        let newsList = []
        for(let i=0; i<gautosNaujienos.length; i++){
            properNews.push(<div className="card-noflex"><img className="cardIMG" src={gautosNaujienos[i].image} alt=""></img><div className="cardContent"><h4>{gautosNaujienos[i].date}</h4><h4>{gautosNaujienos[i].title}</h4><p>{gautosNaujienos[i].description}</p></div></div>)
            newsList.push(<li>{gautosNaujienos[i].title}</li>)
        }
        this.setState({
            naujienos: properNews,
            newsList: newsList,
        })
    }
    componentDidMount(){
        this.obtainNews();
    }
    render(){
        console.log(naujienos)
        return (
            <span>
                <div className="content">
                    <div className="articles">
                        <img className="titleImage" src={naujienos[this.props.match.params.id].image} alt=""></img>    //reikia cia kazka padaryti, kad galetu ir be info surenderint
                        <h2>{naujienos[this.props.match.params.id].title}</h2>
                        <p>{naujienos[this.props.match.params.id].description}</p>
                    </div>
                    <div className="localNavigation">
                        <div className="latestPosts">
                            <h4>Pradėk kelionę į programavimo Olimpą dabar!</h4>
                            <ul id="olympusList">
                                <li>Užsiėmimai Vilniuje</li>
                                <li>Motyvuoti bei patyrę dėstytojai</li>
                                <li>Puiki mokymosi atmosfera</li>
                            </ul>
                            <a href="https://www.codebakers.lt/programavimo-kursai/"><button type="button" id="register">Registruokis</button></a>
                        </div>         
                        <div className="currentPrograms">
                            <h4>Esamos programos</h4>
                            <ul id="programsList">
                                <li>Front-end</li>
                                <li>Back-end</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <RelatedNews value={naujienos}/>
            </span>
        )
    }
}

class Main extends React.Component{
    constructor(props){
        super(props);
        this.state={
            dev: "Povilas"
        }
    }
    obtainNews = async() => {
        const apiCall = await fetch(`http://127.0.0.1:3000/blog`);
        const data = await apiCall.json()
        gautosNaujienos = await data;
        naujienos = gautosNaujienos
        await this.getProperNews();
    }
    getProperNews(){
        let properNews = [];
        let newsList = []
        for(let i=0; i<gautosNaujienos.length; i++){
            properNews.push(<div className="card flex"><img className="cardIMG" src={gautosNaujienos[i].image} alt=""></img><div className="cardContent"><h4>{gautosNaujienos[i].date}</h4><a href={"/news/" + i}><h4>{gautosNaujienos[i].title}</h4></a><p>{gautosNaujienos[i].description}</p></div></div>)
            if(i>gautosNaujienos.length-4){newsList.push(<li><a href={"/news/" + i}>{gautosNaujienos[i].title}</a></li>)}
        }
        this.setState({
            naujienos: properNews,
            newsList: newsList
        })

    }
    componentDidMount(){
        this.obtainNews();
    }
    render(){
        return (
            <div className="content">
            <div className="articles">
            <h1 id="title">Naujienos</h1>
                {this.state.naujienos}
            </div>
            <div className="localNavigation">
                <div className="latestPosts">
                    <h4>Latest news:</h4>
                    <ul>
                        {this.state.newsList}
                    </ul>
                </div>         
            </div>
            </div>
        )
    }
}

class Social extends React.Component{
    render(){
        return (
            <div className="content text">
                <h2 className="titles">Mums rūpi Lietuvos vaikai</h2>
                <p>Tikime, jog kiekvienas vaikas turi turėti galimybę technologinius mokslus mokytis įdomiai ir smagiai. Būdami socialiai atsakingais dedame visas pastangas, kad kuo daugiau 
                    vaikų, turinčių mažiau galimybių, galėtų įsitraukti į mūsų rengiamus užsiėmimus ir mokytis kartu su bendraminčiais. Šiuo metu kas dešimtas CodeAcademy Kids moksleivis pas 
                    mus mokosi nemokamai. Siekiame, kad šis skaičius augtų, tačiau vieniems to pasiekti nėra paprasta, tad mums itin svarbus yra partnerių įsitraukimas bei pagalba.</p>
                <br></br>
                <a id="link" href="#">Susisiekite su mumis jau dabar ir pradėkime kurti Lietuvos ateitį kartu!</a>
                <hr></hr>
                <h3 className="titles">Mokyklų renovacija bei investicijos į ateitį</h3>
                <br></br>
                <p>Bendradarbiaujame su mokyklomis Vilniuje, Kaune ir Klaipėdoje ne tik mokydami jų moksleivius programuoti, tačiau ir naujindami mokyklų infrastruktūrą. Siekiame, kad 
                    kiekvienas Lietuvos moksleivis bent mokykloje turėtų prieigą prie naujausių technologijų bei kad mokyklos aplinka būtų jauki ir motyvuojanti siekti žinių.</p>

                <p>2018 metų vasarą pradėjome Vilniaus Antakalnio gimnazijos – pirmosios mūsų mokyklos-partnerės – IT kabineto renovaciją. Su laiku stengsimės naujinti visų partnerinių 
                    mokyklų IT klases – tiek infrastruktūrą, tiek technologijas.</p>
                <br></br>
                <h3 className="title">Kiti paramos būdai</h3>
                <div className="columnholder">
                    <div className="column left">
                        <h3 className="title blue">Kviečiame skirti 2% GPM</h3>
                        <p>Priartinkite Lietuvos moksleivius prie kokybiškesnio bei efektyvesnio ugdymo. Jūsų parama bus skirta:</p>
                        <ul>
                            <li>Mokyklų renovacijai</li>
                            <li>Vaikų globos namuose augančių bei socialiai remtinų vaikų IT mokslų finansavimui</li>
                        </ul>
                        <p>Mokymosi aplinka yra tiek pat svarbi, kaip ir mokymosi programa. Siekiama atnaujinti Lietuvos mokyklas, pradedant informatikos klasėmis, o vėliau tęsiant atnaujinimą ir kitose erdvėse.</p>
                        <p>Vaikų globos namuose auga beveik 4000 vaikų. Socialinės rizikos šeimose auga daugiau nei 20 000 vaikų. Mes esame dėkingoje pozicijoje ir galime investuoti į savo vaikus ir jų efektyvų mokymą, 
                            tačiau to paties nusipelno ir mažiau galimybių turintis vaikas. Priartinkime vaikus prie perspektyvios ateities ir mažinkime socialinę atskirtį.</p>
                    </div>
                    <div className="column right">
                        <img className="nuotrauka" src="http://childsoldiersofearth.weebly.com/uploads/3/8/6/5/38658103/1896791_orig.jpg"></img>
                        <img className="nuotrauka" src="https://i.pinimg.com/originals/1c/13/b7/1c13b747d158280f5f75bb3b15450585.jpg"></img>
                    </div>
                </div>
            </div>
        )
    }
}

class Pagr extends React.Component{
    render(){
        return(
            <div>
                <Router>
                <Route exact path="/news" component={Main} />
                <Route path="/news/:id" component={Article} />
                <Route path="/social" component={Social} />
                </Router>
            </div>
        )
    }
}

ReactDOM.render(<Pagr />, document.getElementById('root'));

