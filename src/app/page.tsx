import Link from "next/link";
import { Button } from "@nextui-org/react";

export default function Home() {
  return (
    <div>
      <Link href='/yt-saver'>
      <Button>
        Youtube donwloader
      </Button>
      </Link>
    </div>
  );
}
