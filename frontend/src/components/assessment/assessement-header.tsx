"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PlusCircle } from "lucide-react";
import Link from "next/link";

export default function AssessmentHeader() {
  const [selectedAssessment, setSelectedAssessment] = useState("all");
  const [selectedCreated, setSelectedCreated] = useState("all");
  const [viewMode, setViewMode] = useState<"today" | "week" | "calendar">("today");

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        <Select value={selectedAssessment} onValueChange={setSelectedAssessment}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Assessment" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Assessment</SelectItem>
            <SelectItem value="mern">MERN</SelectItem>
            <SelectItem value="mean">MEAN</SelectItem>
          </SelectContent>
        </Select>

        <Select value={selectedCreated} onValueChange={setSelectedCreated}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Created" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Created</SelectItem>
            <SelectItem value="mihir">Mihir</SelectItem>
            <SelectItem value="john">John</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center gap-4 ml-auto">
        <div className="flex bg-gray-100 rounded-lg p-1">
          <Button
            variant={viewMode === "today" ? "secondary" : "ghost"}
            size="sm"
            onClick={() => setViewMode("today")}
          >
            Today
          </Button>
          <Button
            variant={viewMode === "week" ? "secondary" : "ghost"}
            size="sm"
            onClick={() => setViewMode("week")}
          >
            Week
          </Button>
          <Button
            variant={viewMode === "calendar" ? "secondary" : "ghost"}
            size="sm"
            onClick={() => setViewMode("calendar")}
          >
            Calendar
          </Button>
        </div>

        <Link href="/assessment/create-assessment">
          <Button className="bg-primary text-white">
            <PlusCircle className="mr-2 h-4 w-4" />
            Create Assessment
          </Button>
        </Link>
      </div>
    </div>
  );
}