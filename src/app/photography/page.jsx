import Link from "next/link";

export default function Photography() {
  return (
    <div className="grid grid-cols-1 min-h-screen justify-items-center border space-y-[130px]">
      <Link href="/barcelona">
        <img
          src="/barcelona.png"
          className="h-[600px] w-[400px] "
        ></img>
      </Link>
      <Link href='london'>
        <img
          src="/london.png"
          className="h-[600px] w-[400px]"
        ></img>
      </Link>
    </div>
  );
}
