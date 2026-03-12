"use client";

import Link from "next/link";
import { Search, MessageCircle } from "lucide-react";
import Sidebar from "@/components/Sidebar";

const conversations = [
  {
    id: 1,
    name: "Sarah Johnson",
    message: "Is this still available?",
    time: "2m ago",
    unread: true,
    avatar: "SJ",
    product: "Vintage Leather Bag"
  },
  {
    id: 2,
    name: "Mike Chen",
    message: "Can you do Rp 300.000?",
    time: "1h ago",
    unread: true,
    avatar: "MC",
    product: "Denim Jacket"
  },
  {
    id: 3,
    name: "Emma Wilson",
    message: "Thanks! I'll take it",
    time: "3h ago",
    unread: false,
    avatar: "EW",
    product: "White Sneakers"
  },
  {
    id: 4,
    name: "David Lee",
    message: "What's the condition?",
    time: "1d ago",
    unread: false,
    avatar: "DL",
    product: "Black Dress"
  },
  {
    id: 5,
    name: "Lisa Park",
    message: "Can we meet tomorrow?",
    time: "2d ago",
    unread: false,
    avatar: "LP",
    product: "Wool Coat"
  },
];

export default function InboxPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar Navigation */}
      <Sidebar />

      {/* Main Content - Offset for sidebar */}
      <div className="ml-64">
        <div className="max-w-4xl mx-auto bg-white min-h-screen">
          <div className="pb-6">
            {/* Header */}
            <header className="sticky top-0 bg-white border-b px-6 py-4 z-40">
              <div className="mb-4">
                <h1 className="text-2xl font-bold text-gray-900">Messages</h1>
                <p className="text-sm text-gray-600 mt-1">Chat with buyers and sellers</p>
              </div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search conversations"
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
            </header>

            {/* Conversations List */}
            <div className="divide-y">
              {conversations.map((conv) => (
                <Link
                  key={conv.id}
                  href={`/inbox/${conv.id}`}
                  className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50 transition-colors"
                >
                  {/* Avatar */}
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-medium ${
                    conv.unread ? 'bg-accent' : 'bg-gray-400'
                  }`}>
                    {conv.avatar}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className={`font-medium ${conv.unread ? 'text-gray-900' : 'text-gray-700'}`}>
                        {conv.name}
                      </h3>
                      <span className="text-xs text-gray-500">{conv.time}</span>
                    </div>
                    <p className={`text-sm truncate ${conv.unread ? 'text-gray-900 font-medium' : 'text-gray-600'}`}>
                      {conv.message}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">Re: {conv.product}</p>
                  </div>

                  {/* Unread Badge */}
                  {conv.unread && (
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                  )}
                </Link>
              ))}
            </div>

            {/* Empty State (if no conversations) */}
            {conversations.length === 0 && (
              <div className="text-center py-20">
                <MessageCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-600 mb-4">No messages yet</p>
                <p className="text-sm text-gray-500">Start buying or selling to chat with others</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
