function approveContractor({ html }) {
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
    ${html}
<!--        <h3 style="color: #2E2C32; font-weight: 450; margin-top: -3px; ">We hope this email finds you well. Thank you for submitting the documents for review.-->
<!--            </h3>-->
<!--        <h3 style="color: #2E2C32; font-weight: 450; margin-top: 3px; ">After thorough examination, we have identified some areas where additional</h3>-->
<!--        <h3 style="color: #2E2C32; font-weight: 450; margin-top: -13px; ">or specific documents are required to proceed further with the project.-->
<!--        </h3>-->
<!--         <h4 style="color: #2E2C32; font-weight: 400; margin-top: 13px; ">Could you please provide the following documents at your earliest convenience:        </h4>-->
<!--          <br>-->
<!--         <a href="#" style="background-color: #45FF00; padding: 10px 30px; border: 1px solid gray; border-radius: 5px; cursor: pointer; text-decoration: none; color: black;">-->
<!--            Submit Documents-->
<!--        </a>-->
<!--        <h4 style="color: #2E2C32; font-weight: 400; margin-top: 33px; ">If you have any questions or need clarification on the requested documents, -->
<!--            please feel free to reach out to us. </h4>-->
<!--        <h4 style="color: #2E2C32; font-weight: 400; margin-top: -3px; ">Your prompt attention to this matter would be greatly appreciated.        </h4>-->
<!--         <h5 style="color: #2E2C32; font-weight: 450;">Thank you for your cooperation.</h5>-->
<!--        <h5 style="color: #2E2C32; font-weight: 450; margin-top: -10px; margin-bottom: 7px;">Helperzz Team</h5>-->
<!--        <a href="#" style="color: #2E2C32; font-weight: 450; margin-top: -4px; color: blue;">www.helperzz.com</a>-->
<!--        <br>-->
<!--        <br>-->
<!--        <h5 style="color: #2E2C32; font-weight: 450; margin-top: -10px;">111222333</h5>-->

</div>
</body>
</html>`
        ;
};

module.exports = {approveContractor}
