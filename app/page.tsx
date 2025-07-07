import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Image src="./blackboxai-logo.svg" alt="CodeGuard Logo" width={40} height={40} className="" />
          <h1 className="text-2xl font-bold mb-[1rem]">CodeGuard</h1>
        </div>
        <nav className="space-x-4">
          <a href="#features" className="text-gray-400 hover:text-white">
            Features
          </a>
          <a href="#how-it-works" className="text-gray-400 hover:text-white">
            How It Works
          </a>
          <a href="#pricing" className="text-gray-400 hover:text-white">
            Pricing
          </a>
          <a href="#contact" className="text-gray-400 hover:text-white">
            Contact
          </a>
        </ nav>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Sign In
        </button>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-24 text-center">
        <h2 className="text-5xl font-extrabold leading-tight">
          Ship Code with Confidence
        </h2>
        <p className="mt-4 text-xl text-gray-400">
          Automated QA checks for quality, security, and performance, right in
          your Git workflow.
        </p>
        <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg">
          Get Started - It's Free
        </button>
      </main>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12">
            A Smarter Way to Ensure Code Quality
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-blue-600 p-8 rounded-lg text-center text-white">
              <Image src="/file.svg" alt="Automated Code Reviews" width={64} height={64} className="mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">Automated Code Reviews</h4>
              <p className="text-gray-400">
                Get instant feedback on code style, complexity, and potential bugs.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-blue-600 p-8 rounded-lg text-center text-white">
              <Image src="/window.svg" alt="Security Vulnerability Scans" width={64} height={64} className="mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">Security Vulnerability Scans</h4>
              <p className="text-gray-400">
                Proactively identify and fix security flaws before they hit production.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-blue-600 p-8 rounded-lg text-center text-white">
              <Image src="/globe.svg" alt="CI/CD Integration" width={64} height={64} className="mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">CI/CD Integration</h4>
              <p className="text-gray-400">
                Seamlessly integrate with your existing development pipeline.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-12">Get Setup in Minutes</h3>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
            <div className="flex items-center flex-col">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold mb-4">1</div>
              <p className="font-semibold">Connect Repository</p>
            </div>
            <div className="text-gray-500 text-2xl hidden md:block">→</div>
            <div className="flex items-center flex-col">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold mb-4">2</div>
              <p className="font-semibold">Configure Checks</p>
            </div>
            <div className="text-gray-500 text-2xl hidden md:block">→</div>
            <div className="flex items-center flex-col">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold mb-4">3</div>
              <p className="font-semibold">Get Instant Feedback</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-6">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>&copy; 2024 CodeGuard. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
