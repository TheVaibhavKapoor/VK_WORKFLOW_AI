import React from 'react';
import { motion } from 'framer-motion';
import { Check, Loader2 } from 'lucide-react';

interface WorkflowStepProps {
  step: number;
  title: string;
  description: string;
  status: 'pending' | 'processing' | 'completed';
}

export function WorkflowStep({ step, title, description, status }: WorkflowStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: step * 0.1 }}
      className="flex items-start space-x-4 bg-gray-800/50 p-4 rounded-lg backdrop-blur-sm border border-gray-700"
    >
      <div className="flex-shrink-0">
        <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
          {status === 'completed' && (
            <Check className="w-5 h-5 text-emerald-400" />
          )}
          {status === 'processing' && (
            <Loader2 className="w-5 h-5 text-blue-400 animate-spin" />
          )}
          {status === 'pending' && (
            <span className="text-sm text-gray-400">{step}</span>
          )}
        </div>
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-100">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </motion.div>
  );
}