let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
let songTitle = document.getElementById("songTitle")
let all = document.getElementById("all");
let romantic = document.getElementById("romantic");
let melodious = document.getElementById("melodious");
let comedy = document.getElementById("comedy");
let drama = document.getElementById("drama");
let action = document.getElementById("action");





let musicList = [{
        id: 1,
        image: "https://res.cloudinary.com/dlovqnrza/image/upload/v1701082779/bb_lqaajs.jpg",
        movie: "Bengaluru Boys",
        song: "https://res.cloudinary.com/dlovqnrza/video/upload/v1701082350/iSongs.info_01_-_Neenene_Beku_a5eivm.mp3",
        mood: "Energetic",
        genre: "Comedy"
    },
    {
        id: 2,
        image: "https://res.cloudinary.com/dlovqnrza/image/upload/v1701083288/Bettada-Hoovu-Kannada-Songs-Download_epcb1w.jpg",
        movie: "Bettada Hoovu",
        song: "https://res.cloudinary.com/dlovqnrza/video/upload/v1701083039/iSongs.info_01_-_Bettada_Hoovu_pfyzgv.mp3",
        mood: "Romantic",
        genre: "Drama"
    },
    {
        id: 3,
        image: "https://res.cloudinary.com/dlovqnrza/image/upload/v1701114035/r1_m7xvkh.jpg",
        movie: "Sthabda",
        song: "https://res.cloudinary.com/dlovqnrza/video/upload/v1701083674/iSongs.info_01_-_Mudhsi_Mudhsi_l4ztbc.mp3",
        mood: "Melodious",
        genre: "Action"
    },

    {
        id: 4,
        image: "https://res.cloudinary.com/dlovqnrza/image/upload/v1701114321/r2_bqznln.jpg",
        movie: "Paramwah",
        song: "https://res.cloudinary.com/dlovqnrza/video/upload/v1701083989/iSongs.info_01_-_Bhoorameli.mp3_yyv15r.mp3",
        mood: "Energetic",
        genre: "Comedy"
    },
    {
        id: 5,
        image: "https://res.cloudinary.com/dlovqnrza/image/upload/v1701084984/Rangasamudra-2023-Kailasa-250x250_p8yslb.jpg",
        movie: "Rangasamudra",
        song: "https://res.cloudinary.com/dlovqnrza/video/upload/v1701084978/iSongs.info_01_-_Kailasa_vj8rpg.mp3",
        mood: "Romantic",
        genre: "Drama"
    },
    {
        id: 6,
        image: "https://res.cloudinary.com/dlovqnrza/image/upload/v1701085628/DDD-2023-Naanemba-Swarthava-Bittu-250x250_vm5grx.jpg",
        movie: "DDD",
        song: "https://res.cloudinary.com/dlovqnrza/video/upload/v1701085730/iSongs.info_01_-_Devarachaaya_Vajrahasthya_q4kqf9.mp3",
        mood: "Melodious",
        genre: "Action"
    },

    {
        id: 7,
        image: "https://res.cloudinary.com/dlovqnrza/image/upload/v1701085929/Risk-2023-Sogasige-Merugu-250x250_wqhjac.jpg",
        movie: "Risk",
        song: "https://res.cloudinary.com/dlovqnrza/video/upload/v1701085923/iSongs.info_01_-_Sogasige_Merugu_jkqsld.mp3",
        mood: "Energetic",
        genre: "Romantic"
    },
    {
        id: 8,
        image: "https://res.cloudinary.com/dlovqnrza/image/upload/v1701086058/Ghost-2023-Fanthem-250x250_e6ptqf.jpg",
        movie: "Ghost",
        song: "https://res.cloudinary.com/dlovqnrza/video/upload/v1701086078/iSongs.info_01_-_Ghost_Theme_Music_gf0s7l.mp3",
        mood: "Romantic",
        genre: "Drama"
    },
    {
        id: 9,
        image: "https://res.cloudinary.com/dlovqnrza/image/upload/v1701086220/Trigger-2023-Hey-Scooby-Dooba-250x250_l3i7j0.jpg",
        movie: "Trigger",
        song: "https://res.cloudinary.com/dlovqnrza/video/upload/v1701086218/iSongs.info_01_-_Hey_Scooby_Dooba_slatry.mp3",
        mood: "Melodious",
        genre: "Action"
    },


    {
        id: 10,
        image: "https://res.cloudinary.com/dlovqnrza/image/upload/v1701086406/Soneyeah-2023-250x250_vj2zka.jpg",
        movie: "Soneyeah",
        song: "https://res.cloudinary.com/dlovqnrza/video/upload/v1701086404/iSongs.info_01_-_Soneyeah_kvfdbn.mp3",
        mood: "Energetic",
        genre: "Comedy"
    },
    {
        id: 11,
        image: "https://res.cloudinary.com/dlovqnrza/image/upload/v1701086533/HanuMan-Kannada-2023-Hanuman-Chalisa-250x250_j5hvoc.jpg",
        movie: "Hanuman",
        song: "https://res.cloudinary.com/dlovqnrza/video/upload/v1701086528/iSongs.info_01_-_Hanuman_Chalisa_rrkmfl.mp3",
        mood: "Romantic",
        genre: "Drama"
    },
    {
        id: 12,
        image: "https://res.cloudinary.com/dlovqnrza/image/upload/v1701086664/Yako-Summane-2023-250x250_tby8dg.jpg",
        movie: "Yako Summane",
        song: "https://res.cloudinary.com/dlovqnrza/video/upload/v1701086688/iSongs.info_01_-_Yako_Summane_vlthnt.mp3",
        mood: "Melodious",
        genre: "Romance"
    },


]
song.onloadedmetadata = function() {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause() {
    if (song.paused) {
        song.play();
        ctrlIcon.src = "https://res.cloudinary.com/dlovqnrza/image/upload/v1701111567/pause_zodcim.png";
    } else {
        song.pause();
        ctrlIcon.src = "https://res.cloudinary.com/dlovqnrza/image/upload/v1701111526/play-button-arrowhead_rutg8u.png";
    }
}

song.ontimeupdate = function() {
    progress.value = song.currentTime;
}

progress.oninput = function() {
    song.currentTime = progress.value;
}

if (song.play()) {
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500)
}

progress.onchange = function() {
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.src = "https://res.cloudinary.com/dlovqnrza/image/upload/v1701111567/pause_zodcim.png";

}


// Add these functions to your existing JavaScript
let currentSongIndex = 0;

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % musicList.length;
    loadSelectedSong();
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + musicList.length) % musicList.length;
    loadSelectedSong();
}

function loadSelectedSong() {
    const selectedSong = musicList[currentSongIndex];
    document.getElementById("songimage").src = selectedSong.image;
    document.getElementById("song").src = selectedSong.song;
    document.getElementById("songTitle").textContent = selectedSong.movie;


    // Optional: Automatically play the selected song
    playPause();
    musicList = [{
            id: 1,
            image: "https://res.cloudinary.com/dlovqnrza/image/upload/v1701082779/bb_lqaajs.jpg",
            movie: "Bengaluru Boys",
            song: "https://res.cloudinary.com/dlovqnrza/video/upload/v1701082350/iSongs.info_01_-_Neenene_Beku_a5eivm.mp3",
            mood: "Energetic",
            genre: "Comedy"
        },
        {
            id: 2,
            image: "https://res.cloudinary.com/dlovqnrza/image/upload/v1701083288/Bettada-Hoovu-Kannada-Songs-Download_epcb1w.jpg",
            movie: "Bettada Hoovu",
            song: "https://res.cloudinary.com/dlovqnrza/video/upload/v1701083039/iSongs.info_01_-_Bettada_Hoovu_pfyzgv.mp3",
            mood: "Romantic",
            genre: "Drama"
        },
        {
            id: 3,
            image: "https://res.cloudinary.com/dlovqnrza/image/upload/v1701114035/r1_m7xvkh.jpg",
            movie: "Sthabda",
            song: "https://res.cloudinary.com/dlovqnrza/video/upload/v1701083674/iSongs.info_01_-_Mudhsi_Mudhsi_l4ztbc.mp3",
            mood: "Melodious",
            genre: "Action"
        },

        {
            id: 4,
            image: "https://res.cloudinary.com/dlovqnrza/image/upload/v1701114321/r2_bqznln.jpg",
            movie: "Paramwah",
            song: "https://res.cloudinary.com/dlovqnrza/video/upload/v1701083989/iSongs.info_01_-_Bhoorameli.mp3_yyv15r.mp3",
            mood: "Energetic",
            genre: "Comedy"
        },
        {
            id: 5,
            image: "https://res.cloudinary.com/dlovqnrza/image/upload/v1701084984/Rangasamudra-2023-Kailasa-250x250_p8yslb.jpg",
            movie: "Rangasamudra",
            song: "https://res.cloudinary.com/dlovqnrza/video/upload/v1701084978/iSongs.info_01_-_Kailasa_vj8rpg.mp3",
            mood: "Romantic",
            genre: "Drama"
        },
        {
            id: 6,
            image: "https://res.cloudinary.com/dlovqnrza/image/upload/v1701085628/DDD-2023-Naanemba-Swarthava-Bittu-250x250_vm5grx.jpg",
            movie: "DDD",
            song: "https://res.cloudinary.com/dlovqnrza/video/upload/v1701085730/iSongs.info_01_-_Devarachaaya_Vajrahasthya_q4kqf9.mp3",
            mood: "Melodious",
            genre: "Action"
        },

        {
            id: 7,
            image: "https://res.cloudinary.com/dlovqnrza/image/upload/v1701085929/Risk-2023-Sogasige-Merugu-250x250_wqhjac.jpg",
            movie: "Risk",
            song: "https://res.cloudinary.com/dlovqnrza/video/upload/v1701085923/iSongs.info_01_-_Sogasige_Merugu_jkqsld.mp3",
            mood: "Energetic",
            genre: "Romantic"
        },
        {
            id: 8,
            image: "https://res.cloudinary.com/dlovqnrza/image/upload/v1701086058/Ghost-2023-Fanthem-250x250_e6ptqf.jpg",
            movie: "Ghost",
            song: "https://res.cloudinary.com/dlovqnrza/video/upload/v1701086078/iSongs.info_01_-_Ghost_Theme_Music_gf0s7l.mp3",
            mood: "Romantic",
            genre: "Drama"
        },
        {
            id: 9,
            image: "https://res.cloudinary.com/dlovqnrza/image/upload/v1701086220/Trigger-2023-Hey-Scooby-Dooba-250x250_l3i7j0.jpg",
            movie: "Trigger",
            song: "https://res.cloudinary.com/dlovqnrza/video/upload/v1701086218/iSongs.info_01_-_Hey_Scooby_Dooba_slatry.mp3",
            mood: "Melodious",
            genre: "Action"
        },


        {
            id: 10,
            image: "https://res.cloudinary.com/dlovqnrza/image/upload/v1701086406/Soneyeah-2023-250x250_vj2zka.jpg",
            movie: "Soneyeah",
            song: "https://res.cloudinary.com/dlovqnrza/video/upload/v1701086404/iSongs.info_01_-_Soneyeah_kvfdbn.mp3",
            mood: "Energetic",
            genre: "Comedy"
        },
        {
            id: 11,
            image: "https://res.cloudinary.com/dlovqnrza/image/upload/v1701086533/HanuMan-Kannada-2023-Hanuman-Chalisa-250x250_j5hvoc.jpg",
            movie: "Hanuman",
            song: "https://res.cloudinary.com/dlovqnrza/video/upload/v1701086528/iSongs.info_01_-_Hanuman_Chalisa_rrkmfl.mp3",
            mood: "Romantic",
            genre: "Drama"
        },
        {
            id: 12,
            image: "https://res.cloudinary.com/dlovqnrza/image/upload/v1701086664/Yako-Summane-2023-250x250_tby8dg.jpg",
            movie: "Yako Summane",
            song: "https://res.cloudinary.com/dlovqnrza/video/upload/v1701086688/iSongs.info_01_-_Yako_Summane_vlthnt.mp3",
            mood: "Melodious",
            genre: "Romance"
        },


    ]
}

// Update playPause function
function playPause() {
    if (song.paused) {
        song.play();
        ctrlIcon.src = "https://res.cloudinary.com/dlovqnrza/image/upload/v1701111567/pause_zodcim.png";
    } else {
        song.pause();
        ctrlIcon.src = "https://res.cloudinary.com/dlovqnrza/image/upload/v1701111428/play-button-arrowhead_rutg8u.png";
    }
}

function filterSongsByGenre(genre) {
    const filteredSongs = musicList.filter(song => song.genre.toLowerCase() === genre.toLowerCase() || song.mood.toLowerCase() === genre.toLowerCase());
    if (filteredSongs.length > 0) {
        currentSongIndex = 0;
        musicList = filteredSongs;
        loadSelectedSong();
    } else {
        alert("No songs found in the selected genre.");
    }
}


all.addEventListener("click", function() {
    displayAllSongs();
    all.classList.add("selected-tab");
    all.classList.remove("tab-btn");
    romantic.classList.remove("selected-tab");
    romantic.classList.add("tab-btn");
    melodious.classList.remove("selected-tab");
    melodious.classList.add("tab-btn");
    comedy.classList.remove("selected-tab");
    comedy.classList.add("tab-btn");
    drama.classList.remove("selected-tab");
    drama.classList.add("tab-btn");
    action.classList.remove("selected-tab");
    action.classList.add("tab-btn");
});

romantic.addEventListener("click", function() {
    filterSongsByGenre("Romantic");
    all.classList.remove("selected-tab");
    all.classList.add("tab-btn");
    romantic.classList.add("selected-tab");
    romantic.classList.remove("tab-btn");
    melodious.classList.remove("selected-tab");
    melodious.classList.add("tab-btn");
    comedy.classList.remove("selected-tab");
    comedy.classList.add("tab-btn");
    drama.classList.remove("selected-tab");
    drama.classList.add("tab-btn");
    action.classList.remove("selected-tab");
    action.classList.add("tab-btn");
});

melodious.addEventListener("click", function() {
    filterSongsByGenre("Melodious");
    all.classList.remove("selected-tab");
    all.classList.add("tab-btn");
    romantic.classList.remove("selected-tab");
    romantic.classList.add("tab-btn");
    melodious.classList.add("selected-tab");
    melodious.classList.remove("tab-btn");
    comedy.classList.remove("selected-tab");
    comedy.classList.add("tab-btn");
    drama.classList.remove("selected-tab");
    drama.classList.add("tab-btn");
    action.classList.remove("selected-tab");
    action.classList.add("tab-btn");
});

comedy.addEventListener("click", function() {
    filterSongsByGenre("Comedy");
    all.classList.remove("selected-tab");
    all.classList.add("tab-btn");
    romantic.classList.remove("selected-tab");
    romantic.classList.add("tab-btn");
    melodious.classList.remove("selected-tab");
    melodious.classList.add("tab-btn");
    comedy.classList.add("selected-tab");
    comedy.classList.remove("tab-btn");
    drama.classList.remove("selected-tab");
    drama.classList.add("tab-btn");
    action.classList.remove("selected-tab");
    action.classList.add("tab-btn");
});

drama.addEventListener("click", function() {
    filterSongsByGenre("Drama");
    all.classList.remove("selected-tab");
    all.classList.add("tab-btn");
    romantic.classList.remove("selected-tab");
    romantic.classList.add("tab-btn");
    melodious.classList.remove("selected-tab");
    melodious.classList.add("tab-btn");
    comedy.classList.remove("selected-tab");
    comedy.classList.add("tab-btn");
    drama.classList.add("selected-tab");
    drama.classList.remove("tab-btn");
    action.classList.remove("selected-tab");
    action.classList.add("tab-btn");
});

action.addEventListener("click", function() {
    filterSongsByGenre("Action");
    all.classList.remove("selected-tab");
    all.classList.add("tab-btn");
    romantic.classList.remove("selected-tab");
    romantic.classList.add("tab-btn");
    melodious.classList.remove("selected-tab");
    melodious.classList.add("tab-btn");
    comedy.classList.remove("selected-tab");
    comedy.classList.add("tab-btn");
    drama.classList.remove("selected-tab");
    drama.classList.add("tab-btn");
    action.classList.add("selected-tab");
    action.classList.remove("tab-btn");
});

function filterSongsByGenre(genre) {
    const filteredSongs = musicList.filter(song => song.genre.toLowerCase() === genre.toLowerCase() || song.mood.toLowerCase() === genre.toLowerCase());
    if (filteredSongs.length > 0) {
        currentSongIndex = 0;
        musicList = filteredSongs;
        console.log(musicList)
        loadSelectedSong();
    } else {
        alert("No songs found in the selected genre.");
        console.log(filteredSongs)
    }
}

function displayAllSongs() {
    currentSongIndex = 0;
    musicList = [{
            id: 1,
            image: "https://res.cloudinary.com/dlovqnrza/image/upload/v1701082779/bb_lqaajs.jpg",
            movie: "Bengaluru Boys",
            song: "https://res.cloudinary.com/dlovqnrza/video/upload/v1701082350/iSongs.info_01_-_Neenene_Beku_a5eivm.mp3",
            mood: "Energetic",
            genre: "Comedy"
        },
        {
            id: 2,
            image: "https://res.cloudinary.com/dlovqnrza/image/upload/v1701083288/Bettada-Hoovu-Kannada-Songs-Download_epcb1w.jpg",
            movie: "Bettada Hoovu",
            song: "https://res.cloudinary.com/dlovqnrza/video/upload/v1701083039/iSongs.info_01_-_Bettada_Hoovu_pfyzgv.mp3",
            mood: "Romantic",
            genre: "Drama"
        },
        {
            id: 3,
            image: "https://res.cloudinary.com/dlovqnrza/image/upload/v1701114035/r1_m7xvkh.jpg",
            movie: "Sthabda",
            song: "https://res.cloudinary.com/dlovqnrza/video/upload/v1701083674/iSongs.info_01_-_Mudhsi_Mudhsi_l4ztbc.mp3",
            mood: "Melodious",
            genre: "Action"
        },

        {
            id: 4,
            image: "https://res.cloudinary.com/dlovqnrza/image/upload/v1701114321/r2_bqznln.jpg",
            movie: "Paramwah",
            song: "https://res.cloudinary.com/dlovqnrza/video/upload/v1701083989/iSongs.info_01_-_Bhoorameli.mp3_yyv15r.mp3",
            mood: "Energetic",
            genre: "Comedy"
        },
        {
            id: 5,
            image: "https://res.cloudinary.com/dlovqnrza/image/upload/v1701084984/Rangasamudra-2023-Kailasa-250x250_p8yslb.jpg",
            movie: "Rangasamudra",
            song: "https://res.cloudinary.com/dlovqnrza/video/upload/v1701084978/iSongs.info_01_-_Kailasa_vj8rpg.mp3",
            mood: "Romantic",
            genre: "Drama"
        },
        {
            id: 6,
            image: "https://res.cloudinary.com/dlovqnrza/image/upload/v1701085628/DDD-2023-Naanemba-Swarthava-Bittu-250x250_vm5grx.jpg",
            movie: "DDD",
            song: "https://res.cloudinary.com/dlovqnrza/video/upload/v1701085730/iSongs.info_01_-_Devarachaaya_Vajrahasthya_q4kqf9.mp3",
            mood: "Melodious",
            genre: "Action"
        },

        {
            id: 7,
            image: "https://res.cloudinary.com/dlovqnrza/image/upload/v1701085929/Risk-2023-Sogasige-Merugu-250x250_wqhjac.jpg",
            movie: "Risk",
            song: "https://res.cloudinary.com/dlovqnrza/video/upload/v1701085923/iSongs.info_01_-_Sogasige_Merugu_jkqsld.mp3",
            mood: "Energetic",
            genre: "Romantic"
        },
        {
            id: 8,
            image: "https://res.cloudinary.com/dlovqnrza/image/upload/v1701086058/Ghost-2023-Fanthem-250x250_e6ptqf.jpg",
            movie: "Ghost",
            song: "https://res.cloudinary.com/dlovqnrza/video/upload/v1701086078/iSongs.info_01_-_Ghost_Theme_Music_gf0s7l.mp3",
            mood: "Romantic",
            genre: "Drama"
        },
        {
            id: 9,
            image: "https://res.cloudinary.com/dlovqnrza/image/upload/v1701086220/Trigger-2023-Hey-Scooby-Dooba-250x250_l3i7j0.jpg",
            movie: "Trigger",
            song: "https://res.cloudinary.com/dlovqnrza/video/upload/v1701086218/iSongs.info_01_-_Hey_Scooby_Dooba_slatry.mp3",
            mood: "Melodious",
            genre: "Action"
        },


        {
            id: 10,
            image: "https://res.cloudinary.com/dlovqnrza/image/upload/v1701086406/Soneyeah-2023-250x250_vj2zka.jpg",
            movie: "Soneyeah",
            song: "https://res.cloudinary.com/dlovqnrza/video/upload/v1701086404/iSongs.info_01_-_Soneyeah_kvfdbn.mp3",
            mood: "Energetic",
            genre: "Comedy"
        },
        {
            id: 11,
            image: "https://res.cloudinary.com/dlovqnrza/image/upload/v1701086533/HanuMan-Kannada-2023-Hanuman-Chalisa-250x250_j5hvoc.jpg",
            movie: "Hanuman",
            song: "https://res.cloudinary.com/dlovqnrza/video/upload/v1701086528/iSongs.info_01_-_Hanuman_Chalisa_rrkmfl.mp3",
            mood: "Romantic",
            genre: "Drama"
        },
        {
            id: 12,
            image: "https://res.cloudinary.com/dlovqnrza/image/upload/v1701086664/Yako-Summane-2023-250x250_tby8dg.jpg",
            movie: "Yako Summane",
            song: "https://res.cloudinary.com/dlovqnrza/video/upload/v1701086688/iSongs.info_01_-_Yako_Summane_vlthnt.mp3",
            mood: "Melodious",
            genre: "Romance"
        },


    ]; // Reset the music list to all songs
    loadSelectedSong();
}