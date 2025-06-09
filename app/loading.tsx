// app/loading.tsx
export default function Loading() {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-black-100">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-purple-500 border-t-transparent" />
      </div>
    );
  }