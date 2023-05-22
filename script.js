function grade(score) {
    if(score > 80) {
        console.log("A");
    } else if (score >= 70 && score <= 80) {
        console.log("B");
    } else if (score >= 60 && score <= 69) {
        console.log("C");
    } else if (score >= 50 && score <= 59) {
        console.log("D");
    } else if (score >= 0  && score <= 50 ) {
        console.log("F");
    } else if (score < 0 || score >100) {
        console.log("Error");
    }
}

grade(-5); 


