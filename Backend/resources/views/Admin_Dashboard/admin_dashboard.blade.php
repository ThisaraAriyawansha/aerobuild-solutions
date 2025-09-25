<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Dashboard</title>
    <!-- Bootstrap CSS -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

<!-- Font Awesome CDN -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">

    <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" rel="stylesheet">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <style>
        body {
            overflow-x: hidden;
        }
        #sidebar {
            overflow-y: auto;
            height: 100vh;
            position: fixed;
            left: -250px;
            top: 0;
            width: 250px;
            background-color: #005A4E;
            transition: all 0.3s;
            z-index: 1000;
        }
        #sidebar.active {
            left: 0;
        }
        #content {
            transition: all 0.3s;
        }
        .sidebar-btn {
            width: 100%;
            text-align: left;
            margin-bottom: 10px;
        }
        .overlay {
            display: none;
            position: fixed;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
            z-index: 999;
            top: 0;
            left: 0;
        }

        .sidebar-btn {
        width: 100%;
        text-align: left;
        margin-bottom: 10px;
        background-color: #005A4E; /* Change button background to #005A4E */
        color: white; /* Set text color to white */
    }
    .sidebar-btn:hover {
        background-color: #004D43; /* Optional: Darker shade on hover */
    }
        
        /* Hide sidebar on small and medium screens */
        @media (max-width: 991px) {
            #sidebar {
                display: none;
            }
            #sidebar.active {
                display: block;
            }
            #content {
                margin-left: 0;
            }
        }

        /* Show sidebar on large screens */
        @media (min-width: 992px) {
            #sidebar {
                left: 0;
                display: block !important;
            }
            #content {
                margin-left: 250px;
            }
            .overlay {
                display: none !important;
            }
        }


         /* Light Green Background for the Icon and Text Container */
    .bg-light-green {
        background-color: #DFF2E6; /* Light Green background */
    }

    /* Animation for the Icon and Text Container */
    @keyframes scaleIconText {
        0% { transform: scale(1); }
        100% { transform: scale(1.05); }
    }

    .icon-text-container {
        transition: transform 0.3s ease, background-color 0.3s ease;
    }

    .icon-text-container:hover {
        transform: scale(1.05); /* Enlarge the icon-text container */
        background-color: #b5f5d5; /* Lighter green on hover */
    }

    /* Ensure cards are responsive */
    .col-md-3 {
        flex: 1 1 22%; /* Ensure even card distribution */
    }

    /* Mobile responsiveness */
    @media (max-width: 768px) {
        .col-md-3 {
            flex: 1 1 45%; /* Adjust to two columns on smaller screens */
        }
    }

    @media (max-width: 576px) {
        .col-md-3 {
            flex: 1 1 100%; /* One column on very small screens */
        }
    }

    .edit-btn {
    background-color: #3498db; /* Blue background */
    color: white; /* White text */
    padding: 6px 12px; /* Reduced padding */
    border: none; /* Remove border */
    border-radius: 5px; /* Less rounded corners */
    cursor: pointer; /* Pointer cursor */
    font-size: 14px; /* Smaller font size */
    transition: all 0.3s ease; /* Smooth transition for hover effect */
}

.edit-btn:hover {
    background-color: #2980b9; /* Darker blue on hover */
    transform: scale(1.05); /* Slightly enlarge the button */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Add shadow on hover */
}

/* Save Button Style */
.save-btn {
    background-color: #2980b9; /* Dark blue background */
    color: white; /* White text */
    padding: 6px 12px; /* Reduced padding */
    border: none; /* Remove border */
    border-radius: 5px; /* Less rounded corners */
    cursor: pointer; /* Pointer cursor */
    font-size: 14px; /* Smaller font size */
    transition: all 0.3s ease; /* Smooth transition for hover effect */
}

.save-btn:hover {
    background-color: #1f618d; /* Even darker blue on hover */
    transform: scale(1.05); /* Slightly enlarge the button */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Add shadow on hover */
}


    </style>
</head>

<body>
    <!-- Overlay for mobile menu -->
    <div class="overlay" id="overlay"></div>

    <!-- Navbar with Hamburger Menu - Only show on screens smaller than large -->
    <nav class="navbar navbar-dark bg-dark d-lg-none">
        <div class="container-fluid">
            <button class="btn btn-outline-light" id="sidebarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <span class="mb-0 navbar-brand h1">Welcome..!</span>
        </div>
    </nav>

    
    <div class="container-fluid">
        <div class="row">
            <!-- Sidebar - Hidden on small/medium screens, visible on large screens -->
            <div id="sidebar" class="p-3 text-white col-lg-2 bg-dark">
            <div class="mb-4 d-flex justify-content-between align-items-center">
    <div class="d-flex align-items-center" style="font-family: 'Times New Roman', serif;">
        <i class="bi bi-house-door me-2"></i> <!-- Icon related to home -->
        <span>Welcome to Kandalama Home Dashboard</span> <!-- Professional greeting -->
    </div>
    <button id="closeSidebar" class="text-white btn btn-link d-lg-none">
        <i class="bi bi-x-lg"></i>
    </button>
</div>

                <div class="nav flex-column">
                    <button id="addClientBtn" class="btn btn-secondary sidebar-btn">
                        <i class="bi bi-person-plus me-2"></i>Add Client
                    </button>
                    <button id="addCategoreyBtn" class="btn btn-secondary sidebar-btn">
                        <i class="bi bi-folder-plus me-2"></i>Add Project Category
                    </button>

                    <button id="addProjectBtn" class="btn btn-secondary sidebar-btn">
                        <i class="bi bi-briefcase me-2"></i>Add Project
                    </button>
                    <button id="addImagesBtn" class="btn btn-secondary sidebar-btn">
                        <i class="bi bi-images me-2"></i>Add Images
                    </button>
                    <button id="addVideosBtn" class="btn btn-secondary sidebar-btn">
                        <i class="bi bi-camera-video me-2"></i>Add Videos
                    </button>
                    <button id="manageStatusBtn" class="btn btn-secondary sidebar-btn">
                        <i class="bi bi-gear me-2"></i>Manage Status
                    </button>
                    <button id="updateProjectBtn" class="btn btn-secondary sidebar-btn">
                        <i class="bi bi-pencil me-2"></i>Manage Project 
                    </button>

                    <button id="manageClientBtn" class="btn btn-secondary sidebar-btn">
                        <i class="bi bi-person-check me-2"></i>Manage Client
                    </button>
                    <button id="manageImageBtn" class="btn btn-secondary sidebar-btn">
                        <i class="fa fa-images me-2"></i>Manage Images
                    </button>
                    <button id="manageVideosBtn" class="btn btn-secondary sidebar-btn">
                        <i class="fas fa-film me-2"></i>Manage Videos
                    </button>
                    <button id="manageCategoryBtn" class="btn btn-secondary sidebar-btn">
                        <i class="fas fa-tags me-2"></i>Manage Category
                    </button>





                    <div class="mt-4">
                        <button id="logoutBtn" class="btn btn-danger sidebar-btn">
                            <i class="bi bi-box-arrow-right me-2"></i>Logout
                        </button>
                    </div>
                </div>
            </div>


            
            <!-- Main Content -->
            <main id="content" class="pt-3 col-12 col-lg-10 px-md-4">
    <div id="mainContent" class="container-fluid">
        <h1 id="contentTitle" class="py-4 mb-4 text-center text-black" style="font-family: 'Times New Roman', serif; background: linear-gradient(to right, #ffffff, #005A4E);">
            Welcome to Dashboard
        </h1>
        <div id="contentBody" class="row">
            <div class="row g-4">
                <!-- Projects Card -->
                <div class="col-md-3 col-sm-6">
                    <div class="text-center border-0 shadow-sm card">
                        <div class="p-3 rounded card-body icon-text-container bg-light-green">
                            <div class="mb-3 icon">
                                <i class="fas fa-briefcase" style="font-size: 2rem; color: #005A4E;"></i>
                            </div>
                            <h5 class="card-title">Projects</h5>
                            <p id="projectCount" class="card-text display-6 fw-bold text-secondary">0</p>
                        </div>
                    </div>
                </div>

                <!-- Clients Card -->
                <div class="col-md-3 col-sm-6">
                    <div class="text-center border-0 shadow-sm card">
                        <div class="p-3 rounded card-body icon-text-container bg-light-green">
                            <div class="mb-3 icon">
                                <i class="fas fa-user-tie" style="font-size: 2rem; color: #005A4E;"></i>
                            </div>
                            <h5 class="card-title">Clients</h5>
                            <p id="clientCount" class="card-text display-6 fw-bold text-secondary">0</p>
                        </div>
                    </div>
                </div>

                <!-- Categories Card -->
                <div class="col-md-3 col-sm-6">
                    <div class="text-center border-0 shadow-sm card">
                        <div class="p-3 rounded card-body icon-text-container bg-light-green">
                            <div class="mb-3 icon">
                                <i class="fas fa-layer-group" style="font-size: 2rem; color: #005A4E;"></i>
                            </div>
                            <h5 class="card-title">Project Category</h5>
                            <p id="categoryCount" class="card-text display-6 fw-bold text-secondary">0</p>
                        </div>
                    </div>
                </div>

                <!-- Images Card -->
                <div class="col-md-3 col-sm-6">
                    <div class="text-center border-0 shadow-sm card">
                        <div class="p-3 rounded card-body icon-text-container bg-light-green">
                            <div class="mb-3 icon">
                                <i class="fas fa-images" style="font-size: 2rem; color: #005A4E;"></i>
                            </div>
                            <h5 class="card-title">Images</h5>
                            <p id="imageCount" class="card-text display-6 fw-bold text-secondary">0</p>
                        </div>
                    </div>
                </div>

                <!-- Videos Card -->
                <div class="col-md-3 col-sm-6">
                    <div class="text-center border-0 shadow-sm card">
                        <div class="p-3 rounded card-body icon-text-container bg-light-green">
                            <div class="mb-3 icon">
                                <i class="fas fa-video" style="font-size: 2rem; color: #005A4E;"></i>
                            </div>
                            <h5 class="card-title">Videos</h5>
                            <p id="videoCount" class="card-text display-6 fw-bold text-secondary">0</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>



            <script>
    fetch('/api/dashboard-counts')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('projectCount').textContent = data.projects || 0;
            document.getElementById('clientCount').textContent = data.clients || 0;
            document.getElementById('categoryCount').textContent = data.categories || 0;
            document.getElementById('imageCount').textContent = data.images || 0;
            document.getElementById('videoCount').textContent = data.videos || 0;
        })
        .catch(error => console.error('Error fetching dashboard counts:', error));
</script>
            
        </div>
    </div>

    <!-- Bootstrap JS and dependencies -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.10.0/font/bootstrap-icons.min.css" rel="stylesheet">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const sidebar = document.getElementById('sidebar');
            const content = document.getElementById('content');
            const overlay = document.getElementById('overlay');
            const sidebarCollapse = document.getElementById('sidebarCollapse');
            const closeSidebar = document.getElementById('closeSidebar');
            const contentTitle = document.getElementById('contentTitle');
            const contentBody = document.getElementById('contentBody');
            const logoutBtn = document.getElementById('logoutBtn');

            // Sidebar Toggle Functions
            function openSidebar() {
                sidebar.classList.add('active');
                overlay.style.display = 'block';
            }

            function closeSidebarMenu() {
                sidebar.classList.remove('active');
                overlay.style.display = 'none';
            }

            // Mobile Sidebar Toggle Event Listeners
            sidebarCollapse.addEventListener('click', openSidebar);
            closeSidebar.addEventListener('click', closeSidebarMenu);
            overlay.addEventListener('click', closeSidebarMenu);

            // Logout Button Handler
            // Logout Button Handler
            logoutBtn.addEventListener('click', function() {
                // Perform the logout via Laravel's logout route (using AJAX or redirect)
                fetch('/logout', {
                    method: 'POST',
                    headers: {
                        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content
                    },
                })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        // Redirect to the welcome page after logging out
                        window.location.href = '/'; // This redirects to the root route
                    }
                })
                .catch(error => {
                    console.error('Logout Error:', error);
                });
            });



            

            // Content Buttons Add New Client
            document.getElementById('addClientBtn').addEventListener('click', function() {

        // Update contentTitle text and apply styles
        contentTitle.textContent = 'Add New Client';
        contentTitle.style.fontFamily = 'Times New Roman, serif'; // Set font to Times New Roman
    contentTitle.style.textAlign = 'center'; // Center align the text
    contentTitle.style.background = 'linear-gradient(to right, #ffffff, #005A4E)'; // Apply gradient background
    contentTitle.style.padding = '20px'; // Add padding for spacing

    // Additional responsiveness via Tailwind CSS classes
    contentTitle.classList.add('w-full', 'text-white', 'font-semibold', 'text-lg', 'sm:text-xl', 'md:text-2xl', 'lg:text-3xl');
    contentTitle.classList.add('py-4', 'px-6'); // Add padding to the title for spacing
                
                contentBody.innerHTML = `
                    <div class="mx-auto col-md-6 col-lg-5">
                        <form id="clientForm">
                            <!-- Client Name -->
                            <div class="mb-3">
                                <label for="clientName" class="font-medium text-gray-700 form-label text-md">Client Name</label>
                                <input type="text" class="form-control shadow-sm border-gray-300 rounded-lg focus:ring-[#005A4E] focus:border-[#005A4E] p-2" id="clientName" placeholder="Enter client name" required>
                            </div>

                            <!-- Client Mobile -->
                            <div class="mb-3">
                                <label for="clientMobile" class="font-medium text-gray-700 form-label text-md">Client Mobile</label>
                                <input type="tel" class="form-control shadow-sm border-gray-300 rounded-lg focus:ring-[#005A4E] focus:border-[#005A4E] p-2" id="clientMobile" placeholder="Enter client mobile" pattern="[0-9]{10}" required>
                            </div>

                            <!-- Client Email -->
                            <div class="mb-3">
                                <label for="clientEmail" class="font-medium text-gray-700 form-label text-md">Client Email</label>
                                <input type="email" class="form-control shadow-sm border-gray-300 rounded-lg focus:ring-[#005A4E] focus:border-[#005A4E] p-2" id="clientEmail" placeholder="Enter client email" required>
                            </div>

                            <!-- Submit Button -->
                            <div class="d-flex justify-content-center">
                                <button type="submit" class="btn btn-primary w-100 py-2 font-medium text-lg rounded-lg shadow-md hover:bg-[#004740] focus:outline-none focus:ring-2 focus:ring-[#005A4E]">
                                    Add Client
                                </button>
                            </div>
                        </form>

                        <!-- Error message (hidden by default) -->
                        <div id="errorMessage" class="mt-3 alert alert-danger" style="display: none;"></div>

                        <!-- Success message (hidden by default) -->
                        <div id="successMessage" class="mt-3 alert alert-success" style="display: none;"></div>
                    </div>
                `;
                closeSidebarMenu();

                // Add event listener for form submission
                document.getElementById('clientForm').addEventListener('submit', function(event) {
                    event.preventDefault();

                    // Collect form data
                    const clientData = {
                        clientName: document.getElementById('clientName').value,
                        clientMobile: document.getElementById('clientMobile').value,
                        clientEmail: document.getElementById('clientEmail').value,
                    };

                    // Clear previous error and success messages
                    document.getElementById('errorMessage').style.display = 'none';
                    document.getElementById('successMessage').style.display = 'none';

                    // Send POST request to backend
                    fetch('/clients', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'), // CSRF token
                        },
                        body: JSON.stringify(clientData),
                    })
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Failed to save client data');
                        }
                        return response.json();
                    })
                    .then(data => {
                        // Show success message for 3 seconds
                        const successMessage = document.getElementById('successMessage');
                        successMessage.textContent = data.message;
                        successMessage.style.display = 'block';

                        // Hide the success message after 3 seconds
                        setTimeout(() => {
                            successMessage.style.display = 'none';
                        }, 3000);

                        // Reset the form fields
                        document.getElementById('clientForm').reset();

                        // Optionally close sidebar or navigate to another part of your application
                    })
                    .catch(error => {
                        // Show error message if the request fails
                        const errorMessage = document.getElementById('errorMessage');
                        errorMessage.textContent = error.message || 'An unexpected error occurred.';
                        errorMessage.style.display = 'block';
                    });
                });
            });


            


            
             // Content Buttons Add New Categorey
             document.getElementById('addCategoreyBtn').addEventListener('click', function() {

        // Update contentTitle text and apply styles
        contentTitle.textContent = 'Add New Category';
        contentTitle.style.fontFamily = 'Times New Roman, serif'; // Set font to Times New Roman
    contentTitle.style.textAlign = 'center'; // Center align the text
    contentTitle.style.background = 'linear-gradient(to right, #ffffff, #005A4E)'; // Apply gradient background
    contentTitle.style.padding = '20px'; // Add padding for spacing

    // Additional responsiveness via Tailwind CSS classes
    contentTitle.classList.add('w-full', 'text-white', 'font-semibold', 'text-lg', 'sm:text-xl', 'md:text-2xl', 'lg:text-3xl');
    contentTitle.classList.add('py-4', 'px-6'); // Add padding to the title for spacing
                
                contentBody.innerHTML = ` 
                    <div class="mx-auto col-md-6 col-lg-5">
                        <form id="categoryForm">
                            <div class="mb-3">
                                <label for="CategoreyName" class="form-label">Category Name</label>
                                <input type="text" class="form-control" id="CategoreyName" placeholder="Enter Category name" required>
                            </div>

                            <button type="submit" class="btn btn-primary w-100 py-2 font-medium text-lg rounded-lg shadow-md hover:bg-[#004740] focus:outline-none focus:ring-2 focus:ring-[#005A4E]">
                                Add Category
                            </button>
                        </form>

                        <!-- Error message (hidden by default) -->
                        <div id="errorMessage" class="mt-3 alert alert-danger" style="display: none;"></div>

                        <!-- Success message (hidden by default) -->
                        <div id="successMessage" class="mt-3 alert alert-success" style="display: none;"></div>
                    </div>
                `;
                closeSidebarMenu(); // close sidebar on mobile after selection

                // Add event listener for form submission
                document.getElementById('categoryForm').addEventListener('submit', function(event) {
                    event.preventDefault();

                    const categoryData = {
                        category_name: document.getElementById('CategoreyName').value,
                    };

                    // Send POST request to backend (Laravel)
                    fetch('/categories', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'), // CSRF token
                        },
                        body: JSON.stringify(categoryData),
                    })
                    .then(response => response.json())
                    .then(data => {
                        // Hide error and success messages initially
                        document.getElementById('errorMessage').style.display = 'none';
                        document.getElementById('successMessage').style.display = 'none';

                        if (data.success) {
                            // Show success message and reset form
                            document.getElementById('successMessage').style.display = 'block';
                            document.getElementById('successMessage').textContent = data.message;

                            // Hide the success message after 4 seconds
                            setTimeout(() => {
                                document.getElementById('successMessage').style.display = 'none';
                            }, 4000); // 4000 ms = 4 seconds

                            document.getElementById('categoryForm').reset(); // Reset the form after successful submission
                        } else {
                            // Show error message if something went wrong
                            document.getElementById('errorMessage').style.display = 'block';
                            document.getElementById('errorMessage').textContent = data.message;

                            // Hide the error message after 4 seconds
                            setTimeout(() => {
                                document.getElementById('errorMessage').style.display = 'none';
                            }, 4000); // 4000 ms = 4 seconds
                        }
                    })
                    .catch(error => {
                        console.error('Error:', error);
                        // Show generic error message
                        document.getElementById('errorMessage').style.display = 'block';
                        document.getElementById('errorMessage').textContent = 'An error occurred while adding the category.';

                        // Hide the error message after 4 seconds
                        setTimeout(() => {
                            document.getElementById('errorMessage').style.display = 'none';
                        }, 4000); // 4000 ms = 4 seconds
                    });
                });
            });




    


 // Content Buttons Add New Project
document.getElementById('addProjectBtn').addEventListener('click', function () {
    // Update contentTitle text and apply styles
    contentTitle.textContent = 'Add New Project';
    contentTitle.style.fontFamily = 'Times New Roman, serif'; // Set font to Times New Roman
    contentTitle.style.textAlign = 'center'; // Center align the text
    contentTitle.style.background = 'linear-gradient(to right, #ffffff, #005A4E)'; // Apply gradient background
    contentTitle.style.padding = '20px'; // Add padding for spacing

    // Additional responsiveness via Tailwind CSS classes
    contentTitle.classList.add('w-full', 'text-white', 'font-semibold', 'text-lg', 'sm:text-xl', 'md:text-2xl', 'lg:text-3xl');
    contentTitle.classList.add('py-4', 'px-6'); // Add padding to the title for spacing

    contentBody.innerHTML = ` 
        <div class="container">
            <form id="projectForm" class="row g-3">
                <div class="col-md-12">
                    <label for="projectName" class="form-label">Project Name</label>
                    <input type="text" class="form-control" id="projectName" placeholder="Enter project name" required>
                </div>

                <div class="col-md-12">
                    <label for="projectDescription" class="form-label">Project Description</label>
                    <textarea class="form-control" id="projectDescription" placeholder="Enter project description" required></textarea>
                </div>

                <div class="col-md-6">
                    <label for="projectCategory" class="form-label">Project Category</label>
                    <select class="form-select" id="projectCategory" required>
                        <option selected>Select Category</option>
                    </select>
                </div>

                <div class="col-md-6">
                    <label for="projectClient" class="form-label">Client</label>
                    <select class="form-select" id="projectClient" required>
                        <option selected>Select Client</option>
                    </select>
                </div>

                <div class="col-md-12">
                    <label for="projectImage" class="form-label">Project Image</label>
                    <input type="file" class="form-control" id="projectImage" accept="image/*" required>
                    <div class="mt-3 text-center">
                        <img id="imagePreview" src="" alt="Image Preview" class="img-fluid" 
                            style="display: none; max-width: 100%; height: auto; border: 1px solid #ddd; border-radius: 4px; padding: 5px;">
                    </div>
                </div>

                <!-- Error message -->
                <div id="errorMessage" class="mt-3 text-center col-md-12 alert alert-danger" style="display: none;"></div>

                <!-- Success message -->
                <div id="successMessage" class="mt-3 text-center col-md-12 alert alert-success" style="display: none;"></div>

                <div class="col-md-12">
                    <button type="submit" class="btn btn-primary w-100 py-2 font-medium text-lg rounded-lg shadow-md hover:bg-[#004740] focus:outline-none focus:ring-2 focus:ring-[#005A4E] ">
                        Add Project
                    </button>
                </div><br/><br/>
            </form>
        </div>
    `;

    // Add an event listener to display the image preview
    const projectImageInput = document.getElementById('projectImage');
    const imagePreview = document.getElementById('imagePreview');

    projectImageInput.addEventListener('change', function () {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                imagePreview.src = e.target.result;
                imagePreview.style.display = 'block'; // Show the image preview
            };
            reader.readAsDataURL(file); // Read the file as a data URL
        } else {
            imagePreview.style.display = 'none'; // Hide the image preview if no file is selected
            imagePreview.src = '';
        }
    });

    // Function to show messages and auto-hide after 3 seconds
    function showMessage(elementId, message) {
        const messageElement = document.getElementById(elementId);
        messageElement.textContent = message;
        messageElement.style.display = 'block'; // Show the message
        setTimeout(function () {
            messageElement.style.display = 'none'; // Hide the message after 3 seconds
        }, 3000);
    }

    // Updated function to handle and display validation error messages from backend
    function handleErrors(errors) {
        const errorMessageDiv = document.getElementById('errorMessage');

        // Clear previous error messages
        errorMessageDiv.textContent = '';

        // Custom error message mapping
        const customErrorMessages = {
            'project_name.required': 'Project name is required.',
            'project_name.max': 'Project name must not exceed 255 characters.',
            'description.required': 'Project description is required.',
            'project_image.required': 'Please upload an image for the project.',
            'project_image.image': 'The file must be an image.',
            'project_image.max': 'The image size must not exceed 2MB.',
            'category_id.required': 'Please select a project category.',
            'category_id.exists': 'The selected category does not exist.',
            'client_id.required': 'Please select a client.',
            'client_id.exists': 'The selected client does not exist.'
        };

        if (errors && Object.keys(errors).length > 0) {
            // Create an array to collect all error messages
            const errorMessages = [];

            // Iterate through each field's errors
            for (const [field, messages] of Object.entries(errors)) {
                messages.forEach(message => {
                    // Check if there's a custom error message, otherwise use the original
                    const customMessage = customErrorMessages[`${field}.${message}`] || 
                                          customErrorMessages[message] || 
                                          message;
                    errorMessages.push(customMessage);
                });
            }

            // Join all error messages with a line break for better readability
            errorMessageDiv.textContent = errorMessages.join('\n');

            // Show the error message div
            errorMessageDiv.style.display = 'block';

            // Auto-hide after 5 seconds
            setTimeout(() => {
                errorMessageDiv.style.display = 'none';
            }, 5000);
        } else {
            // Fallback for unexpected errors
            showMessage('errorMessage', 'An unexpected error occurred. Please try again.');
        }
    }

    // Attach the submit event listener after form is added to the DOM
    document.getElementById('projectForm').addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData();
        formData.append('project_name', document.getElementById('projectName').value);
        formData.append('description', document.getElementById('projectDescription').value);
        formData.append('category_id', document.getElementById('projectCategory').value);
        formData.append('client_id', document.getElementById('projectClient').value);
        formData.append('status', true); // Set status as true (not visible in UI)
        formData.append('project_image', document.getElementById('projectImage').files[0]);

        // Send the form data to the backend (Laravel)
        fetch('/projects', {
            method: 'POST',
            body: formData,
            headers: {
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'), // CSRF token
            },
        })
        .then((response) => {
            // Check if the response is not OK (422 for validation errors, or other error status)
            if (!response.ok) {
                // Try to parse the error response as JSON
                return response.json().then(errorData => {
                    // Throw the errors to be caught in the catch block
                    throw errorData.errors || { message: "An unexpected error occurred." };
                });
            }
            // If response is OK, parse the JSON
            return response.json();
        })
        .then((data) => {
            if (data.success) {
                // Clear success message and reset form
                showMessage('successMessage', data.message);
                document.getElementById('projectForm').reset();
                
                // Hide image preview
                const imagePreview = document.getElementById('imagePreview');
                imagePreview.style.display = 'none';
                imagePreview.src = '';
            }
        })
        .catch((errors) => {
            // Handle different types of errors
            if (typeof errors === "object") {
                // If errors is an object (validation errors), use handleErrors
                handleErrors(errors);
            } else {
                // If it's a string or unexpected error, show a generic message
                showMessage('errorMessage', errors.message || 'An error occurred while adding the project.');
            }
        });
    });

    fetchCategoriesAndClients(); // Fetch categories and clients
    closeSidebarMenu(); // Close sidebar on mobile after selection
});

// Function to fetch categories and clients
async function fetchCategoriesAndClients() {
    try {
        const categoryResponse = await fetch('/categories_project');
        const categories = await categoryResponse.json();
        const categorySelect = document.getElementById('projectCategory');
        categories.forEach((category) => {
            const option = document.createElement('option');
            option.value = category.id;
            option.textContent = category.category_name;
            categorySelect.appendChild(option);
        });

        const clientResponse = await fetch('/clients_project');
        const clients = await clientResponse.json();
        const clientSelect = document.getElementById('projectClient');
        clients.forEach((client) => {
            const option = document.createElement('option');
            option.value = client.id;
            option.textContent = client.name;
            clientSelect.appendChild(option);
        });
    } catch (error) {
        console.error('Error fetching categories and clients:', error);
    }
}




        
 // Add Image On Project
 document.getElementById('addImagesBtn').addEventListener('click', function () {
    // Update contentTitle text and styles
    contentTitle.textContent = 'Add New Image On Project';
    contentTitle.style.fontFamily = 'Times New Roman, serif'; // Set font to Times New Roman
    contentTitle.style.textAlign = 'center'; // Center align the text
    contentTitle.style.background = 'linear-gradient(to right, #ffffff, #005A4E)'; // Apply gradient background
    contentTitle.style.padding = '20px'; // Add padding for spacing

    // Additional responsiveness via Tailwind CSS classes
    contentTitle.classList.add(
        'w-full',
        'text-white',
        'font-semibold',
        'text-lg',
        'sm:text-xl',
        'md:text-2xl',
        'lg:text-3xl',
        'py-4',
        'px-6'
    );

    contentBody.innerHTML = `
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-md-8 col-lg-6">
                    <form id="imageForm">
                        <!-- Project Dropdown -->
                        <div class="mb-3">
                            <label for="projectSelect" class="form-label">Select Project</label>
                            <select class="form-select" id="projectSelect" required>
                                <option value="" selected disabled>Select a project</option>
                            </select>
                            <div id="project_idError" class="text-danger error-message"></div>
                        </div>

                        <!-- Image Upload Section -->
                        <div class="mb-3">
                            <label for="projectImage" class="form-label">Upload Image</label>
                            <input type="file" class="form-control" id="projectImage" accept="image/*" required>
                            <div id="imageError" class="text-danger error-message"></div>
                        </div>

                        <!-- Image Preview -->
                        <div class="mb-3">
                            <label class="form-label">Image Preview</label>
                            <div id="imagePreview" style="max-width: 100%; height: auto; border: 1px solid #ccc; padding: 10px;"></div>
                        </div>

                        <!-- Success Message -->
                        <div id="successMessage" class="mt-3 text-center alert alert-success" style="display: none;"></div>

                        <!-- Error Message -->
                        <div id="errorMessage" class="mt-3 text-center alert alert-danger" style="display: none;"></div>

                        <!-- Save Button -->
                        <button type="submit" class="btn btn-primary w-100">Add Image</button><br/><br/>
                    </form>
                </div>
            </div>
        </div>
    `;

    // Fetch projects and populate the dropdown
    fetchProjects();

    // Image preview functionality
    document.getElementById('projectImage').addEventListener('change', function (event) {
        const previewDiv = document.getElementById('imagePreview');
        previewDiv.innerHTML = ''; // Clear existing preview

        const file = event.target.files[0];
        if (file) {
            const img = document.createElement('img');
            img.src = URL.createObjectURL(file);
            img.style.maxWidth = '100%';
            img.style.height = 'auto';
            previewDiv.appendChild(img);
        }
    });

    // Handle form submission
    document.getElementById('imageForm').addEventListener('submit', async function (event) {
        event.preventDefault();

        const formData = new FormData();
        formData.append('project_id', document.getElementById('projectSelect').value);
        formData.append('image', document.getElementById('projectImage').files[0]);

        try {
            const response = await fetch('/add-image-to-project', {
                method: 'POST',
                body: formData,
                headers: {
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                },
            });

            const result = await response.json();

            if (response.ok && result.success) {
                showMessage('successMessage', 'Image added successfully!', 4000); // Show success message for 4 seconds
                document.getElementById('imageForm').reset();
                document.getElementById('imagePreview').innerHTML = ''; // Clear preview
            } else if (result.errors) {
                handleErrors(result.errors);
            } else {
                showMessage('errorMessage', result.message || 'An unexpected error occurred.', 3000); // Show error message for 3 seconds
            }
        } catch (error) {
            console.error('Error:', error);
            showMessage('errorMessage', error.message || 'An unexpected error occurred.', 3000); // Show error message for 3 seconds
        }
    });

    closeSidebarMenu();
});

// Fetch projects and populate dropdown
async function fetchProjects() {
    try {
        const response = await fetch('/projects_image');
        const projects = await response.json();
        const projectSelect = document.getElementById('projectSelect');
        projects.forEach(project => {
            const option = document.createElement('option');
            option.value = project.id;
            option.textContent = project.project_name;
            projectSelect.appendChild(option);
        });
    } catch (error) {
        console.error('Error fetching projects:', error);
    }
}

// Show success or error message inside the form with a specified duration
function showMessage(elementId, message, duration) {
    const messageDiv = document.getElementById(elementId);
    messageDiv.textContent = message;
    messageDiv.style.display = 'block';

    // Hide the message after the specified duration
    setTimeout(() => {
        messageDiv.style.display = 'none';
    }, duration);
}

// Handle and display error messages
function handleErrors(errors) {
    // Clear previous errors
    document.querySelectorAll('.error-message').forEach(el => (el.textContent = ''));

    for (const [field, messages] of Object.entries(errors)) {
        const errorField = document.querySelector(`#${field}Error`);
        if (errorField) {
            errorField.textContent = messages.join(', ');
            showMessage(errorField.id, messages.join(', '), 3000); // Show each field's error for 3 seconds
        }
    }

    // Show error message for unexpected errors if no specific field errors exist
    if (!Object.keys(errors).length) {
        showMessage('errorMessage', 'Unexpected validation errors occurred.', 3000); // Show unexpected errors for 3 seconds
    }
}





    
    // Add Video on the project
    document.getElementById('addVideosBtn').addEventListener('click', function() {

        // Update contentTitle text and apply styles
        contentTitle.textContent = 'Add New Video On Project';
        contentTitle.style.fontFamily = 'Times New Roman, serif'; // Set font to Times New Roman
    contentTitle.style.textAlign = 'center'; // Center align the text
    contentTitle.style.background = 'linear-gradient(to right, #ffffff, #005A4E)'; // Apply gradient background
    contentTitle.style.padding = '20px'; // Add padding for spacing

    // Additional responsiveness via Tailwind CSS classes
    contentTitle.classList.add('w-full', 'text-white', 'font-semibold', 'text-lg', 'sm:text-xl', 'md:text-2xl', 'lg:text-3xl');
    contentTitle.classList.add('py-4', 'px-6'); // Add padding to the title for spacing
    
    contentBody.innerHTML = ` 
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-md-8 col-lg-6">
                    <form id="videoForm">
                        <!-- Project Dropdown -->
                        <div class="mb-3">
                            <label for="projectSelect" class="form-label">Select Project</label>
                            <select class="form-select" id="projectSelect" required>
                                <option value="" selected disabled>Select a project</option>
                            </select>
                        </div>

                        <!-- Video Upload Section -->
                        <div class="mb-3">
                            <label for="projectVideo" class="form-label">Upload Video</label>
                            <input type="file" class="form-control" id="projectVideo" accept="video/*" required>
                        </div>

                        <!-- Video Preview -->
                        <div class="mb-3">
                            <label class="form-label">Video Preview</label>
                            <div id="videoPreview" style="max-width: 100%; height: auto; border: 1px solid #ccc; padding: 10px;"></div>
                        </div>

                        <!-- Success message -->
                        <div id="successMessage" class="mt-3 text-center alert alert-success" style="display: none;"></div>

                        <!-- Error message -->
                        <div id="errorMessage" class="mt-3 text-center alert alert-danger" style="display: none;"></div>

                        <!-- Save Button -->
                        <button type="submit" class="btn btn-primary w-100">Add Video</button><br/><br/>
                    </form>
                </div>
            </div>
        </div>
    `;
    fetchProjects(); // Fetch and populate the projects dropdown

    // Handle video file change (Preview functionality)
    document.getElementById('projectVideo').addEventListener('change', function(event) {
        const previewDiv = document.getElementById('videoPreview');
        previewDiv.innerHTML = ''; // Clear existing preview

        const file = event.target.files[0];
        if (file) {
            const video = document.createElement('video');
            video.src = URL.createObjectURL(file);
            video.controls = true;
            video.style.maxWidth = '100%';
            previewDiv.appendChild(video);
        }
    });

    // Handle form submission
    document.getElementById('videoForm').addEventListener('submit', async function(event) {
        event.preventDefault();

        const formData = new FormData();
        formData.append('project_id', document.getElementById('projectSelect').value);
        formData.append('video', document.getElementById('projectVideo').files[0]);

        try {
            const response = await fetch('/add-video-to-project', {
                method: 'POST',
                body: formData,
                headers: {
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                },
            });

            const result = await response.json();

            if (result.success) {
                showMessage('successMessage', 'Video added successfully!');
                document.getElementById('videoForm').reset();
                document.getElementById('videoPreview').innerHTML = ''; // Clear preview
            } else {
                showMessage('errorMessage', 'Error: ' + result.message);
            }
        } catch (error) {
            console.error('Error:', error);
            showMessage('errorMessage', 'An error occurred while adding the video.');
        }
    });

    closeSidebarMenu();
        });

        // Fetch projects and populate dropdown
        async function fetchProjects() {
            try {
                const response = await fetch('/projects_video');
                const projects = await response.json();
                const projectSelect = document.getElementById('projectSelect');
                projects.forEach(project => {
                    const option = document.createElement('option');
                    option.value = project.id;
                    option.textContent = project.project_name;
                    projectSelect.appendChild(option);
                });
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        }

        // Show success or error message inside the form
        function showMessage(elementId, message) {
            const messageDiv = document.getElementById(elementId);
            messageDiv.textContent = message;
            messageDiv.style.display = 'block';

            // Hide the message after 4 seconds
            setTimeout(() => {
                messageDiv.style.display = 'none';
            }, 4000);
        }

    
        

 // Manage Status
// Manage Status
document.getElementById('manageStatusBtn').addEventListener('click', function() {

        // Update contentTitle text and apply styles
        contentTitle.textContent = 'Project Management';
        contentTitle.style.fontFamily = 'Times New Roman, serif'; // Set font to Times New Roman
    contentTitle.style.textAlign = 'center'; // Center align the text
    contentTitle.style.background = 'linear-gradient(to right, #ffffff, #005A4E)'; // Apply gradient background
    contentTitle.style.padding = '20px'; // Add padding for spacing

    // Additional responsiveness via Tailwind CSS classes
    contentTitle.classList.add('w-full', 'text-white', 'font-semibold', 'text-lg', 'sm:text-xl', 'md:text-2xl', 'lg:text-3xl');
    contentTitle.classList.add('py-4', 'px-6'); // Add padding to the title for spacing
    
    // Fetch the list of projects from the backend
    fetch('/projects_Table')
        .then(response => response.json())
        .then(projects => {
            // Create the table dynamically
            let tableHTML = `
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="table-responsive"> <!-- Responsive table wrapper -->
                                <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Project Name</th>
                                            <th>Description</th>
                                            <th>Category</th>
                                            <th>Client</th>
                                            <th>Status</th>
                                            <th class="d-none d-md-table-cell">Project Image</th> <!-- Hide on small screens -->
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
            `;
            
            projects.forEach(project => {
                const statusIcon = project.status === 'Active'
                    ? '<i class="fas fa-check-circle" style="color: green;"></i>' // Active
                    : '<i class="fas fa-times-circle" style="color: red;"></i>'; // Inactive

                tableHTML += `
                    <tr data-id="${project.id}">
                        <td class="d-none">${project.id}</td>
                        <td>${project.project_name}</td>
                        <td>${project.description}</td>
                        <td>${project.category_name}</td>
                        <td>${project.client_name}</td>
                        <td>${statusIcon} ${project.status}</td> <!-- Show icon and text -->
                        <td class="d-none d-md-table-cell"> <!-- Hide on small screens -->
                            <img src="${project.project_image}" alt="Project Image" width="100" height="100"/>
                        </td>
                        <td>
                            <button class="btn btn-primary btn-sm edit-btn">Edit</button> <!-- Smaller buttons for better fit -->
                            <button class="btn btn-danger btn-sm delete-btn">Delete</button> <!-- Smaller buttons for better fit -->
                        </td>
                    </tr>
                `;
            });

            tableHTML += `
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            // Insert the table HTML into the content body
            contentBody.innerHTML = tableHTML;

            // Add event listeners for Edit and Delete buttons
            document.querySelectorAll('.edit-btn').forEach(button => {
                button.addEventListener('click', handleEdit);
            });

            document.querySelectorAll('.delete-btn').forEach(button => {
                button.addEventListener('click', handleDelete);
            });
        })
        .catch(error => {
            console.error('Error fetching projects:', error);
        });

    closeSidebarMenu();
});

// Handle Edit button click
function handleEdit(event) {
    const row = event.target.closest('tr');
    const projectId = row.getAttribute('data-id');
    const currentStatus = row.cells[5].textContent.includes('Active') ? 1 : 0;

    // Toggle status
    const newStatus = currentStatus === 1 ? 0 : 1;

    // Update status in backend
    fetch(`/projects/${projectId}/update-status`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content') // CSRF token for Laravel
        },
        body: JSON.stringify({ status: newStatus })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            row.cells[5].innerHTML = `${newStatus === 1 ? '<i class="fas fa-circle" style="color: green;"></i>' : '<i class="fas fa-circle" style="color: red;"></i>'} ${newStatus === 1 ? 'Active' : 'Inactive'}`; // Update UI with icon and text
        } else {
            alert('Failed to update status.');
        }
    })
    .catch(error => console.error('Error updating status:', error));
}

// Handle Delete button click
function handleDelete(event) {
    const row = event.target.closest('tr');
    const projectId = row.getAttribute('data-id');

    if (confirm('Are you sure you want to delete this project?')) {
        fetch(`/projects/${projectId}`, {
            method: 'DELETE',
            headers: {
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content') // CSRF token for Laravel
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                row.remove(); // Remove the row from the table
                alert('Project deleted successfully.');
            } else {
                alert('Failed to delete project.');
            }
        })
        .catch(error => console.error('Error deleting project:', error));
    }
}




        // Client Management
        document.getElementById('manageClientBtn').addEventListener('click', function () {

        // Update contentTitle text and apply styles
        contentTitle.textContent = 'Client Management';
        contentTitle.style.fontFamily = 'Times New Roman, serif'; // Set font to Times New Roman
        contentTitle.style.textAlign = 'center'; // Center align the text
        contentTitle.style.background = 'linear-gradient(to right, #ffffff, #005A4E)'; // Apply gradient background
        contentTitle.style.padding = '20px'; // Add padding for spacing

        // Additional responsiveness via Tailwind CSS classes
        contentTitle.classList.add('w-full', 'text-white', 'font-semibold', 'text-lg', 'sm:text-xl', 'md:text-2xl', 'lg:text-3xl');
        contentTitle.classList.add('py-4', 'px-6'); // Add padding to the title for spacing

        // Fetch the list of clients from the backend
        fetch('/clientsManagement') // Ensure this route is correct
            .then(response => response.json())
            .then(clients => {
                // Create the HTML structure dynamically
                let tableHTML = `
                    <div class="py-5 bg-transparent container-fluid">
                        <div class="bg-transparent row justify-content-center">
                            <div class="bg-transparent col-lg-10 col-md-12 ">
                                <div class="p-2 bg-transparent rounded-lg shadow-lg"> <!-- Transparent background -->
                                    
                                    <!-- Search Bar -->
                                    <div class="mb-4">
                                        <input 
                                            type="text" 
                                            id="searchClientInput" 
                                            class="w-full px-3 py-2 text-sm border border-gray-300 rounded-md form-control focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-base"
                                            placeholder="Search Clients by name..."
                                        />
                                    </div>

                                    <!-- Table -->
                                    <div class="table-responsive">
                                        <table class="table text-sm table-bordered table-striped table-hover sm:text-base">
                                            <thead class="text-xs text-white bg-blue-600 sm:text-sm md:text-base">
                                                <tr>
                                                    <th class="px-2 py-1">Client Name</th>
                                                    <th class="px-2 py-1">Mobile</th>
                                                    <th class="px-2 py-1">Email</th>
                                                </tr>
                                            </thead>
                                            <tbody id="clientTableBody">
                `;

                // Loop through each client and add rows to the table
                clients.forEach(client => {
                    tableHTML += `
                        <tr data-id="${client.id}" class="hover:bg-gray-100">
                            <td class="px-2 py-1 text-center d-none">${client.id}</td>
                            <td class="px-2 py-1 text-center">${client.name}</td>
                            <td class="px-2 py-1 text-center">${client.mobile}</td>
                            <td class="px-2 py-1 text-center">${client.email}</td>
                        </tr>
                    `;
                });

                tableHTML += `
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

                // Insert the table HTML into the content body
                contentBody.innerHTML = tableHTML;

                // Add search functionality
                const searchInput = document.getElementById('searchClientInput');
                const tableBody = document.getElementById('clientTableBody');
                searchInput.addEventListener('input', function () {
                    const query = searchInput.value.toLowerCase();
                    const filteredClients = clients.filter(client => 
                        client.name.toLowerCase().includes(query)
                    );

                    // Update table rows based on filtered clients
                    tableBody.innerHTML = filteredClients.map(client => `
                        <tr data-id="${client.id}" class="hover:bg-gray-100">
                            <td class="px-2 py-1 text-center d-none">${client.id}</td>
                            <td class="px-2 py-1 text-center">${client.name}</td>
                            <td class="px-2 py-1 text-center">${client.mobile}</td>
                            <td class="px-2 py-1 text-center">${client.email}</td>
                        </tr>
                    `).join('');
                });
            })
            .catch(error => {
                console.error('Error fetching clients:', error);
            });

        closeSidebarMenu();
        });



  
        
        // Manage Images
// Frontend JavaScript (Modify existing event listener)

document.getElementById('manageImageBtn').addEventListener('click', function () {
    // Update contentTitle text and apply styles
    contentTitle.textContent = 'Image Management';
    contentTitle.style.fontFamily = 'Times New Roman, serif';
    contentTitle.style.textAlign = 'center';
    contentTitle.style.background = 'linear-gradient(to right, #ffffff, #005A4E)';
    contentTitle.style.padding = '20px';

    // Additional responsiveness via Tailwind CSS classes
    contentTitle.classList.add(
        'w-full',
        'text-white',
        'font-semibold',
        'text-lg',
        'sm:text-xl',
        'md:text-2xl',
        'lg:text-3xl',
        'py-4',
        'px-6'
    );

    // Fetch images and projects from backend
    fetch('/images-with-projects')
        .then((response) => response.json())
        .then((images) => {
            // Build the table HTML dynamically
            let tableHTML = `
                <div class="container-fluid">
                    <div class="mb-4 row">
                        <!-- Search Bar -->
                        <div class="col-12">
                            <input type="text" id="searchBar" class="w-full form-control" placeholder="Search by project name..." />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="table-responsive">
                                <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Project Name</th>
                                            <th>Image</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody id="imagesTableBody">
            `;

            images.forEach((image) => {
                tableHTML += `
                    <tr data-image-id="${image.id}" data-image-path="${image.image_path}" data-project-name="${image.project ? image.project.project_name : 'No Project'}">
                        <td class="d-none">${image.id}</td>
                        <td>${image.project ? image.project.project_name : 'No Project'}</td>
                        <td>
                            <img src="${image.image_path}" alt="Image" style="width: 100px; height: 100px;">
                        </td>
                        <td>
                            <button class="btn btn-danger delete-image-btn" 
                                    data-image-id="${image.id}" 
                                    data-image-path="${image.image_path}">
                                Delete
                            </button>
                        </td>
                    </tr>
                `;
            });

            tableHTML += `
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            // Insert the table HTML into the content body
            contentBody.innerHTML = tableHTML;

            // Add event listeners to delete buttons
            document.querySelectorAll('.delete-image-btn').forEach(button => {
                button.addEventListener('click', function() {
                    const imageId = this.getAttribute('data-image-id');
                    const imagePath = this.getAttribute('data-image-path');
                    
                    // Confirm deletion
                    if (confirm('Are you sure you want to delete this image?')) {
                        deleteImage(imageId, imagePath);
                    }
                });
            });

            // Search functionality
            const searchBar = document.getElementById('searchBar');
            searchBar.addEventListener('input', function () {
                const query = searchBar.value.toLowerCase();
                const rows = document.querySelectorAll('#imagesTableBody tr');
                rows.forEach(row => {
                    const projectName = row.getAttribute('data-project-name').toLowerCase();
                    if (projectName.includes(query)) {
                        row.style.display = '';
                    } else {
                        row.style.display = 'none';
                    }
                });
            });
        })
        .catch((error) => {
            console.error('Error fetching images:', error);
        });

    closeSidebarMenu();
});

// Function to delete image
function deleteImage(imageId, imagePath) {
    // Ensure imagePath starts with a slash, e.g., '/storage/images/example.jpg'
    // Remove any leading domain or http:// if accidentally included
    const cleanPath = imagePath.replace(/^(https?:\/\/[^\/]+)?/, '');

    fetch(`/delete-image/${imageId}`, {
        method: 'DELETE',
        headers: {
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            image_path: cleanPath 
        })
    })
    .then(response => {
        // Log the raw response
        console.log('Response status:', response.status);
        
        // Try to get the response text first
        return response.text().then(text => {
            console.log('Raw response text:', text);
            
            // If response is not OK, try to parse as JSON or use text
            if (!response.ok) {
                try {
                    // Attempt to parse as JSON
                    const errorData = JSON.parse(text);
                    throw new Error(errorData.message || 'Deletion failed');
                } catch (parseError) {
                    // If JSON parsing fails, throw the original text
                    throw new Error(text || 'Deletion failed');
                }
            }
            
            // If response is OK, try to parse as JSON
            try {
                return JSON.parse(text);
            } catch (parseError) {
                // If parsing fails but response is OK, return the text
                return text;
            }
        });
    })
    .then(data => {
        // Remove the row from the table
        const rowToRemove = document.querySelector(`tr[data-image-id="${imageId}"]`);
        if (rowToRemove) {
            rowToRemove.remove();
        }
        
        // Show success message
        alert('Image deleted successfully');
    })
    .catch(error => {
        console.error('Detailed Deletion Error:', error);
        
        // More informative error message
        alert(`Deletion Failed: ${error.message}`);
    });
}



//manage video
document.getElementById('manageVideosBtn').addEventListener('click', function() {
    contentTitle.textContent = 'Video Management';
    contentTitle.style.fontFamily = 'Times New Roman, serif';
    contentTitle.style.textAlign = 'center';
    contentTitle.style.background = 'linear-gradient(to right, #ffffff, #005A4E)';
    contentTitle.style.padding = '20px';

    fetch('/videos')
        .then(response => response.json())
        .then(videos => {
            let tableHTML = `
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12">
                            <!-- Search Bar -->
                            <div class="mb-4">
                                <input
                                    type="text"
                                    id="searchProject"
                                    placeholder="Search by Project Name"
                                    class="form-control w-100"
                                />
                            </div>
                        </div>

                        <div class="col-12">
                            <div class="table-responsive">
                                <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Project Name</th>
                                            <th>Video</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody id="videoTableBody">
            `;

            videos.forEach(video => {
                tableHTML += `
                    <tr data-id="${video.id}">
                        <td class="d-none">${video.id}</td>
                        <td class="d-none">${video.video_path}</td>
                        <td>${video.project.project_name}</td>
                        <td>
                            <video width="200" height="150" controls>
                                <source src="${video.video_path}" type="video/mp4">
                                Your browser does not support the video tag.
                            </video>
                        </td>
                        <td>
                            <button class="btn btn-danger delete-video" data-id="${video.id}">Delete</button>
                        </td>
                    </tr>
                `;
            });

            tableHTML += `
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            contentBody.innerHTML = tableHTML;

            // Add event listeners for delete buttons
            document.querySelectorAll('.delete-video').forEach(button => {
                button.addEventListener('click', function() {
                    const videoId = this.getAttribute('data-id');
                    if (confirm('Are you sure you want to delete this video?')) {
                        fetch(`/videos/${videoId}`, {
                            method: 'DELETE',
                            headers: {
                                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                                'Content-Type': 'application/json'
                            }
                        })
                        .then(response => {
                            if (!response.ok) {
                                throw new Error('Network response was not ok');
                            }
                            return response.json();
                        })
                        .then(data => {
                            const row = document.querySelector(`tr[data-id="${videoId}"]`);
                            if (row) {
                                row.remove();
                            }

                            alert('Video deleted successfully');
                        })
                        .catch(error => {
                            console.error('Error:', error);
                            alert('Failed to delete video');
                        });
                    }
                });
            });

            // Add search functionality
            document.getElementById('searchProject').addEventListener('input', function() {
                const searchValue = this.value.toLowerCase();
                const rows = document.querySelectorAll('#videoTableBody tr');

                rows.forEach(row => {
                    const projectName = row.cells[2].textContent.toLowerCase();
                    if (projectName.includes(searchValue)) {
                        row.style.display = ''; // Show row
                    } else {
                        row.style.display = 'none'; // Hide row
                    }
                });
            });

            closeSidebarMenu(); // Close the sidebar menu when finished
        })
        .catch(error => {
            console.error('Error fetching videos:', error);
        });
});





//Manage Project Category
// Manage Project Category
document.getElementById('manageCategoryBtn').addEventListener('click', function() {
    
    contentTitle.textContent = 'Project Category Management';
    contentTitle.style.fontFamily = 'Times New Roman, serif';
    contentTitle.style.textAlign = 'center';
    contentTitle.style.background = 'linear-gradient(to right, #ffffff, #005A4E)';
    contentTitle.style.padding = '20px';
    
    // Send a request to fetch categories
    fetch('/categories') // Assuming you have an API route for categories
        .then(response => response.json())
        .then(categories => {
            // Prepare the table HTML with Edit button
            let tableHTML = `
                <div class="overflow-x-auto">
                    <table class="table w-full rounded-lg shadow-lg table-striped table-bordered">
                        <thead class="text-white bg-gradient-to-r from-blue-400 to-blue-600">
                            <tr>
                                <th class="px-4 py-2">#</th>
                                <th class="px-4 py-2">Category Name</th>
                                <th class="px-4 py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
            `;
            
            // Loop through the categories and add them to the table
            categories.forEach((category, index) => {
                tableHTML += `
                    <tr class="hover:bg-gray-100">
                        <td class="px-4 py-2">${index + 1}</td>
                        <td class="px-4 py-2" id="category-name-${category.id}">${category.category_name}</td>
                        <td class="px-4 py-2">
                            <button class="flex items-center justify-center px-4 py-2 text-white transition-all duration-300 ease-in-out rounded-full edit-btn bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:scale-105 hover:shadow-xl" data-id="${category.id}">
                                <span class="mr-2">✎</span>Edit
                            </button>
                        </td>
                    </tr>
                `;
            });
            
            // Close the table HTML
            tableHTML += `</tbody></table></div>`;
            
            // Insert the table HTML into the content body
            contentBody.innerHTML = tableHTML;

            // Add event listeners for edit buttons
            document.querySelectorAll('.edit-btn').forEach(button => {
                button.addEventListener('click', function() {
                    const categoryId = this.getAttribute('data-id');
                    const categoryNameElement = document.getElementById(`category-name-${categoryId}`);
                    const currentName = categoryNameElement.textContent;

                    // Create input field for editing category name
                    categoryNameElement.innerHTML = `
                        <input type="text" class="p-2 border-blue-500 rounded-md form-control" value="${currentName}" id="edit-category-name-${categoryId}">
                        <button class="px-4 py-2 text-white transition-all duration-300 ease-in-out rounded-full save-btn bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:scale-105 hover:shadow-xl" data-id="${categoryId}">
                            Save
                        </button>
                    `;

                    // Add event listener to the save button
                    const saveButton = document.querySelector(`.save-btn[data-id="${categoryId}"]`);
                    saveButton.addEventListener('click', function() {
                        const newCategoryName = document.getElementById(`edit-category-name-${categoryId}`).value;

                        // Send request to update category name in the database
                        fetch(`/categories/${categoryId}`, {
                            method: 'PUT',
                            headers: {
                                'Content-Type': 'application/json',
                                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content') // Include CSRF token if needed
                            },
                            body: JSON.stringify({ category_name: newCategoryName })
                        })
                        .then(response => response.json())
                        .then(data => {
                            if (data.success) {
                                // Update the category name in the table
                                categoryNameElement.innerHTML = newCategoryName;
                                alert('Category updated successfully!');
                            } else {
                                alert('Failed to update category: ' + data.message);
                            }
                        })
                        .catch(error => {
                            console.error('Error updating category:', error);
                            alert('An error occurred while updating the category. Please try again.');
                        });
                    });
                });
            });
        })
        .catch(error => {
            contentBody.innerHTML = `<p class="text-red-500">Error loading categories: ${error.message}</p>`;
        });

    closeSidebarMenu();
});






  

    // Event listener to fetch projects and populate the table
document.getElementById('updateProjectBtn').addEventListener('click', async function () {
    const contentTitle = document.getElementById('contentTitle');
    const contentBody = document.getElementById('contentBody');

    contentTitle.textContent = 'Project Update';

    try {
        const response = await fetch('/projects_Table');
        if (!response.ok) throw new Error('Network response was not ok ' + response.statusText);

        const data = await response.json();

        let projectRows = '';
        data.forEach(project => {
            projectRows += `
                <tr data-id="${project.id}">
                    <td class="d-none">${project.id}</td>
                    <td>
                        <input type="text" name="newName" value="${project.project_name}" class="form-control" />
                    </td>
                    <td>
                        <input type="text" name="newDescription" value="${project.description}" class="form-control" />
                    </td>
                    <td>
                        <img src="${project.project_image}" alt="Project Image" class="img-fluid" style="max-width: 100px; max-height: 100px;" />
                    </td>
                    <td>
                        <input type="file" accept="image/*" class="form-control" />
                    </td>
                    <td>
                        <button class="btn btn-primary save-btn" onclick="saveChanges(${project.id})">
                            <span class="mr-2">✎</span>Save
                        </button>
                    </td>
                </tr>
            `;
        });

        contentBody.innerHTML = `
            <div class="table-responsive">
                <table class="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th class="d-none">ID</th>
                            <th>Project Name</th>
                            <th>Description</th>
                            <th>Current Image</th>
                            <th>New Image</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${projectRows}
                    </tbody>
                </table>
            </div>
        `;
    } catch (error) {
        console.error('Error fetching project details:', error);
        contentBody.innerHTML = `<p class="text-danger">Failed to load projects. Please try again later.</p>`;
    }
});

    






            
        });

        
// Function to save changes for a project
async function saveChanges(projectId) {
    const row = document.querySelector(`tr[data-id="${projectId}"]`);
    const newName = row.querySelector('input[name="newName"]').value;
    const newDescription = row.querySelector('input[name="newDescription"]').value;
    const imageInput = row.querySelector('input[type="file"]');
    const newImage = imageInput.files[0];

    // Validate image size
    if (newImage && newImage.size > 2048 * 1024) {
        alert('Image size must be less than 2MB');
        return;
    }

    const formData = new FormData();
    formData.append('project_name', newName);
    formData.append('description', newDescription);
    if (newImage) formData.append('project_image', newImage);

    try {
        const response = await fetch(`/projects/update/${projectId}`, {
            method: 'POST',
            headers: {
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
            },
            body: formData,
        });

        if (!response.ok) throw new Error('Failed to save changes');
        const data = await response.json();

        if (data.success) {
            alert('Project updated successfully!');
            // Refresh the project table
            document.getElementById('updateProjectBtn').click();
        } else {
            alert('Failed to update the project. Check errors and try again.');
        }
    } catch (error) {
        console.error('Error updating project:', error);
        alert('An error occurred while saving changes.');
    }
}
        
    </script>
</body>
</html>
