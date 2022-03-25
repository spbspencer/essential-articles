
let url = 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=tbdhWczTPOXDqQBYIGYSDiaIgFSvTmbK';


fetch(url)
.then(response => response.json())
.then(data => {
   let results = data.results;
    let topTen = results.slice(0,10);
    console.log(topTen)
    console.log(results)
    function topHeadlines(arr){
        for(let i = 0; i < arr.length; i++){
               
            
                let sectionArticles = arr[i];
                const {title , abstract , section, short_url, multimedia} = sectionArticles;
                const selectArticle = document.querySelector("#articles-container");
                
                const createArticle = document.createElement("div");
                createArticle.className = "article";
           

                const createArticleContentCon = document.createElement("div");
                createArticleContentCon.className = "article-content"

                const createImg = document.createElement("img");
                createImg.className = "article-img";

                if(multimedia == null ){
                    continue
                }else{
                    createImg.setAttribute('src' , multimedia[0].url)

                }
                

                const createTitle = document.createElement("h2");
                createTitle.className = "article-title";
                createTitle.append(title);

                const createAbstract  = document.createElement("h3");
                createAbstract.className = "article-abstract";
                createAbstract.append(abstract);

                const createSection = document.createElement("p");
                createSection.className = "article-section";
                createSection.append(section)

                const createLink = document.createElement("a");
                createLink.className = "create-link"
                createLink.innerHTML = "Read More"
                createLink.setAttribute('href', short_url);
                
        
                createArticle.append(createImg);
                selectArticle.append(createArticle);
                
                createArticleContentCon.append(createSection,createTitle,createAbstract,createLink)
                createArticle.append(createArticleContentCon)

               
                ScrollReveal({ reset: true });
                //header section scroll reveal
                ScrollReveal().reveal('.news-title',{delay: 250});
                ScrollReveal().reveal('.news-date',{delay: 150});
                ScrollReveal().reveal('.news-headline',{delay: 50});


                //article section scroll reveal
                ScrollReveal().reveal('.article',{delay: 20});
                ScrollReveal().reveal('.article-img',{delay: 150});
                ScrollReveal().reveal('.article-section',{delay: 250});
                ScrollReveal().reveal('.article-title',{delay: 300});
                ScrollReveal().reveal('.article-abstract',{delay: 350});
                ScrollReveal().reveal('.create-link',{delay: 450});





            // }
        }
    }
    topHeadlines(topTen)



});
