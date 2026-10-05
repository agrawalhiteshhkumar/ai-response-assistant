"use client";

import React, { useState } from "react";
import { FileText, Send, CheckCircle, ShieldAlert, BookOpen } from "lucide-react";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"chat" | "circulars">("circulars");

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Top Header */}
      <header className="border-b bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-indigo-600 text-white p-2 rounded-lg font-bold">
              AI
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight">AI Response Assistant</h1>
              <p className="text-xs text-slate-500">Autonomous & Governed Institutional Knowledge Desk</p>
            </div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab("circulars")}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                activeTab === "circulars"
                  ? "bg-indigo-50 text-indigo-700 border border-indigo-200"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              Circular Extractor
            </button>
            <button
              onClick={() => setActiveTab("chat")}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                activeTab === "chat"
                  ? "bg-indigo-50 text-indigo-700 border border-indigo-200"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              Grounded Chatbot
            </button>
          </div>
        </div>
      </header>

      {/* Main Workspace */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {activeTab === "circulars" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Box: Upload & Input */}
            <div className="bg-white p-6 rounded-xl border shadow-sm">
              <h2 className="text-lg font-semibold flex items-center gap-2 mb-4">
                <FileText className="text-indigo-600" /> Upload Circular (PDF / Image)
              </h2>
              <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 text-center bg-slate-50 hover:bg-slate-100/50 cursor-pointer">
                <p className="text-sm font-medium text-slate-700">Click or drag official notices here</p>
                <p className="text-xs text-slate-400 mt-1">Supports State GRs, MSBTE, PCI, and College Circulars</p>
              </div>
              <button className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition-colors">
                Extract Structured Notice
              </button>
            </div>

            {/* Right Box: Extracted Governed Fields */}
            <div className="bg-white p-6 rounded-xl border shadow-sm">
              <h2 className="text-lg font-semibold flex items-center gap-2 mb-4">
                <CheckCircle className="text-emerald-600" /> Extracted Structured Notice
              </h2>
              <p className="text-sm text-slate-500 italic">Upload a document to extract title, deadlines, audience, and action items with zero hallucination.</p>
            </div>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto bg-white rounded-xl border shadow-sm h-[600px] flex flex-col">
            <div className="p-4 border-b">
              <h2 className="font-semibold text-slate-800 flex items-center gap-2">
                <BookOpen className="text-indigo-600" /> Institutional Helpdesk
              </h2>
              <p className="text-xs text-slate-500">Grounded strictly in approved notes and circulars</p>
            </div>
            <div className="flex-1 p-4 overflow-y-auto">
              <div className="bg-indigo-50 border border-indigo-100 text-indigo-900 text-sm p-4 rounded-xl max-w-[85%]">
                Hello! Welcome to the Institutional Helpdesk. You can ask about notes, syllabus, examination circulars, or office procedures.
              </div>
            </div>
            <div className="p-4 border-t flex gap-2">
              <input
                type="text"
                placeholder="Ask an academic or administrative question..."
                className="flex-1 border rounded-lg px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
                <Send size={16} />
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
