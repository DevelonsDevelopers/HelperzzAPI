function activateEmail(
    {
        link
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
        <h3 style="color: #2E2C32; font-weight: 450; margin-top: -3px;">Thank you for registering with Helperzz!</h3>
        <h4 style="color: #2E2C32; font-weight: 450; margin-top: 33px;">There's just one final step left. We need verify your email address.</h4>
        <h4 style="color: #2E2C32; font-weight: 400; margin-top: -3px;">To complete the registration process, please click on the link below:</h4>
          
        <br>
        <a href="${link}" style="background-color: #45FF00; padding: 10px 30px; border: 1px solid gray; border-radius: 5px; cursor: pointer; text-decoration: none; color: black;">
            Verify Account
        </a>
        <h5 style="color: #2E2C32; font-weight: 450;">Thank you </h5>
        <h5 style="color: #2E2C32; font-weight: 450; margin-top: -10px;">Helperzz Team</h5>
        <a href="https://staging.helperzz.com" style="color: #2E2C32; font-weight: 450; margin-top: -10px;">www.helperzz.com</a>
        <h5 style="color: #2E2C32; font-weight: 450; margin-top: -10px;">111222333</h5>

</div>
</body>
</html>`
        ;
};

module.exports = {activateEmail}
