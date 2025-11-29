import { Mic, Cpu, FileText } from 'lucide-react';
import { FeatureItemProps, WorkshopDetails } from './types';

export const WORKSHOP_DETAILS: WorkshopDetails = {
  date: "2024年 7月 20日 (週六)",
  time: "09:00 - 16:00",
  location: "臺北市數位創新中心 2F 創客教室",
  targetAudience: "高中職在學學生 (無經驗可，具 Python 基礎者佳)",
  price: "NT$ 3,600 (含 Arduino 硬體材料包)",
};

export const FEATURES: FeatureItemProps[] = [
  {
    icon: Mic,
    title: "採集與訓練 (AI Training)",
    description: "從零開始錄製語音，運用 Edge Impulse 訓練專屬聲控模型，體驗機器學習完整流程。"
  },
  {
    icon: Cpu,
    title: "軟硬體整合 (IoT Integration)",
    description: "不只寫程式，更學會將 AI 模型部署至 Arduino 開發板，實現真正的離線語音控制。"
  },
  {
    icon: FileText,
    title: "產出高含金量履歷 (Portfolio)",
    description: "符合 108 課綱實作精神，課程結束即完成一份完整的技術專題，為學習歷程加分。"
  }
];

export const MAIN_IMAGE_URL = "https://picsum.photos/id/532/800/600"; // Tech/Electronics placeholder
export const QR_CODE_URL = "https://picsum.photos/id/160/300/300"; // Placeholder for QR Code