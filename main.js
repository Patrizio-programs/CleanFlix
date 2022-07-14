export async function get(){
    const info= 'data.json';
    const response = await fetch(info);
    const result = await response.json();
    console.table(result);
  

    const movieImage = document.createElement('img');
    movieImage.src = "https://cdn.sanity.io/images/dt5nrqzl/production/48168473d265770b4e3b14463da298c2794071a6-540x810.jpg";
    document.querySelector('#img1').appendChild(movieImage);
 
     const movieName = document.createElement('h1');
     movieName.innerHTML = result.movies[0].movieName
     document.querySelector('#movie1-des').appendChild(movieName);
 
     const movieDescription = document.createElement('p');
     movieDescription.innerHTML = result.movies[0].description;
     document.querySelector('#movie1-des').appendChild(movieDescription);

     const movieTrailer = document.getElementById('youtube');
        movieTrailer.href = result.movies[0].trailer;

             

   
 
     //Second Movie (Encanto)
 
     const movieImage2 = document.createElement('img');
     movieImage2.src = "https://cdn.sanity.io/images/dt5nrqzl/production/6ee05d2a75dbfecc1e6faef562b88505fb7a2e27-540x810.jpg";
     document.querySelector('#img2').appendChild(movieImage2);
 
     const movieName2 = document.createElement('h1');
     movieName2.innerHTML = result.movies[1].movieName
     document.querySelector('#movie2-des').appendChild(movieName2);
 
     const movieDescription2 = document.createElement('p');
     movieDescription2.innerHTML = result.movies[1].description;
     document.querySelector('#movie2-des').appendChild(movieDescription2);

       const movieTrailer2 = document.getElementById('youtube2');
         movieTrailer2.href = result.movies[1].trailer;
 
     //Third Movie (Toy Story)
 
     const movieImage3 = document.createElement('img');
     movieImage3.src = "https://cdn.sanity.io/images/dt5nrqzl/production/61c74d7431e876c37b5f7fafd08b54c82e3540fb-1000x1500.jpg";
     document.querySelector('#img3').appendChild(movieImage3);
 
     const movieName3 = document.createElement('h1');
     movieName3.innerHTML = result.movies[2].movieName
     document.querySelector('#movie3-des').appendChild(movieName3);
 
     const movieDescription3 = document.createElement('p');
     movieDescription3.innerHTML = result.movies[2].description;
     document.querySelector('#movie3-des').appendChild(movieDescription3);

         const movieTrailer3 = document.getElementById('youtube3');
         movieTrailer3.href = result.movies[2].trailer;
 
     //Fourth Movie (Dragon)
 
     const movieImage4 = document.createElement('img');
     movieImage4.src = "https://cdn.sanity.io/images/dt5nrqzl/production/f2435f35f8a395b0072f0b67fe2617f227837dc1-2000x3000.jpg";
     document.querySelector('#img4').appendChild(movieImage4);
 
     const movieName4 = document.createElement('h1');
     movieName4.innerHTML = result.movies[3].movieName
     document.querySelector('#movie4-des').appendChild(movieName4);
 
     const movieDescription4 = document.createElement('p');
     movieDescription4.innerHTML = result.movies[3].description;
     document.querySelector('#movie4-des').appendChild(movieDescription4);

         const movieTrailer4 = document.getElementById('youtube4');
         movieTrailer4.href = result.movies[3].trailer;
 
     //Fifth Movie ()
 
     const movieImage5 = document.createElement('img');
     movieImage5.src = "https://cdn.sanity.io/images/dt5nrqzl/production/7940d0e769af164eaa33a2dfa7f49cb17336fb4e-1000x1560.jpg";
     document.querySelector('#img5').appendChild(movieImage5);
 
     const movieName5 = document.createElement('h1');
     movieName5.innerHTML = result.movies[4].movieName
     document.querySelector('#movie5-des').appendChild(movieName5);
 
     const movieDescription5 = document.createElement('p');
     movieDescription5.innerHTML = result.movies[4].description;
     document.querySelector('#movie5-des').appendChild(movieDescription5);

         const movieTrailer5 = document.getElementById('youtube5');
         movieTrailer5.href = result.movies[4].trailer;
 
     //Sixth Movie (Soul)
 
     const movieImage6 = document.createElement('img');
     movieImage6.src = "https://cdn.sanity.io/images/dt5nrqzl/production/9c9321a22c3add8ca812593a3a045572bd20be70-800x1425.jpg";
     document.querySelector('#img6').appendChild(movieImage6);
 
     const movieName6 = document.createElement('h1');
     movieName6.innerHTML = result.movies[5].movieName
     document.querySelector('#movie6-des').appendChild(movieName6);
 
     const movieDescription6 = document.createElement('p');
     movieDescription6.innerHTML = result.movies[5].description;
     document.querySelector('#movie6-des').appendChild(movieDescription6);

         const movieTrailer6 = document.getElementById('youtube6');
         movieTrailer6.href = result.movies[5].trailer;
 
     //Seventh Movie (Brave)
 
     const movieImage7 = document.createElement('img');
     movieImage7.src = "https://cdn.sanity.io/images/dt5nrqzl/production/d88f572cedaeb1a182e1bae203768f344900bb3d-940x1495.png";
     document.querySelector('#img7').appendChild(movieImage7);
 
     const movieName7 = document.createElement('h1');
     movieName7.innerHTML = result.movies[6].movieName
     document.querySelector('#movie7-des').appendChild(movieName7);
 
     const movieDescription7 = document.createElement('p');
     movieDescription7.innerHTML = result.movies[6].description;
     document.querySelector('#movie7-des').appendChild(movieDescription7);
 
         const movieTrailer7 = document.getElementById('youtube7');
         movieTrailer7.href = result.movies[6].trailer;
     //Eighth Movie ()
 
     const movieImage8 = document.createElement('img');
     movieImage8.src = "https://cdn.sanity.io/images/dt5nrqzl/production/5383b4c6dadd466c78543da2eb4c25f64f07f5a8-259x383.jpg";
     document.querySelector('#img8').appendChild(movieImage8);
 
     const movieName8 = document.createElement('h1');
     movieName8.innerHTML = result.movies[7].movieName
     document.querySelector('#movie8-des').appendChild(movieName8);
 
     const movieDescription8 = document.createElement('p');
     movieDescription8.innerHTML = result.movies[7].description;
     document.querySelector('#movie8-des').appendChild(movieDescription8);
 
         const movieTrailer8 = document.getElementById('youtube8');
         movieTrailer8.href = result.movies[7].trailer;
     //Ninth Movie (Lion King)
 
     const movieImage9 = document.createElement('img');
     movieImage9.src = "https://cdn.sanity.io/images/dt5nrqzl/production/513005ba58d3390ec4d17a355167a7360fc7f3c8-1000x1409.jpg";
     document.querySelector('#img9').appendChild(movieImage9);
 
     const movieName9 = document.createElement('h1');
     movieName9.innerHTML = result.movies[8].movieName
     document.querySelector('#movie9-des').appendChild(movieName9);
 
     const movieDescription9 = document.createElement('p');
     movieDescription9.innerHTML = result.movies[8].description;
     document.querySelector('#movie9-des').appendChild(movieDescription9);
 
         const movieTrailer9 = document.getElementById('youtube9');
         movieTrailer9.href = result.movies[8].trailer;
     //Tenth Movie (Secret life of Pets)
 
     const movieImage10 = document.createElement('img');
     movieImage10.src = "https://cdn.sanity.io/images/dt5nrqzl/production/af59b34bbc01199572a812b7cd52e9be9bd7d519-1000x1426.jpg";
     document.querySelector('#img10').appendChild(movieImage10);
 
     const movieName10 = document.createElement('h1');
     movieName10.innerHTML = result.movies[9].movieName
     document.querySelector('#movie10-des').appendChild(movieName10);
 
     const movieDescription10 = document.createElement('p');
     movieDescription10.innerHTML = result.movies[9].description;
     document.querySelector('#movie10-des').appendChild(movieDescription10);
 
         const movieTrailer10 = document.getElementById('youtube10');
         movieTrailer10.href = result.movies[9].trailer;
     //Eleventh Movie ()
 
     const movieImage11 = document.createElement('img');
     movieImage11.src = "https://cdn.sanity.io/images/dt5nrqzl/production/73e56d9ad5e2f32b53dea51dd5fc212348e6ac60-1920x2560.jpg";
     document.querySelector('#img11').appendChild(movieImage11);
 
     const movieName11 = document.createElement('h1');
     movieName11.innerHTML = result.movies[10].movieName
     document.querySelector('#movie11-des').appendChild(movieName11);
 
     const movieDescription11 = document.createElement('p');
     movieDescription11.innerHTML = result.movies[10].description;
     document.querySelector('#movie11-des').appendChild(movieDescription11);
 
         const movieTrailer11 = document.getElementById('youtube11');
         movieTrailer11.href = result.movies[10].trailer;
     //Twelfth Movie ()
 
     const movieImage12 = document.createElement('img');
     movieImage12.src = "https://cdn.sanity.io/images/dt5nrqzl/production/122322319c5ea5a2a1c85e8e1f4ba3b8f198cd47-1382x2048.jpg";
     document.querySelector('#img12').appendChild(movieImage12);
 
     const movieName12 = document.createElement('h1');
     movieName12.innerHTML = result.movies[11].movieName
     document.querySelector('#movie12-des').appendChild(movieName12);
 
     const movieDescription12 = document.createElement('p');
     movieDescription12.innerHTML = result.movies[11].description;
     document.querySelector('#movie12-des').appendChild(movieDescription12);
 
         const movieTrailer12 = document.getElementById('youtube12');
         movieTrailer12.href = result.movies[11].trailer;
     //Thirteenth Movie

        const movieImage13 = document.createElement('img');
        movieImage13.src = 'https://cdn.sanity.io/images/dt5nrqzl/production/a2111ea80312859ee0c982c1bde3da39cc5f4b5a-1382x2048.jpg';
        document.querySelector('#img13').appendChild(movieImage13);

        const movieName13 = document.createElement('h1');
        movieName13.innerHTML = result.movies[12].movieName
        document.querySelector('#movie13-des').appendChild(movieName13);

        const movieDescription13 = document.createElement('p');
        movieDescription13.innerHTML = result.movies[12].description;
        document.querySelector('#movie13-des').appendChild(movieDescription13);

            const movieTrailer13 = document.getElementById('youtube13');
            movieTrailer13.href = result.movies[12].trailer;
        

        //Fourteenth Movie

        const movieImage14 = document.createElement('img');
        movieImage14.src = 'https://cdn.sanity.io/images/dt5nrqzl/production/3a78d778caef23376209cea554a21d6ba774fca3-770x1100.jpg';
        document.querySelector('#img14').appendChild(movieImage14);

        const movieName14 = document.createElement('h1');
        movieName14.innerHTML = result.movies[13].movieName
        document.querySelector('#movie14-des').appendChild(movieName14);

        const movieDescription14 = document.createElement('p');
        movieDescription14.innerHTML = result.movies[13].description;
        document.querySelector('#movie14-des').appendChild(movieDescription14);

            const movieTrailer14 = document.getElementById('youtube14');
            movieTrailer14.href = result.movies[13].trailer;
        //Fifteenth Movie
 
    
}


get()
    
   
    






