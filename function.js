// Problem-01: New Price for Eid Sale
function newPrice(currentPrice,discount){
    if(typeof currentPrice !== "number" || typeof discount !== "number"){
        return "Invalid";
    }
    if(isNaN(currentPrice) || isNaN(discount)){
        return "Invalid";
    }
    if(discount < 0 || discount > 100){
        return "Invalid";
    }

    const discountAmount = (currentPrice * discount) / 100;
    const newPrice = currentPrice - discountAmount;
    return newPrice.toFixed(3);
    
}

// Problem-02: OTP Validation for Zapshift
function validOtp(otp){
    if(typeof otp !== "string"){
        return "Invalid";
    }
    if(otp.length === 8 && otp.startsWith("ph-")){
        return true;
    } else {
        return false;
    }

}

// Problem-03: BCS Final Score Calculator
function finalScore(omr){
    if(typeof omr !== "object" || omr === null || Array.isArray(omr)) {
        return "Invalid";
    }
    const right = omr.right;
    const wrong = omr.wrong;
    const skip = omr.skip;
    if(typeof right !== "number" || typeof wrong !== "number" || typeof skip !== "number"){
        return "Invalid";
    }
    if(right < 0 || wrong < 0 || skip < 0){
        return "Invalid";
    }
    if(right + wrong + skip !== 100){
        return "Invalid";
    }

    return Math.round(right - wrong * 0.5);

}

// Problem-04: Upcoming Gono Vote
function gonoVote(array){
    if(!Array.isArray(array)){
        return "Invalid";
    }
    let ha = 0;
    let na = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] === "ha"){
            ha++;
        } else if(array[i] === "na"){
            na++;
        }
}
    if(ha > na){
        return true;
    } else if(ha === na){
        return "equal";
    } else {
        return false;
    }

}

// Problem-05: Text Analyzer for an AI Company
function analyzeText(str){
    if(typeof str !== "string"){
        return "Invalid";
    }
    if(str.trim() === ""){
        return "Invalid";
    }
    const words = str.trim().split(" ");
    let longWord = "";
    let total = 0;
    for(let i = 0; i < words.length; i++){
        total += words[i].length;
        if(words[i].length > longWord.length){
            longWord = words[i];
        }
    }

    return { longwords:longWord,token:total};

}