export const sendMailForPasswordHTMLContent = ({
    provider, password, domain,
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
            text-align: center;
            background-color: #1a73e8; /* Blue accent */
            color: #ffffff;
            padding: 20px;
        }
        .header h1 {
            margin: 0;
            font-size: 24px;
        }
        .logo {
            width: 100px;
            margin: 0 auto 10px;
            display: block;
        }
        .content {
            padding: 30px;
            text-align: center;
        }
        .content h2 {
            font-size: 22px;
            color: #4dabf7; /* Light blue accent */
            margin: 0 0 10px;
        }
        .content p {
            font-size: 16px;
            line-height: 1.6;
            color: #d0d4db; /* Soft gray text */
        }
        .password {
            font-size: 24px;
            font-weight: bold;
            color: #4dabf7; /* Light blue accent */
            margin: 20px 0;
            letter-spacing: 2px;
        }
        .button {
            display: inline-block;
            background-color: #1a73e8; /* Blue button */
            color: #ffffff;
            padding: 12px 24px;
            font-size: 16px;
            font-weight: bold;
            border-radius: 5px;
            text-decoration: none;
            margin-top: 20px;
            transition: background-color 0.3s ease;
        }
        .button:hover {
            background-color: #135bb2; /* Darker blue */
        }
        .footer {
            text-align: center;
            padding: 20px;
            font-size: 12px;
            color: #7a7a7a; /* Muted gray text */
            background-color: #181818; /* Dark footer background */
            border-top: 1px solid #1a73e8; /* Blue border for separation */
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
            <div class="password">${password}</div>
            <p>We recommend that you reset your password immediately to secure your account.</p>
            <a href="${domain}/reset-password" class="button">Reset Password</a>
            <p>If you did not sign up for this account, please ignore this email.</p>
        </div>

        <!-- Footer -->
        <div class="footer">
            <p>© 2024 Master Utsav. All rights reserved.</p>
            <p>Need help? <a href="${domain}#contact">Contact Support</a></p>
        </div>
    </div>
</body>
</html>
`;
