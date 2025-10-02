<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login | Aerobuild Solutions</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        :root {
            --primary-color: #6b8384;
            --primary-hover: #c8d7e6;
            --background-color: #f5f5f7;
            --card-bg: #ffffff;
            --text-primary: #1d1d1f;
            --text-secondary: #86868b;
            --border-color: #d2d2d7;
            --border-focus: #005A4E;
            --error-color: #ff3b30;
            --success-color: #34c759;
            --sidebar-bg: #f8f9fa;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }

        body {
            background-color: var(--background-color);
            color: var(--text-primary);
            line-height: 1.4;
            min-height: 100vh;
            display: flex;
        }

        .container {
            display: flex;
            width: 100%;
            min-height: 100vh;
        }

        /* Left Sidebar */
        .sidebar {
            flex: 1;
            background-color: var(--sidebar-bg);
            padding: 40px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            position: relative;
            overflow: hidden;
        }

        .logo {
            margin-bottom: 40px;
        }

        .logo img {
            height: 60px;
        }

        .content {
            max-width: 500px;
        }

        h1 {
            font-size: 40px;
            font-weight: 700;
            margin-bottom: 16px;
            letter-spacing: -0.5px;
            line-height: 1.1;
        }

        .subtitle {
            color: var(--text-secondary);
            font-size: 20px;
            margin-bottom: 32px;
            line-height: 1.5;
        }

        .features {
            margin-top: 40px;
        }

        .feature {
            display: flex;
            align-items: center;
            margin-bottom: 20px;
        }

        .feature-icon {
            width: 40px;
            height: 40px;
            background-color: rgba(0, 90, 78, 0.1);
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 16px;
            color: var(--primary-color);
        }

        .feature-text {
            font-size: 16px;
            color: var(--text-primary);
        }

        /* Right Login Form */
        .login-section {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 40px;
        }

        .login-card {
            border-radius: 20px;
            padding: 40px;
            width: 100%;
            max-width: 420px;
        }

        .login-title {
            font-size: 28px;
            font-weight: 600;
            margin-bottom: 8px;
            text-align: left;
        }

        .login-subtitle {
            color: var(--text-secondary);
            font-size: 17px;
            margin-bottom: 32px;
            text-align: left;
        }

        .form-group {
            margin-bottom: 20px;
        }

        label {
            display: block;
            margin-bottom: 8px;
            font-size: 15px;
            font-weight: 500;
            color: var(--text-primary);
        }

        input {
            width: 100%;
            padding: 14px 16px;
            border: 1px solid var(--border-color);
            border-radius: 12px;
            font-size: 17px;
            background-color: var(--card-bg);
            transition: all 0.2s ease;
        }

        input:focus {
            outline: none;
            border-color: var(--border-focus);
            box-shadow: 0 0 0 4px rgba(0, 90, 78, 0.1);
        }

        .btn {
            width: 100%;
            padding: 14px 20px;
            background-color: var(--primary-color);
            color: white;
            border: none;
            border-radius: 12px;
            font-size: 17px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.2s ease;
            margin-top: 10px;
        }

        .btn:hover {
            background-color: var(--primary-hover);
        }

        .btn:active {
            transform: scale(0.98);
        }

        .back-link {
            display: inline-block;
            margin-top: 24px;
            color: var(--primary-color);
            text-decoration: none;
            font-size: 15px;
            font-weight: 500;
            transition: color 0.2s ease;
            text-align: center;
            width: 100%;
        }

        .back-link:hover {
            color: var(--primary-hover);
        }

        .validation-errors {
            background-color: rgba(255, 59, 48, 0.1);
            color: var(--error-color);
            padding: 12px 16px;
            border-radius: 12px;
            margin-bottom: 20px;
            font-size: 15px;
            text-align: left;
        }

        .status-message {
            background-color: rgba(52, 199, 89, 0.1);
            color: var(--success-color);
            padding: 12px 16px;
            border-radius: 12px;
            margin-bottom: 20px;
            font-size: 15px;
        }

        .divider {
            display: flex;
            align-items: center;
            margin: 20px 0;
        }

        .divider::before, .divider::after {
            content: "";
            flex: 1;
            border-bottom: 1px solid var(--border-color);
        }

        .divider span {
            padding: 0 10px;
            color: var(--text-secondary);
            font-size: 14px;
        }

        /* Responsive Design */
        @media (max-width: 900px) {
            .container {
                flex-direction: column;
            }
            
            .sidebar {
                padding: 30px 20px;
            }
            
            .login-section {
                padding: 20px;
            }
            
            h1 {
                font-size: 32px;
            }
            
            .subtitle {
                font-size: 18px;
            }
        }

        @media (max-width: 480px) {
            .login-card {
                padding: 30px 20px;
            }
            
            .sidebar {
                padding: 20px 15px;
            }
            
            h1 {
                font-size: 28px;
            }
            
            .subtitle {
                font-size: 16px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Left Sidebar with Logo and Content -->
        <div class="sidebar">
            <div class="logo">
                <img src="./images/ab_logo.png" alt="Aerobuild Solutions Logo">
            </div>
            
            <div class="content">
                <h1>Welcome to Aerobuild Solutions</h1>
                <p class="subtitle">Engineering excellence and innovative solutions for a sustainable future.</p>
                
                <div class="features">
                    <div class="feature">
                        <div class="feature-icon">
                            <i class="fas fa-cogs"></i>
                        </div>
                        <div class="feature-text">Advanced engineering solutions</div>
                    </div>
                    <div class="feature">
                        <div class="feature-icon">
                            <i class="fas fa-leaf"></i>
                        </div>
                        <div class="feature-text">Sustainable and eco-friendly designs</div>
                    </div>
                    <div class="feature">
                        <div class="feature-icon">
                            <i class="fas fa-award"></i>
                        </div>
                        <div class="feature-text">Award-winning project management</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Right Login Form Section -->
        <div class="login-section">
            <div class="login-card">
                <h2 class="login-title">Log In</h2>
                <p class="login-subtitle">Access your account</p>

                <!-- Validation Errors -->
                <div class="validation-errors" style="display: none;">
                    <!-- This would be populated by your backend -->
                </div>

                <!-- Status Message -->
                <div class="status-message" style="display: none;">
                    <!-- This would be populated by your backend -->
                </div>

                <!-- Login Form -->
                <form method="POST" action="{{ route('login') }}" class="login-form">
                    @csrf

                    <!-- Email Input -->
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input id="email" type="email" name="email" :value="old('email')" required autofocus autocomplete="username">
                    </div>

                    <!-- Password Input -->
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input id="password" type="password" name="password" required autocomplete="current-password">
                    </div>

                    <!-- Submit Button -->
                    <div class="form-group">
                        <button type="submit" class="btn">Log in</button>
                    </div>
                </form>

                <!-- Back Button -->
                <a href="/" class="back-link">← Back to Home</a>
            </div>
        </div>
    </div>

    <script>
        // This is a placeholder for any JavaScript functionality you might need
        // For example, to show validation errors or status messages
        document.addEventListener('DOMContentLoaded', function() {
            // Example: Show validation errors if they exist
            const validationErrors = document.querySelector('.validation-errors');
            const statusMessage = document.querySelector('.status-message');
            
            // In a real implementation, you would check if there are actual errors/messages
            // and show the respective containers
            // For now, we'll keep them hidden as placeholders
        });
    </script>
</body>
</html>