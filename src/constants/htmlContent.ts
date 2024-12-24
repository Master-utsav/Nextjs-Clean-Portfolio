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
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #121212; /* Dark theme background */
            color: #ffffff;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 40px auto;
            background-color: #1e1e1e; /* Slightly lighter black for contrast */
            border: 1px solid #1a73e8; /* Blue border */
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
            overflow: hidden;
        }
        .header {
            background-color: #1a73e824; /* Blue accent */
            color: #ffffff;
            padding: 10px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        .header h1 {
            margin: 0;
            text-align: start;
            font-size: 24px;
            background-color: rgb(191 219 254 / 0.1);
            padding: 4px 8px;
            border-radius: 8px;
        }
        .logo {
            width: 80px;
            padding: 2px;
            background-color:  rgb(191 219 254 / 0.1);
            margin: 0 auto 10px;
            border-radius: 10px;
        }
        .content {
            padding: 5px 30px;
            text-align: center;
        }
        .content h2 {
            font-size: 22px;
            color: #4dabf7; /* Light blue accent */
        }
        .content p {
            font-size: 16px;
            line-height: 1.5;
            padding-left: 30px;
            padding-right: 30px;
            color: #d0d4db; /* Soft gray text */
        }
        .password-container {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
            margin: 20px 0;
        }
        .password {
            font-size: 28px;
            font-weight: thin;
            font-family: monospace;
            background-color: rgb(191 219 254 / 0.1);
            padding: 0px 4px;
            color: rgb(220 38 38 / 0.9); /* Light blue accent */
            border-radius: 4px;
            letter-spacing: 2px;
        }
        .copy-button {
             background-color: #121212; /* Blue button */
            color: #ffffff;
            padding: 4px 8px;
            border: 1px solid #1a73e8;
            font-size: 14px;
            font-weight: thin;
            border-radius: 10px;
            text-decoration: none;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }
        .copy-button:hover {
            background-color: #135bb2;
        }
        .button {
            display: inline-block;
            background-color: #121212; /* Blue button */
            color: #ffffff;
            padding: 12px 24px;
            border: 1px solid #1a73e8;
            font-size: 16px;
            font-weight: bold;
            border-radius: 10px;
            text-decoration: none;
            margin-top: 15px;
            margin-bottom: 20px;
            transition: background-color 0.3s ease;
        }
        .button:hover {
            background-color: #135bb2; /* Darker blue */
        }
        .footer {
            text-align: center;
            padding: 10px;
            font-size: 12px;
            color: #7a7a7a; /* Muted gray text */
            background-color: #181818; /* Dark footer background */
            border-top: 1px solid #1a73e8; /* Blue border for separation */
            border-radius: 8px;
        }
        .footer a {
            color: #4dabf7; /* Blue accent for links */
            text-decoration: none;
        }
        .footer a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Header with Logo -->
        <div class="header">
            <img src="${domain}/my_picture_logo.jpg" alt="Master Utsav" class="logo" />
            <h1>Master Utsav</h1>
        </div>

        <!-- Email Content -->
        <div class="content">
            <h2>Hello,</h2>
            <p>You've successfully signed in using your ${provider} account!</p>
            <p>Your temporary password is:</p>
            <div class="password-container">
                <span class="password" id="password">${password}</span>
                <button class="copy-button" onclick="copyToClipboard()">Copy</button>
            </div>
            <p>Explore insightful blog posts, and articles on web development, React.js, TypeScript, Node.js, and more. Master the skills to build full-stack applications with Utsav Jaiswal.</p>
            <a href="${domain}/posts" class="button">View Blogs</a>
            <br />
        </div>

        <!-- Footer -->
        <div class="footer">
            <p>© 2024 Master Utsav. All rights reserved.</p>
            <p>Need help? <a href="${domain}/#contact">Contact Support</a></p>
        </div>
    </div>

    <script>
        function copyToClipboard() {
            const password = document.getElementById('password').textContent;
            navigator.clipboard.writeText(password);
        }
    </script>
</body>
</html>
`;
