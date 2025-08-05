"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  MessageCircle,
  Users,
  ActivityIcon,
  Send,
  Check,
  MoreHorizontal,
  UserPlus,
  Settings,
  Bell,
  Clock,
} from "lucide-react"

interface Comment {
  id: string
  userId: string
  userName: string
  userAvatar: string
  content: string
  timestamp: string
  position?: { x: number; y: number }
  resolved: boolean
  replies: Comment[]
}

interface Collaborator {
  id: string
  name: string
  avatar: string
  role: "owner" | "editor" | "viewer"
  status: "online" | "away" | "offline"
  cursor?: { x: number; y: number }
  lastSeen: string
}

interface CollaborationPanelProps {
  comments: Comment[]
  collaborators: Collaborator[]
  activities: any[]
  onResolveComment: (commentId: string) => void
  onAddReply: (commentId: string, content: string) => void
  onInviteCollaborator: () => void
}

export function CollaborationPanel({
  comments,
  collaborators,
  activities,
  onResolveComment,
  onAddReply,
  onInviteCollaborator,
}: CollaborationPanelProps) {
  const [activeTab, setActiveTab] = useState<"comments" | "team" | "activity">("comments")
  const [replyContent, setReplyContent] = useState<{ [key: string]: string }>({})
  const [showReplyInput, setShowReplyInput] = useState<string | null>(null)

  const handleAddReply = (commentId: string) => {
    const content = replyContent[commentId]
    if (content?.trim()) {
      onAddReply(commentId, content)
      setReplyContent((prev) => ({ ...prev, [commentId]: "" }))
      setShowReplyInput(null)
    }
  }

  return (
    <div className="w-80 bg-gray-900 border-l border-gray-800 overflow-y-auto">
      <div className="p-6">
        {/* Tab Navigation */}
        <div className="flex border-b border-gray-800 mb-6">
          {[
            {
              id: "comments",
              label: "Comments",
              icon: MessageCircle,
              count: comments.filter((c) => !c.resolved).length,
            },
            { id: "team", label: "Team", icon: Users, count: collaborators.length },
            { id: "activity", label: "Activity", icon: ActivityIcon, count: activities.length },
          ].map(({ id, label, icon: Icon, count }) => (
            <button
              key={id}
              className={`flex items-center gap-2 px-3 py-2 text-xs font-light tracking-wide transition-colors ${
                activeTab === id ? "text-white border-b-2 border-white" : "text-gray-400 hover:text-white"
              }`}
              onClick={() => setActiveTab(id as any)}
            >
              <Icon className="w-3 h-3" />
              {label}
              {count > 0 && <Badge className="bg-gray-700 text-white text-xs px-1.5 py-0.5 min-w-0 h-4">{count}</Badge>}
            </button>
          ))}
        </div>

        {/* Comments Tab */}
        {activeTab === "comments" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-light text-gray-400 tracking-wide">COMMENTS</h3>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white hover:bg-gray-800 font-light text-xs"
              >
                <Settings className="w-3 h-3" />
              </Button>
            </div>

            <div className="space-y-4">
              {comments.map((comment) => (
                <Card
                  key={comment.id}
                  className={`p-4 border ${
                    comment.resolved ? "border-gray-700 bg-gray-800/50" : "border-gray-700 bg-gray-800"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <Image
                      src={comment.userAvatar || "/placeholder.svg"}
                      alt={comment.userName}
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm font-light text-white">{comment.userName}</span>
                        <span className="text-xs text-gray-400">{comment.timestamp}</span>
                        {comment.position && (
                          <Badge className="bg-yellow-500/20 text-yellow-400 text-xs px-1.5 py-0.5">
                            <MessageCircle className="w-2 h-2 mr-1" />
                            PINNED
                          </Badge>
                        )}
                      </div>
                      <p
                        className={`text-sm leading-relaxed ${
                          comment.resolved ? "text-gray-400 line-through" : "text-gray-300"
                        }`}
                      >
                        {comment.content}
                      </p>

                      {/* Replies */}
                      {comment.replies.length > 0 && (
                        <div className="mt-3 space-y-2 border-l-2 border-gray-700 pl-3">
                          {comment.replies.map((reply) => (
                            <div key={reply.id} className="flex items-start gap-2">
                              <Image
                                src={reply.userAvatar || "/placeholder.svg"}
                                alt={reply.userName}
                                width={20}
                                height={20}
                                className="rounded-full"
                              />
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                  <span className="text-xs font-light text-white">{reply.userName}</span>
                                  <span className="text-xs text-gray-500">{reply.timestamp}</span>
                                </div>
                                <p className="text-xs text-gray-300 leading-relaxed">{reply.content}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Reply Input */}
                      {showReplyInput === comment.id && (
                        <div className="mt-3 space-y-2">
                          <Input
                            value={replyContent[comment.id] || ""}
                            onChange={(e) => setReplyContent((prev) => ({ ...prev, [comment.id]: e.target.value }))}
                            placeholder="Add a reply..."
                            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 text-xs"
                          />
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              className="bg-white text-black hover:bg-gray-200 font-light text-xs"
                              onClick={() => handleAddReply(comment.id)}
                            >
                              <Send className="w-3 h-3 mr-1" />
                              REPLY
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              className="text-gray-400 hover:text-white hover:bg-gray-800 font-light text-xs"
                              onClick={() => setShowReplyInput(null)}
                            >
                              CANCEL
                            </Button>
                          </div>
                        </div>
                      )}

                      {/* Actions */}
                      {!comment.resolved && (
                        <div className="flex items-center gap-2 mt-3">
                          <Button
                            size="sm"
                            variant="ghost"
                            className="text-gray-400 hover:text-white hover:bg-gray-800 font-light text-xs"
                            onClick={() => setShowReplyInput(showReplyInput === comment.id ? null : comment.id)}
                          >
                            REPLY
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="text-green-400 hover:text-green-300 hover:bg-gray-800 font-light text-xs"
                            onClick={() => onResolveComment(comment.id)}
                          >
                            <Check className="w-3 h-3 mr-1" />
                            RESOLVE
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Team Tab */}
        {activeTab === "team" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-light text-gray-400 tracking-wide">TEAM MEMBERS</h3>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white hover:bg-gray-800 font-light text-xs"
                onClick={onInviteCollaborator}
              >
                <UserPlus className="w-3 h-3 mr-1" />
                INVITE
              </Button>
            </div>

            <div className="space-y-3">
              {collaborators.map((collaborator) => (
                <Card key={collaborator.id} className="p-3 border-gray-700 bg-gray-800">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Image
                        src={collaborator.avatar || "/placeholder.svg"}
                        alt={collaborator.name}
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                      <div
                        className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-gray-800 ${
                          collaborator.status === "online"
                            ? "bg-green-500"
                            : collaborator.status === "away"
                              ? "bg-yellow-500"
                              : "bg-gray-500"
                        }`}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-light text-white">{collaborator.name}</span>
                        <Badge
                          className={`text-xs px-1.5 py-0.5 ${
                            collaborator.role === "owner"
                              ? "bg-blue-500/20 text-blue-400"
                              : collaborator.role === "editor"
                                ? "bg-green-500/20 text-green-400"
                                : "bg-gray-500/20 text-gray-400"
                          }`}
                        >
                          {collaborator.role.toUpperCase()}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-gray-400">
                        <div
                          className={`w-2 h-2 rounded-full ${
                            collaborator.status === "online"
                              ? "bg-green-500"
                              : collaborator.status === "away"
                                ? "bg-yellow-500"
                                : "bg-gray-500"
                          }`}
                        />
                        {collaborator.status === "online" ? "Online" : `Last seen ${collaborator.lastSeen}`}
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-gray-700">
                      <MoreHorizontal className="w-3 h-3" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Activity Tab */}
        {activeTab === "activity" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-light text-gray-400 tracking-wide">RECENT ACTIVITY</h3>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white hover:bg-gray-800 font-light text-xs"
              >
                <Bell className="w-3 h-3" />
              </Button>
            </div>

            <div className="space-y-3">
              {activities.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-start gap-3 p-3 rounded border border-gray-700 bg-gray-800"
                >
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-300">
                      <span className="text-white font-light">{activity.userName}</span>{" "}
                      <span className="text-gray-400">{activity.action}</span>
                    </p>
                    <p className="text-xs text-gray-400 mt-1">{activity.details}</p>
                    <div className="flex items-center gap-1 text-xs text-gray-500 mt-2">
                      <Clock className="w-3 h-3" />
                      {activity.timestamp}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
