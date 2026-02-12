import Link from "next/link";
import { Search } from "lucide-react";
import BottomNav from "@/components/BottomNav";

const conversations = [
  {
    id: 1,
    name: "Sarah Johnson",
    message: "Is this still available?",
    time: "2m ago",
    unread: true,
    avatar: "SJ",
  },
  {
    id: 2,
    name: "Mike Chen",
    message: "Can you do Rp 300.000?",
    time: "1h ago",
    unread: true,
    avatar: "MC",
  },
  {
    id: 3,
    name: "Lisa Anderson",
    message: "Thanks for the quick shipping!",
    time: "3h ago",
    unread: false,
    avatar: "LA",
  },
  {
    id: 4,
    name: "David Kim",
    message: "What's the condition?",
    time: "Yesterday",
    unread: false,
    avatar: "DK",
  },
  {
    id: 5,
    name: "Emma Wilson",
    message: "I'll take it!",
    time: "2 days ago",
    unread: false,
    avatar: "EW",
  },
];

export default function InboxPage() {
  return (
    <div className="min-h-screen pb-20 bg-gray-50">
      {/* Header */}
      <header className="bg-white px-4 py-4 border-b sticky top-0 z-10">
        <h1 className="text-lg font-semibold mb-3">Messages</h1>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search messages"
            className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </header>

      {/* Conversations */}
      <div className="bg-white">
        {conversations.map((conv) => (
          <Link
            key={conv.id}
            href={`/inbox/${conv.id}`}
            className="flex items-center gap-3 px-4 py-4 border-b border-gray-100 hover:bg-gray-50 transition"
          >
            <div className="w-12 h-12 rounded-full bg-primary/30 flex items-center justify-center font-medium text-sm">
              {conv.avatar}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <p className={`text-sm font-medium ${conv.unread ? "text-gray-900" : "text-gray-600"}`}>
                  {conv.name}
                </p>
                <span className="text-xs text-gray-500">{conv.time}</span>
              </div>
              <p className={`text-sm truncate ${conv.unread ? "font-medium text-gray-900" : "text-gray-500"}`}>
                {conv.message}
              </p>
            </div>
            {conv.unread && (
              <div className="w-2 h-2 rounded-full bg-accent" />
            )}
          </Link>
        ))}
      </div>

      <BottomNav />
    </div>
  );
}
