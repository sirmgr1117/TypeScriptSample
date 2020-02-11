console.info("Start1");
setTimeout(() => {
    console.info("Done1");

    console.info("Start2");
    setTimeout(()=>{
        console.info("Done2");

        console.info("Start3");
        setTimeout(() => {
            console.info("Done3");

        }, 1000);
        console.info("Finish3");

    }, 1000);
    console.info("Finish2");
    
}, 1000);
console.info("Finish1");
