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
<body style="font-family: Arial, sans-serif; background-color: #121212; color: #ffffff; margin: 0; padding: 0;">
    <div style="max-width: 600px; margin: 40px auto; background-color: #1e1e1e; border: 1px solid #1a73e8; border-radius: 12px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5); overflow: hidden;">
        <!-- Header -->
        <div style="background-color: #1a73e824; color: #ffffff; padding: 10px; text-align: start; align-items: center; display: flex; justify-content: center; flex-direction: column">
            <img src="${domain}/my_picture_logo.jpg" alt="Master Utsav" style="width: 80px; padding: 2px; background-color: rgba(191, 219, 254, 0.1); border-radius: 10px; justify-content: center; margin-bottom: 4px" />
            <span style="margin: 0; text-align: start; font-size: 24px; background-color: rgba(191, 219, 254, 0.1); padding: 4px 8px; border-radius: 8px;">Master Utsav</span>
            <p style="font-size: 16px; line-height: 1.5; color: #d0d4db; text-align: center">
              I’m Utsav Jaiswal, a Full Stack Developer with expertise in React.js, TypeScript, Node.js, and Expo. I build applications that connect, inspire, and push the boundaries of what's possible.
            </p>
        </div>

        <!-- Content -->
        <div style="padding: 20px; text-align: center;">
            <h2 style="font-size: 22px; color: #4dabf7;">Hello,</h2>
            <p style="font-size: 16px; line-height: 1.5; color: #d0d4db;">You've successfully signed in using your ${provider} account!</p>
            <p style="font-size: 16px; line-height: 1.5; color: #d0d4db;">Your temporary password is:</p>
            <div style="margin: 20px 0; text-align: center;">
                <span style="font-size: 28px; font-weight: bold; font-family: monospace; background-color: rgba(191, 219, 254, 0.1); padding: 4px; color: rgba(220, 38, 38, 0.9); border-radius: 4px; letter-spacing: 2px;">${password}</span>
            </div>
            <p style="font-size: 16px; line-height: 1.5; color: #d0d4db;">Explore insightful blog posts, and articles on web development, React.js, TypeScript, Node.js, and more. Master the skills to build full-stack applications with Utsav Jaiswal.</p>
            <a href="${domain}/posts" style="display: inline-block; background-color: #121212; color: #ffffff; padding: 12px 24px; border: 1px solid #1a73e8; font-size: 16px; font-weight: bold; border-radius: 10px; text-decoration: none; margin-top: 15px;">View Blogs</a>
        </div>

        <!-- Footer -->
        <div style="text-align: center; padding: 10px; font-size: 12px; color: #7a7a7a; background-color: #181818; border-top: 1px solid #1a73e8; border-radius: 8px;">
            <p>© 2024 Master Utsav. All rights reserved.</p>
            <p>Need help? <a href="${domain}/#contact" style="color: #4dabf7; text-decoration: none;">Contact Support</a></p>
        </div>
    </div>
</body>
</html>
`;