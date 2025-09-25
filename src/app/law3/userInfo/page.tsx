"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, Mail, MapPin, Phone, Settings, Users } from "lucide-react"
import RenderResult from "next/dist/server/render-result"


export type userInfo = {
  get(EMPLOYEE: string, TEAM_NAME:string, TEAM_ROLE:string, 
    APP_ROLE:string, EMPLOYEE_ID:string, LOCATION:string, JOIN_DATE:Date, EMAIL:string): unknown;
    EMPLOYEE:string;
    TEAM_NAME:string;
    TEAM_ROLE:string;
    APP_ROLE:string;
    EMPLOYEE_ID:string;
    LOCATION:string;
    JOIN_DATE:string;
    EMAIL:string;
};



// gwtUserData = {

//   //mAKE A CALL TO THE UNSTABLE_REVALIDATE_RENAME_ERROR.TS TO 

//   //Result
// }

//pull current user value in from sso and compare it to a valid user in database
const currentUser = {
 // id: "1",
  name: "Sarah Johnson",
  email: "sarah.johnson@company.com",
  avatar: "/placeholder.svg?height=100&width=100",
  role: "Team Lead",
  department: "Engineering",
  location: "San Francisco, CA",
  phone: "+1 (555) 123-4567",
  joinDate: "January 2023",
  teamId: "team-1",
}

const teamInfo = {
  id: "team-1",
  name: "Frontend Development Team",
  description: "Responsible for building and maintaining user-facing applications",
  memberCount: 6,
  department: "Engineering",
}

const teamMembers = [
  {
    id: "1",
    name: "Sarah Johnson",
    email: "sarah.johnson@company.com",
    avatar: "/placeholder.svg?height=40&width=40",
    role: "Team Lead",
    status: "admin",
    isCurrentUser: true,
  },
  {
    id: "2",
    name: "Michael Chen",
    email: "michael.chen@company.com",
    avatar: "/placeholder.svg?height=40&width=40",
    role: "Senior Developer",
    status: "admin",
    isCurrentUser: false,
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    email: "emily.rodriguez@company.com",
    avatar: "/placeholder.svg?height=40&width=40",
    role: "Frontend Developer",
    status: "user",
    isCurrentUser: false,
  },
  {
    id: "4",
    name: "David Kim",
    email: "david.kim@company.com",
    avatar: "/placeholder.svg?height=40&width=40",
    role: "UI/UX Designer",
    status: "admin",
    isCurrentUser: false,
  },
  {
    id: "5",
    name: "Lisa Thompson",
    email: "lisa.thompson@company.com",
    avatar: "/placeholder.svg?height=40&width=40",
    role: "Frontend Developer",
    status: "user",
    isCurrentUser: false,
  },
  {
    id: "6",
    name: "Alex Martinez",
    email: "alex.martinez@company.com",
    avatar: "/placeholder.svg?height=40&width=40",
    role: "Junior Developer",
    status: "admin",
    isCurrentUser: false,
  },
]

function getStatusColor(status: string) {
  switch (status) {
    case "admin":
      return "bg-green-500"
    case "user":
      return "bg-yellow-500"
  }
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
}

export default function ProfilePage() {
  return (
    <div className="container mx-auto p-6 max-w-7xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">My Profile</h1>
          <p className="text-muted-foreground">Manage your account and team information</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* User Information Card */}
        <Card className="md:col-span-1">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <Avatar className="h-24 w-24">
                <AvatarImage src={currentUser.avatar || "/placeholder.svg"} alt={currentUser.name} />
                <AvatarFallback className="text-lg">{getInitials(currentUser.name)}</AvatarFallback>
              </Avatar>
            </div>
            <CardTitle className="text-xl">{currentUser.name}</CardTitle>
            <CardDescription>{currentUser.role}</CardDescription>
            <Badge variant="secondary" className="w-fit mx-auto">
              {currentUser.department}
            </Badge>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3 text-sm">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <span>{currentUser.email}</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <span>{currentUser.phone}</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span>{currentUser.location}</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <CalendarDays className="h-4 w-4 text-muted-foreground" />
              <span>Joined {currentUser.joinDate}</span>
            </div>
          </CardContent>
        </Card>

        {/* Team Information and Members */}
        <div className="md:col-span-2 space-y-6">
          {/* Team Info Card */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    {teamInfo.name}
                  </CardTitle>
                  <CardDescription>{teamInfo.description}</CardDescription>
                </div>
                <Badge variant="outline">{teamInfo.memberCount} members</Badge>
              </div>
            </CardHeader>
          </Card>

          {/* Team Members Card */}
          <Card>
            <CardHeader>
              <CardTitle>Team Members</CardTitle>
              <CardDescription>Connect and collaborate with your team members</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2">
                {teamMembers.map((member) => (
                  <div
                    key={member.id}
                    className={`flex items-center gap-3 p-3 rounded-lg border ${
                      member.isCurrentUser ? "bg-blue-50 border-blue-200" : "bg-white hover:bg-gray-50"
                    } transition-colors`}
                  >
                    <div className="relative">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                        <AvatarFallback>{getInitials(member.name)}</AvatarFallback>
                      </Avatar>
                      <div
                        className={`absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-white ${getStatusColor(
                          member.status,
                        )}`}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="font-medium text-sm truncate">
                          {member.name}
                          {member.isCurrentUser && <span className="text-blue-600 ml-1">(You)</span>}
                        </p>
                      </div>
                      <p className="text-xs text-muted-foreground truncate">{member.role}</p>
                      <p className="text-xs text-muted-foreground truncate">{member.email}</p>
                    </div>
                    <div className="flex flex-col items-end">
                      <Badge
                        variant="outline"
                        className={`text-xs ${
                          member.status === "admin"
                            ? "text-green-700 border-green-200"
                            : member.status === "user"
                              ? "text-yellow-700 border-yellow-200"
                              : "text-gray-700 border-gray-200"
                        }`}
                      >
                        {member.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
