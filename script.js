function generateStory() {

    const genre =
        document.getElementById("genre").value;

    const theme =
        document.getElementById("theme").value;

    const character =
        document.getElementById("character").value;

    const setting =
        document.getElementById("setting").value;


    const titles = [
        `The Secret of the ${setting}`,
        `Beyond the Last Dream`,
        `The Forgotten Path`,
        `Echoes of Tomorrow`,
        `The Hidden Truth`
    ];


    const randomTitle =
        titles[Math.floor(Math.random() * titles.length)];


    const storyIdea =
        `In a ${setting}, a ${character.toLowerCase()} 
        begins an unexpected journey connected to the theme 
        of ${theme.toLowerCase()}. What starts as an ordinary 
        day soon turns into a dangerous ${genre.toLowerCase()} 
        adventure. The main character discovers a hidden secret 
        that could change the future of everyone around them.`;


    const conflict =
        `The ${character.toLowerCase()} must make a difficult 
        choice between personal safety and protecting others. 
        Every decision creates a new challenge, and an unknown 
        enemy seems to know every move before it happens.`;


    const twist =
        `In the final moment, the main character discovers that 
        the person believed to be the enemy was actually trying 
        to protect them. The real danger was hidden much closer 
        than anyone expected.`;


    document.getElementById("storyTitle").innerText =
        randomTitle;

    document.getElementById("outputGenre").innerText =
        genre;

    document.getElementById("outputTheme").innerText =
        theme;

    document.getElementById("outputCharacter").innerText =
        character;

    document.getElementById("storyIdea").innerText =
        storyIdea;

    document.getElementById("conflict").innerText =
        conflict;

    document.getElementById("twist").innerText =
        twist;


    document.getElementById("result")
        .classList.remove("hidden");
}