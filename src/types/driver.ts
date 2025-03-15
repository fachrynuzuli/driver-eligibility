export interface Driver {
  id: string;
  name: string;
  email: string;
  phone: string;
  availableHours: number;
  weeklyHours: number;
  lastRestPeriod?: string;
  licenses: License[];
  certifications: Certification[];
  skillLevel: number; // 1-3 tier system
  notes?: string;
}

export interface License {
  type: string; // CDL-A, CDL-B, Hazmat, etc.
  status: 'Valid' | 'Expired' | 'Suspended';
  expiration?: string;
  restrictions?: string;
}

export interface Certification {
  name: string;
  isValid: boolean;
  expiration?: string;
}
