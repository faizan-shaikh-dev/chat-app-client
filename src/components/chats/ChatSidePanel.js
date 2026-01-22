import {
  Archive,
  ChevronDown,
  EllipsisVertical,
  MessageSquarePlus,
  Search,
} from "lucide-react";
import Link from "next/link";

import { generateColor, generateColorOpacity } from "@/services/color.service";


const ChatSidePanel = () => {
  return (
    <div className="flex flex-col gap-5 w-full h-full items-start justify-start">
      <div className="flex items-center w-full justify-between">
        <h2 className="text-3xl font-medium tracking-wide font-poppins ">
          Chats
        </h2>
        <div className="flex gap-4">
          <Link href="/chats?mode=newchat">
            <MessageSquarePlus className="transition hover:text-icongreen/60 cursor-pointer" />
          </Link>
          <EllipsisVertical />
        </div>
      </div>
      {/* Search Bar */}
      <div className="w-full border bg-hovergreen/50 border-bordergreen flex items-center gap-2 p-2 rounded-full">
        <Search size={20} className="ml-1" />
        <input placeholder="Search Chats" className="outline-0" />
      </div>
      {/* Filters  */}
      <div className="flex items-center justify-start gap-2 text-sm">
        {[
          {
            name: "All",
          },
          {
            name: "Unread",
          },
          {
            name: "Favourite",
          },
          {
            name: "Groups",
          },
        ].map((i, index) => (
          <div
            key={index}
            className="rounded-full p-1 px-3 flex items-center justify-center bg-hovergreen/50 border-bordergreen border  w-fit"
          >
            {i.name}
          </div>
        ))}
      </div>
      {/* Archived Chats  */}
      <div className="flex my-1 w-full items-center justify-between text-sm">
        <div className="flex items-center gap-4">
          <Archive size={20} />
          Archived
        </div>
        <span className="">4</span>
      </div>

      {/* Main Chats Block  */}
      <div className="w-full flex flex-col gap-5">
        {[
          {
            name: "Zaid",
            lastMessage: "Hii how are you ! ",
            time: "11:05 am",
          },
          {
            name: "Ahmed",
            lastMessage: "Hii how are you ! ",
            time: "11:05 am",
          },
          {
            name: "Shafeen",
            lastMessage: "Hii how are you ! ",
            time: "11:05 am",
          },
        ].map((i, index) => (
          <div
            key={index}
            className="flex items-center justify-between group hover:bg-hovergreen transition p-2 rounded-xl cursor-pointer"
          >
            <div className="flex w-full gap-3">
              <span
                className={` size-12 text-xl flex items-center justify-center rounded-full`}
                style={{
                  color: generateColorOpacity(index),
                  backgroundColor: generateColor(index),
                }}
              >
                A
              </span>
              <div className="">
                <h4>{i.name}</h4>
                <p className="text-sm ">{i.lastMessage}</p>
              </div>
            </div>
            {/* Time */}
            <div className="flex flex-col gap-1 items-end">
              <span className="text-xs text-nowrap">{i.time}</span>
              <div className="flex items-center justify-center gap-2  transition duration-400">
                <span className="size-5 flex items-center justify-center text-xs bg-green rounded-full shrink-0">
                  1
                </span>
                <span className="hidden group-hover:block">
                  <ChevronDown size={20} className="mt-1" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatSidePanel;