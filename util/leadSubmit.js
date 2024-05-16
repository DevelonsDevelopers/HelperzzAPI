function leadSubmit({ name, url }) {
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
        <h3 style="color: #2E2C32; font-weight: 450; margin-top: -3px; ">Hello ${name}
            </h3>
        <h3 style="color: #2E2C32; font-weight: 450; margin-top: 23px; ">We're so excited that you submitted your project at <a href="#" style="color: blue;"> Helperzz.com!!</a>   </h3>
      
        <h4 style="color: #2E2C32; font-weight: 350; margin-top: 13px; ">We're getting to work right away, we'll hand-pick out verified top (category-name)</h4>
         <h4 style="color: #2E2C32; font-weight: 350; margin-top: -3px; ">professionals and share your project detail with top of them. They'll contact you</h4>
         <h4 style="color: #2E2C32; font-weight: 350; margin-top: -3px; ">directly, so sit back and relax, while we do the heavy lifting for you.</h4>
         <br>
         <h4 style="color: #2E2C32; font-weight: 350; margin-top: 13px; ">If you have any questions or need further assistance, feel free to contact us </h4>
          <a href="">${url}</a>
        
 
</div>
</body>
</html>`
        ;
};

module.exports = {leadSubmit}
