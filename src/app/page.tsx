"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Task = {
  text: string;
  priority: number;
};

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [input, setInput] = useState("");
  const [priority, setPriority] = useState(3);

  // localStorage 読み込み
  useEffect(() => {
    const saved = localStorage.getItem("tinyTasks");
    if (saved) setTasks(JSON.parse(saved));
  }, []);

  // localStorage 保存
  useEffect(() => {
    localStorage.setItem("tinyTasks", JSON.stringify(tasks));
  }, [tasks]);

  // 重要度→色マッピング
  const getPriorityColor = (level: number) => {
    switch (level) {
      case 1:
        return "bg-green-400";
      case 2:
        return "bg-lime-400";
      case 3:
        return "bg-yellow-400";
      case 4:
        return "bg-orange-400";
      case 5:
        return "bg-red-500";
      default:
        return "bg-gray-300";
    }
  };

  // タスク追加
  const addTask = () => {
    if (!input.trim()) return;
    const newTask = { text: input.trim(), priority };
    setTasks([...tasks, newTask]);
    setInput("");
    setPriority(3);
    setShowModal(false);
  };

  // タスク削除
  const removeTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-indigo-50 to-white px-4">
      <div className="w-full max-w-md rounded-2xl bg-white shadow-lg p-6">
        <h1 className="text-2xl font-semibold text-indigo-700 mb-4 text-center">
          🕐 TinyTasks
        </h1>
        <p className="text-gray-500 text-sm text-center mb-6">
          「1分で終わること」＋重要度を設定してみよう！
        </p>

        {/* タスク追加ボタン */}
        <button
          onClick={() => setShowModal(true)}
          className="w-full mb-4 rounded-lg bg-indigo-600 text-white px-4 py-2 text-sm font-medium hover:bg-indigo-700 transition"
        >
          ＋ 新しいタスクを追加
        </button>

        {/* タスクリスト */}
        <ul className="space-y-2">
          {tasks.map((task, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-between rounded-lg border border-gray-200 px-3 py-2"
            >
              <div className="flex items-center gap-3">
                <span
                  className={`w-3 h-3 rounded-full ${getPriorityColor(
                    task.priority
                  )}`}
                ></span>
                <span className="text-gray-700 text-sm">{task.text}</span>
              </div>
              <button
                onClick={() => removeTask(index)}
                className="text-xs text-red-500 hover:text-red-600"
              >
                削除
              </button>
            </motion.li>
          ))}
        </ul>

        {tasks.length === 0 && (
          <p className="text-center text-gray-400 text-sm mt-6">
            タスクはまだありません ✨
          </p>
        )}
      </div>

      <footer className="mt-6 text-xs text-gray-400">
        
         2025 TinyTasks — Made with Next.js 15 + Tailwind
      </footer>

      {/* モーダル */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-xl w-80 p-6 relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <h2 className="text-lg font-semibold text-indigo-700 mb-4 text-center">
                新しいタスク
              </h2>

              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="例: メールを1通送る"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 mb-4"
              />

              <div className="flex items-center gap-3 mb-4">
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={priority}
                  onChange={(e) => setPriority(Number(e.target.value))}
                  className="flex-1 accent-indigo-500"
                />
                <div
                  className={`w-4 h-4 rounded-full ${getPriorityColor(
                    priority
                  )}`}
                  title={`重要度: ${priority}`}
                ></div>
              </div>

              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 text-sm text-gray-500 hover:text-gray-700"
                >
                  キャンセル
                </button>
                <button
                  onClick={addTask}
                  className="px-4 py-2 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                >
                  追加
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}