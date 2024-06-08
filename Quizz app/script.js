document.addEventListener("DOMContentLoaded", () => {

    const Geral = document.querySelector(".gerale");

    const Btnanime = document.querySelector("#anime");
    const Btngenshin = document.querySelector("#genshin");
    const Btnrobim = document.querySelector("#robim");
    
    const AnimePart = document.querySelector(".animepa");
    const Anime1 = document.querySelector(".firstquestionanime");
    const Anime2 = document.querySelector(".secondquestionanime");
    const Anime3 = document.querySelector(".thirdquestionanime");
    const Anime4 = document.querySelector(".fourquestionanime");
    const Anime5 = document.querySelector(".fivequestionanime");
    
    const GenshinPart = document.querySelector(".genshinpa");
    const Genshin1 = document.querySelector(".firstquestiongenshin");
    const Genshin2 = document.querySelector(".secondquestiongenshin");
    const Genshin3 = document.querySelector(".thirdquestiongenshin");
    const Genshin4 = document.querySelector(".fourquestiongenshin");
    const Genshin5 = document.querySelector(".fivetquestiongenshin");
    
    const RobimPart = document.querySelector(".robimpa");
    const Robim1 = document.querySelector(".firstquestionrob");
    const Robim2 = document.querySelector(".secondquestionrob");
    const Robim3 = document.querySelector(".thirdquestionrob");
    const Robim4 = document.querySelector(".fourquestionrob");
    const Robim5 = document.querySelector(".fivequestionrob");

    const TheEnd = document.querySelector(".theend");

    const CSoon = document.querySelector(".comming_soon");
    
    const elementsToHide = [
        Btnanime, Btngenshin, Btnrobim,
        AnimePart, Anime1, Anime2, Anime3, Anime4, Anime5,
        GenshinPart, Genshin1, Genshin2, Genshin3, Genshin4, Genshin5,
        RobimPart, Robim1, Robim2, Robim3, Robim4, Robim5, TheEnd, CSoon
    ];
    
    elementsToHide.forEach(element => {
        if (element) {
            element.style.display = 'none';
        }
    });

    document.getElementById('playone').addEventListener('click', () => {
        Geral.style.display = 'none';
        Btngenshin.style.display = 'block';
        Btnanime.style.display = 'block';
        Btnrobim.style.display = 'block';
    });

    document.getElementById('createone').addEventListener('click', () => {
            Geral.style.display = 'none';
            CSoon.style.display = 'block';
            document.body.style.backgroundColor = "#0c111b";
            //working 
    });





    
 
    let result = 0;



    //genshin



    document.getElementById('genshin').addEventListener('click', () => {
        Btngenshin.style.display = 'none';
        Btnanime.style.display = 'none';
        Btnrobim.style.display = 'none';
        GenshinPart.style.display = 'block';
        Genshin1.style.display = 'block';
        Genshin2.style.display = 'none';
        Genshin3.style.display = 'none';
        Genshin4.style.display = 'none';
        Genshin5.style.display = 'none';
        document.body.style.backgroundColor = "#1b222c";
    });


    const answersfrgen = document.querySelectorAll('.firstquestiongenshin [id^="answer"]');
   

    // Função para e atualizar o resultado
    function handleAnswerClick(correctAnswerId) {
        return function (e) {
            // Atualiza o resultado se a resposta estiver correta
            if (e.target.id === correctAnswerId) {
                result += 1;
            }
            console.log("Result: ", result); // Para depuração, mostrar o resultado atual no console
        };
    }

    answersfrgen.forEach(answer => {
        answer.addEventListener('click', (e) => {
            Genshin1.style.display = 'none';
            Genshin2.style.display = 'block';
            Genshin3.style.display = 'none';
            Genshin4.style.display = 'none';
            Genshin5.style.display = 'none';
            handleAnswerClick("answer2")(e); // Chama a função para atualizar o resultado
        });
    });

    const answersndgen = document.querySelectorAll('.secondquestiongenshin [id^="answer"]');

    answersndgen.forEach(answer => {
        answer.addEventListener('click', (e) => {
            Genshin1.style.display = 'none';
            Genshin2.style.display = 'none';
            Genshin3.style.display = 'block';
            Genshin4.style.display = 'none';
            Genshin5.style.display = 'none';
            handleAnswerClick("answer2")(e); // Chama a função para atualizar o resultado
        });
    });

    const answersrdgen = document.querySelectorAll('.thirdquestiongenshin [id^="answer"]');

    answersrdgen.forEach(answer => {
        answer.addEventListener('click', (e) => {
            Genshin1.style.display = 'none';
            Genshin2.style.display = 'none';
            Genshin3.style.display = 'none';
            Genshin4.style.display = 'block';
            Genshin5.style.display = 'none';
            handleAnswerClick("answer3")(e); // Chama a função para atualizar o resultado
        });
    });

    const answersfogen = document.querySelectorAll('.fourquestiongenshin [id^="answer"]');

    answersfogen.forEach(answer => {
        answer.addEventListener('click', (e) => {
            Genshin1.style.display = 'none';
            Genshin2.style.display = 'none';
            Genshin3.style.display = 'none';
            Genshin4.style.display = 'none';
            Genshin5.style.display = 'block';
            handleAnswerClick("answer1")(e); // Chama a função para atualizar o resultado
        });
    });

    const answersfivegen = document.querySelectorAll('.fivetquestiongenshin [id^="answer"]');

    answersfivegen.forEach(answer => {
        answer.addEventListener('click', (e) => {
            Genshin1.style.display = 'none';
            Genshin2.style.display = 'none';
            Genshin3.style.display = 'none';
            Genshin4.style.display = 'none';
            Genshin5.style.display = 'none';
            GenshinPart.style.display = 'none';
            TheEnd.style.display = 'block';
            handleAnswerClick("answer1")(e); // Chama a função para atualizar o resultado
            document.querySelector('.result').textContent = `${result}`; // Atualiza o resultado final no div
        });
    });









    //anime


    document.getElementById('anime').addEventListener('click', () => {
        Btngenshin.style.display = 'none';
        Btnanime.style.display = 'none';
        Btnrobim.style.display = 'none';
        AnimePart.style.display = 'block';
        Anime1.style.display = 'block';
        Anime2.style.display = 'none';
        Anime3.style.display = 'none';
        Anime4.style.display = 'none';
        Anime5.style.display = 'none';
        document.body.style.backgroundColor = "#200432";
    });


    const answersfran = document.querySelectorAll('.firstquestionanime [id^="answer"]');
    // Função para e atualizar o resultado
    function handleAnswerClick(correctAnswerId) {
        return function (e) {
            // Atualiza o resultado se a resposta estiver correta
            if (e.target.id === correctAnswerId) {
                result += 1;
            }
            console.log("Result: ", result); // Para depuração, mostrar o resultado atual no console
        };
    }

    answersfran.forEach(answer => {
        answer.addEventListener('click', (e) => {
            Anime1.style.display = 'none';
            Anime2.style.display = 'block';
            Anime3.style.display = 'none';
            Anime4.style.display = 'none';
            Anime5.style.display = 'none';
            handleAnswerClick("answer2")(e); // Chama a função para atualizar o resultado
        });
    });

    const answersndan = document.querySelectorAll('.secondquestionanime [id^="answer"]');

    answersndan.forEach(answer => {
        answer.addEventListener('click', (e) => {
            Anime1.style.display = 'none';
            Anime2.style.display = 'none';
            Anime3.style.display = 'block';
            Anime4.style.display = 'none';
            Anime5.style.display = 'none';
            handleAnswerClick("answer3")(e); // Chama a função para atualizar o resultado
        });
    });

    const answersrdan = document.querySelectorAll('.thirdquestionanime [id^="answer"]');

    answersrdan.forEach(answer => {
        answer.addEventListener('click', (e) => {
            Anime1.style.display = 'none';
            Anime2.style.display = 'none';
            Anime3.style.display = 'none';
            Anime4.style.display = 'block';
            Anime5.style.display = 'none';
            handleAnswerClick("answer2")(e); // Chama a função para atualizar o resultado
        });
    });

    const answersforan = document.querySelectorAll('.fourquestionanime [id^="answer"]');

    answersforan.forEach(answer => {
        answer.addEventListener('click', (e) => {
            Anime1.style.display = 'none';
            Anime2.style.display = 'none';
            Anime3.style.display = 'none';
            Anime4.style.display = 'none';
            Anime5.style.display = 'block';
            handleAnswerClick("answer2")(e); // Chama a função para atualizar o resultado
        });
    });

    const answersfivean = document.querySelectorAll('.fivequestionanime [id^="answer"]');

    answersfivean.forEach(answer => {
        answer.addEventListener('click', (e) => {
            Anime1.style.display = 'none';
            AnimePart.style.display = 'none';
            Anime2.style.display = 'none';
            Anime3.style.display = 'none';
            Anime4.style.display = 'none';
            Anime5.style.display = 'none';
            TheEnd.style.display = 'block';
            handleAnswerClick("answer3")(e); // Chama a função para atualizar o resultado
            document.querySelector('.result').textContent = `${result}`; // Atualiza o resultado final no div
        });
    });




    //Robim


    document.getElementById('robim').addEventListener('click', () => {
        Btngenshin.style.display = 'none';
        Btnanime.style.display = 'none';
        Btnrobim.style.display = 'none';
        RobimPart.style.display = 'block';
        Robim1.style.display = 'block';
        Robim2.style.display = 'none';
        Robim3.style.display = 'none';
        Robim4.style.display = 'none';
        Robim5.style.display = 'none';
        document.body.style.backgroundColor = "#032820";
    });


    const answersfrro = document.querySelectorAll('.firstquestionrob [id^="answer"]');
    // Função para e atualizar o resultado
    function handleAnswerClick(correctAnswerId) {
        return function (e) {
            // Atualiza o resultado se a resposta estiver correta
            if (e.target.id === correctAnswerId) {
                result += 1;
            }
            console.log("Result: ", result); // Para depuração, mostrar o resultado atual no console
        };
    }

    answersfrro.forEach(answer => {
        answer.addEventListener('click', (e) => {
            Robim1.style.display = 'none';
            Robim2.style.display = 'block';
            Robim3.style.display = 'none';
            Robim4.style.display = 'none';
            Robim5.style.display = 'none';
            handleAnswerClick("answer1")(e); // Chama a função para atualizar o resultado
        });
    });

    const answersndro = document.querySelectorAll('.secondquestionrob [id^="answer"]');

    answersndro.forEach(answer => {
        answer.addEventListener('click', (e) => {
            Robim1.style.display = 'none';
            Robim2.style.display = 'none';
            Robim3.style.display = 'block';
            Robim4.style.display = 'none';
            Robim5.style.display = 'none';
            handleAnswerClick("answer2")(e); // Chama a função para atualizar o resultado
        });
    });

    const answersrdro = document.querySelectorAll('.thirdquestionrob [id^="answer"]');

    answersrdro.forEach(answer => {
        answer.addEventListener('click', (e) => {
            Robim1.style.display = 'none';
            Robim2.style.display = 'none';
            Robim3.style.display = 'none';
            Robim4.style.display = 'block';
            Robim5.style.display = 'none';
            handleAnswerClick("answer2")(e); // Chama a função para atualizar o resultado
        });
    });

    const answersforro = document.querySelectorAll('.fourquestionrob [id^="answer"]');

    answersforro.forEach(answer => {
        answer.addEventListener('click', (e) => {
            Robim1.style.display = 'none';
            Robim2.style.display = 'none';
            Robim3.style.display = 'none';
            Robim4.style.display = 'none';
            Robim5.style.display = 'block';
            handleAnswerClick("answer4")(e); // Chama a função para atualizar o resultado
        });
    });

    const answersfivero = document.querySelectorAll('.fivequestionrob [id^="answer"]');

    answersfivero.forEach(answer => {
        answer.addEventListener('click', (e) => {
            Robim1.style.display = 'none';
            Robim2.style.display = 'none';
            Robim3.style.display = 'none';
            Robim4.style.display = 'none';
            Robim5.style.display = 'none';
            RobimPart.style.display = 'none';
            TheEnd.style.display = 'block';
            handleAnswerClick("answer1")(e); // Chama a função para atualizar o resultado
            document.querySelector('.result').textContent = `${result}`; // Atualiza o resultado final no div
        });
    });


    //comming soon

    


    

    const resetButton = document.querySelector('.Reset');
    resetButton.addEventListener('click', () => {
        location.reload();
    });
    const resetButton2 = document.querySelector('#Reset');
    resetButton2.addEventListener('click', () => {
        location.reload();
    });


    })