"use client";
import { ClerkLoading, SignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Button, Spinner } from "react-bootstrap";

export default function Page() {
  const router = useRouter();

  return (
    <main className="h-screen flex flex-col items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
      <SignIn />
      <ClerkLoading>
        <Spinner />
      </ClerkLoading>
      <Button
        className="bg-primary mt-6 w-32"
        onClick={() => router.back()}
      >{`<-- Back`}</Button>
    </main>
  );
}
