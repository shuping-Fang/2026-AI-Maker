import { LucideIcon } from 'lucide-react';

export interface FeatureItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface WorkshopDetails {
  date: string;
  time: string;
  location: string;
  targetAudience: string;
  price: string;
}

export enum RegistrationStatus {
  IDLE = 'IDLE',
  SUBMITTING = 'SUBMITTING',
  SUCCESS = 'SUCCESS',
}