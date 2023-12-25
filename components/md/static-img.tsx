import Image from "next/image";
import { ComponentProps } from "react";

type StaticImgProps = ComponentProps<typeof Image>;

export default function StaticImg(props: StaticImgProps) {
  return (
    <div className="relative w-full min-h-[400px] max-h-[450px] mb-16 -mt-2">
      <Image className="rounded-xl" {...props} alt="" fill />
    </div>
  );
}
