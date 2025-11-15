export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Virtual Tour</h1>
      <p className="mt-2 text-neutral-600">Explore Spacio Workspace from the comfort of your home.</p>
      <video className="mt-6 w-full rounded-lg" controls src="/tour.mp4" />
    </main>
  );
}
