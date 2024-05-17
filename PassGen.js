document.getElementById('Generate').addEventListener('click', generateWords);

function generateWords() {
    const wordBank = ["flair", "duck", "bear", "vacation", "collective", "porch", "question", "rack", "alpine", "crib", "fraud", "rusk", "suggestion", "guide", "ultimate", "mild", "person", "beret", "testimonial", "arrest", "injury", "ring", "baron", "diaper", "draper", "special", "calcium", "crystal", "disease", "gable", "canopy", "serenity", "building", "intrepid", "marine", "occupation", "fungus", "instead", "suburban", "privacy", "flea", "renaissance", "profile", "advertising", "bathtub", "primary", "invitation", "antique", "improve", "riverside", "work", "concussion", "anchorage", "caravan", "reserve", "spa", "sad", "sun", "profit", "stowaway", "sap", "seller", "sat", "price", "pride", "sky", "say", "saw", "spy", "teapot", "palace", "foreclosure", "backpack", "cove", "police", "controversy", "sundown", "semiconductor", "lucky", "transistor", "replacement", "arrangement", "incentive", "prince", "phantom", "crane", "some", "mediation", "scrapbook", "poet", "custody", "limerick", "crate", "crash", "singular", "endanger", "pierce", "rubber", "radiology", "burial", "breeze", "lift", "holistic", "glen", "chase", "treasurer", "coast", "surprise", "class", "badge", "insulator", "park", "pitcher", "herring", "clipping", "cellular", "henna", "waist", "window", "pac", "pad", "while", "hinge", "pup", "pro", "exchange", "white", "affinity", "pin", "covenant", "pan", "medal", "tourism", "planter", "saving", "leotard", "necktie", "escape", "conquest", "commodity", "learned", "market", "garage", "headboard", "adhesive", "fantasy", "lamp", "complicated", "morale", "thrifty", "respirator", "tumbler", "concerning", "driver", "subdivision", "sandwich", "ginseng", "township", "slipper", "billiards", "cause", "lark", "splendour", "tailgate", "workbench", "upkeep", "vault", "paper", "schedule", "regal", "pawn", "investigator", "holster", "cleaner", "shabby", "medication", "diversity", "vocational", "facial", "drape", "council", "jukebox", "jabber", "cantilever", "tile", "manila", "gasket", "graphite", "confidence", "amplifier", "dealership", "intellectual", "pharmacist", "coyote", "heal", "hobby", "maverick", "karate", "gym", "gum", "sandy", "ventilation", "sinus", "retreat", "gap", "experimental", "gps", "gas", "surf", "bonus", "elf", "cover", "annuity", "hunting", "egg", "slim", "knock", "german", "corporation", "bachelor", "learning", "imperial", "downtown", "motel", "reach", "motor", "backing", "balloon", "lemon", "blemish", "eight", "distribute", "description", "choose", "secrete", "travel", "tropical", "brother", "curb", "scarecrow", "dice", "eagle", "climber", "mechanics", "axe", "add", "ace", "enhance", "aim", "amusement", "consultant", "pelican", "apartment", "charcoal", "arm", "apt", "air", "telephone", "guess", "act", "art", "putter", "nurse", "navigation", "north", "immortality", "classmate", "valve", "handsome", "providence", "homeland", "life", "generator", "scam", "be", "study", "valance", "trek", "plotter", "freelance", "waterfront", "airing", "lapse", "lose", "neon", "pendant", "blackjack", "akin", "working", "drip", "quilt", "individual", "mast", "whole", "offering", "lily", "future", "button", "outdoors", "abbey", "suit", "culinary", "clay", "brush", "effect", "cell", "automation", "indigestion", "census", "prototype", "blush", "roof", "disc", "corkscrew", "deed", "pear", "dispenser", "innovation", "outlook", "amortization", "outdoor", "external", "cathedral", "advise", "defendant", "week", "electronics", "writing", "tuition", "keystone", "tour", "traverse", "coat", "marketing", "press", "champion", "pack", "every", "passenger", "guitar", "classified", "off", "hedonism", "liquid", "ore", "odd", "relate", "expanse", "preventative", "sundial", "basketball", "camper", "acceleration", "patent", "contour", "maternity", "satchel", "diploma", "distributor", "box", "bow", "bet", "griddle", "carol", "cargo", "grinder", "volunteer", "bed", "combination", "field", "magnesium", "valley", "arsenal", "camp", "fleet", "mace", "hall", "defamation", "list", "keen", "fishing", "dimmer", "student", "personnel", "calculator", "wristwatch", "education", "ancestor", "spacing", "tango", "toner", "hepatitis", "enterprise", "computerize", "handbag", "sonnet", "hockey", "endless", "station", "dress", "din", "dry", "fragrance", "day"];
    const wordAmount = parseInt(document.getElementById('WordAmount').value, 10);
    const wordLength = parseInt(document.getElementById('WordsLength').value, 10);
    const useCapital = document.getElementById('Capital').checked;
    const useSpecialCharacters = document.getElementById('SpecialCharacters').checked;
    const useNumbers = document.getElementById('Numbers').checked;
    const useComma = document.getElementById('Comma').checked;

    let words = [];
    let specialCharacters = ["!", "@", "$", "%", "&", "*"];
    let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    while (words.length < wordAmount) {
        let word = wordBank[Math.floor(Math.random() * wordBank.length)].substring(0, wordLength);
        if (!words.includes(word)) {
            words.push(word);
        }
    }

    if (useCapital) {
        let randomIndex = Math.floor(Math.random() * words.length);
        words[randomIndex] = words[randomIndex].charAt(0).toUpperCase() + words[randomIndex].slice(1);
    }

    let result = words.join('');

    if (useSpecialCharacters || useNumbers) {
        let charPool = [...(useSpecialCharacters ? specialCharacters : []), ...(useNumbers ? numbers : [])];
        let charsToAdd = [];

        while (charsToAdd.length < words.length - 1) {
            let char = charPool[Math.floor(Math.random() * charPool.length)];
            charsToAdd.push(char);
            charPool = charPool.filter(c => c !== char);
            if (charPool.length === 0) {
                charPool = useSpecialCharacters ? [...specialCharacters] : [...numbers];
            }
        }

        if (useComma) {
            let commaIndex = Math.floor(Math.random() * charsToAdd.length);
            charsToAdd[commaIndex] = ',';
        }

        result = words[0];
        for (let i = 0; i < charsToAdd.length; i++) {
            result += charsToAdd[i] + words[i + 1];
        }
    } else if (useComma) {
        let commaIndex = Math.floor(Math.random() * (words.length - 1));
        result = words.slice(0, commaIndex + 1).join('') + ',' + words.slice(commaIndex + 1).join('');
    }

    document.getElementById('result').textContent = result;

}
