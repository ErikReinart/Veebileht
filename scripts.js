let map;
let markers = [];

const poed = [
    {
        name: "Tartu Lõunakeskuse Coop",
        lat: 58.35768128096282,
        lng: 26.67808922484695,
        address: "Lääneringtee 39, 50501 Tartu",
        category: "Coop",
    },
    {
        name: "Karete Coop",
        lat: 58.34996200749244,
        lng: 26.72375077254459,
        address: "Jalaka 34, 50109 Tartu",
        category: "Coop",
    },
    {
        name: "Maarjamõisa Coop",
        lat: 58.3695701794108,
        lng: 26.689956697266656,
        address: "Ravila tn 14d, 50411 Tartu",
        category: "Coop",
    },
    {
        name: "Lembitu Coop",
        lat: 58.36992161344271,
        lng: 26.710055977389487,
        address: "Lembitu tn 2, 50406 Tartu",
        category: "Coop",
    },
    {
        name: "Kvartali Coop",
        lat: 58.377120327972634,
        lng: 26.727841215513227,
        address: "Riia tn 2a, 51004 Tartu",
        category: "Coop",
    },
    {
        name: "Eedeni Coop",
        lat: 58.37318498885992,
        lng: 26.750668425134773,
        address: "Kalda tee 1c, 50703 Tartu",
        category: "Coop",
    },
    {
        name: "Kivilinna Coop",
        lat: 58.379567425151286,
        lng: 26.764700142917913,
        address: "Jaama 173, 50705 Tartu",
        category: "Coop",
    },
    {
        name: "Kivi Coop",
        lat: 58.38248452648974,
        lng: 26.728625355199977,
        address: "Narva mnt 25a, 51009 Tartu",
        category: "Coop",
    },
    {
        name: "Ujula Coop",
        lat: 58.3864875293511,
        lng: 26.72425267376624,
        address: "Ujula 2, 51008 Tartu",
        category: "Coop",
    },
    {
        name: "Mõisavahe Coop",
        lat: 58.37180215034877,
        lng: 26.779448621713147,
        address: "Mõisavahe tn 34c, 50708 Tartu",
        category: "Coop",
    },
    {
        name: "Kvissentali Coop",
        lat: 58.40169495827154,
        lng: 26.708951020438484,
        address: "Aruküla tee 5, 50303 Tartu",
        category: "Coop",
    },
    {
        name: "Raadimõisa Coop",
        lat: 58.402815176781125,
        lng: 26.7415251539619,
        address: "Kaupmehe tn 2, Raadi, 60532 Tartu maakond",
        category: "Coop",
    },
    {
        name: "Raadi selver",
        lat: 58.40822917433488,
        lng: 26.750161069354558,
        address: "Nõlvakaare tn 4, Raadi, 60532 Tartu maakond",
        category: "Selver",
    },
    {
        name: "Vahi Selver",
        lat: 58.401652034056035,
        lng: 26.72075899506296,
        address: "Vahi tn 62, 50304 Tartu",
        category: "Selver",
    },
    {
        name: "Jaamamõisa Selver",
        lat: 58.381571091874456,
        lng: 26.751495639759643,
        address: "Jaama 74, 50605 Tartu",
        category: "Selver",
    },
    {
        name: "Raatuse Selver ABC",
        lat: 58.38234141909083,
        lng: 26.730632336554574,
        address: "Raatuse 20, 50603 Tartu",
        category: "Selver",
    },
    {
        name: "Selver Annelinn",
        lat: 58.36855897734316,
        lng: 26.766936980439,
        address: "Kalda tee 43, 50707 Tartu",
        category: "Selver",
    },
    {
        name: "Sõbra Selver",
        lat: 58.36407176417862,
        lng: 26.740864427435156,
        address: "Sõbra 41, 50106 Tartu",
        category: "Selver",
    },
    {
        name: "Aardla Selver",
        lat: 58.35743801265218,
        lng: 26.72144096237052,
        address: "Võru 77, 50112 Tartu",
        category: "Selver",
    },
    {
        name: "Rukkilille Selver ABC",
        lat: 58.385331375691514,
        lng: 26.694826202629546,
        address: "Friedebert Tuglase 14, 51014 Tartu",
        category: "Selver",
    },
    {
        name: "Veeriku Selver",
        lat: 58.37626494306758,
        lng: 26.697037752519083,
        address: "Vitamiini 1, 50412 Tartu",
        category: "Selver",
    },
    {
        name: "Ümera Selver ABC",
        lat: 58.36579114106313,
        lng: 26.701672871241843,
        address: "Riia tn 79, 50406 Tartu",
        category: "Selver",
    },
    {
        name: "Ringtee Selver",
        lat: 58.353291344019,
        lng: 26.68649569106639,
        address: "Aardla 114, 50415 Tartu",
        category: "Selver",
    },
    {
        name: "Puiestee Rimi",
        lat: 58.39616005112132,
        lng: 26.714135484943732,
        address: "Puiestee t. 2, 50303 Tartu",
        category: "Rimi",
    },
    {
        name: "Kaunase pst Rimi",
        lat: 58.37390550551978,
        lng: 26.767670844079714,
        address: "Kaunase pst 21, 50706 Tartu",
        category: "Rimi",
    },
    {
        name: "Tuglase Rimi",
        lat: 58.3849796735635,
        lng: 26.69177960812243,
        address: "Friedebert Tuglase 19, 51006 Tartu",
        category: "Rimi",
    },
    {
        name: "Tasku Rimi",
        lat: 58.37816814405571,
        lng: 26.730993846237904,
        address: "Turu 2, 51004 Tartu",
        category: "Rimi",
    },
    {
        name: "Tartu Lõunakeskuse Rimi",
        lat: 58.35824791422327,
        lng: 26.675004257344437,
        address: "Ringtee 75, 50501 Tartu",
        category: "Rimi",
    },
    {
        name: "Tartu kesklinna Rimi",
        lat: 58.37805690108848,
        lng: 26.72455341070582,
        address: "Küüni tn 7, 51004 Tartu",
        category: "Rimi",
    },
    {
        name: "Tähe Rimi",
        lat: 58.37047090703843,
        lng: 26.7270333522903,
        address: "Tähe 19, 50103 Tartu",
        category: "Rimi",
    },
    {
        name: "Tartu Rebase Rimi",
        lat: 58.36833669594053,
        lng: 26.73912916372271,
        address: "Rebase tn 10, 50104 Tartu",
        category: "Rimi",
    },
    {
        name: "Aardla Rimi",
        lat: 58.356152323271715,
        lng: 26.72251497348,
        address: "Võru 170, 50112 Tartu",
        category: "Rimi",
    },
    {
        name: "Sepa Rimi",
        lat: 58.349216831990645,
        lng: 26.739571421572013,
        address: "Sepa tn 21, 50105 Tartu",
        category: "Rimi",
    },
    {
        name: "Grossi Toidukaubad",
        lat: 58.378268094103966,
        lng: 26.735095242867132,
        address: "Soola tn 7, 51004 Tartu",
        category: "Muu",
    },
    {
        name: "Grossi Toidukaubad",
        lat: 58.40791517416713,
        lng: 26.747090258232245,
        address: "Keskuse tee 2, Raadi, 60534 Tartu maakond",
        category: "Muu",
    },
    {
        name: "Meie Toidukaubad Karlova",
        lat: 58.36810363059533,
        lng: 26.721072016712906,
        address: "Võru 47a, 50111 Tartu",
        category: "Muu",
    },
    {
        name: "Bolt Market, Soola",
        lat: 58.377606077828254,
        lng: 26.7336378460471,
        address: "Soola tn 3, 51013 Tartu",
        category: "Muu",
    },
    {
        name: "A 1000 Market Annelinn",
        lat: 58.37020438151321,
        lng: 26.76428915377258,
        address: "Kalda tee 39, 50704 Tartu",
        category: "Muu",
    },
    {
        name: "Tartu A1000Market",
        lat: 58.34780595198496,
        lng: 26.743638507634103,
        address: "Tehnika 13, 50104 Tartu",
        category: "Muu",
    },
    {
        name: "Lidl",
        lat: 58.355255891328795,
        lng: 26.675108426014337,
        address: "Optika 21, 50411 Tartu",
        category: "Muu",
    },
    {
        name: "Lidl",
        lat: 58.36980868052439,
        lng: 26.766465275687104,
        address: "Kalda tee 29, 50704 Tartu",
        category: "Muu",
    },
    {
        name: "Maxima XX",
        lat: 58.36481415802348,
        lng: 26.719578632001227,
        address: "Võru 55 F, 50111 Tartu",
        category: "Maxima",
    },
    {
        name: "Ilmatsalu Maxima X",
        lat: 58.37841480481379,
        lng: 26.68505866322914,
        address: "Ilmatsalu tn 11, 50408 Tartu",
        category: "Maxima",
    },
    {
        name: "Turu Maxima XX",
        lat: 58.374680591004065,
        lng: 26.736101388387297,
        address: "Turu 14, 51004 Tartu",
        category: "Maxima",
    },
    {
        name: "Maxima Х",
        lat: 58.37852653971545,
        lng: 26.74999819712141,
        address: "Anne tn 40, 50603 Tartu",
        category: "Maxima",
    },
    {
        name: "Raadi Maxima",
        lat: 58.3918127162075,
        lng: 26.73052645028166,
        address: "Narva mnt 112, 50303 Tartu",
        category: "Maxima",
    },
    {
        name: "Maxima X",
        lat: 58.402117381770765,
        lng: 26.722116924631546,
        address: "Piparmündi tn 1, Raadi, 60534 Tartu maakond",
        category: "Maxima",
    },
    {
        name: "Maxima X Anne",
        lat: 58.37512096034327,
        lng: 26.756203378133232,
        address: "Anne tn 57, 50703 Tartu",
        category: "Maxima",
    },
    {
        name: "Maxima XX",
        lat: 58.37122225791286,
        lng: 26.76304175022067,
        address: "Kalda tee 15, 50703 Tartu",
        category: "Maxima",
    },
    {
        name: "Maxima X Kalda tee",
        lat: 58.370062502052846,
        lng: 26.768305696173158,
        address: "Kalda tee 32, 50707 Tartu",
        category: "Maxima",
    },
    {
        name: "Annelinna Prisma",
        lat: 58.37598183504505,
        lng: 26.78050132308186,
        address: "Nõlvaku tn 2, 50708 Tartu",
        category: "Muu",
    },
    {
        name: "Prisma Sõbra",
        lat: 58.36565701633862,
        lng: 26.744634509077926,
        address: "Sõbra 58, 51013 Tartu",
        category: "Muu",
    },
    
];

// Define icons for each category
const categoryIcons = {
    Maxima: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png",
    Rimi: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
    Selver: "https://maps.google.com/mapfiles/ms/icons/yellow-dot.png",
    Muu: "https://maps.google.com/mapfiles/ms/icons/green-dot.png",
    Coop: "https://maps.google.com/mapfiles/ms/icons/ltblue-dot.png",
};

// Google mapsi seadistamine
function initMap() {
    const tartuKeskkoht = { lat: 58.377, lng: 26.729 };

    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: tartuKeskkoht,
    });

    // Lisa poodidele markerid
    poed.forEach((pood) => {
        const marker = new google.maps.Marker({
            position: { lat: pood.lat, lng: pood.lng },
            map,
            title: pood.name,
            icon: categoryIcons[pood.category],
        });

        markers.push({ marker, pood });

        // Näita poe infot, kui vajutatakse tema markerile
        const poeInfo = new google.maps.InfoWindow({
            content: `<h2>${pood.name}</h2><p2>${pood.address}</p2>`,
        });

        marker.addListener("click", () => {
            poeInfo.open(map, marker);
        });
    });
}

function filterMarkers() {
    const valitudPoekett = document.getElementById("katekooriaFilter").value;

    markers.forEach(({ marker, pood }) => {
        if (valitudPoekett === "all" || pood.category === valitudPoekett) {
            marker.setVisible(true);
        } else {
            marker.setVisible(false);
        }
    });
}
