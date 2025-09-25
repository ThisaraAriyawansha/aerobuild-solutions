<x-guest-layout>
    <div class="flex items-center justify-center min-h-screen py-6 bg-gray-50 sm:py-12">
        <div class="w-full max-w-md p-8 space-y-6 sm:p-10">
            <!-- Logo Section -->
            <div class="flex justify-center mb-6">
                <img src="./images/zarla-k-1x1-2400x2400-20211119-y8r6jygpdqy7qwr4bhcp-removebg-preview.png" 
                    alt="Kandalama Homes Logo" class="h-12">
            </div>

            <!-- Title and Description -->
            <h2 class="font-serif text-3xl font-bold text-center text-gray-800">Welcome to Kandalama Homes</h2>
            <p class="mb-6 font-serif text-sm text-center text-gray-500">Please log in to your account</p>

            <!-- Validation Errors -->
            <x-validation-errors class="mb-4" />

            @if (session('status'))
                <div class="mb-4 font-serif text-sm text-green-600">
                    {{ session('status') }}
                </div>
            @endif

            <!-- Login Form -->
            <form method="POST" action="{{ route('login') }}" class="space-y-6">
                @csrf

                <!-- Email Input -->
                <div>
                    <label for="email" class="block font-serif text-sm font-medium text-gray-700">Email</label>
                    <input id="email" type="email" name="email" :value="old('email')" required autofocus 
                        class="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md focus:ring-[#005A4E] focus:border-[#005A4E]" 
                        autocomplete="username">
                </div>

                <!-- Password Input -->
                <div>
                    <label for="password" class="block font-serif text-sm font-medium text-gray-700">Password</label>
                    <input id="password" type="password" name="password" required 
                        class="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md focus:ring-[#005A4E] focus:border-[#005A4E]" 
                        autocomplete="current-password">
                </div>

                <!-- Submit Button -->
                <div>
                    <button type="submit" 
                        class="w-full py-2 px-4 bg-[#005A4E] text-white rounded-md shadow-md hover:bg-[#004740] focus:outline-none focus:ring-2 focus:ring-[#005A4E]">
                        Log in
                    </button>
                </div>
            </form>

            <!-- Back Button -->
            <div class="flex justify-center mt-4">
                <a href="/" class="text-sm text-[#005A4E] hover:underline focus:outline-none font-serif">
                    &#8592; Back to Home
                </a>
            </div>
        </div>
    </div>
</x-guest-layout>
