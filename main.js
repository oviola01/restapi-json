let lista=[];

$(function(){
    let vegpont = "adatok.json";
    adatBeolvas(vegpont, megjelenit);
    console.log(lista);
}
);

function megjelenit(data){
    lista=data;
    console.log(data);
};

function megjelenit2(data){
    console.log(data);
};

function adatBeolvas(vegpont, meghivoFuggv){
    fetch(vegpont, { //ha írok bele methodot, akkor kell a paraméter (itt vegpont) után egy vessző
        method:"GET" //ezt nem muszáj beleírni, mert ez az alapértelmezett, de más esetekben, pl. POST, PUT, DELETE kell
        /* példa:
        method: "POST",
        body: JSON.stringify(adat) - ekkor kell az adatBeolvasba egy adat paraméter is; ez a body NEM a html bodyja, hanem a postos cucchoz egy kulcs!
        */
    })
    //.then((ebbe jönnek a paraméterek, vesszővel elválasztva) => ide írom azt, hogy mit akarok vele csinálni)
    .then((response) => response.json()) //ez kéri le a json fájlt
    .then((data) => /*console.log(data.adatlista) - ha csak egy dolgot csináltatok vele*/ {
         //ha több dolgot szeretnék a => után írni, akkor azokat {}-be helyezem
    /*
         console.log(data)
         lista = data.adatlista
         console.log(lista) //ua, mint a kikommentelt rövid, csak részletekre bontva a hosszabb dolgok példájaképp
    */
        meghivoFuggv(data.adatLista)
    }) //ez kéri le a json fájl adatait -> ha azon belül valamit el akarok érni, akkor azt .elerendoDologNeve módon érem el
    .catch((err) => console.log(err)); //.catch keresi a hibákat
     //response/data/err helyett x/y/z is lehetne, azért így neveztük el őket, mert beszédesebb
}