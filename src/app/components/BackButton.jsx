'use client'
import { useRouter } from "next/navigation";
 
export default function Page() {
  const router = useRouter();

  const handleBack = () => {
    window.history.back();

  };
 
  return (
    <button onClick={handleBack}>Back</button>
  );
}