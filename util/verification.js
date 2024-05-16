function verification(
    {
        name,
        url
    }) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">

<style>
    *{
        font-family: "Montserrat", sans-serif;
    }
</style>

</head>
<body>
    <div style=" width: 60%; margin: auto;  padding: 20px;">
        <h3 style="color: #2E2C32; font-weight: 450; margin-top: -3px; ">Congratulations ${name}, your customer account in now fully verified
            </h3>
      
        <h4 style="color: #2E2C32; font-weight: 350; margin-top: 13px; ">Looking to find a contractor to perform a repair in your home? fix that long ignored issue?
        </h4>
        <h4 style="color: #2E2C32; font-weight: 350; margin-top: -13px; ">click below to get free quotes from our top verified professionals.
        </h4>
        
        <br>
        <a href="${url}" style="background-color: #45FF00; padding: 10px 30px; border: 1px solid gray; border-radius: 5px; cursor: pointer; text-decoration: none; color: black;">
            GET A FREE QUOTE
        </a>
        <br>
        <br>
        <br>
        <a href="#" style="color: blue; font-weight: 350;  ">[insert verification link here]
        </a>
        <br>
        <br>
         <h5 style="color: #2E2C32; font-weight: 450; margin-top: -10px; margin-bottom: 7px;">Helperzz Team</h5>
        <a href="#" style="font-weight: 450; margin-top: -4px; color: blue;">www.helperzz.com</a>
      
 
</div>
</body>
</html>
    `
        ;
};
module.exports = { verification }
