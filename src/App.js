import React , {useState,useEffect} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards';
import wordsToNumbers from 'words-to-numbers';
const alanKey='780ae146c0a263fb203005440272cf872e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () =>{
    const [newsArticles,setNewsArticles] = useState([]);
    const [activeArticle,setActiveArticle]=useState(-1);
    useEffect(()=>{
        alanBtn({
            key:alanKey,
            onCommand:({command , articles,number})=>{
                if(command === 'newHeadlines'){
                    setNewsArticles(articles);
                    setActiveArticle(-1);
                }
                else if(command ==='highlight'){
                    setActiveArticle((prevActiveArticle)=>prevActiveArticle + 1);
                }
                else if(command==='open'){
                    const parsedNumber = number.length > 2 ?wordsToNumbers(number,{fuzzy:true}) : number;
                    const article = articles[parsedNumber - 1];
                    if(parsedNumber > 20 ){
                        alanBtn().playText('OOpsss!! Something went wrong . Please Try again')
                    }
                    else if(article){
                        window.open(article.url,'_blank');
                        alanBtn().playText('Sure , Opening the article for you ')
                    }

                    
                }
            }
        })
    },[])
    return(
        <div>
            <h1 style={{color:'white',textAlign:'center',fontSize:'50px'}}>Voice Controlled Alan AI React News Application</h1>
            <h3 style={{color:'white',textAlign:'center'}}><b>Made with ❤️ by S@nskruti</b></h3>
            <NewsCards articles={newsArticles} activeArticle={activeArticle}/>
        </div>
    );
}

export default App;