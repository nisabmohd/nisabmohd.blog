import Link from "next/link";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export type AuthorProps = {
  username: string;
  avatar: string;
  social?: {
    name: string;
    link: string;
  };
};

export default function Author({ avatar, username, social }: AuthorProps) {
  return (
    <div className="flex flex-row gap-2 py-2">
      <Avatar>
        <AvatarImage src={avatar} />
      </Avatar>
      <div className=" flex flex-col">
        <h5 className="font-semibold text-[14.5px] prose dark:prose-invert">
          {username}
        </h5>
        {social && (
          <Link className="text-blue-500 text-[14.5px]" href={social.link}>
            @{social.name}
          </Link>
        )}
      </div>
    </div>
  );
}
