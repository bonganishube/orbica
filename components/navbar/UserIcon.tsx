import React from "react";
import { LuUser } from "react-icons/lu";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";

const UserIcon = async () => {
  const user = await currentUser();

  const profileImage = user?.imageUrl;

  if (profileImage) {
    return (
      <Image
        src={profileImage}
        width={1280}
        height={1280}
        alt="Profile image"
        className="w-6 h-6 rounded-full object-cover"
      />
    );
  }
  return (
    <div>
      <LuUser className="w-6 h-6 bg-primary rounded-full text-white" />
    </div>
  );
};

export default UserIcon;
