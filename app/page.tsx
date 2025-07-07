import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to Raise your Hack!</h1>
      <p className="mt-4 text-lg">
        Join the BlackboxAI track and build innovative AI solutions.
      </p>
      <Image
        src="/blackboxai-logo.svg"
        alt="BlackboxAI Logo"
        width={200}
        height={200}
        className="mt-8"
      />
    </main>
  );
}
