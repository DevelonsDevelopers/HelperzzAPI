function verification(
    {
        url
    }) {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Verify Your Email Address</title>
    </head>
    
    <body style="margin: 0; padding: 0; background-color: #f2f2f2; font-family: Arial, sans-serif;">
        <div style="max-width: 600px; margin: 0 auto;">
            <table cellpadding="0" cellspacing="0" width="100%" style="margin-top: 50px; background-color: #ffffff; border-radius: 10px; box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);">
                <tr>
                    <td align="center" style="padding: 40px;">
                        <h1 style="color: #007bff; margin-bottom: 20px;">Verify your email address</h1>
                        <p style="font-size: 16px; color: #666; margin-bottom: 30px;">Please confirm that you want to use this as your Helperzz account email address. Once it's done you will be able to get quotes!</p>
                        <a href="${url}" style="display: inline-block; background-color: #007bff; color: #fff; padding: 12px 24px; text-decoration: none; border-radius: 5px;">Verify Now</a>
                        <p style="font-size: 12px; color: #888; margin-top: 20px;">Or paste this link into your browser: <br> ${url}</p>
                    </td>
                </tr>
                <tr>
                    <td align="center" style="background-color: #007bff; color: #fff; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; padding: 20px;">
                    Helperzz.com &copy; 2024. All rights reserved.
                    </td>
                </tr>
            </table>
        </div>
    </body>
    
    </html>
    `
        ;
};
module.exports = { verification }
