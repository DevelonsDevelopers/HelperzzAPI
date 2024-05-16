function forgotPassword({ link }) {
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
        <h3 style="color: #2E2C32; font-weight: 450; margin-top: -3px; ">We noticed that you've forgotten your password for Helperzz.
            </h3>
         <h4 style="color: #2E2C32; font-weight: 400; margin-top: -3px; ">Not to worry, we're here to assist you in resetting it.</h4>
         <h4 style="color: #2E2C32; font-weight: 400; margin-top: -3px; ">Please follow the link below to reset your password</h4>
         <br>
         <a href="${link}" style="background-color: #45FF00; padding: 10px 30px; border: 1px solid gray; border-radius: 5px; cursor: pointer; text-decoration: none; color: black;">
            Reset your Password
        </a>
        <h5 style="color: #2E2C32; font-weight: 450;">Thank you </h5>
        <h5 style="color: #2E2C32; font-weight: 450; margin-top: -10px;">Helperzz Team</h5>
        <h5 style="color: #2E2C32; font-weight: 450; margin-top: -10px;">www.helperzz.com</h5>
        <h5 style="color: #2E2C32; font-weight: 450; margin-top: -10px;">111222333</h5>

</div>
</body>
</html>`
        ;
};

module.exports = {forgotPassword}
