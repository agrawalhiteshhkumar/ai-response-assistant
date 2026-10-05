"use client";

import React, { useState } from "react";
import { FileText, Send, CheckCircle, Award, Check, UploadCloud } from "lucide-react";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"circulars" | "chat">("circulars");

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased">
      {/* Brand Header - Mobile Responsive */}
      <header className="border-b bg-white shadow-sm sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          {/* Logo & Brand Identity */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <img
              src="/logo.png"
              alt="Bright Path"
              className="w-10 h-10 object-contain rounded-xl shadow-sm border border-slate-100 bg-white shrink-0"
              onError={(e) => {
                // Graceful fallback if logo is loading or named differently
                e.currentTarget.style.display = "none";
              }}
            />
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-black text-lg tracking-tight bg-gradient-to-r from-indigo-700 via-indigo-600 to-amber-600 bg-clip-text text-transparent">
                  BRIGHT PATH
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded-full border border-indigo-200">
                  AI Response Desk
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-500 font-medium truncate">
                Integrated Academic & Statutory Intelligence Platform
              </p>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="w-full sm:w-auto">
            <div className="flex w-full sm:w-auto bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs font-semibold">
              <button
                onClick={() => setActiveTab("circulars")}
                className={`flex-1 sm:flex-initial text-center px-3 py-1.5 rounded-lg transition-all ${
                  activeTab === "circulars"
                    ? "bg-white text-indigo-700 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Governed Notice Extractor
              </button>
              <button
                onClick={() => setActiveTab("chat")}
                className={`flex-1 sm:flex-initial text-center px-3 py-1.5 rounded-lg transition-all ${
                  activeTab === "chat"
                    ? "bg-white text-indigo-700 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Grounded Assistant
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Workspace */}
      <div className="max-w-7xl mx-auto px-4 py-6 sm:py-8">
        {activeTab === "circulars" ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Left Column: Upload & Authority */}
            <div className="space-y-6">
              {/* Document Ingestion Box */}
              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h2 className="text-sm sm:text-base font-bold text-slate-800 flex items-center gap-2 mb-3">
                  <FileText className="text-indigo-600 shrink-0" size={18} /> Official Document Upload
                </h2>
                
                <div className="border-2 border-dashed border-indigo-200 rounded-xl p-6 sm:p-8 text-center bg-indigo-50/30 hover:bg-indigo-50/60 transition-colors cursor-pointer">
                  <div className="mx-auto w-10 h-10 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-2">
                    <UploadCloud size={20} />
                  </div>
                  <p className="text-sm font-semibold text-slate-700">Drop Institutional Circular (PDF/Image)</p>
                  <p className="text-xs text-slate-400 mt-1">State Resolutions, MSBTE Exam Schedules, PCI Directives</p>
                </div>

                <button className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 active:scale-[0.99] text-white font-medium py-2.5 rounded-xl shadow-sm text-sm transition-all flex items-center justify-center gap-2">
                  Extract & Structure Notice
                </button>
              </div>

              {/* Institutional Authority Card */}
              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <Award size={18} />
                  </div>
                  <div>
                    <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Issuing Authority</h3>
                    <p className="text-sm font-semibold text-slate-800">Dr. Hiteshkumar Shantilal Agrawal</p>
                    <p className="text-[11px] text-slate-500">Lead Academic & Regulatory Officer • Bright Path</p>
                  </div>
                </div>
                <div className="sm:text-right">
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                    <Check size={12} /> Authorized Signature Key
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Governed Output & Signature Sign-off */}
            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b pb-3 mb-4 flex-wrap gap-2">
                  <h2 className="text-sm sm:text-base font-bold text-slate-800 flex items-center gap-2">
                    <CheckCircle className="text-emerald-600 shrink-0" size={18} /> Extracted Governed Notice
                  </h2>
                  <span className="text-[10px] uppercase font-bold tracking-wider bg-amber-50 text-amber-700 border border-amber-200 px-2 py-0.5 rounded-full">
                    Draft Pending Sign-off
                  </span>
                </div>

                <div className="space-y-3 text-sm text-slate-600">
                  <div className="bg-slate-50 p-3.5 sm:p-4 rounded-xl border border-slate-100">
                    <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Title / Subject</p>
                    <p className="font-semibold text-slate-900 mt-0.5 text-sm sm:text-base">
                      Seva Sankalp Abhiyan Directive & NMBA Compliance
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                      <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Effective Date</p>
                      <p className="font-medium text-slate-800 text-sm mt-0.5">2026-09-09</p>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                      <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Target Audience</p>
                      <p className="font-medium text-slate-800 text-sm mt-0.5">Colleges & Faculty</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Digital Signature & Sign-off Block */}
              <div className="mt-8 pt-4 border-t border-dashed border-slate-200 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Authenticated By</p>
                  <p className="font-serif italic text-base text-slate-900 tracking-wide mt-1">
                    Dr. Hiteshkumar S. Agrawal
                  </p>
                  <p className="text-[10px] text-slate-400">Bright Path Educational & Compliance Services</p>
                </div>
                <button className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 active:scale-[0.99] text-white font-medium text-xs px-4 py-2.5 rounded-xl transition-all shadow-sm">
                  Sign & Publish Notice
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Grounded Academic Chatbot View */
          <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-sm h-[580px] flex flex-col overflow-hidden">
            <div className="p-3 sm:p-4 border-b bg-slate-50 flex items-center justify-between flex-wrap gap-2">
              <div>
                <h2 className="font-bold text-xs sm:text-sm text-slate-800 flex items-center gap-2">
                  <FileText className="text-indigo-600 shrink-0" size={16} /> Bright Path Academic Helpdesk
                </h2>
                <p className="text-[11px] text-slate-500">Grounded strictly in approved curriculum notes and circulars</p>
              </div>
              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                Active Grounding
              </span>
            </div>

            <div className="flex-1 p-4 sm:p-5 overflow-y-auto space-y-4">
              <div className="bg-indigo-50/70 border border-indigo-100 text-indigo-950 text-xs sm:text-sm leading-relaxed p-3.5 sm:p-4 rounded-2xl max-w-[90%] sm:max-w-[85%]">
                Welcome to the <strong>Bright Path Student & Faculty Helpdesk</strong>. You can ask about course syllabi, examination schedules, statutory compliance notices, or college circulars.
              </div>
            </div>

            <div className="p-3 sm:p-4 border-t bg-white flex gap-2">
              <input
                type="text"
                placeholder="Ask about examination dates, approved notes, or circulars..."
                className="flex-1 border border-slate-200 rounded-xl px-3 sm:px-4 py-2 text-xs sm:text-sm outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button className="bg-indigo-600 text-white px-3.5 sm:px-4 py-2 rounded-xl hover:bg-indigo-700 transition-colors shrink-0">
                <Send size={15} />
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
