export const sendMailForPasswordHTMLContent = ({
  provider,
  password,
  domain,
}: {
  provider: string;
  password: string;
  domain: string;
}) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${provider} Authentication Success</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #121212; color: #ffffff; margin: 0; padding: 0; width: fit-content;">
    <div style="max-width: 600px; margin: 0; background-color: #1e1e1e; border: 1px solid #1a73e8; border-radius: 12px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5); overflow: hidden;">

       <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #1a73e824; color: #ffffff; padding: 10px; text-align: center;">
            <tr>
                <td align="center" style="padding: 10px 0;">
                    <img src="${domain}/my_picture_logo.jpg" alt="Master Utsav" style="width: 80px; padding: 2px; background-color: rgba(191, 219, 254, 0.1); border-radius: 10px; margin-bottom: 4px;" />
                </td>
            </tr>
            <tr>
                <td align="center" style="padding: 5px 0;">
                    <span style="margin: 0; text-align: center; font-size: 24px; background-color: rgba(191, 219, 254, 0.1); padding: 4px 8px; border-radius: 8px;">
                        Master Utsav
                    </span>
                </td>
            </tr>
            <tr>
                <td align="center" style="padding: 10px 0;">
                    <p style="font-size: 16px; line-height: 1.5; color: #d0d4db; text-align: center; margin: 0;">
                        I’m Utsav Jaiswal, a Full Stack Developer with expertise in React.js, TypeScript, Node.js, and Expo.
                    </p>
                </td>
            </tr>
        </table>

        <div style="padding: 20px; text-align: center;">
            <h2 style="font-size: 22px; color: #4dabf7;">Hello,</h2>
            <p style="font-size: 16px; line-height: 1.5; color: #d0d4db;">You've successfully signed in using your ${provider} account!</p>
            <p style="font-size: 16px; line-height: 1.5; color: #d0d4db;">Your temporary password is:</p>
            <div style="margin: 20px 0; text-align: center;">
                <span style="font-size: 28px; font-weight: bold; font-family: monospace; background-color: rgba(191, 219, 254, 0.1); padding: 4px; color: rgba(220, 38, 38, 0.9); border-radius: 4px; letter-spacing: 2px;">${password}</span>
            </div>
            <p style="font-size: 16px; line-height: 1.5; color: #d0d4db;">Explore insightful blog posts, and articles on web development, React.js, TypeScript, Node.js, and more.</p>
            <a href="${domain}/posts" style="display: inline-block; background-color: #121212; color: #ffffff; padding: 12px 24px; border: 1px solid #1a73e8; font-size: 16px; font-weight: bold; border-radius: 10px; text-decoration: none; margin-top: 15px;">View Blogs</a>
        </div>

         <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #181818; border-top: 1px solid #1a73e8; text-align: center; padding: 10px; border-radius: 8px;">
                <tr>
                    <td style="font-size: 12px; color: #7a7a7a; padding: 5px 0;">
                        <p style="margin: 0; color: #7a7a7a;">© 2024 Master Utsav. All rights reserved.</p>
                    </td>
                </tr>
                <tr>
                    <td style="font-size: 12px; color: #7a7a7a; padding: 5px 0;">
                        <p style="margin: 0;">
                            Need help? <a href="${domain}/#contact" style="color: #4dabf7; text-decoration: none;">Contact Support</a>
                        </p>
                    </td>
                </tr>
            </table>
    </div>
</body>
</html>
`;

export const sendMailForSigningInAgainHTMLContent = ({
  provider,
  domain,
}: {
  provider: string;
  domain: string;
}) => `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${provider} Authentication Success</title>
  </head>
  <body style="font-family: Arial, sans-serif; background-color: #121212; color: #ffffff; margin: 0; padding: 0; width: fit-content;">
      <div style="max-width: 600px; margin: 0; background-color: #1e1e1e; border: 1px solid #1a73e8; border-radius: 12px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5); overflow: hidden;">
  
            <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #1a73e824; color: #ffffff; padding: 10px; text-align: center;">
                <tr>
                    <td align="center" style="padding: 10px 0;">
                        <img src="${domain}/my_picture_logo.jpg" alt="Master Utsav" style="width: 80px; padding: 2px; background-color: rgba(191, 219, 254, 0.1); border-radius: 10px; margin-bottom: 4px;" />
                    </td>
                </tr>
                <tr>
                    <td align="center" style="padding: 5px 0;">
                        <span style="margin: 0; text-align: center; font-size: 24px; background-color: rgba(191, 219, 254, 0.1); padding: 4px 8px; border-radius: 8px;">
                            Master Utsav
                        </span>
                    </td>
                </tr>
                <tr>
                    <td align="center" style="padding: 10px 0;">
                        <p style="font-size: 16px; line-height: 1.5; color: #d0d4db; text-align: center; margin: 0;">
                            I’m Utsav Jaiswal, a Full Stack Developer with expertise in React.js, TypeScript, Node.js, and Expo.
                        </p>
                    </td>
                </tr>
            </table>
  
          <div style="padding: 20px; text-align: center;">
              <h2 style="font-size: 22px; color: #4dabf7;">Good, to see you</h2>
              <p style="font-size: 16px; line-height: 1.5; color: #d0d4db;">You've successfully signed in using your ${provider} account!</p>
              <p style="font-size: 16px; line-height: 1.5; color: #d0d4db;">Explore insightful blog posts, and articles on web development, React.js, TypeScript, Node.js, and more.</p>
              <a href="${domain}/posts" style="display: inline-block; background-color: #121212; color: #ffffff; padding: 12px 24px; border: 1px solid #1a73e8; font-size: 16px; font-weight: bold; border-radius: 10px; text-decoration: none; margin-top: 15px;">View Blogs</a>
          </div>
  
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #181818; border-top: 1px solid #1a73e8; text-align: center; padding: 10px; border-radius: 8px;">
                <tr>
                    <td style="font-size: 12px; color: #7a7a7a; padding: 5px 0;">
                        <p style="margin: 0; color: #7a7a7a;">© 2024 Master Utsav. All rights reserved.</p>
                    </td>
                </tr>
                <tr>
                    <td style="font-size: 12px; color: #7a7a7a; padding: 5px 0;">
                        <p style="margin: 0;">
                            Need help? <a href="${domain}/#contact" style="color: #4dabf7; text-decoration: none;">Contact Support</a>
                        </p>
                    </td>
                </tr>
            </table>

      </div>
  </body>
  </html>
  `;
