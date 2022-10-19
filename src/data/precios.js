let precios = [
    {
        "modelo": "Adam",
        "precio": 1137
    },
    {
        "modelo": "Alessandra",
        "precio": 1624
    },
    {
        "modelo": "Amex",
        "precio": 1271
    },
    {
        "modelo": "365",
        "precio": 1202
    },
    {
        "modelo": "Bambu",
        "precio": 1845
    },
    {
        "modelo": "Beppo",
        "precio": 1343
    },
    {
        "modelo": "Billion",
        "precio": 1167
    },
    {
        "modelo": "Boat",
        "precio": 1160
    },
    {
        "modelo": "Bravo",
        "precio": 1813
    },
    {
        "modelo": "Brava",
        "precio": 1748
    },
    {
        "modelo": "Bruce",
        "precio": 1202
    },
    {
        "modelo": "Bruno",
        "precio": 1236
    },
    {
        "modelo": "Cameron",
        "precio": 1104
    },
    {
        "modelo": "Celina",
        "precio": 1351
    },
    {
        "modelo": "Cedro",
        "precio": 1214
    },
    {
        "modelo": "Clo Clo",
        "precio": 1269
    },
    {
        "modelo": "Colin",
        "precio": 1731
    },
    {
        "modelo": "Dafne",
        "precio": 1353
    },
    {
        "modelo": "Danilo",
        "precio": 1343
    },
    {
        "modelo": "Denise",
        "precio": 1030
    },
    {
        "modelo": "Derek",
        "precio": 2046
    },
    {
        "modelo": "Donato",
        "precio": 1145
    },
    {
        "modelo": "Eliot",
        "precio": 1244
    },
    {
        "modelo": "Elisa",
        "precio": 1355
    },
    {
        "modelo": "Fabrizio",
        "precio": 1731
    },
    {
        "modelo": "F",
        "precio": 1731
    },
    {
        "modelo": "Gardenia",
        "precio": 1137
    },
    {
        "modelo": "Giraldo",
        "precio": 1039
    },
    {
        "modelo": "Guillian",
        "precio": 1218
    },
    {
        "modelo": "Iacovo",
        "precio": 1054
    },
    {
        "modelo": "Jacinta",
        "precio": 1081
    },
    {
        "modelo": "Jano",
        "precio": 1138
    },
    {
        "modelo": "Jasmine",
        "precio": 1236
    },
    {
        "modelo": "Jeffrey",
        "precio": 1316
    },
    {
        "modelo": "Lambert",
        "precio": 931
    },
    {
        "modelo": "Liam",
        "precio": 1186
    },
    {
        "modelo": "Liberty dama",
        "precio": 1137
    },
    {
        "modelo": "Liberty hombre",
        "precio": 1309
    },
    {
        "modelo": "Logan",
        "precio": 1137
    },
    {
        "modelo": "Machiatto",
        "precio": 1212
    },
    {
        "modelo": "Magnus",
        "precio": 1277
    },
    {
        "modelo": "Malva",
        "precio": 1343
    },
    {
        "modelo": "Marko",
        "precio": 1070
    },
    {
        "modelo": "Meryl",
        "precio": 1696
    },
    {
        "modelo": "Mikonos",
        "precio": 1171
    },
    {
        "modelo": "Milo",
        "precio": 2274
    },
    {
        "modelo": "Mujica dama",
        "precio": 1202
    },
    {
        "modelo": "Mujica hombre",
        "precio": 1400
    },
    {
        "modelo": "Murray",
        "precio": 1509
    },
    {
        "modelo": "Nogal",
        "precio": 1302
    },
    {
        "modelo": "Oliver",
        "precio": 2225
    },
    {
        "modelo": "Pirlo",
        "precio": 1150
    },
    {
        "modelo": "Gen",
        "precio": 817
    },
    {
        "modelo": "Kali",
        "precio": 874
    },
    {
        "modelo": "Prince",
        "precio": 1316
    },
    {
        "modelo": "Puma",
        "precio": 1894
    },
    {
        "modelo": "Queen",
        "precio": 1350
    },
    {
        "modelo": "Sauco",
        "precio": 1330
    },
    {
        "modelo": "Sharon",
        "precio": 13316
    },
    {
        "modelo": "Shizu",
        "precio": 1137
    },
    {
        "modelo": "Sholto",
        "precio": 1316
    },
    {
        "modelo": "Szifron dama",
        "precio": 1418
    },
    {
        "modelo": "Szifron hombre",
        "precio": 1479
    },
    {
        "modelo": "Teo",
        "precio": 1316
    },
    {
        "modelo": "Tristan",
        "precio": 1039
    },
    {
        "modelo": "Viggo",
        "precio": 1566
    },
    {
        "modelo": "Xavier",
        "precio": 1582
    },
    {
        "modelo": "Zigor",
        "precio": 1252
    }
]

function fetchPriceData(id){
    const PriceData = new Promise((resolve, reject)=>{

        if(id){
            setTimeout(()=>{
                resolve(precios)
            }, 2000);
            ;

        

        } else {
            setTimeout(()=>{
                reject({error: "error en resolver"})
            }, 2000)
        }
        
    })
    
    return PriceData
     
}

export  default fetchPriceData
