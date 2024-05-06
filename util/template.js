function template(
    {
        name,
        customer,
        job,
        details,
    }) {
    return `
<!DOCTYPE html>
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
    <div style="border: 1px solid gray ; width: 60%; margin: auto;  padding: 20px; border-radius: 20px;">
        <h1 style="text-align: center;font-weight: 500;color: #213139; ">Hi ${name},</h1>
        <h3 style="text-align: center;color: #2E2C32; font-weight: 450; margin-top: -10px;">You have one new connection, here's a sneak peek </h3>
        <h1 style="text-align: center;font-weight: 600;color: #2B937C; margin-top: 40px;">New Lead Details</h1>
        <h2 style="text-align: center;font-weight: 600;color: #213139; text-transform: uppercase;">Project Status</h2>
        <h3 style="text-align: center;color: #2E2C32; font-weight: 450; margin-top: -15px;">${job}</h3>
        <h2 style="text-align: center;font-weight: 600;color: #213139; text-transform: uppercase;">Repaire needs</h2>
        <h3 style="text-align: center;color: #2E2C32; font-weight: 450; ">${details}</h3>
        <h2 style="text-align: center;font-weight: 600;color: #213139; text-transform: uppercase; margin-top: 40px;">To Be completed in </h2>
        <h3 style="text-align: center;color: #2E2C32; font-weight: 450; margin-top: -10px;">Time is flexible</h3>
        <h2 style="text-align: center;font-weight: 600;color: #213139; text-transform: uppercase;">preferred contact method</h2>
        <h3 style="text-align: center;color: #2E2C32; font-weight: 450; margin-top: -10px;text-decoration: underline;">Phone</h3>
        <h2 style="text-align: center;font-weight: 600;color: #213139; text-transform: uppercase;">Location</h2>
        <h3 style="text-align: center;color: #2E2C32; font-weight: 450; margin-top: -10px;">This project is within 5km of your location</h3>
        <h3 style="text-align: center;color: #2E2C32; font-weight: 450; margin-top: -10px;text-decoration: underline;">View map</h3>
    </div>
</body>
</html>`
        ;
};

module.exports = {template}
