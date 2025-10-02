<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aerobuild Solutions</title>
    <link rel="icon" type="image/png" href="./images/ab_logo.png">
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        .text-theme {
            color: #6b8384;
        }
        .bg-theme {
            background-color: #163212;
        }
        .border-theme {
            border-color: #e2ebf6;
        }
        .text-secondary {
            color: #6b8384;
        }
        .text-light {
            color: #a0b1c1;
        }
        .bg-light {
            background-color: #f4f9fc;
        }
        .border-light {
            border-color: #e2ebf6;
        }
        /* Styling for modern minimalistic design */
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f4f9fc;
        }
        h1, p {
            transition: color 0.3s ease;
        }
        button {
            transition: background-color 0.3s ease, transform 0.3s ease;
        }
        button:hover {
            background-color: #6b8384;
            transform: translateY(-2px);
        }
        .loading-bar-container {
            width: 100%;
            background-color: #e2ebf6;
            border-radius: 9999px;
            height: 6px;
        }
        .loading-bar {
            height: 100%;
            background-color: #163212;
            border-radius: 9999px;
            transition: width 0.3s ease-in-out;
        }
        /* Mobile responsiveness */
        @media (max-width: 640px) {
            .text-theme {
                font-size: 24px;
            }
            .text-lg, .text-xl {
                font-size: 16px;
            }
            .logo {
                max-width: 120px; /* Adjust logo size for small screens */
            }
        }
    </style>
</head>
<body class="flex items-center justify-center min-h-screen px-4 text-theme bg-light">

    <!-- Welcome Section -->
    <div class="w-full max-w-lg text-center">
        <!-- Logo Section -->
        <div class="mb-6">
            <!-- Image size is now more responsive -->
            <img src="./images/ab_logo.png"  alt="Kandalama Home Logo" class="w-48 max-w-full mx-auto logo">
        </div>

        <h1 class="mb-6 text-3xl font-normal leading-tight md:text-4xl text-theme">
            Welcome to Aerobuild Solutions
        </h1>
        <p class="mb-6 text-base text-secondary md:text-lg">
    Welcome, Manage and oversee all operations from a centralized dashboard.
</p>

        <!-- Get Started Button -->
        <button id="getStartedBtn" class="px-8 py-3 text-base font-medium text-white bg-theme hover:bg-[#6b8384] rounded-full shadow-sm transform transition duration-300 ease-in-out border-light"
                onclick="startLoading()">
            Get Started
        </button>

        <!-- Loading Bar -->
        <div id="loadingContainer" class="hidden mt-8">
            <div class="loading-bar-container">
                <div id="loadingBar" class="loading-bar" style="width: 0%;"></div>
            </div>
        </div>
    </div>

    <script>
        function startLoading() {
            // Hide the "Get Started" button
            document.getElementById("getStartedBtn").style.display = 'none';
            
            // Show the loading bar
            const loadingContainer = document.getElementById("loadingContainer");
            loadingContainer.classList.remove("hidden");

            // Simulate the loading process
            let width = 0;
            const interval = setInterval(function() {
                if (width >= 100) {
                    clearInterval(interval);
                    // Redirect to the login page once loading is complete
                    window.location.href = '/login'; // Adjust the URL as needed
                } else {
                    width++;
                    document.getElementById("loadingBar").style.width = width + '%';
                }
            }, 30); // Adjust the speed of the loading bar
        }
    </script>

</body>
</html>