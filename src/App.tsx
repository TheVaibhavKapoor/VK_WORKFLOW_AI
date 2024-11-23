import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Send, Brain, Workflow, Zap } from 'lucide-react';
import { WorkflowStep } from './components/WorkflowStep';

function App() {
  const [query, setQuery] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    setIsProcessing(true);
    // Simulate processing - in production, connect to your AI backend
    setTimeout(() => setIsProcessing(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-8 h-8 text-blue-400 mr-2" />
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              AI Workflow Platform
            </h1>
          </div>
          <p className="text-gray-400 text-lg">
            Transform your ideas into actionable solutions with our AI-powered workflow
          </p>
        </motion.div>

        {/* Query Input */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={handleSubmit}
          className="mb-12"
        >
          <div className="relative">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Describe your business challenge..."
              className="w-full px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 backdrop-blur-sm"
            />
            <button
              type="submit"
              disabled={isProcessing || !query.trim()}
              className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-2 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-700 disabled:cursor-not-allowed rounded-md flex items-center space-x-2 transition-colors"
            >
              <span>Generate</span>
              <Send className="w-4 h-4" />
            </button>
          </div>
        </motion.form>

        {/* Workflow Steps */}
        <div className="space-y-4">
          <WorkflowStep
            step={1}
            title="Analysis Phase"
            description="AI analyzes your query and breaks down the problem into manageable components"
            status={isProcessing ? 'processing' : 'pending'}
          />
          <WorkflowStep
            step={2}
            title="Solution Generation"
            description="Multiple solution approaches are generated and evaluated"
            status="pending"
          />
          <WorkflowStep
            step={3}
            title="Implementation Planning"
            description="Detailed step-by-step implementation plan is created"
            status="pending"
          />
        </div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="p-6 bg-gray-800/30 rounded-lg border border-gray-700 backdrop-blur-sm">
            <Brain className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="text-lg font-semibold text-gray-100 mb-2">AI-Powered Analysis</h3>
            <p className="text-gray-400 text-sm">Advanced algorithms analyze and optimize your workflow</p>
          </div>
          <div className="p-6 bg-gray-800/30 rounded-lg border border-gray-700 backdrop-blur-sm">
            <Workflow className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="text-lg font-semibold text-gray-100 mb-2">Smart Automation</h3>
            <p className="text-gray-400 text-sm">Automate complex processes with intelligent workflows</p>
          </div>
          <div className="p-6 bg-gray-800/30 rounded-lg border border-gray-700 backdrop-blur-sm">
            <Zap className="w-8 h-8 text-yellow-400 mb-4" />
            <h3 className="text-lg font-semibold text-gray-100 mb-2">Real-time Processing</h3>
            <p className="text-gray-400 text-sm">Get instant results with our powerful processing engine</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default App;